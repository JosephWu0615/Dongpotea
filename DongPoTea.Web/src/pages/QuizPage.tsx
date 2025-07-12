import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { theme } from '../assets/styles/theme';
import { quizQuestions, calculateTeaMatch, QuizResult } from '../data/quiz';
import { QuizQuestion } from '../components/quiz/QuizQuestion/QuizQuestion';
import { QuizResult as QuizResultComponent } from '../components/quiz/QuizResult/QuizResult';
import { QuizIntro } from '../components/quiz/QuizIntro/QuizIntro';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${theme.spacing[12]} ${theme.spacing[4]};
  min-height: 80vh;
`;

const ProgressContainer = styled.div`
  margin-bottom: ${theme.spacing[8]};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${theme.colors.gray[200]};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: ${theme.spacing[4]};
`;

const ProgressFill = styled.div<{ $progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
  width: ${({ $progress }) => $progress}%;
  transition: width ${theme.animation.duration.normal} ${theme.animation.easing.out};
`;

const ProgressText = styled.p`
  text-align: center;
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
  margin: 0;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${theme.spacing[8]};
  gap: ${theme.spacing[4]};
`;

const NavButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  border-radius: 6px;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  cursor: pointer;
  min-width: 120px;

  ${({ $variant = 'secondary' }) => $variant === 'primary' ? `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.primaryDark};
      border-color: ${theme.colors.primaryDark};
    }
  ` : `
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray[700]};
    border: 1px solid ${theme.colors.gray[300]};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.gray[50]};
      border-color: ${theme.colors.gray[400]};
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const QuizPage: React.FC = () => {
  const { language } = useAppSelector((state) => state.ui);
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleStartQuiz = () => {
    setCurrentStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswerChange = (questionId: string, selectedOptions: string[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedOptions
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate results
      const quizResult = calculateTeaMatch(answers);
      setResult(quizResult);
      setCurrentStep('result');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentStep('intro');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResult(null);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const currentAnswers = currentQuestion ? answers[currentQuestion.id] || [] : [];
  const isAnswered = currentAnswers.length > 0;
  const progress = currentStep === 'quiz' ? ((currentQuestionIndex + 1) / quizQuestions.length) * 100 : 0;

  if (currentStep === 'intro') {
    return (
      <Container>
        <QuizIntro onStart={handleStartQuiz} language={language} />
      </Container>
    );
  }

  if (currentStep === 'result' && result) {
    return (
      <Container>
        <QuizResultComponent 
          result={result} 
          language={language} 
          onRestart={handleRestartQuiz}
        />
      </Container>
    );
  }

  return (
    <Container>
      <ProgressContainer>
        <ProgressBar>
          <ProgressFill $progress={progress} />
        </ProgressBar>
        <ProgressText>
          {language === 'en' 
            ? `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`
            : `第 ${currentQuestionIndex + 1} 題，共 ${quizQuestions.length} 題`
          }
        </ProgressText>
      </ProgressContainer>

      {currentQuestion && (
        <QuizQuestion
          question={currentQuestion}
          selectedOptions={currentAnswers}
          onAnswerChange={(selected) => handleAnswerChange(currentQuestion.id, selected)}
          language={language}
        />
      )}

      <NavigationContainer>
        <NavButton 
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          {language === 'en' ? 'Previous' : '上一題'}
        </NavButton>

        <NavButton 
          $variant="primary"
          onClick={handleNextQuestion}
          disabled={!isAnswered}
        >
          {currentQuestionIndex === quizQuestions.length - 1 
            ? (language === 'en' ? 'Get Results' : '查看結果')
            : (language === 'en' ? 'Next' : '下一題')
          }
        </NavButton>
      </NavigationContainer>
    </Container>
  );
};
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import { QuizQuestion as QuizQuestionType } from '../../../data/quiz';

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const QuestionContainer = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing[8]};
`;

const QuestionTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.gray[900]};
  line-height: ${theme.typography.lineHeight.tight};
  margin-bottom: ${theme.spacing[2]};
`;

const QuestionCategory = styled.span`
  display: inline-block;
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  background-color: ${theme.colors.gray[100]};
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 12px;
  margin-bottom: ${theme.spacing[6]};
`;

const OptionsContainer = styled.div`
  display: grid;
  gap: ${theme.spacing[3]};
`;

const OptionItem = styled.label<{ $isSelected: boolean; $isMultiple: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[4]} ${theme.spacing[5]};
  background-color: ${({ $isSelected }) => 
    $isSelected ? theme.colors.primary : theme.colors.white
  };
  color: ${({ $isSelected }) => 
    $isSelected ? theme.colors.white : theme.colors.gray[700]
  };
  border: 2px solid ${({ $isSelected }) => 
    $isSelected ? theme.colors.primary : theme.colors.gray[200]
  };
  border-radius: 8px;
  cursor: pointer;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  user-select: none;

  &:hover {
    border-color: ${theme.colors.primary};
    ${({ $isSelected }) => !$isSelected && `
      background-color: ${theme.colors.gray[50]};
    `}
  }
`;

const OptionInput = styled.input`
  display: none;
`;

const OptionIcon = styled.div<{ $isSelected: boolean; $isMultiple: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ $isSelected }) => 
    $isSelected ? theme.colors.white : theme.colors.gray[400]
  };
  border-radius: ${({ $isMultiple }) => $isMultiple ? '4px' : '50%'};
  background-color: ${({ $isSelected }) => 
    $isSelected ? theme.colors.white : 'transparent'
  };
  position: relative;
  flex-shrink: 0;

  ${({ $isSelected, $isMultiple }) => $isSelected && `
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: ${$isMultiple ? '8px' : '10px'};
      height: ${$isMultiple ? '8px' : '10px'};
      background-color: ${theme.colors.primary};
      border-radius: ${$isMultiple ? '2px' : '50%'};
    }
  `}
`;

const OptionText = styled.span`
  font-size: ${theme.typography.fontSize.base};
  line-height: ${theme.typography.lineHeight.relaxed};
  flex: 1;
`;

const QuestionNote = styled.div`
  margin-top: ${theme.spacing[6]};
  padding: ${theme.spacing[4]};
  background-color: ${theme.colors.gray[50]};
  border-radius: 8px;
  text-align: center;
`;

const NoteText = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  margin: 0;
`;

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedOptions: string[];
  onAnswerChange: (selectedOptions: string[]) => void;
  language: 'en' | 'zh-TW';
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedOptions,
  onAnswerChange,
  language
}) => {
  const isMultiple = question.type === 'multiple';

  const handleOptionChange = (optionId: string) => {
    if (isMultiple) {
      const newSelection = selectedOptions.includes(optionId)
        ? selectedOptions.filter(id => id !== optionId)
        : [...selectedOptions, optionId];
      onAnswerChange(newSelection);
    } else {
      onAnswerChange([optionId]);
    }
  };

  const categoryLabels = {
    preference: language === 'en' ? 'Preference' : '偏好',
    experience: language === 'en' ? 'Experience' : '經驗',
    lifestyle: language === 'en' ? 'Lifestyle' : '生活方式',
    flavor: language === 'en' ? 'Flavor' : '風味'
  };

  return (
    <Container>
      <QuestionContainer>
        <QuestionCategory>
          {categoryLabels[question.category]}
        </QuestionCategory>
        <QuestionTitle>
          {language === 'en' ? question.question : question.questionChinese}
        </QuestionTitle>
      </QuestionContainer>

      <OptionsContainer>
        {question.options.map((option) => {
          const isSelected = selectedOptions.includes(option.id);
          
          return (
            <OptionItem
              key={option.id}
              $isSelected={isSelected}
              $isMultiple={isMultiple}
            >
              <OptionInput
                type={isMultiple ? 'checkbox' : 'radio'}
                id={option.id}
                name={question.id}
                checked={isSelected}
                onChange={() => handleOptionChange(option.id)}
              />
              <OptionIcon 
                $isSelected={isSelected} 
                $isMultiple={isMultiple}
              />
              <OptionText>
                {language === 'en' ? option.text : option.textChinese}
              </OptionText>
            </OptionItem>
          );
        })}
      </OptionsContainer>

      <QuestionNote>
        <NoteText>
          {isMultiple 
            ? (language === 'en' 
                ? 'You can select multiple options that apply to you.'
                : '您可以選擇多個適用的選項。'
              )
            : (language === 'en' 
                ? 'Please select the option that best describes you.'
                : '請選擇最能描述您的選項。'
              )
          }
        </NoteText>
      </QuestionNote>
    </Container>
  );
};
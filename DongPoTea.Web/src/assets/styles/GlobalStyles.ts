import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${theme.typography.fontFamily.sans};
    font-size: ${theme.typography.fontSize.base};
    line-height: ${theme.typography.lineHeight.normal};
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.serif};
    font-weight: ${theme.typography.fontWeight.normal};
    line-height: ${theme.typography.lineHeight.tight};
  }

  h1 {
    font-size: ${theme.typography.fontSize['5xl']};
  }

  h2 {
    font-size: ${theme.typography.fontSize['4xl']};
  }

  h3 {
    font-size: ${theme.typography.fontSize['3xl']};
  }

  h4 {
    font-size: ${theme.typography.fontSize['2xl']};
  }

  h5 {
    font-size: ${theme.typography.fontSize.xl};
  }

  h6 {
    font-size: ${theme.typography.fontSize.lg};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${theme.animation.duration.fast} ${theme.animation.easing.out};

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    border: none;
    background: none;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  ul, ol {
    list-style: none;
  }

  /* Utility classes */
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${theme.spacing[4]};

    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 0 ${theme.spacing[3]};
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

.sr-only{
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

@font-face {
  font-family: 'MarselisOT';
  src: local('MarselisOT'), url(./fonts/MarselisOT.otf) format('truetype');
}

@media only screen and (max-width: 359px) {
  h1 {
    font-size: 16px;
  }

  h2, h3 {
    font-size: 20px;
  }

}

@media only screen and (min-width: 360px) and (max-width: 544px) {
  h1 {
    font-size: 20px;
  }

  h2, h3 {
    font-size: 20px;
  }
}

@media only screen and (min-width: 545px) and (max-width: 768px)  {
  h1 {
    font-size: 24px;
  }

  h2, h3 {
    font-size: 20px;
  }

}

@media only screen and (min-width: 769px) and (max-width: 992px)  {
  h1 {
    font-size: 28px;
  }

  h2, h3 {
    font-size: 24px;
  }
}

@media only screen and (min-width: 993px) { 
  h1 {
    font-size: 32px;
  }

  h2, h3 {
    font-size: 24px;
  }
} 

:root {
    --body: #ffffff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: 'MarselisOT', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.2;
  margin: 0 auto;
}

form {
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  color: #333;
  display: grid;
  gap: 1rem;
}

input {
  background: inherit;
  font-size: 14px;
  font-family: inherit;
  border: 1px solid #333;
  padding: 0.5rem 1rem;
}

select {
  background: inherit;
  font-size: 14px;
  font-family: inherit;
  border: 1px solid #333;
  padding: 0.5rem 0.7rem;
  margin: 0;
}

a {
  text-decoration: none;
}
`;

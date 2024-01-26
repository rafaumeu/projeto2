import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.family.primary}
}
h1, h2, h3, h4, h5, h6 {
  font-family: ${({ theme }) => theme.fonts.family.secondary};

  margin: ${({ theme }) => theme.spacings.sizes.large} 0;
}
p {
  margin: ${({ theme }) => theme.spacings.sizes.medium} 0;
}
ul, ol {
  margin: ${({ theme }) => theme.spacings.sizes.medium} ;
  padding: ${({ theme }) => theme.spacings.sizes.medium} ;
}
a {
  color: ${({ theme }) => theme.colours.secondaryColor}
}
`

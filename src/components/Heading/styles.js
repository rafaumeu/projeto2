import styled, { css } from 'styled-components'

import { theme } from '../../styles/theme'

export const Title = styled.h1`
  ${({ theme, light }) => css`
    color: ${light ? theme.colours.white : theme.colours.primaryColor};
  `}
`

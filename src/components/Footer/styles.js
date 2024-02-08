import styled, { css } from 'styled-components'

import { Container as SectionContainer } from '../SectionContainer/styles'
import { Container as TextComponent } from '../TextComponent/styles'
export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colours.mediumGray};
    a {
      color: inherit;
      text-decoration: none;
    }
    & ${TextComponent} {
      font-size: ${theme.fonts.sizes.small};
    }
    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`

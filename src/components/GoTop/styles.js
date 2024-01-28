import styled, { css } from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: ${theme.colours.primaryColor};
    color: ${theme.colours.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    z-index: 6;
    opacity: 0.7;
  `}
`

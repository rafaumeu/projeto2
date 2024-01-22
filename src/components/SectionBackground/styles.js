import styled, { css } from 'styled-components'

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colours.primaryColor};
  color: ${theme.colours.white};
`
export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colours.white};
    color: ${theme.colours.primaryColor};
    ${background && containerBackgroundActivate(theme)}
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`

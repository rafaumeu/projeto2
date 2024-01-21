import styled, { css } from 'styled-components'

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaFont(theme)};
  `,
}

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`
export const Title = styled.h1`
  ${({ theme, colordark, size, uppercase }) => css`
    color: ${colordark ? theme.colours.primaryColor : theme.colours.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)}
  `}
`

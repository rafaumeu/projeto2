import { screen } from '@testing-library/react'

import MenuLink from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link='http://localhost'>Children</MenuLink>)
    expect(screen.getByText('Children')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self'
    )
  })
  it('should render a link open a new tab', () => {
    renderTheme(
      <MenuLink link='http://localhost' newTab={true}>
        Children
      </MenuLink>
    )
    expect(screen.getByText('Children')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank'
    )
  })
  it('should render a link open a new tab', () => {
    const { container } = renderTheme(
      <MenuLink link='http://localhost' newTab={false}>
        Children
      </MenuLink>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})

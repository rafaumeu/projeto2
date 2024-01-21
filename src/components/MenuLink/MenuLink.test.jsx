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
    renderTheme(
      <MenuLink link='http://localhost' newTab={false}>
        Children
      </MenuLink>
    )

    expect(screen.getByRole('link', { name: 'Children' }))
      .toMatchInlineSnapshot(`
    .c0 {
      display: block;
      text-decoration: none;
      font-size: 1.6rem;
      padding: 1.6rem;
      color: #0a1128;
      position: relative;
    }
    
    .c0::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: #dc143c;
      transition: all 300ms ease-in-out;
    }
    
    .c0:hover::after {
      left: 25%;
      width: 50%;
    }
    
    <a
      class="c0"
      href="http://localhost"
      target="_self"
    >
      Children
    </a>
    `)
  })
})

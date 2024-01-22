import { screen } from '@testing-library/react'

import LogoLink from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link='#target' text='Olá Mundo' />)
    expect(
      screen.getByRole('heading', { name: 'Olá Mundo' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Olá Mundo' })).toHaveAttribute(
      'href',
      '#target'
    )
  })
  it('should render image logo', () => {
    renderTheme(<LogoLink link='#target' text='Olá Mundo' srcImg='image.jpg' />)
    expect(screen.getByAltText('Olá Mundo')).toHaveAttribute('src', 'image.jpg')
  })
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link='#target' text='Olá Mundo' srcImg='image.jpg' />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

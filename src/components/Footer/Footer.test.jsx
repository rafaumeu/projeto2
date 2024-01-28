import { screen } from '@testing-library/react'

import Footer from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html={'<h1>Olá</h1>'} />)
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument()
    expect(container).toMatchInlineSnapshot(`
    .c1 {
      max-width: 120rem;
      margin: 0 auto;
      padding: 3.2rem;
    }
    
    .c2 {
      font-size: 2.4rem;
    }
    
    .c0 {
      text-align: center;
    }
    
    .c0 a {
      color: inherit;
      text-decoration: none;
      font-size: 1.6rem;
    }
    
    <div>
      <footer
        class="c0"
      >
        <div
          class="c1"
        >
          <div
            class="c2"
          >
            <h1>
              Olá
            </h1>
          </div>
        </div>
      </footer>
    </div>
    `)
  })
})

import { screen } from '@testing-library/react'

import GoTop from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<GoTop />', () => {
  it('should render a go to top button', () => {
    const { container } = renderTheme(<GoTop />)
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#'
    )
    expect(container).toMatchInlineSnapshot(`
    .c1 {
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
    }
    
    .c0 {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: #0a1128;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      z-index: 6;
      opacity: 0.7;
    }
    
    <div>
      <a
        aria-label="Go to top"
        class="c0"
        href="#"
        title="Go to top"
      >
        <svg
          aria-hidden="true"
          class="c1"
          fill="currentColor"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
          />
        </svg>
      </a>
    </div>
    `)
  })
})

import { screen } from '@testing-library/react'

import SectionBackground from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>Children</SectionBackground>
    )
    expect(screen.getByText(/children/i)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
  it('should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground>Children</SectionBackground>
    )
    expect(screen.getByText(/children/i)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})

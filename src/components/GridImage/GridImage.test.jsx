import { screen } from '@testing-library/react'

import GridImage from '.'
import { renderTheme } from '../../styles/render-theme'
import mock from './mock'

describe('<GridText />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridImage {...mock} />)
    expect(container).toMatchSnapshot()
  })
  it('should render without background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />
    )
    expect(container).toMatchSnapshot()
  })
})

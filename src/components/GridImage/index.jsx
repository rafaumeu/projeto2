import P from 'prop-types'

import Heading from '../Heading'
import SectionBackground from '../SectionBackground'
import TextComponent from '../TextComponent'
import * as Styled from './styles'

const GridImage = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size='huge' uppercase colordark={!background} as='h2'>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={`${el.srcImg}${el.altText}`}>
              <Styled.Image src={el.srcImg} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  )
}

GridImage.propTypes = {
  background: P.bool,
  description: P.string.isRequired,
  title: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    })
  ),
}

export default GridImage

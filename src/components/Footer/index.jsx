import P from 'prop-types'

import SectionContainer from '../SectionContainer/index'
import TextComponent from '../TextComponent/index'
import * as Styled from './styles'

const Footer = ({ html }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  )
}

Footer.propTypes = {
  html: P.string.isRequired,
}

export default Footer

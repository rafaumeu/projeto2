import P from 'prop-types'

import SectionContainer from '../SectionContainer/index'
import TextComponent from '../TextComponent/index'
import * as Styled from './styles'

const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  )
}

Footer.propTypes = {
  footerHtml: P.string.isRequired,
}

export default Footer

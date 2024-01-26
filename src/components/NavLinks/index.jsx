import P from 'prop-types'

import MenuLink from '../MenuLink/index'
import * as Styled from './styles'

const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Container aria-label='Main menu'>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  )
}

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.node.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    })
  ),
}

export default NavLinks

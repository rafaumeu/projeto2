import {
  Close,
  Close as CloseIcon,
} from '@styled-icons/material-outlined/Close'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import P from 'prop-types'
import { useState } from 'react'

import LogoLink from '../LogoLink/'
import NavLinks from '../NavLinks/'
import SectionContainer from '../SectionContainer/index'
import * as Styled from './styles'
const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label='Open/Close menu'
      >
        {visible ? (
          <CloseIcon aria-label='Close menu' />
        ) : (
          <MenuIcon aria-label='Open menu' />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  )
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
}

export default Menu

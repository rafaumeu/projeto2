import P from 'prop-types'
import React from 'react'

import { Title } from './styles'

const Heading = ({ children, light = false }) => {
  return <Title light={light}>{children}</Title>
}

Heading.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
}
export default Heading

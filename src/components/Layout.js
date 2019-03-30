import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import './styles.scss'


const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Helmet title="Home | Gatsby + Dev.to" />
    <main>{children}</main>
  </Fragment>
)

export default TemplateWrapper

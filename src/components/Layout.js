import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import config from '../config'
import './styles.scss'

const Header = styled.div`
  max-width: 825px;
  margin: 10px auto;
  padding: 20px;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: 0;
    color: #0a0a0a;
  }
`

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Helmet title={config.siteMetadata.title} />
    <main>
      <Header>
        <h3>
          <Link to="/">{config.siteMetadata.header}</Link>
        </h3>
      </Header>
      {children}
    </main>
  </Fragment>
)

export default TemplateWrapper

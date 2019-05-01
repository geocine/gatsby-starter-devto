import React from 'react'
import { Link } from 'gatsby'
import domToReact from 'html-react-parser/lib/dom-to-react'
import config from '../../config'

export const linkBlock = (attribs, children) => {
  if (!attribs) return
  if (attribs.href) {
    if (attribs.href.startsWith(`/${config.devtoUsername}`)) {
      return (
        <Link
          to={attribs.href.replace(`/${config.devtoUsername}`, '')}
          className={attribs.class}
        >
          {domToReact(children)}
        </Link>
      )
    }
    attribs.target = '__blank'
    if (!attribs.href.includes('http')) {
      attribs.href = `https://dev.to${attribs.href}`
    }
    return children
  }
}

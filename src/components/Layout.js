import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'

const GlobalStyles = css`
  /*! Typebase.less v0.1.0 | MIT License */
  /* Setup */
  html {
    /* Change default typefaces here */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 137.5%;
    -webkit-font-smoothing: antialiased;
    background: #f9f9fa;
  }
  /* Copy & Lists */
  p {
    line-height: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0;
  }
  ul,
  ol {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  ul li,
  ol li {
    line-height: 1.5rem;
  }
  ul ul,
  ol ul,
  ul ol,
  ol ol {
    margin-top: 0;
    margin-bottom: 0;
  }
  blockquote {
    line-height: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  /* Headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* Change heading typefaces here */
    margin-top: 1.5rem;
    margin-bottom: 0;
    line-height: 1.5rem;
  }
  /* Tables */
  table {
    margin-top: 1.5rem;
    border-spacing: 0px;
    border-collapse: collapse;
  }
  table td,
  table th {
    padding: 0;
    line-height: 33px;
  }
  /* Code blocks */
  code {
    vertical-align: bottom;
  }
  /* Leading paragraph text */
  .lead {
    font-size: 1.414rem;
  }
  /* Hug the block above you */
  .hug {
    margin-top: 0;
  }

  /* Syntaxt Highlight */
  div.highlight pre.highlight code {
  font-size: inherit;
  padding: 0px;
  }

  div.inner-comment div.body div.highlight pre.highlight {
    background: #29292e;
    code {
      font-size: inherit;
      white-space: inherit;
      background: inherit;
      color: inherit;
    }
  }

  .highlight .hll { background-color: #49483e }
  .highlight  { background: #29292e; color: #f8f8f2 }
  .highlight .c { color: #75715e } /* Comment */
  .highlight .err { color: #960050; background-color: #1e0010 } /* Error */
  .highlight .k { color: #66d9ef } /* Keyword */
  .highlight .l { color: #ae81ff } /* Literal */
  .highlight .n { color: #f8f8f2 } /* Name */
  .highlight .o { color: #f92672 } /* Operator */
  .highlight .p { color: #f8f8f2 } /* Punctuation */
  .highlight .ch { color: #75715e } /* Comment.Hashbang */
  .highlight .cm { color: #75715e } /* Comment.Multiline */
  .highlight .cp { color: #75715e } /* Comment.Preproc */
  .highlight .cpf { color: #75715e } /* Comment.PreprocFile */
  .highlight .c1 { color: #75715e } /* Comment.Single */
  .highlight .cs { color: #75715e } /* Comment.Special */
  .highlight .gd { color: #f92672 } /* Generic.Deleted */
  .highlight .ge { font-style: italic } /* Generic.Emph */
  .highlight .gi { color: #a6e22e } /* Generic.Inserted */
  .highlight .gs { font-weight: bold } /* Generic.Strong */
  .highlight .gu { color: #75715e } /* Generic.Subheading */
  .highlight .kc { color: #66d9ef } /* Keyword.Constant */
  .highlight .kd { color: #66d9ef } /* Keyword.Declaration */
  .highlight .kn { color: #f92672 } /* Keyword.Namespace */
  .highlight .kp { color: #66d9ef } /* Keyword.Pseudo */
  .highlight .kr { color: #66d9ef } /* Keyword.Reserved */
  .highlight .kt { color: #66d9ef } /* Keyword.Type */
  .highlight .ld { color: #e6db74 } /* Literal.Date */
  .highlight .m { color: #ae81ff } /* Literal.Number */
  .highlight .s { color: #e6db74 } /* Literal.String */
  .highlight .na { color: #a6e22e } /* Name.Attribute */
  .highlight .nb { color: #f8f8f2 } /* Name.Builtin */
  .highlight .nc { color: #a6e22e } /* Name.Class */
  .highlight .no { color: #66d9ef } /* Name.Constant */
  .highlight .nd { color: #a6e22e } /* Name.Decorator */
  .highlight .ni { color: #f8f8f2 } /* Name.Entity */
  .highlight .ne { color: #a6e22e } /* Name.Exception */
  .highlight .nf { color: #a6e22e } /* Name.Function */
  .highlight .nl { color: #f8f8f2 } /* Name.Label */
  .highlight .nn { color: #f8f8f2 } /* Name.Namespace */
  .highlight .nx { color: #a6e22e } /* Name.Other */
  .highlight .py { color: #f8f8f2 } /* Name.Property */
  .highlight .nt { color: #f92672 } /* Name.Tag */
  .highlight .nv { color: #f8f8f2 } /* Name.Variable */
  .highlight .ow { color: #f92672 } /* Operator.Word */
  .highlight .w { color: #f8f8f2 } /* Text.Whitespace */
  .highlight .mb { color: #ae81ff } /* Literal.Number.Bin */
  .highlight .mf { color: #ae81ff } /* Literal.Number.Float */
  .highlight .mh { color: #ae81ff } /* Literal.Number.Hex */
  .highlight .mi { color: #ae81ff } /* Literal.Number.Integer */
  .highlight .mo { color: #ae81ff } /* Literal.Number.Oct */
  .highlight .sa { color: #e6db74 } /* Literal.String.Affix */
  .highlight .sb { color: #e6db74 } /* Literal.String.Backtick */
  .highlight .sc { color: #e6db74 } /* Literal.String.Char */
  .highlight .dl { color: #e6db74 } /* Literal.String.Delimiter */
  .highlight .sd { color: #e6db74 } /* Literal.String.Doc */
  .highlight .s2 { color: #e6db74 } /* Literal.String.Double */
  .highlight .se { color: #ae81ff } /* Literal.String.Escape */
  .highlight .sh { color: #e6db74 } /* Literal.String.Heredoc */
  .highlight .si { color: #e6db74 } /* Literal.String.Interpol */
  .highlight .sx { color: #e6db74 } /* Literal.String.Other */
  .highlight .sr { color: #e6db74 } /* Literal.String.Regex */
  .highlight .s1 { color: #e6db74 } /* Literal.String.Single */
  .highlight .ss { color: #e6db74 } /* Literal.String.Symbol */
  .highlight .bp { color: #f8f8f2 } /* Name.Builtin.Pseudo */
  .highlight .fm { color: #a6e22e } /* Name.Function.Magic */
  .highlight .vc { color: #f8f8f2 } /* Name.Variable.Class */
  .highlight .vg { color: #f8f8f2 } /* Name.Variable.Global */
  .highlight .vi { color: #f8f8f2 } /* Name.Variable.Instance */
  .highlight .vm { color: #f8f8f2 } /* Name.Variable.Magic */
  .highlight .il { color: #ae81ff } /* Literal.Number.Integer.Long */

  /* Link Tag */
  .ltag__link__link{
    color:#0a0a0a !important;
    color: var(--theme-color, #0a0a0a) !important;
    &:active{
      opacity:0.7;
    }
  }
  .ltag__link{
    border:1px solid #dbdbdb;
    box-shadow: 1px 2px 4px 0 rgba(0,0,0,0.18);
    border-radius:3px;
    display:block;
    margin:0.95em 0 1.20em;
    max-width: 100%;
    @media screen and (min-width: 760px) {
      margin: 0.95em auto;
      width:620px;
    }
    .ltag__link__pic{
      display:inline-block;
      padding: calc(0.4vw + 8px) calc(0.8vw + 8px);
      padding-right:8px;
      img{
        width:calc(2.2vw + 45px);
        height:calc(2.2vw + 45px);
        margin:auto auto !important;
        border-radius:150px;
      }
    }
    .ltag__link__content{
      display:inline-block;
      vertical-align:top;
      padding: calc(0.5vw + 6px);
      padding-left:0;
      width: calc(100% - 5vw - 70px);
      h2{
        margin:0;
        padding:0;
        font-weight: 500;
      }
      h3{
        margin: 0.1vw 0;
        padding:0;
        font-size:0.8em;
        margin-bottom:0;
        font-weight:bold;
        color: #666666;
        color: var(--theme-secondary-color, #0a0a0a);
        a{
          color: #666666;
          color: var(--theme-secondary-color, #0a0a0a);
        }
      }
      .ltag__link__taglist{
        margin:0;
        padding:0;
        line-height:1;
        word-break: break-all;
      }
      .ltag__link__tag{
        margin-right:calc(0.4vw + 4px);
        font-size:0.8em;
        margin-left:1px;
      }
    }
  }
`

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Helmet title="Home | Gatsby + Dev.to" />
    <Global styles={GlobalStyles} />
    <main>{children}</main>
  </Fragment>
)

export default TemplateWrapper

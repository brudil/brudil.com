import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
        />
        <div className="Welcome">
          <h1 className="Welcome__heading">
            I'm James Canning. @brudil elsewehere.
          </h1>
          <p>Full-stack developer.</p>
          <p>Website & Services at Sussex Students' Union.</p>
          <p>Currently available for projects.</p>
        </div>
      </div>
    )
  }
}

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
            I'm James. @brudil elsewehere.
          </h1>
          <p>Full-stack developer.</p>
          <p>Studying Computer Science at the University of Sussex.</p>
          <p>Web Developer at Sussex's Students' Union.</p>
        </div>
      </div>
    )
  }
}

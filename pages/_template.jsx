import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import '../css/main.css';

import githubIcon from '../css/img/github.svg';
import twitterIcon from '../css/img/twitter.svg';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <div className="Container">
          <div className="SiteHeader">
            <ul className="Menu">
              <li className="Menu__item Menu__item--home">
                <a href={prefixLink('/')}>brudil</a>
              </li>
              {/*<li className="Menu__item">
                <a href={prefixLink('/projects')}>Projects</a>
              </li>
              <li className="Menu__item">
                <a href={prefixLink('/words')}>Words</a>
              </li>
              <li className="Menu__item">
                <a href={prefixLink('/resume')}>Resumé</a>
              </li>*/}
            </ul>
            <ul className="Social">
              <li className="Social__item">
                <a href="https://github.com/brudil">
                  <img src={githubIcon} alt="GitHub" title="GitHub" />
                </a>
              </li>
              <li className="Social__item">
                <a href="https://twitter.com/brudil">
                  <img src={twitterIcon} alt="Twitter" title="Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Container">
          {this.props.children}
        </div>
      </div>
    )
  },
})

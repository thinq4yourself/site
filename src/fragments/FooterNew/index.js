import React, { Component } from 'react'
import { Link } from 'react-router'
import track from '../../utils/analytics/track'
import Svg from 'react-svg-inline'
import Form from '../../components/Form'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import styles from './index.css'
import PlatformBetaCTA from '../PlatformBetaCTA'
import Newsletter from '../Newsletter'

const logo = process.env.LOGO

export default class Footer extends Component {
  render() {
    const year = new Date().getFullYear()

    return (
      <div>
        <footer id='footer' className={styles.footer}>
          <div className={styles.logoContainer}>
            <Link to='/' className={styles.logo}>
              <img
                id='logo'
                width={28}
                height={23}
                src={logo.ICON}
                className={styles.logoIcon}
                ref={logo => { this.logo = logo }}
              />
              <span className={styles.logoText}>
                serverless
              </span>
            </Link>
          </div>
          <div className={styles.bound}>
            <nav className={styles.navBlocks}>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>learn</h4>
                <Link to='/learn/'>why?</Link>
                <Link to='/learn/use-cases/'>use cases</Link>
                <Link to='/learn/comparisons/'>comparisons</Link>
                <Link to='/learn/comparisons/'>case studies</Link>
              </div>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>developers</h4>
                <Link to='/docs/'>docs</Link>
                <Link to='/learn/quick-start/'>quick starts</Link>
                <a href='https://github.com/serverless/examples' target='_blank'>examples & guides</a>
              </div>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>platform</h4>
                <Link to='/framework/'>framework</Link>
                <Link to='/enterprise/'>dashboard</Link>
                <Link to='/event-gateway/'>gateway</Link>
              </div>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>resources</h4>
                <Link to='/blog/'>framework</Link>
                <a href='https://forum.serverless.com/' target='_blank'>forum</a>
                <Link to='/community/meetups/'>meetups</Link>
                <a href='https://github.com/amv/serverless-slack-invite-api' target='_blank'>slack</a>
                <Link to='/workshops/'>workshops</Link>
              </div>
              <div className={styles.navBlock}>
                <h4 className={styles.navTitle}>company</h4>
                <a href='https://jobs.lever.co/serverless' target='_blank'>jobs</a>
                <a href='#'>contact</a>
                <Link to='/community/champions/'>champions</Link>
              </div>
              <p className={styles.madeStatement}>Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan, Poland, Nebraska & Thailand.<br/><br/></p>
              <div className={styles.privacy}>
                <span>Serverless, Inc. © {year}</span>
                <Link to='/terms/'>terms of service</Link>
                <Link to='/privacy/'>privacy</Link>
              </div>
            </nav>
            <div className={styles.ctaBlock}>
              <p className={styles.ctaText}>Join our newsletter and get the latest news about Serverless products and happenings. <br />#noSpamWePromise</p>
              <div className={styles.form}>
                <Newsletter className={styles.stacked} red />
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

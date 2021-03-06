import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import styles from './styles.css'
import Glitch from '../../components/Glitch'
import PreFooter from '../../fragments/PreFooter'

const baseUrl = process.env.S3_BUCKET 

const EventGatewayPage = (props) => {

  return (
    <Default className={ styles.page } {...props} fullWidth whiteLogo coloredHeader={ true } headerHideSignUp={ true }>
      
      <div className={ styles.firstSection }>
        <div>

          <div className={ styles.nav }>
            <div>
              {
                [{
                  to: `/blog`,
                  label: `overview`
                }, {
                  to: `/blog`,
                  label: `framework`
                }, {
                  to: `/blog`,
                  label: `dashboard`
                }, {
                  to: `/blog`,
                  label: `event gateway`
                }].map(({ to, label }, i) => (
                  <Link
                    to={ to }
                    key={ i }
                  >
                    <div
                      className={
                        i === 3
                          ? styles.selectedNavItem
                          : styles.navItem
                      }
                    >
                      { label }
                    </div>
                  </Link>
                ))
              }
            </div>
            <div></div>
          </div>

          <div className={ styles.headingAndCallToAction }>
            <div className={ styles.heading }>React to any event on<br /> any cloud.</div>
            <div className={ styles.callToAction }>
              <a href='https://dashboard.serverless.com'>
                <div>sign up</div>
              </a>
              <Link to='/enterprise'>
                <div>contact sales</div>
              </Link>
            </div>
          </div>

          <div className={ styles.features }>
            {
              [{
                heading: `Simplify API development`,
                body: `Event Gateway is the simplest developer experience for wiring Serverless functions to http endpoints.`
              }, {
                heading: `React to custom events`,
                body: `Expand your Serverless use cases by reacting to any custom event with Serverless functions.`
              }, {
                heading: `Vendor Choice`,
                body: `Event Gateway is open source and cloud agnostic, allowing for more choice and flexibility.`
              }].map(({ heading, body }, i) => (
                <div
                  className={ styles.featureHighlight }
                  key={ i }
                >
                  <div>{ heading }</div>
                  <div>{ body }</div>
                </div>
              ))
            }
          </div>

          <div className={ styles.headingBlurbAndGraphic }>
            <img
              src={ `${ baseUrl }images/event-gateway/folds.png` }
            />
            <div>
              <div>Serverless Event Gateway</div>
              <div>{ `Event Gateway is an event router designed for event-driven, serverless architectures. It makes it easy to wire functions to http endpoints, react to business events with serverless functions, and to share event subscriptions with others.` }</div>
            </div>
            <img
              src={ `${ baseUrl }images/event-gateway/event-gateway-integrations-website.png` }
            />
          </div>

        </div>
      </div>

      <div className={ styles.section }>
        <div>

          <div className={ styles.sectionHeadingAndSubtitle }>
            <div className={ styles.sectionHeading }>Event Gateway Use Cases</div>
          </div>

          {
            [{
              title: `Simple, serverless APIs`,
              body:  `Use Event Gateway alongside the Serverless Framework to get the simplest, most productive developer experience possible for developing APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. Hit deploy and you’re live.`,
              graphicUrl: `${ baseUrl }images/event-gateway/simple-serverless-apis.png`,
              link: {
                href: 'https://github.com/serverless/event-gateway-getting-started#getting-started-with-the-event-gateway',
                label: 'view example'
              }
            }, {
              title: `Automate business processes`,
              body:  `Use Event Gateway to connect your business systems. Update your CRM whenever a new user signs up for your product. Trigger emails when inventory is running low.`,
              graphicUrl: `${ baseUrl }images/event-gateway/subscribe-functions-to-webhooks.png`,
              link: {
                href: 'https://github.com/serverless/event-gateway/tree/master/examples/crm-service#using-custom-events',
                label: 'view example'
              }
            }, {
              title: `Multi-provider service`,
              body:  `Event Gateway is cloud agnostic, allowing for more vendor choice and flexibility.`,
              graphicUrl: `${ baseUrl }images/event-gateway/multi-provider-service.png`
            }].map(({ title, body, graphicUrl, link }, i) => (
              <div
                className={ styles.useCaseSection }
                key={ i }
              >
                <div>
                  <div>{ title }</div>
                  <div>{ body }</div>
                  {
                    link &&
                      (
                        link.href
                          ? (
                              <a href={ link.href } target='_blank'>
                                <div>{ link.label }</div>
                              </a>
                            )
                          : (
                              <Link to={ link.to }>
                                <div>{ link.label }</div>
                              </Link>
                            )
                      )
                  }
                </div>
                <div>
                  <img src={ graphicUrl } />
                </div>
              </div>
            ))
          }

        </div>
      </div>

      <Glitch mid />

      <div className={ styles.section }>
        <div>
        
          <div className={ styles.sectionHeadingAndSubtitle }>
            <div className={ styles.sectionHeading }>Features</div>
          </div>

          <div className={ styles.featuresGrid }>
            {
              [{
                graphicUrl: `${ baseUrl }images/event-gateway/api-gateway.png`,
                title: `API Gateway`,
                body: `Easily subscribe FaaS functions to HTTP endpoints. Set up multiple Serverless services under a single domain, even across AWS accounts.`
              }, {
                graphicUrl: `${ baseUrl }images/event-gateway/pub-sub.png`,
                title: `Pub/Sub`,
                body: `Take advantage of pub/sub functionality by utilizing custom events. This allows you to process the same event with multiple systems.`
              }, {
                graphicUrl: `${ baseUrl }images/event-gateway/connector-functions.png`,
                title: `Connectors`,
                body: `Automatically route events to external systems like Kinesis, Firehose, SQS, etc.`
              }, {
                graphicUrl: `${ baseUrl }images/event-gateway/platform-agnostic.png`,
                title: `Platform Agnostic`,
                body: `All your cloud services are now compatible with one another. Share cross-cloud functions and events with AWS Lambda, Microsoft Azure, Google Cloud Platform, and more.`
              }, {
                graphicUrl: `${ baseUrl }images/event-gateway/streaming-events.png`,
                title: `Streaming Events`,
                body: `Data streams in your application become events. Centralize events from any cloud provider to get a bird’s eye view of all the data flowing through your cloud.`
              }, {
                graphicUrl: `${ baseUrl }images/event-gateway/sharable-events.png`,
                title: `Shareable events`,
                body: `Share events and functions to other parts of the application. Your teammates can find them and utilize them in their own services.`
              }].map(({ graphicUrl, title, body }, i) => (
                <div
                  className={ styles.feature }
                  key={ i }
                >
                  <img src={ graphicUrl } />
                  <div>
                    <div>0{ i + 1 }</div>
                    <div>{ title }</div>
                  </div>
                  <div>{ body }</div>
                </div>
              ))
            }
          </div>

        </div>
      </div>

      <PreFooter
        heading={ `Ready to get started?` }
        subheadings={[
          `Dig deeper into Event Gateway use cases, or check out the examples in our open source repo.`
        ]}
        links={[{
          external: true,
          to: 'https://github.com/serverless/event-gateway-getting-started',
          label: 'getting started'
        }, {
          to: '/learn/event-gateway/',
          label: 'learn more'
        }, {
          external: true,
          to: 'https://github.com/serverless/event-gateway/tree/master/examples',
          label: 'examples'
        }]}
      />

    </Default>
  )
}

EventGatewayPage.hasLoadingState = true

export default EventGatewayPage

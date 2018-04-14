import React from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { withSiteData } from 'react-static'

import AgentEmail from '../components/AgentEmail'

const Footer = withSiteData(({ phoneNumber }) => {
  return (
    <div className={'container'}>
      <div className="col-12 mt-3" align="center">
        <hr/>
      </div>
      <div className="col-12" align="center">
        <FontAwesomeIcon
          icon={['fab', 'facebook']}
          size={'2x'}
          onClick={() => {
            window.open('https://www.facebook.com/panjona', '_self')
          }}
          className={'hover-click'}
        />
        &nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon
          icon={['fab', 'instagram']}
          size={'2x'}
          onClick={() => {
            window.open('https://www.instagram.com/pan48103/?hl=en', '_self')
          }}
          className={'hover-click'}
        />
        &nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon
          icon={['fab', 'linkedin']}
          size={'2x'}
          onClick={() => {
            window.open('https://www.linkedin.com/in/jonathan-pan-644025115/', '_self')
          }}
          className={'hover-click'}
        />
      </div>
      <div className="col-12" align="center">
        <small>
          &copy;  Jonathan Pan's Real Estate 2018
        </small>
        <br/>
        <small>
          {phoneNumber} | <AgentEmail/>
        </small>
        <br/><br/><br/>
      </div>
    </div>
  )
})

Footer.propTypes = {}
Footer.defaultProps = {}

export default Footer

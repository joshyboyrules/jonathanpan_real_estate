import React from 'react'
import PropTypes from 'prop-types'
import { Router, Link, withSiteData } from 'react-static'

import AgentEmail from '../components/AgentEmail'

const Header = withSiteData(({ phoneNumber }) => {
  return (
    <div className={'container'}>
      <div className="row">
        <div className="col-12">
          <br/>
          <Link to="/" style={{ color: 'black' }}>
            <h3>Jonathan Pan's Real Estate</h3>
          </Link>
          <h5>
            {phoneNumber} | WeChat: panjona | <AgentEmail/>
          </h5>
          {/*<button className={'btn btn-primary'}>Contact Us</button>*/}
        </div>
        <div className="col-12">
          <hr/>
        </div>
        {/*<div className="col-md-3" align="center">*/}
          {/*Meet the team*/}
        {/*</div>*/}
        {/*<div className="col-md-3" align="center">*/}
          {/*Services*/}
        {/*</div>*/}
        {/*<div className="col-md-3" align="center">*/}
          {/*Testimonials*/}
        {/*</div>*/}
        {/*<div className="col-md-3" align="center">*/}
          {/*Listings / Recent Sales*/}
        {/*</div>*/}
        <div className="col-12">
          <br/>
        </div>
      </div>
    </div>
  )
})

Header.propTypes = {}
Header.defaultProps = {}

export default Header

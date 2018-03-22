import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'
import jpImg from '../containers/img/jp_image_face.jpg'

const JP_Email = () => <a href={'mailto:panjona@gmail.com'}>panjona@gmail.com</a>

export default withSiteData(() => (
  <div className={'container'}>
    <div className="row">
      <div className="col-12">
        <br/>
        <br/>
        <br/>
      </div>
      <div className="col-md-3">
        <img src={jpImg} className={'rounded jp-image img-thumbnail'}/>
        <div className={'d-xl-none d-lg-none d-md-none'}>
          <br/>
        </div>
      </div>
      <div className="col-md-9 align-self-end">
        <h1>Jonathan Pan</h1>
        <h3>Real Estate Agent - Southeast Michigan </h3>
        <h5>Email: <JP_Email/></h5>
        <h5>Mobile #: (734) 717-8336</h5>
        <h5>WeChat: panjona</h5>
      </div>
      <div className="col-12">
      </div>
    </div>
  </div>
))

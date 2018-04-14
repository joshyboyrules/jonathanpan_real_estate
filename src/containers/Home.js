import React from 'react'
import { withSiteData } from 'react-static'
import ReactHtmlParser from 'react-html-parser'
import ContactForm from '../components/ContactForm'

import jpImg from '../containers/img/jp_image_face.jpg'

import Slider from 'react-slick'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 8000
  // slidesToShow: 1,
  // slidesToScroll: 1
}

const Images = () =>
  <Slider {...settings}>
    <div>
      <img src="https://i.imgur.com/AyXUl3Xl.jpg" style={{ maxHeight: '450px' }}/>
    </div>
    <div>
      <img src="https://i.imgur.com/aIxOsFWl.jpg" style={{ maxHeight: '450px' }}/>
    </div>
  </Slider>

export default withSiteData(({ phoneNumber, aboutHtml }) => (
  <div className={'container'}>
    <div className="row">
      <div className="col-12">
      </div>
      <div className="col-md-3">
        <img src={jpImg} className={'rounded jp-image img-thumbnail'}/>
        <div className={'d-xl-none d-lg-none d-md-none'}>
          <br/>
        </div>
      </div>
      <div className="col-md-9 align-self-center">
        <h3>Jonathan Pan</h3>
        <span>{ReactHtmlParser(aboutHtml)}</span>
      </div>
      <div className="col-12">
        <Images/>
      </div>
      <div className="col-12">
        <ContactForm/>
      </div>
    </div>
  </div>
))

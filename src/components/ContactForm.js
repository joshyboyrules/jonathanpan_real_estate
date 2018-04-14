import React from 'react'
import { Field, reduxForm } from 'redux-form'
import InputField from './fields/InputField'
import { required } from '../utils/validate'
import fetch from 'isomorphic-fetch'
import { setDisplayName, lifecycle, compose, withState } from 'recompose'

const Form = ({ handleSubmit, reset, setSubmitted }) =>
  <div className="card mb-5 mt-5">
    <div className="card-body text-dark">
      <h5 className="card-title">Contact Jonathan Pan</h5>
      <div className="row">
        <div className="col-md-3">
          <Field
            name="email"
            type="text"
            component={InputField}
            validate={[required]}
            placeholder={'you@domain.com'}
            label="Email address"
          />
        </div>
        <div className="col-md-3">
          <Field
            name="firstName"
            type="text"
            component={InputField}
            validate={[required]}
            placeholder={'First name'}
            label="First name"
          />
        </div>
        <div className="col-md-3">
          <Field
            name="lastName"
            type="text"
            component={InputField}
            validate={[required]}
            placeholder={'Last name'}
            label={'Last name'}
          />
        </div>
        <div className="col-md-3">
          <Field
            name="phoneNumber"
            type="text"
            component={InputField}
            validate={[required]}
            placeholder={'777-777-7777'}
            label="Phone Number"
          />
        </div>
        <div className="col-12">
          <Field
            name="message"
            type="text"
            component={InputField}
            validate={[required]}
            placeholder={'Your message here'}
            label="Message"
          />
        </div>
        <div className="col-12 pt-2" align="center">
          <button className={'btn btn-primary'}
                  onClick={handleSubmit(data => {
                    fetch('https://api.formbucket.com/f/buk_oTRM0pz1C1ZT7e0sdCQ6kSAk', {
                      method: 'post',
                      mode: 'cors',
                      body: JSON.stringify(data),
                      headers: {
                        'accept': 'application/javascript',
                        'Content-Type': 'application/json',
                      }
                    })
                    reset()
                    setSubmitted(() => true)
                  })}
          >Submit
          </button>
        </div>
      </div>
    </div>
  </div>

const Success = ({ setSubmitted }) =>
  <div className="row mt-5 mb-0">
    <div className="col-12">
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">
          Thanks for reaching out!
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"
                  onClick={() => setSubmitted(() => false)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </h4>
        <p>Your message has been sent to Jonathan Pan (panjona@gmail.com)</p>
      </div>
    </div>
  </div>

const enhance = compose(
  setDisplayName('ContactForm'),
  withState('submitted', 'setSubmitted', false)
)

const ContactForm = enhance((props) => {
  const { submitted } = props
  return (
    <div>
      {!submitted && <Form {...props}/>}
      {submitted && <Success {...props}/>}
    </div>
  )
})

const Wrapper = reduxForm({
  form: 'ContactForm',
})(ContactForm)

export default Wrapper

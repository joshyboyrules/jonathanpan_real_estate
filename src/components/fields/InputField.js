import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const InputField = (props) => {
  const {
    min, max, disabled, placeholder, input, label, type,
    noLabel, required, id,
    meta: { touched, error, warning }
  } = props

  const inputClass = classNames('form-control', { 'is-invalid': touched && error })
  return (
    <div className={'form-group'}>
      {(label && !noLabel) &&
      <label
        className="control-label"
        style={{ 'display': noLabel && 'none' }}>
        {label}
        {required && <em>*</em>}
      </label>}
      <input {...input}
             placeholder={placeholder}
             type={type}
             disabled={disabled}
             className={inputClass}
             min={min}
             max={max}
             id={id}
             maxLength={props.maxLength}
      />
      {touched && error && <div className={'invalid-feedback'}>{error}</div>}
      {touched && warning && <div className="invalid-feedback">{warning}</div>}
    </div>
  )
}

InputField.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
}
InputField.defaultProps = {}

export default InputField

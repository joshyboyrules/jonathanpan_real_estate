import React from 'react'
import PropTypes from 'prop-types'
import { withSiteData } from 'react-static'

const AgentEmail = withSiteData(({ email }) => {
  return (
    <a href={`mailto:${email}`}>{email}</a>
  )
})

AgentEmail.propTypes = {}
AgentEmail.defaultProps = {}

export default AgentEmail

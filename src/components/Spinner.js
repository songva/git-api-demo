import React from 'react'
import PropTypes from 'prop-types'

const Spinner = ({isSearching}) => (
  <div id='spinner' style={{display: (isSearching ? 'block': 'none')}}>searching ...</div>
)

Spinner.propTypes = {
  isSearching: PropTypes.bool.isRequired
}

export default Spinner

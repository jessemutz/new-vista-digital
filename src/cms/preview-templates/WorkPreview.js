import React from 'react'
import PropTypes from 'prop-types'
import WorkPageTemplate from '../../components/WorkPageTemplate'

const WorkPagePreview = ({ entry, widgetFor }) => (
  <WorkPageTemplate
    title={entry.getIn(['data', 'title'])}
    meta_title={entry.getIn(['data', 'meta_title'])}
    meta_description={entry.getIn(['data', 'meta_description'])}
    content={widgetFor('body')}
  />
)

WorkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WorkPagePreview

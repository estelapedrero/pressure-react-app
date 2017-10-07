import React from 'react';
import PropTypes from 'prop-types';

const Link = props => (
  <a href={props.link} target="_blank">
    {props.name}
    {props.icon ? <i>{props.icon}</i> : null }
  </a>
);

Link.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};

export default Link;

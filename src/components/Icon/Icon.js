import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const ICONS = {
  zap: 'M22.751 9.394c-0.217-0.434-0.543-0.652-0.977-0.652h-8.579l0.977-7.493c0.109-0.434-0.217-0.977-0.652-1.086-0.434-0.217-0.977-0.109-1.303 0.326l-10.86 13.032c-0.217 0.326-0.326 0.76-0.109 1.195 0.217 0.326 0.543 0.543 0.977 0.543h8.579l-0.977 7.493c-0.109 0.434 0.217 0.977 0.652 1.086 0.109 0.109 0.326 0.109 0.434 0.109 0.326 0 0.652-0.109 0.869-0.434l10.86-13.032c0.217-0.326 0.326-0.76 0.109-1.086zM12.434 19.276l0.652-4.995c0-0.326-0.109-0.652-0.217-0.869-0.217-0.217-0.543-0.326-0.869-0.326h-7.493l6.95-8.362-0.543 4.995c0 0.326 0.109 0.652 0.217 0.869 0.217 0.217 0.543 0.326 0.76 0.326h7.493l-6.95 8.362z',
};
const DEFAULT = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
};

const Icon = props => (
  <svg
    className={styles[`icon__${props.name}`]}
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ? props.width : DEFAULT.width}
    height={props.height ? props.height : DEFAULT.height}
    viewBox={props.viewBox ? props.viewBox : DEFAULT.viewBox}
    aria-labelledby="title"
  >
    <title id="title">{props.name}</title>
    <path d={ICONS[props.name]} />
  </svg>
);

Icon.propTypes = {
  height: PropTypes.number,
  name: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.number,
};

export default Icon;

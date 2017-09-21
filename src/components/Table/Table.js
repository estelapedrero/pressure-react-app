import React from 'react';
import PropTypes from 'prop-types';
// import styles from './styles.scss';

const Table = props => (
  <table>
    <thead>
      <tr>
        <th>fecha</th>
        <th>máximo</th>
        <th>mínimo</th>
      </tr>
    </thead>
    <tbody>
      {
        props.values.map(value => (
          <tr key={value.id}>
            <td>{value.date}</td>
            <td>{value.max}</td>
            <td>{value.min}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

Table.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object),
};

export default Table;

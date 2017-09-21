import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Table extends Component {
  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    return (
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
            this.props.values.map(value => (
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
  }
}

export default Table;

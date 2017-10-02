import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateProvider from '../../providers/date';
import styles from './styles.scss';

class Table extends Component {

  onClickX = () => {
    // console.log(event.target.parentNode.parentNode);
    this.props.clickClose(this.props.id);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>fecha</th>
            <th>pulsaciones</th>
            <th>máximo</th>
            <th>mínimo</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.values.map(value => (
              <tr key={value.id}>
                <td>{DateProvider.short(value.date)}</td>
                <td>{value.pulse}</td>
                <td>{value.max}</td>
                <td>{value.min}</td>
                <td className={styles['x-close']}>
                  <a onClick={this.onClickX}>x</a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  clickClose: PropTypes.func,
  id: PropTypes.number,
  values: PropTypes.arrayOf(PropTypes.object),
};

export default Table;

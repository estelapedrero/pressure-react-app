import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateProvider from '../../providers/date';
import styles from './styles.scss';

const HEADER = ['fecha', 'pulsaciones', 'systólica', 'diastólica']

class Table extends Component {

  onClickX = id => {
    this.props.clickClose(id);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {
              HEADER.map((title, index) => (
                <th key={index}>{title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            this.props.values.map(value => (
              <tr key={value.id}>
                <td>{DateProvider.short(value.date)}</td>
                <td>{value.pulse}</td>
                <td className={(value.sys > 135 ? styles.alert : null)}>{value.sys}</td>
                <td className={(value.dia > 85 ? styles.alert : null)}>{value.dia}</td>
                <td className={styles['x-close']}>
                  <a id={value.id} onClick={this.onClickX.bind(null, value.id)}>x</a>
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
  values: PropTypes.arrayOf(PropTypes.object),
};

export default Table;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Switch extends Component {
  static propTypes = {
    // id: PropTypes.number,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object),
  }

  onRadioChange = () => (
    this.props.onChange()
  )

  renderOptions = () => (
    <div className={styles.switch}>
      {
        this.props.options.map(option => (
          <div key={option.id}>
            <input
              type="radio"
              id={option.id}
              name={option.name}
              value={option.value}
              checked={option.checked}
              onChange={this.onRadioChange}
            />
            <label>{option.label}</label>
          </div>
        ))
      }
    </div>
  )

  render() {
    return (
      this.renderOptions()
    );
  }
}

export default Switch;

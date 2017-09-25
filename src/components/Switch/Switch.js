import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Switch extends Component {
  static propTypes = {
    // id: PropTypes.number,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object),
  }

  onRadioChange = event => {
    this.props.onChange(event.target.value)
  }

  renderOptions = () => (
    <div className={styles.switch}>
      {
        this.props.options.map(option => (
          <label key={option.id}>
            <input
              type="radio"
              id={option.id}
              name={option.name}
              value={option.value}
              checked={this.props.selectedOption === option.value}
              onChange={this.onRadioChange}
            />
            {option.label}
          </label>
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

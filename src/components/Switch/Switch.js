import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Switch extends Component {
  static propTypes = {
    // id: PropTypes.number,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object),
    selectedOption: PropTypes.string,
  }

  onRadioChange = event => {
    this.props.onChange(event.target.value);
  }

  renderOptions = () => {
    const { options, selectedOption } = this.props;

    return options.map(({ id, name, value, label }) => (
      <label key={id}>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={selectedOption === value}
          onChange={this.onRadioChange}
        />
        <p>{label}</p>
      </label>
    ));
  }

  render() {
    return (
      <div className={styles.tabmenu}>
        { this.renderOptions() }
      </div>
    );
  }
}

export default Switch;

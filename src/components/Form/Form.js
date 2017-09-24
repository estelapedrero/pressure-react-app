import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const ENTER_KEYCODE = 13;

class Form extends Component {
  static propTypes = {
    addValue: PropTypes.func,
  }
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      max: 11,
      min: 5,
    };
  }
  onAddClick = () => {
    this.props.addValue(this.state);
    if (!this.state.date) {
      const today = Date.now();
      this.setState({ date: today });
    }
    // if (!this.state.max) return;
    // if (!this.state.min) return;
  }

  onInputKeyDown = event => {
    if (event.which === ENTER_KEYCODE) {
      this.onAddClick();
    }
  }
  onDateChange = event => {
    this.setState({ date: event.target.value });
  }
  onMaxChange = event => {
    this.setState({ max: event.target.value });
  }

  onMinChange = event => {
    this.setState({ min: event.target.value });
  }

  render() {
    return (
      <div className={styles.form}>
        <div>
          <label>fecha</label>
          <input
            id="date"
            type="date"
            value={this.state.date}
            onChange={this.onDateChange}
          />
        </div>
        <div className={styles.group}>
          <div>
            <label>máximo</label>
            <input
              type="number"
              placeholder="máximo"
              step="0.1"
              value={this.state.max}
              onChange={this.onMaxChange}
            />
          </div>
          <div>
            <label>mínimo</label>
            <input
              type="number"
              placeholder="mínimo"
              step="0.1"
              value={this.state.min}
              onChange={this.onMinChange}
            />
          </div>
        </div>
        <div>
          <button
            className={styles.primary}
            onClick={this.onAddClick}
          >
            añadir
          </button>
        </div>
      </div>
    );
  }
}

export default Form;

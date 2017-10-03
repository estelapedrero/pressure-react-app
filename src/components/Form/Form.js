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
      date: Date.now(),
      max: 11,
      min: 5,
      pulse: 87,
    };
  }
  onAddClick = () => {
    if (!this.state.date) return;
    if (!this.state.pulse) return;
    if (!this.state.max) return;
    if (!this.state.min) return;
    this.props.addValue(this.state);
  }

  onInputKeyDown = event => {
    if (event.which === ENTER_KEYCODE) {
      this.onAddClick();
    }
  }
  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className={styles.form}>
        <div>
          <label>fecha</label>
          <input
            name="date"
            id="date"
            type="date"
            value={this.state.date}
            onChange={this.onInputChange}
          />
        </div>
        <div className={styles.group}>
          <div>
            <label>pulsaciones</label>
            <input
              type="number"
              name="pulse"
              placeholder="pulsaciones"
              step="1"
              value={this.state.pulse}
              onChange={this.onInputChange}
            />
          </div>
          <div>
            <label>mínimo</label>
            <input
              type="number"
              name="max"
              placeholder="máximo"
              step="0.1"
              value={this.state.max}
              onChange={this.onInputChange}
            />
          </div>
          <div>
            <label>mínimo</label>
            <input
              type="number"
              name="min"
              placeholder="mínimo"
              step="0.1"
              value={this.state.min}
              onChange={this.onInputChange}
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

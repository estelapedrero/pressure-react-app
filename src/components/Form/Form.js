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
      sys: 111,
      dia: 75,
      pulse: 87,
    };
  }
  onAddClick = () => {
    if (!this.state.date) return;
    if (!this.state.pulse) return;
    if (!this.state.sys) return;
    if (!this.state.dia) return;
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
            <label>systólica</label>
            <input
              type="number"
              name="sys"
              placeholder="systólica"
              step="1"
              value={this.state.sys}
              onChange={this.onInputChange}
            />
          </div>
          <div>
            <label>diástolica</label>
            <input
              type="number"
              name="dia"
              placeholder="diastólica"
              step="1"
              value={this.state.dia}
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

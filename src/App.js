import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Footer, Form, Graphic, Header, Switch, Table } from './components';
import styles from './App.scss';

const VIEWS = [
  { id: 1, name: 'view', label: 'tabla', value: 'table' },
  { id: 2, name: 'view', label: 'gráfico', value: 'graphic' },
];

class App extends Component {
  static propTypes = {
    id: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'table',
      values: [
        { id: 1, date: Date.now(), pulse: 75, sys: 131, dia: 90 },
        { id: 2, date: Date.now(), pulse: 58, sys: 109, dia: 78 },
      ],
    };
  }

  onRadioToggle = value => {
    this.setState({ selectedOption: value });
  }

  addValue = value => {
    const { date, pulse, sys, dia } = value;
    const values = [
      ...this.state.values,
      { id: Date.now(), date, pulse, sys, dia },
    ];
    this.setState({ values });
  }

  clickXClose = id => {
    const values = this.state.values.filter(value => value.id !== id);
    this.setState({ values });
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <Form
            addValue={this.addValue}
          />
          <Switch
            options={VIEWS}
            id={this.props.id}
            selectedOption={this.state.selectedOption}
            onChange={this.onRadioToggle}
          />
          {this.state.selectedOption === 'table' && this.state.values.length > 0 ?
            <Table
              clickClose={this.clickXClose}
              values={this.state.values}
            /> : null}

          {this.state.selectedOption === 'graphic' && this.state.values.length > 0 ?
            <Graphic
              chartData={this.state.values}
            /> : null}
          {this.state.values.length <= 0 ? <p className={styles.info}>No hay datos</p> : null}

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

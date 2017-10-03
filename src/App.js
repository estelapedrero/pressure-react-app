import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Graphic, Header, Switch, Table } from './components';
// import styles from './App.scss';

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
        { id: 1, date: Date.now(), pulse: 75, max: 11, min: 5 },
        { id: 2, date: Date.now(), pulse: 58, max: 10, min: 6 },
      ],
    };
  }

  onRadioToggle = value => {
    this.setState({ selectedOption: value });
  }

  addValue = value => {
    const { date, pulse, max, min } = value;
    const values = [
      ...this.state.values,
      { id: Date.now(), date, pulse, max, min },
    ];
    this.setState({ values });
  }

  clickXClose = id => {
    const values = this.state.values.filter(value => value.id !== id);
    this.setState({ values });
  }

  render() {
    return (
      <div>
        <Header />
        <Form
          addValue={this.addValue}
        />
        <Switch
          options={VIEWS}
          id={this.props.id}
          selectedOption={this.state.selectedOption}
          onChange={this.onRadioToggle}
        />
        {this.state.selectedOption === 'table' ?
          <Table
            clickClose={this.clickXClose}
            values={this.state.values}
          /> : null}

        {this.state.selectedOption === 'graphic' ?
          <Graphic
            chartData={this.state.values}
          /> : null}

      </div>
    );
  }
}

export default App;

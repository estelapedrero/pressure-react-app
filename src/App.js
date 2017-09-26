import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Graphic, Header, Switch, Table } from './components';
// import styles from './App.scss';

const VIEWS = [
  { id: 1, name: 'view', label: 'mostrar tabla', value: 'table' },
  { id: 2, name: 'view', label: 'mostrar gráfico', value: 'graphic' },
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
        { id: 1, date: Date.now(), max: 11, min: 5 },
        { id: 2, date: Date.now(), max: 10, min: 6 },
      ],
    };
  }

  onRadioToggle = value => {
    this.setState({ selectedOption: value });
  }

  addValue = value => {
    const { date, max, min } = value;
    const values = [
      ...this.state.values,
      { id: Date.now(), date, max, min },
    ];
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
          <Table values={this.state.values} /> : null}

        {this.state.selectedOption === 'graphic' ?
          <Graphic /> : null}

      </div>
    );
  }
}

export default App;

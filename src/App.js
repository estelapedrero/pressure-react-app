import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Header, Switch, Table } from './components';
// import styles from './App.scss';

const VIEWS = [
  { id: 1, name: 'view', label: 'mostrar tabla', value: 'table', checked: true },
  { id: 2, name: 'view', label: 'mostrar gráfico', value: 'graphics', checked: false },
];

class App extends Component {
  static propTypes = {
    id: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.state = {
      values: [
        { id: 1, date: Date.now(), max: 11, min: 5 },
        { id: 2, date: Date.now(), max: 10, min: 6 },
      ],
    };
  }

  onRadioToggle = () => {
    // console.log(id);
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
          onChange={this.onRadioToggle}
        />
        <Table values={this.state.values} />
      </div>
    );
  }
}

export default App;

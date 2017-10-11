import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import DateProvider from '../../providers/date';

const OPTIONS = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

Chart.defaults.global.legend.position = 'bottom';
Chart.defaults.global.legend.labels.boxWidth = 1;

class Graphic extends Component {

  constructor(props) {
    super(props);
    this.state = { instance: false };
  }

  componentDidMount() {
    this.chart(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.chart(nextProps);
  }

  getLabels = () => (
    this.props.chartData.map(value => DateProvider.short(value.date))
  )

  getMax = () => ({
    label: 'sys',
    data: this.props.chartData.map(value => value.sys),
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderColor: 'tomato',
  })

  getMin = () => ({
    label: 'dia',
    data: this.props.chartData.map(value => value.dia),
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderColor: '#00e0dd',
  })

  chart() {
    const canvas = ReactDOM.findDOMNode(this).getContext('2d');
    this.setState({
      instance: new Chart(canvas, {
        type: 'line',
        data: {
          labels: this.getLabels(),
          datasets: [this.getMax(), this.getMin()],
        },
        options: OPTIONS,
      }),
    });
  }
  render() {
    return (
      <canvas />
    );
  }
}

Graphic.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.object),
};

export default Graphic;

import { Chart, Axis, Legend, Polygon } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const data = [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]];;

const source = [];
for(let i = 0; i < data.length; i ++) {
  const item = data[i];
  const obj = {} as any;
  obj.name = item[0];
  obj.day = item[1];
  obj.sales = item[2];
  source.push(obj);
}

const scale = [{
  dataKey: 'name',
  type: 'cat',
  values: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
}, {
  dataKey: 'day',
  type: 'cat',
  values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
}];

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const axis1Opts = {
      dataKey: 'name',
      tickLine: null,
      grid: {
        align: 'center',
        lineStyle: {
          lineWidth: 1,
          lineDash: null,
          stroke: '#f0f0f0'
        }
      }
    };
    const axis2Opts = {
      dataKey: 'day',
      title: null,
      grid: {
        align: 'center',
        lineStyle: {
          lineWidth: 1,
          lineDash: null,
          stroke: '#f0f0f0'
        },
        showFirstLine: true
      }
    };
    const seriesOpts = {
      quickType: 'polygon',
      color: ['sales', '#BAE7FF-#1890FF-#0050B3'],
      position: 'name*day',
      label: ['sales', {
        offset: -2,
        textStyle: {
          fill: '#fff',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }
      }],
      style: {
        lineWidth: 1,
        stroke: '#fff'
      }
    };

    return (
      <div>
        <Chart forceFit height={400} data={source} scale={scale}>
          <Legend />
          <Axis {...axis1Opts}/>
          <Axis {...axis2Opts}/>
          <Polygon {...seriesOpts}/>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));


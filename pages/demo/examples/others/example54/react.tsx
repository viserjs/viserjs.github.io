import * as React from 'react';
import { Chart, Guide, Tooltip, Interval } from 'viser-react';

const data = [{
  gender: 'male',
  path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
  value: 50
}, {
  gender: 'middle',
  path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
  value: 25
}, {
  gender: 'female',
  path: 'M320.96 503.232v105.376h127.872V736.48H320.96v127.872H191.136V736.48H63.296V608.608h127.84v-105.76C81.216 474.208 0 374.56 0 255.712 0 114.496 114.496 0 255.712 0c141.248 0 255.68 114.496 255.68 255.712 0 119.328-79.872 219.264-190.432 247.52zm-65.248-375.36c-70.624 0-127.872 57.216-127.872 127.84 0 70.592 57.248 127.84 127.872 127.84s127.872-57.248 127.872-127.84c0-70.624-57.248-127.84-127.872-127.84z',
  value: 25
}];

export default class App extends React.Component {
  render() {
    const scale=[
      {
        dataKey:'value',
        min:0,
        max:100
      }
    ];
    return (
      <Chart
        forceFit={true}
        height={400}
        padding={0}
        data={data}
        scale={scale}
      >
        <Tooltip/>
        <Interval
          position="gender*value"
          color="gender"
          shape={['path',path=>['liquid-fill-path',path]]}
          style={{lineWidth:10,opacity:0.75}}
        />
        {data.map((row, index) => {
          return (
            <Guide
              key={index}
              type="text"
              top={true}
              position={{
                gender: row.gender,
                value: 50,
              }}
              content={row.value + '%'}
              style={{
                fontSize: window.innerWidth/10,
                textAlign: 'center',
              }}
            />
          );
        })}
      </Chart>
    );
  }
}

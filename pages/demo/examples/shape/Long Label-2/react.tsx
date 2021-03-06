import * as React from 'react';
import { Graph } from 'viser-graph-react';

const data = {
  nodes: [{
    x: 100,
    y: 100,
    label: '这个文案\n有点长',
    id: 'node1',
    labelCfg: {
      position: 'bottom'
    },
    anchorPoints: [[ 0, 0.5 ], [ 1, 0.5 ]]
  }, {
    x: 300,
    y: 100,
    label: '这个文案\n也有点长',
    id: 'node2',
    labelCfg: {
      position: 'bottom'
    },
    anchorPoints: [[ 0, 0.5 ], [ 1, 0.5 ]]
  }],
  edges: [{
    source: 'node1',
    target: 'node2',
    label: 'label上面这个文本太长了\n我需要换行',
    labelCfg: {
      refY: 20
    },
    style: {
      endArrow: true
    }
  }]
};

const graph = {
  data,
  type: 'graph',
  container: 'mount',
  width: 500,
  height: 500,
  pixelRatio: 2,
  renderer: 'svg',
  fitView: true,
  defaultNode: {
    shape: 'rect',
    style: {
      fill: '#DEE9FF',
      stroke: '#5B8FF9'
    }
  },
  defaultEdge: {
    color: '#F6BD16'
  }
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Graph {...graph}/>
      </div>
    );
  }
}

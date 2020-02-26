import { ViserGraph } from '../../../packages/viser-graph/src/index';

const data = {
  nodes: [{
    id: '0',
    x: 150,
    y: 150
  }, {
    id: '1',
    x: 350,
    y: 150
  }],
  edges: [
  // 内置 loop
    {
      source: '0',
      target: '0'
    },
    {
      source: '1',
      target: '1'
    }
  ]
};
new ViserGraph({
  data,
  graph: {
    container: 'mount',
    type: 'graph',
    width: 500,
    height: 500,
    pixelRatio: 2,
    renderer: 'svg',
    modes: {
      default: [ 'drag-node' ]
    },
    fitView: true,
    defaultNode: {
      style: {
        fill: '#DEE9FF',
        stroke: '#5B8FF9'
      }
    },
  },
  edge: {
    formatter: () => {
      return {
        shape: 'loop',
        style: {
          stroke: '#F6BD16',
          endArrow: {
            path: 'M 10,0 L -10,-10 L -10,10 Z',
            d: 10
          }
        },
        // 更多关于 loop 的配置请参考http://antv.alipay.com/zh/docs/manual/middle/elements/edges/loop/#%E8%87%AA%E7%8E%AF%E7%89%B9%E6%AE%8A%E9%85%8D%E7%BD%AE-loopcfg
        loopCfg: {
          position: 'top'
        }
      }
    },
  },
}).render();
import { ViserGraph } from 'viser-graph';

const data = {
  nodes: [
    {
      id: 'rect1',
      label: 'rect1',
      description: '描述信息，如果没有该字段则不展示',
      x: 250,
      y: 150
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
      default: [ 'drag-canvas', 'drag-node' ]
    },
    fitView: true,
    defaultNode: {
      shape: 'modelRect',
      size: [ 200, 80 ],
      style: {
        radius: 5,
        stroke: '#69c0ff',
        fill: '#ffffff',
        lineWidth: 1,
        fillOpacity: 1
      },
      // 文本样式配置
      labelCfg: {
        style: {
          fill: '#595959',
          fontSize: 14
        },
        offset: 30
      },
      // 左侧的小矩形
      preRect: {
        show: true,
        width: 4,
        fill: '#40a9ff',
        radius: 2
      },
      // 节点上左右上下四个方向上的链接circle配置
      linkPoints: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        // circle的大小
        size: 3,
        lineWidth: 1,
        fill: '#72CC4A',
        stroke: '#72CC4A'
      },
      // 节点中icon配置
      logoIcon: {
        // 是否显示icon，值为 false 则不渲染icon
        show: true,
        x: 0,
        y: 0,
        // icon的地址，字符串类型
        img: 'https://gw.alipayobjects.com/zos/basement_prod/4f81893c-1806-4de4-aff3-9a6b266bc8a2.svg',
        width: 16,
        height: 16,
        // 用于调整图标的左右位置
        offset: 0
      },
      // 节点中表示状态的icon配置
      stateIcon: {
        // 是否显示icon，值为 false 则不渲染icon
        show: true,
        x: 0,
        y: 0,
        // icon的地址，字符串类型
        img: 'https://gw.alipayobjects.com/zos/basement_prod/300a2523-67e0-4cbf-9d4a-67c077b40395.svg',
        width: 16,
        height: 16,
        // 用于调整图标的左右位置
        offset: -5
      }
    },
    nodeStateStyles: {
      hover: {
        lineWidth: 2,
        stroke: '#1890ff',
        fill: '#e6f7ff'
      }
    }
  },
  node: {
    events: {
      onMouseenter: (evt, graph) => {
        const { item } = evt;
        graph.setItemState(item, 'hover', true);
      },
      onMouseleave: (evt, graph) => {
        const { item } = evt;
        graph.setItemState(item, 'hover', false);
      }
    }
  },
}).render();
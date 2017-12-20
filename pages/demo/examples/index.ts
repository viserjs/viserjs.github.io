const examples = {
  line: {
    enName: 'Line',
    cnName: '线性图',
    examples: [
      {
        path: 'example1',
        enName: 'Basic line',
        cnName: '基础折线图',
      },
      {
        path: 'example2',
        enName: 'Multi line',
        cnName: '多条折线图',
      },
      {
        path: 'example3',
        enName: 'Multi smooth line',
        cnName: '曲线折线图',
      },
      {
        path: 'example4',
        enName: 'Ladders smooth line',
        cnName: '阶梯折线图',
      },
      {
        path: 'example5',
        enName: 'Multi ladders smooth line',
        cnName: '多条阶梯折线图',
      },
    ],
    icon: 'xianxingtu'
  },
  bar: {
    enName: 'Bar',
    cnName: '柱状图',
    examples: [
      {
        path: 'example1',
        enName: 'Basic column',
        cnName: '简单柱状图',
      },
      {
        path: 'example2',
        enName: 'Grouped column',
        cnName: '分组柱状图',
      },
      {
        path: 'example3',
        enName: 'Stacked column',
        cnName: '堆叠柱状图',
      },
      {
        path: 'example4',
        enName: 'Stacked percentage column',
        cnName: '百分比堆叠柱状图',
      },
      {
        path: 'example5',
        enName: 'Ranged column',
        cnName: '区间柱状图',
      },
      {
        path: 'example7',
        enName: 'Histogram',
        cnName: '直方图',
      },
      {
        path: 'example8',
        enName: 'Stacked histogram',
        cnName: '层叠直方图',
      },
      {
        path: 'example9',
        enName: 'Histogram binwidth',
        cnName: '直方图范围刻度',
      },
      {
        path: 'example10',
        enName: 'Basic bar',
        cnName: '基础条形图',
      },
      {
        path: 'example11',
        enName: 'Grouped bar',
        cnName: '分组条形图',
      },
      {
        path: 'example12',
        enName: 'Stacked bar',
        cnName: '堆叠条形图',
      },
      {
        path: 'example13',
        enName: 'Ranged bar',
        cnName: '区间条形图',
      },
    ],
    icon: 'zhuzhuangtu'
  },
  pie: {
    enName: 'Pie',
    cnName: '饼图',
    examples: [
      {
        path: 'example1',
        enName: 'Basic Pie',
        cnName: '基础饼图',
      },
      {
        path: 'example2',
        enName: 'Inner Label Pie',
        cnName: '饼图 - 内部文本',
      },
      {
        path: 'example3',
        enName: 'Basic Donut',
        cnName: '基础环图',
      },
      {
        path: 'example4',
        enName: 'Multi Level Pie',
        cnName: '多层饼图',
      },
      {
        path: 'example5',
        enName: 'Basic Rose',
        cnName: '单色南丁格尔玫瑰图',
      },
      {
        path: 'example6',
        enName: 'Color Rose',
        cnName: '多色南丁格尔玫瑰图',
      },
      {
        path: 'example7',
        enName: 'Donut Rose',
        cnName: '南丁格尔玫瑰环图',
      },
    ],
    icon: 'bingtu'
  },
  point: {
    enName: 'Point',
    cnName: '点图',
    examples: [
      {
        path: 'example1',
        enName: 'Scatter',
        cnName: '散点图',
      },
      {
        path: 'example2',
        enName: 'Scatter Series',
        cnName: '多色散点图',
      },
      {
        path: 'example3',
        enName: 'Jitter',
        cnName: '扰动点图',
      },
      {
        path: 'example4',
        enName: 'Bubble',
        cnName: '气泡图',
      },
    ],
    icon: 'diantu'
  },
  area: {
    enName: 'Area',
    cnName: '面积图',
    examples: [
      {
        path: 'example1',
        enName: 'Basic Area',
        cnName: '基础面积图',
      },
      {
        path: 'example2',
        enName: 'Basic Area (with negative value)',
        cnName: '基础面积图',
      },
      {
        path: 'example3',
        enName: 'Stack Area',
        cnName: '堆叠面积图',
      },
      {
        path: 'example4',
        enName: 'Percentage Stack Area',
        cnName: '百分比堆叠面积图',
      },
      {
        path: 'example5',
        enName: 'Range Area',
        cnName: '区间面积图',
      },
    ],
    icon: 'mianjitu'
  },
  box: {
    enName: 'Box',
    cnName: '箱型图',
    examples: [
      {
        path: 'example1',
        enName: 'Basic Box',
        cnName: '基础箱型图',
      },
      {
        path: 'example2',
        enName: 'Basic Box (with abnormal value)',
        cnName: '基础箱型图（有异常值）',
      },
      {
        path: 'example3',
        enName: 'Group Box',
        cnName: '分组箱型图',
      },
    ],
    icon: 'xiangxiantu'
  },
  heatmap: {
    enName: 'Heatmap',
    cnName: '热力图',
    examples: [
      {
        path: 'example1',
        enName: 'Color box',
        cnName: '色块图',
      },
      {
        path: 'example2',
        enName: 'Rectangle box',
        cnName: '矩形分箱图',
      },
      {
        path: 'example4',
        enName: 'Horizontal calendar color box',
        cnName: '水平日历色块图',
      },
      {
        path: 'example5',
        enName: 'Group Heatmap',
        cnName: '分块热力图',
      },
      {
        path: 'example6',
        enName: 'Heatmap',
        cnName: '热力图',
      },      {
        path: 'example7',
        enName: 'Hexagon Box',
        cnName: '六边形分箱',
      },
    ],
    icon: 'relitu'
  },
  gauge: {
    enName: 'Gauge',
    cnName: '仪表盘',
    examples: [
      {
        path: 'example1',
        enName: 'Basic Gauge',
        cnName: '基础仪表盘',
      }
    ],
    icon: 'yibiaopan',
  },
  funnel: {
    enName: 'Funnel',
    cnName: '漏斗',
    examples: [
      {
        path: 'example2',
        enName: 'Sharp Funnel',
        cnName: '尖底漏斗图',
      },
      {
        path: 'example3',
        enName: 'Compare Funnel',
        cnName: '对比漏斗图',
      },
    ],
    icon: 'loudoutu'
  },
  radar: {
    enName: 'Radar',
    cnName: '雷达图',
    examples: [
      {
        path: 'example1',
        enName: 'Basic Radar',
        cnName: '基础雷达图',
      },
      {
        path: 'example2',
        enName: 'Basic Radar (line)',
        cnName: '基础雷达图（线）',
      },
    ],
    icon: 'leidatu'
  },
  facet: {
    enName: 'Facet',
    cnName: '分面图',
    examples: [
      {
        path: 'example1',
        enName: 'Rect Facet',
        cnName: '2 维行列分面',
      },
      {
        path: 'example2',
        enName: 'Circle Facet',
        cnName: '圆形分面图',
      },
      {
        path: 'example3',
        enName: 'Row Facet',
        cnName: '行分面',
      },
      {
        path: 'example4',
        enName: 'Column Facet',
        cnName: '列分面',
      },
      {
        path: 'example5',
        enName: 'List Facet',
        cnName: 'List 分面',
      },
      {
        path: 'example6',
        enName: 'Tree Facet',
        cnName: 'Tree 分面',
      },
      {
        path: 'example7',
        enName: 'Tree Column Facet',
        cnName: '多级 Tree 分面',
      },
      {
        path: 'example8',
        enName: 'Mirror Facet',
        cnName: '镜像分面',
      },
    ],
    icon: 'fenmian'
  },
  relation: {
    enName: 'Relation',
    cnName: '关系图',
    examples: [
      {
        path: 'example1',
        enName: 'Arc Diagram',
        cnName: '弧长链接图',
      },
      {
        path: 'example2',
        enName: 'Arc Polar Diagram',
        cnName: '极坐标弧长链接图',
      },
      {
        path: 'example3',
        enName: 'Chord Diagram',
        cnName: '和弦图',
      },
      {
        path: 'example4',
        enName: 'Sankey Diagram',
        cnName: '和弦图',
      },
      {
        path: 'example5',
        enName: 'Voronoi Diagram',
        cnName: 'voronoi 图',
      },
      {
        path: 'example6',
        enName: 'Adjacency Diagram',
        cnName: '相邻层次图',
      },
      {
        path: 'example7',
        enName: 'Sunburst Diagram',
        cnName: '旭日图',
      },
      {
        path: 'example8',
        enName: 'Treemap Diagram',
        cnName: '矩形树图',
      },
      // {
      //   path: 'example9',
      //   enName: 'Radial Dendrogram',
      //   cnName: '径向系统树图',
      // },
    ],
    icon: 'guanxitu'
  },
};

export default examples;
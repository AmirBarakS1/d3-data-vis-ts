import * as d3 from 'd3';
import { altData, graph } from './data';
import { PNode } from './data.type';

const RADIUS = 25;
const NODES_DISTANCE = RADIUS * 5;
const settings = { height: 600, width: 600, margin: { top: 10, right: 10, bottom: 10, left: 10 }};

function calcX(node: PNode, width: number) {
  return (width / 2) + (node.xIndex * NODES_DISTANCE);
}

function calcY(node: PNode, height: number) {
  return (height / 2) + (node.yIndex * NODES_DISTANCE);
}

function draw(dataset: any, { height, width, margin }: { height: number, width: number, margin: any }) {

  const svg = d3.select('.gGraph-container svg')
    // .append('')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)

    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);


  const link = svg.append('g')
    .attr('class', 'links')
    .selectAll('path')
    .data(dataset.links)
    .enter()
    .append('path')
    .attr('d', (d: any) => {
      const path = d3.path();
      const k = NODES_DISTANCE / 4,
            x1 = calcX(d.source.data, width),
            x2 = calcX(d.target.data, width),
            y1 = calcY(d.source.data, height),
            y2 = calcY(d.target.data, height);

      if ( y1 !== y2 ) {
        path.moveTo(x1, y1 - 5);
        path.bezierCurveTo(x2, y1 + k, x1 , y2 - k, x2, y2 + 4);
        path.lineTo(x2, y2 + 4);
      }
      else {
        path.moveTo(x1, y1);
        path.lineTo(x2, y2);
      }

      return path.toString();
    })
    .attr('fill', 'none')
    .style('stroke', 'black')
    .style('stroke-width', '1px');

  // Initialize the nodes
  const node = svg.append('g')
    .attr('class', 'nodes')
    .selectAll('circle')
    .data(dataset.nodes)
    .enter()
    .append('g');
  node.append('circle')
    .attr('cx', (node: any) => calcX(node.data, width))
    .attr('cy', (node: any) => calcY(node.data, height))
    .attr('r', RADIUS)
    .attr('class', 'gCircleClass')
    .attr('fill', (d: any) => d.data.bgColor)
    .attr('filter', 'url(#redDropshadow)');

  node.append('circle')
    .attr('cx', (node: any) => calcX(node.data, width) - RADIUS)
    .attr('cy', (node: any) => calcY(node.data, height))
    .attr('r', RADIUS / 4)
    .attr('fill', 'white')
    .attr('stroke', 'blue')
    .attr('class', 'minus-sign')
    .style('cursor', 'pointer')
    .on('click', (event, { data }: any) => {});

  node.append('circle')
    .attr('cx', (node: any) => calcX(node.data, width) + RADIUS)
    .attr('cy', (node: any) => calcY(node.data, height))
    .attr('r', RADIUS / 4)
    .attr('fill', 'white')
    .attr('stroke', 'blue')
    .attr('class', 'plus-sign')
    .style('cursor', 'pointer')
    .on('click', (event, { data }: any) => {});

  node.append('circle')
    .attr('cx', (node: any) => calcX(node.data, width) + (RADIUS * Math.sin(225 * (Math.PI / 180))))
    .attr('cy', (node: any) => calcY(node.data, height) + (RADIUS * Math.cos(225 * (Math.PI / 180))))
    .attr('r', RADIUS / 3)
    .attr('fill', 'white')
    .attr('stroke', 'black')
    .style('cursor', 'pointer')
    .on('click', (event, { data }: any) => {});

  node.append('circle')
    .attr('cx', (node: any) => calcX(node.data, width) + (RADIUS * Math.sin(135 * (Math.PI / 180))))
    .attr('cy', (node: any) => calcY(node.data, height) + (RADIUS * Math.cos(135 * (Math.PI / 180))))
    .attr('r', RADIUS / 3)
    .attr('fill', 'white')
    .attr('stroke', 'black')
    .style('cursor', 'pointer')
    .on('click', (event, { data }: any) => {});


  node.append('text')
    .attr('x', (node: any) => calcX(node.data, width) - RADIUS)
    .attr('y', (node: any) => calcY(node.data, height))
    .attr('text-anchor', 'middle')
    .attr('style', `transform: translate( ${RADIUS}px, ${RADIUS + 20}px)`)
    .attr('font-size', 14)
    .text((d: any) => d.data.name);
}

export function loadPGraph() {

  const originalSelectedRoot = d3.hierarchy(altData);
  const descendants = originalSelectedRoot.descendants();
  const links = originalSelectedRoot.links();

  // create dummy data
  const dataset = {
    nodes: descendants,
    links: links
  };
  draw(dataset, settings);
}

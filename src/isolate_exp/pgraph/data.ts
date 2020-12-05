import { PGraph, PLink, PNode, PType } from './data.type';

export const graph: PGraph = {
  nodes: [
    {
      id: '0',
      xIndex: 0,
      yIndex: 0,
      type: PType.storyline,
      name: 'Node0',
      leftBadgeICClass: '!',
      rightBadgeICClass: '$',
      icClass: '',
      strokeColor: 'purple',
      bgColor: 'purple',
      children: []
    },
    {
      id: '1',
      xIndex: -1,
      yIndex: -1,
      type: PType.storyline,
      name: 'Node1',
      leftBadgeICClass: '!',
      rightBadgeICClass: '$',
      icClass: '',
      strokeColor: 'red',
      bgColor: 'red',
      children: []
    },
    {
      id: '2',
      xIndex: -1,
      yIndex: 0,
      type: PType.os,
      name: 'Node2',
      leftBadgeICClass: '!',
      rightBadgeICClass: '$',
      icClass: '',
      strokeColor: 'gray',
      bgColor: 'gray',
      children: []
    },
    {
      id: '3',
      xIndex: -2,
      yIndex: 0,
      type: PType.os,
      name: 'Node3',
      leftBadgeICClass: '!',
      rightBadgeICClass: '$',
      icClass: '',
      strokeColor: 'gray',
      bgColor: 'gray',
      children: []
    },
    {
      id: '4',
      xIndex: 1,
      yIndex: 0,
      type: PType.os,
      name: 'Node4',
      leftBadgeICClass: '!',
      rightBadgeICClass: '$',
      icClass: '',
      strokeColor: 'red',
      bgColor: 'red',
      children: []
    },
],
  links: [
    // {
    //   id: '1',
    //   source: { xIndex: 0 , yIndex: 0 },
    //   target: { xIndex: -1, yIndex: 0 },
    //   type: PType.storyline
    // },
    // {
    //   id: '2',
    //   source: '1',
    //   target: '2',
    //   type: PType.storyline
    // },
    // {
    //   id: '3',
    //   source: '1',
    //   target: '3',
    //   type: PType.storyline
    // },
    // {
    //   id: '4',
    //   source: '3',
    //   target: '4',
    //   type: PType.storyline
    // }
    ]
};


export const altData: PNode = {
      id: '0',
      xIndex: 0,
      yIndex: 0,
      type: PType.storyline,
      name: 'Node0',
      leftBadgeICClass: '!',
      rightBadgeICClass: '$',
      icClass: '',
      strokeColor: 'purple',
      bgColor: 'purple',
      children: [
        {
          id: '1',
          xIndex: -1,
          yIndex: -1,
          type: PType.storyline,
          name: 'Node1',
          leftBadgeICClass: '!',
          rightBadgeICClass: '$',
          icClass: '',
          strokeColor: 'red',
          bgColor: 'red',
          children: []
        },
        {
          id: '2',
          xIndex: -1,
          yIndex: 0,
          type: PType.os,
          name: 'Node2',
          leftBadgeICClass: '!',
          rightBadgeICClass: '$',
          icClass: '',
          strokeColor: 'gray',
          bgColor: 'gray',
          children: [{
            id: '3',
            xIndex: -2,
            yIndex: 0,
            type: PType.os,
            name: 'Node3',
            leftBadgeICClass: '!',
            rightBadgeICClass: '$',
            icClass: '',
            strokeColor: 'gray',
            bgColor: 'gray',
            children: []
          }]
        },
        {
          id: '4',
          xIndex: 1,
          yIndex: 0,
          type: PType.os,
          name: 'Node4',
          leftBadgeICClass: '!',
          rightBadgeICClass: '$',
          icClass: '',
          strokeColor: 'red',
          bgColor: 'red',
          children: []
        }
      ]
    };

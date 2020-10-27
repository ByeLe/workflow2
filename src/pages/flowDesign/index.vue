<template>
  <div>
    <G6Editor mode="edit" :data="data">
    </G6Editor>
  </div>
</template>

<script>
import G6Editor from './components/G6Editor'
export default {
  components:{G6Editor},
  data() {
    return {
      data: {
        // nodes: [
        //     {
        //         type: 'customNode',
        //         id: "node1",
        //         label: "Circle1",
        //         anchorPoints: [
        //             [0.5, 0],
        //             [0.5, 1],
        //         ],
        //         // x: 150,
        //         // y: 150
        //     },
        //     {
        //         type: 'customNode',
        //         id: "node2",
        //         label: "Circle2",
        //         anchorPoints: [
        //             [0.5, 0],
        //             [0.5, 1],
        //         ],
        //         // x: 400,
        //         // y: 150
        //     },
        //     {
        //         type: 'customNode',
        //         id: "node3",
        //         label: "Circle3",
        //         anchorPoints: [
        //             [0.5, 0],
        //             [0.5, 1],
        //         ],
        //         // x: 400,
        //         // y: 150
        //     }
        // ],
        nodes: [
            {
                type: 'circleNode',
                nodeType: 'startNode',
                id: "start",
                label: "开始",
                anchorPoints: [
                  [0.5, 0],
                  [0.5, 1],
                ],
            },
            {
                type: 'circleNode',
                nodeType: 'endNode',
                id: "end",
                label: "结束",
                anchorPoints: [
                  [0.5, 0],
                  [0.5, 1],
                ],
            },
            {
                type: 'normalNode',
                nodeType: 'normalNode',
                id: "node1",
                label: '普通节点1',
                anchorPoints: [
                  [0, 0.5], // 左边锚点
                  [1, 0.5], // 右边锚点
                  [0.5, 1], 

                ],
            },
            {
                type: 'normalNode',
                nodeType: 'normalNode',
                id: "node2",
                label: '普通节点2',
                anchorPoints: [
                  [0.5, 0],
                  [0.5, 1],
                ],
            },
            {
                type: 'normalNode',
                nodeType: 'normalNode',
                id: "node4",
                label: '普通节点4',
                anchorPoints: [
                  [0.5, 0],
                  [0.5, 1],
                ],
            },
            {
                type: 'normalNode',
                nodeType: 'normalNode',
                id: "node5",
                label: '普通节点5',
                anchorPoints: [
                  [0.5, 0],
                  [0.5, 1],
                ],
            },
            {
                type: 'normalNode',
                nodeType: 'normalNode',
                id: "node3",
                label: '普通节点3',
                anchorPoints: [
                  [0.5, 0],
                  [0.5, 1],
                ],
            }
        ],
        edges: [
            {
                source: "start",
                target: "node1"
            },
            {
              source: 'node1',
              target : 'node2',
              sourceAnchor: 0,
            },
            {
              source: 'node1',
              target : 'node3',
              sourceAnchor: 1,
            },
            {
              source: 'node1',
              target : 'node4',
              sourceAnchor: 2,
            },
            {
              source: 'node4',
              target : 'node5',
            },
            {
              source: 'node2',
              target : 'end',
            },
            {
              source: 'node3',
              target : 'end',
            },
            {
              source: 'node5',
              target : 'end',
            },
        ]},
    };
  },
}
</script>

<style>
</style>

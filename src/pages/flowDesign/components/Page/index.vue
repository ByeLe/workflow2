<template>
  <div class="page">
    <div :id="pageId" class="graph-container" style="position: relative;"></div>
  </div>
</template>


<script>
// import G6 from "@antv/g6/build/g6";
import G6 from "@antv/g6";
import { initBehavors } from "../../behavior";
export default {
  data() {
    return {
      pageId: "graph-container",
      graph: null
    };
  },
  props: {
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    initBehavors();
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      const height =  this.height - 42 
      const width =  this.width - 400

      this.graph = new G6.Graph({
        container: "graph-container",
        renderer: 'svg',
        height: height,
        width: width,
        fitCenter: true,
        layout: {
          type: 'dagre',
          nodesep: 40,
          ranksep: 30,
          // ranksepFunc:(d) => {
          //   if (d.type === 'circleNode') {
          //     return 15;
          //   }
          //   return 30;
          // },
          // rankdir: 'LR', // 可选，默认为图的中心
          // align: 'DL', // 可选
          // nodesep: 20, // 可选
          // ranksep: 50, // 可选
          // controlPoints: true, // 可选
          // Object，可选，布局的方法及其配置项，默认为 random 布局。
          // preventOverlap: true, // 防止节点重叠
          // nodeSize: 30        // 节点大小，用于算法中防止节点重叠时的碰撞检测。由于已经在上一节的元素配置中设置了每个节点的 size 属性，则不需要在此设置 nodeSize。
        },
        defaultEdge: {
          type: 'polyline',
          style: {
            radius: 4,
            stroke: "#e2e2e2"
          }
        },
        modes: {
          // 支持的 behavior
          default: [
            "drag-canvas",
            // "zoom-canvas",
            "hover-node",
            "select-node",
            "hover-edge",
            // "keyboard",
            "customer-events",
            // "add-menu"
          ],
          // mulitSelect: ["mulit-select"],
          addEdge: ["add-edge"],
          // moveNode:[ "drag-item"]
        }
      });
      const { editor, command } = this.$parent;
      editor.emit("afterAddPage", { graph: this.graph, command });

      this.readData();
    },
    readData() {
      let data = this.data;
      if (data) {
        this.graph.read(data);
      }
    }
  }
};
</script>

<style scoped lang="less">
.page{
  margin-left:200px;
  margin-right: 200px;
  /deep/.link-name{
    color: red;
  }
  /deep/.link-name:hover{
    color: green;
  }
}
</style>
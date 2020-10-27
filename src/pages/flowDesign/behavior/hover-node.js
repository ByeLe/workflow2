export default {
    getEvents() {
        return {
            'node:mouseover': 'onMouseover',
            'node:mouseleave': 'onMouseleave',
            "node:mousedown": "onMousedown"
        };
    },
    onMouseover(e) {
        const self = this;
        const item = e.item;
        const graph = self.graph;
        console.log(item)
        if (item.hasState('selected')) {
            return
        } else {
            if (self.shouldUpdate.call(self, e)) {
                graph.setItemState(item, 'hover', true);
            }
        }
        graph.paint();
    },
    onMouseleave(e) {
        const self = this;
        const item = e.item;
        const graph = self.graph;
        if (self.shouldUpdate.call(self, e)) {
            if(!item.hasState('selected'))
            graph.setItemState(item, 'hover', false);
        }
        graph.paint();
    },
    onMousedown(e) {
        if(e.target.attrs.isOutPoint ||e.target.attrs.isOutPointOut){
            this.graph.setMode('addEdge')
        }else{
            this.graph.setMode('moveNode')
        }
    },

};

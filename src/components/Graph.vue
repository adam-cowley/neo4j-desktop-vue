<template>
    <div id="network">
        Graph & that
    </div>
</template>

<style scoped>
#network {
    width: 100%;
    height: 500px;
    background: #fff;
    border: 1px solid #ccc;
}
</style>

<script>
/* eslint-disable */
import vis from 'vis';

export default {
    name: 'Graph',
    props: [
        'nodes', 'edges',
    ],
    methods: {
        fill() {
            var container = this.$el;
            var data = {
                nodes: this.nodes,
                edges: this.edges,
            };
            var options = {
                nodes: {
                    shape: 'dot',
                    size: 50,
                    font: {
                        size: 15,
                        color: '#ffffff'
                    },
                    borderWidth: 1
                },
                edges: {
                    width: 5
                },
                groups: {
                    entity: {
                        color: {background:'red',border:'white'},
                        shape: 'diamond'
                    },
                    officer: {
                        label: "I'm a dot!",
                        shape: 'dot',
                        color: 'cyan'
                    },
                    mints: {color:'rgb(0,255,140)'},
                    icons: {
                        shape: 'icon',
                        icon: {
                            face: 'FontAwesome',
                            code: '\uf0c0',
                            size: 50,
                            color: 'orange'
                        }
                    },
                    source: {
                        color:{border:'white'}
                    }
                }
            };
            var network = new vis.Network(container, data, options);
        }
    },
    mounted() {
        this.fill();
    }
};

window.vis = vis;
</script>
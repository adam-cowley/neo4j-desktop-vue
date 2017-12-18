<template>
    <div id="app">
        <Connect v-if="!driver" :onConnect="onConnect" />

        <section v-if="driver">
            <Navigation />

            <div class="jumbotron">
                <div class="container">
                    <h1>Duchy Watch</h1>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="form-group">
                            <textarea rows="4" class="form-control" id="query" type="text" v-model="query"></textarea>
                        </div>
                        <div class="form-group">
                            <button v-bind:disabled="loading" class="btn btn-primary" v-on:click="run">Run</button>
                            <span class="loading" v-if="loading">Loading, please wait...</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <Graph v-if="nodes.length && edges.length" :nodes="nodes" :edges="edges" />
                    </div>
                </div>
                <div class="row">
                    <!-- <pre>{{ results }}</pre>
                    <pre>{{ driver }}</pre>
                    <pre>{{ nodes }}</pre>
                    <pre>{{ edges }}</pre> -->
                </div>
            </div>
        </section>

        <!-- <router-view/> -->
    </div>
</template>

<script>
/* eslint-disable */
import Connect from '@/components/connect';
import Navigation from '@/components/Navigation';
import Graph from '@/components/Graph';

export default {
    name: 'app',
    components: {
        Connect,
        Navigation,
        Graph,
    },
    data: () => ({
        driver: false,
        loading: false,
        query: `// Ohh Duchy...
MATCH p = (a)-[r*1..5]-(b) WHERE id(a) = 87587
WITH p ORDER BY rand() limit 10
UNWIND relationships(p) as rel
RETURN startNode(rel) as start, endNode(rel) as end, rel, type(rel) as type`,
        results: []
    }),
    computed: {
        nodes() {
            const getProperties = (node) => {
                return {
                    id: parseInt(node.properties.node_id),
                    name: node.properties.name,
                    group: node.labels[0],
                };
            };

            const output = {};

            this.results.map(row => {
                const start = getProperties(row.get('start'));
                const end = getProperties(row.get('end'));

                output[ start.id ] = start;
                output[ end.id ] = end;
            });

            return Object.values(output);
        },
        edges() {
            return this.results.map(row => {
                const from = parseInt(row.get('start').properties.node_id);
                const to = parseInt(row.get('end').properties.node_id);

                return { from, to };
            })
        },
    },
    methods: {
        run() {
            this.loading = true;
            this.results = [];

            return this.$neo4j.run(this.query)
                .then(res => {
                    this.results = res.records;
                })
                .catch(e => console.log(e))
                .finally(() => {
                    this.loading = false;
                })
        },
        onConnect(driver) {
            this.driver = driver;
        },
    },
};
</script>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 40px;
    margin-bottom: 100px;
}
.loading {
    margin-left: 10px;
    display: inline-block;
    font-style: italic;
    color: #aaa;
}
</style>

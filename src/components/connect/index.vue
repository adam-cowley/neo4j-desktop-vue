<template>
    <div class="connect">
        <div class="container">
            <div class="card">
                <div class="form-group">
                    <label>Project</label>
                    <select class="form-control" v-model="currentProject">
                        <option v-for="p in projects" v-bind:value="p">{{ p.name }} ({{ p.id }})</option>
                    </select>
                </div>

                <div class="form-group" v-if="currentProject">
                    <label>Graph</label>
                    <select class="form-control" v-model="currentGraph">
                        <option  v-for="g in currentProject.graphs" v-bind:value="g">
                            {{ g.name }} ({{ g.connection.configuration.protocols.bolt.username ? g.connection.configuration.protocols.bolt.username + '@' : '' }}{{ g.connection.configuration.protocols.bolt.host }}:{{ g.connection.configuration.protocols.bolt.port }})
                        </option>
                    </select>
                </div>

                <div class="form-group" v-if="currentProject && currentGraph" >
                    <button class="btn btn-primary" v-on:click="connect()">Connect</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.connect {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20171009104439/hp-update-hero-40.jpg') no-repeat center;
    background-size: cover;
}
.connect .container {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -115px;
    margin-left: -200px;
    height: 230px;
    width: 400px;
}
.connect .container .card {
    padding: 20px;
    background: #fff;
    border-radius: 3px;
}
.connect .container .card select {
    width: 100%;
}
.connect .container .card button {
    width: 100%;
}
.connect .container .form-group:last-child {
    margin-bottom: 0;
}
</style>

<script>
export default {
    name: 'Connect',
    props: {
        onConnect: Function,
        default: () => {},
    },
    mounted() {
        return window.neo4jDesktopApi.getContext()
            .then(context => {
                this.projects = context.projects.map(project => {
                    const { id, name, graphs } = project;

                    return { id, name, graphs };
                });
            })
            .then(() => {
                this.loading = false;
            });
    },
    data() {
        return {
            connections: {},
            currentGraph: false,
            currentProject: false,
            loading: true,
            projects: {},
        };
    },
    methods: {
        connect() {
            const protocol = 'bolt';
            const encrypted = false;
            const {
                host,
                port,
                username,
                password,
            } = this.currentGraph.connection.configuration.protocols.bolt;

            this.connectNeo4j(protocol, host, port, username, password, encrypted)
                .then(driver => {
                    this.onConnect(driver);
                })
                .catch(e => {
                    alert(`Error! ${e.message}`); // eslint-disable-line
                });
        },
    },
};
</script>

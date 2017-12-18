<template>
    <vue-neo4j-connect :onConnect="onConnect" />
</template>

<style>
.vue-neo4j.connect {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20171009104439/hp-update-hero-40.jpg') no-repeat center;
    background-size: cover;
}
.vue-neo4j.connect .container {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -115px;
    margin-left: -200px;
    height: 230px;
    width: 400px;
}
.vue-neo4j.connect .container .card {
    padding: 20px;
    background: #fff;
    border-radius: 3px;
}
.vue-neo4j.connect .container .card select {
    width: 100%;
}
.vue-neo4j.connect .container .card button {
    width: 100%;
}
.vue-neo4j.connect .container .form-group:last-child {
    margin-bottom: 0;
}
</style>

<script>
export default {
    name: 'Connect',
    props: {
        onConnect: {
            type: Function,
            default: () => {},
        },
        onConnectError: {
            type: Function,
            default: console.log,
        },
    },

};
</script>

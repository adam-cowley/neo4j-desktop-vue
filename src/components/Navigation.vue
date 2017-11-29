<template>
  <nav class="navbar navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">
          Neo4j
        </router-link>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
      </div><!--/.navbar-collapse -->
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navigation',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar {
  background: #fff;
  border-bottom: 1px solid #ccc;
}

.navbar-brand {
  margin-left: 15px !important;
  background: url(https://neo4j.com/wp-content/themes/neo4jweb/assets/images/neo4j-logo-2015.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;

  height: 50px;
  width: 70px;
  text-indent: -9999px;
  margin-right: 20px;
}

.navbar-nav li a {
  color: #fff !important;
  transition: all .3s;
}
.navbar-nav li a:hover {
  color: #ccc !important;
}


</style>

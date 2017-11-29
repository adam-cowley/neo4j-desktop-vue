# graphapp

> Neo4j Desktop Graph Apps with Vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




```
mkdir graphapp && cd $_
vue init webpack

npm i
npm run dev

npm i --save neo4j-driver
```

```
These dependencies were not found:

* dns in ./node_modules/neo4j-driver/lib/v1/internal/host-name-resolvers.js
* fs in ./node_modules/neo4j-driver/lib/v1/internal/ch-node.js
* net in ./node_modules/neo4j-driver/lib/v1/internal/ch-node.js
* readline in ./node_modules/neo4j-driver/lib/v1/internal/ch-node.js
* tls in ./node_modules/neo4j-driver/lib/v1/internal/ch-node.js

To install them, you can run: npm install --save dns fs net readline tls
```

```
npm install --save dns fs net readline tls

```
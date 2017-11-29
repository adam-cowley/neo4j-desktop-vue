/* eslint-disable new-cap, no-param-reassign, no-unreachable */
// import neo4j from 'neo4j-driver';
const neo4j = require('neo4j-driver/lib/browser/neo4j-web.min.js').v1;

export default {
    driver: false,
    install(Vue) { // /*, options*/) {
        let driver;

        function connectNeo4j(protocol, host, port, username, password, encrypted = true) {
            return new Promise((resolve, reject) => {
                try {
                    const connectionString = `${protocol}://${host}:${port}`;
                    const auth = username && password ? neo4j.auth.basic(username, password) : null;

                    driver = new neo4j.driver(connectionString, auth, { encrypted });

                    resolve(driver);
                }
                catch (e) {
                    reject(e);
                }
            });
        }

        function getDriver() {
            if (!driver) {
                throw new Error('A connection has not been made to Neo4j. Call `connectNeo4j(protocol, host, port, username, password)` first');
            }
            return driver;
        }

        function getSession() {
            if (!driver) {
                throw new Error('A connection has not been made to Neo4j. Call `connectNeo4j(protocol, host, port, username, password)` first');
            }

            return driver.session();
        }

        Vue.prototype.connectNeo4j = connectNeo4j;
        Vue.prototype.getDriver = getDriver;
        Vue.prototype.getSession = getSession;
    },
};

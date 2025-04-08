const pg = require('pg');

const { Client } = pg

const client = new Client({
    user: "Paulo",
    password: "Paulo18anos!",
    host: "localhost",
    port: 5432,
    database: "api_monitor"
});

await client.connect()
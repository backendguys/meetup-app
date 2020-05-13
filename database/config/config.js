require('dotenv').config();

module.exports={
  development: {
    dialect: 'mysql',
    host:'localhost',
    username: "root",
    password: null,
    database: "meetup-app",
    operatorsAliases: false
    // "host": "127.0.0.1",
    // url: process.env.DEV_DATABASE_URL,
  },
  test: {
    dialect: 'mysql',
    host:'localhost',
    username: "root",
    password: null,
    database: "database_dev",
    operatorsAliases: false
  },
  production: {
    dialect: "postgres",
    url:process.env.DATABASE_URL,
  }
}

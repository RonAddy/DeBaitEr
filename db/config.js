const options = {
  query: (e) => {
    console.log (e.query);
  },
};

const pgp = require("pg-promise")(options);

function setDB() {
  if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV ) {
    return pgp({
      database: "debaiter_",
      port: 5432,
      host: "localhost",
    });
  }
  else if (process.env.NODE_ENV === "production") {
    return pgp(process.env.DATABASE_URL);
  };
};

const db = setDB();

module.exports = db;

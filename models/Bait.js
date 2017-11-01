const db = require('../db/config');

const Bait = {};

Bait.create = bait => {
  return db.one(`
    INSERT INTO bait
    (category, title, description, author)
    VALUES ($1, $2, $3, $4)
    RETURNING *`, [bait.category, bait.title, bait.description, bait.author]);
};

Bait.findById = (id) => {
  return db.one(
    `SELECT * FROM bait WHERE id = $1`, id
  );
};

module.exports = Bait;
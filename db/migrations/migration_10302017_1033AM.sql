DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS bait;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR NOT NULL,
  fname VARCHAR(255),
  lname VARCHAR(255)
);

CREATE TABLE bait (
  id SERIAL PRIMARY KEY,
  category VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  author VARCHAR(255) NOT NULL REFERENCES users(username)
);

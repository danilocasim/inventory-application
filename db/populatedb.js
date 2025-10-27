#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS genres (                                                  
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,                            
genre VARCHAR(255)                                                              
);     

CREATE TABLE IF NOT EXISTS book (                                                       
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,                         
bookGenre INTEGER REFERENCES genres,                                            
title VARCHAR(255)                                                              
);

INSERT INTO genres (genre)
VALUES
('Self Help'),
('Fiction'),
('Non Fiction'),
('Tech Books');

INSERT INTO book (bookgenre, title)
VALUES
(1, 'Meditation'),
(1, 'Atomic Habits'),
(1, 'The 7 Habits of Highly Effective People'),
(1, 'Deep Work'),
(1, 'The Power of Now'),
(1, 'Can’t Hurt Me'),
(1, 'The Subtle Art of Not Giving a F*ck'),
(2, 'To Kill a Mockingbird'),
(2, 'The Great Gatsby'),
(2, '1984'),
(2, 'The Catcher in the Rye'),
(2, 'Pride and Prejudice'),
(2, 'The Alchemist'),
(3, 'Noli Me Tangere'),
(3, 'El Filibusterismo'),
(3, 'Sapiens: A Brief History of Humankind'),
(3, 'Educated'),
(3, 'Becoming'),
(3, 'The Diary of a Young Girl'),
(4, 'Pattern and Design for JavaScript and React'),
(4, 'Clean Code'),
(4, 'The Pragmatic Programmer'),
(4, 'Refactoring'),
(4, 'You Don’t Know JS Yet'),
(4, 'Design Patterns: Elements of Reusable Object-Oriented Software');
`;

const { DB_NAME, DB_HOST, USERNAME, DB_PASSWORD } = process.env;

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGSSLMODE, PGCHANNELBINDING } =
  process.env;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:5432/${PGDATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

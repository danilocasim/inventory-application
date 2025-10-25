#! /usr/bin/env node

const { Client } = require("pg");

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

INSERT INTO book (bookGenre, title)
VALUES
(1,'Meditation'),
(1, 'Atomic Habits'),
(2, 'To Kill a Mockingbird'),
(4, 'Pattern and Design for JavaScript and React'),
(3, 'Noli Me Tangere');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://danilo:06092005@localhost:5432/books_management",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

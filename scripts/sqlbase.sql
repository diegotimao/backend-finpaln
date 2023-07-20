CREATE DATABASE IF NOT EXISTS finplan_api;

USE finplan_api;

-- Criando a tabela de usurs (Usuários)

CREATE TABLE IF NOT EXISTS users
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	hash_password VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);

-- Criando a tabela payments (Pagamentos)

CREATE TABLE IF NOT EXISTS payments
(
  id INT NOT NULL AUTO_INCREMENT,
  description VARCHAR(250) NOT NULL,
  price DECIMAL NOT NULL,
  expiration_date DATE NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  PRIMARY KEY(id)
);

-- Criando a tabela revanue (Receitas)

CREATE TABLE IF NOT EXISTS revenue
(
  id INT NOT NULL AUTO_INCREMENT,
  description VARCHAR(250) NOT NULL,
  price DECIMAL NOT NULL,
  expiration_date DATE NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  PRIMARY KEY (id)
 );

-- Criando a tabela lsit_shooping (Lista de compras)

CREATE TABLE IF NOT EXISTS list_shooping
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  PRIMARY KEY (id)
);


-- Criando a tabela de produtos 

CREATE TABLE IF NOT EXISTS products
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  quantity INT NOT NULL,
  list_shop_id INT NOT NULL,
  FOREIGN KEY (list_shop_id) REFERENCES list_shooping(id),
  PRIMARY KEY (id)
);

-- Inserindo dados na tabela payments (Pagamentos)

INSERT INTO payments(description, price, expiration_date, user_id)
VALUES ('Enérgia', 40.30, '2023-07-19', 1);

INSERT INTO payments (description, price, expiration_date, user_id)
VALUES ('Água', 100.00, '2023-07-15', 1);

INSERT INTO payments (description, price, expiration_date, user_id)
VALUES ('Parcela da Casa', 75.50, '2023-07-30', 1);

-- Inserindo dados na tabela revanue(Receitas)

INSERT INTO revenue (description, price, expiration_date, user_id)
VALUES ('Salário', 980.00, '2023-07-28', 1);

-- Inserindo dados na tabela list_shopping (Lista de compras)

INSERT INTO list_shooping(name, user_id)
VALUES ('Compras do mês', 1);

INSERT INTO list_shooping(name, user_id)
VALUES ('Compras da semana', 1);

-- Inserindo dados na tabela de produtos 

INSERT INTO products (name, quantity, list_shop_id)
VALUES ('Arroz', 10, 1);

INSERT INTO products (name, quantity, list_shop_id)
VALUES ('Macarrão', 2, 1);

INSERT INTO products (name, quantity, list_shop_id)
VALUES ('Feijão', 3, 1);

INSERT INTO products (name, quantity, list_shop_id)
VALUES ('Café', 2, 1);

INSERT INTO products (name, quantity, list_shop_id)
VALUES ('Frango', 2, 2);

-- Consultas de dados

SELECT * FROM users
SELECT * FROM payments WHERE user_id = 1
SELECT * FROM revenue WHERE user_id = 1
SELECT * FROM list_shooping

SELECT * FROM products

-- Buscar os produtos da lista 

SELECT DISTINCT p.*
FROM products p
JOIN list_shooping ls ON p.list_shop_id = 2
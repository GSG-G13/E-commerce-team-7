BEGIN;

DROP TABLE IF EXISTS users, products, category, cart CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    Role BOOLEAN NOT NULL DEFAULT false
);



CREATE TABLE category(
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL
);
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    image TEXT NOT NULL,
    category_id INTEGER NOT NULL REFERENCES category(id),
    description TEXT NOT NULL,
    price INTEGER NOT NULL,
    discount int NOT NULL,
    details TEXT NOT NULL
);

CREATE TABLE cart(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    product_id int NOT NULL REFERENCES products(id),
    count int NOT NULL DEFAULT 1
);


INSERT INTO category (category) VALUES 
('shoes'),
('shirt'),
('jacket'),
('trousers'),
('sweater');

INSERT INTO users (username, email, password, Role)
VALUES
('admin', 'admin@example.com', 'password', true);

INSERT INTO products (category_id, description, price, discount, details, name, image) VALUES
    (1, 'Running Shoesoij sadasd ', 50, 0.1, 'Lorem ipsum dolor sit amet', 'alaatest', 'https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg');

INSERT INTO cart (user_id, product_id) VALUES 
    (1,1);
COMMIT;
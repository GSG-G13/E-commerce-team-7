BEGIN;

INSERT INTO category (category) VALUES 
('shoes'),
('shirt'),
('jacket'),
('trousers'),
('sweater');

INSERT INTO users (username, email, password, Role)
VALUES
('admin', 'admin@example.com', 'password', true),
('user1', 'user1@example.com', 'password1', false),
('user2', 'user2@example.com', 'password2', false),
('user3', 'user3@example.com', 'password3', false),
('user4', 'user4@example.com', 'password4', false),
('user5', 'user5@example.com', 'password5', false),
('user6', 'user6@example.com', 'password6', false),
('user7', 'user7@example.com', 'password7', false),
('user8', 'user8@example.com', 'password8', false),
('user9', 'user9@example.com', 'password9', false),
('user10', 'user10@example.com', 'password10', false),
('user11', 'user11@example.com', 'password11', false),
('user12', 'user12@example.com', 'password12', false),
('user13', 'user13@example.com', 'password13', false),
('user14', 'user14@example.com', 'password14', false),
('user15', 'user15@example.com', 'password15', false),
('user16', 'user16@example.com', 'password16', false),
('user17', 'user17@example.com', 'password17', false),
('user18', 'user18@example.com', 'password18', false),
('user19', 'user19@example.com', 'password19', false),
('user20', 'user20@example.com', 'password20', false),
('user21', 'user21@example.com', 'password21', false),
('user22', 'user22@example.com', 'password22', false),
('user23', 'user23@example.com', 'password23', false),
('user24', 'user24@example.com', 'password24', false),
('user25', 'user25@example.com', 'password25', false),
('user26', 'user26@example.com', 'password26', false),
('user27', 'user27@example.com', 'password27', false),
('user28', 'user28@example.com', 'password28', false),
('user29', 'user29@example.com', 'password29', false),
('user30', 'user30@example.com', 'password30', false),
('user31', 'user31@example.com', 'password31', false),
('user32', 'user32@example.com', 'password32', false),
('user33', 'user33@example.com', 'password33', false),
('user34', 'user34@example.com', 'password34', false),
('user35', 'user35@example.com', 'password35', false);



INSERT INTO products (category_id, description, price, discount, details) VALUES
    (1, 'Running Shoes', 50, 0.1, 'Lorem ipsum dolor sit amet'),
    (1, 'Sneakers', 80, 0.2, 'Lorem ipsum dolor sit amet'),
    (1, 'Boots', 120, 0.15, 'Lorem ipsum dolor sit amet'),
    (1, 'Sandals', 60, 0.05, 'Lorem ipsum dolor sit amet'),
    (2, 'T-Shirt', 20, 0.1, 'Lorem ipsum dolor sit amet'),
    (2, 'Polo Shirt', 30, 0.15, 'Lorem ipsum dolor sit amet'),
    (2, 'Button-down Shirt', 40, 0.2, 'Lorem ipsum dolor sit amet'),
    (2, 'Long Sleeve Shirt', 35, 0.05, 'Lorem ipsum dolor sit amet'),
    (3, 'Leather Jacket', 150, 0.1, 'Lorem ipsum dolor sit amet'),
    (3, 'Denim Jacket', 100, 0.15, 'Lorem ipsum dolor sit amet'),
    (3, 'Bomber Jacket', 120, 0.2, 'Lorem ipsum dolor sit amet'),
    (3, 'Windbreaker', 90, 0.05, 'Lorem ipsum dolor sit amet'),
    (4, 'Jeans', 60, 0.1, 'Lorem ipsum dolor sit amet'),
    (4, 'Chinos', 50, 0.15, 'Lorem ipsum dolor sit amet'),
    (4, 'Cargo Pants', 70, 0.2, 'Lorem ipsum dolor sit amet'),
    (5, 'Crewneck Sweater', 70, 0.1, 'Lorem ipsum dolor sit amet'),
    (5, 'V-neck Sweater', 80, 0.15, 'Lorem ipsum dolor sit amet'),
    (5, 'Cardigan Sweater', 90, 0.2, 'Lorem ipsum dolor sit amet'),
    (5, 'Turtleneck Sweater', 75, 0.05, 'Lorem ipsum dolor sit amet');

    INSERT INTO cart (user_id, product_id) VALUES 
    (1,1),
    (1,2),
    (1,3),
    (1,4),
    (1,5),
    (1,6);

COMMIT;


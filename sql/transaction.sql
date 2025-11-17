BEGIN;

-- 1. Deduct balance from user wallet
UPDATE wallets 
SET balance = balance - 1000 
WHERE user_id = 10;

-- 2. Insert order entry
INSERT INTO orders(user_id, product_id, amount, status)
VALUES (10, 50, 1000, 'SUCCESS');

-- 3. Insert payment history
INSERT INTO payment_transactions(user_id, order_id, amount, txn_status)
VALUES (10, currval('orders_id_seq'), 1000, 'SUCCESS');

-- 4. Reduce product stock
UPDATE product_stock
SET quantity = quantity - 1
WHERE product_id = 50;

COMMIT;

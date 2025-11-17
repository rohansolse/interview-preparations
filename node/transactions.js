const { Client } = require('pg');
const client = new Client();

async function buyProduct(userId, productId, amount) {
  try {
    await client.connect();
    await client.query("BEGIN");

    // 1. Deduct wallet
    await client.query(
      "UPDATE wallets SET balance = balance - $1 WHERE user_id = $2 AND balance >= $1",
      [amount, userId]
    );

    // 2. Create order
    const order = await client.query(
      "INSERT INTO orders(user_id, product_id, amount) VALUES ($1,$2,$3) RETURNING id",
      [userId, productId, amount]
    );

    const orderId = order.rows[0].id;

    // 3. Add payment transaction entry
    await client.query(
      "INSERT INTO payment_transactions(user_id, order_id, amount, txn_status) VALUES ($1,$2,$3,'SUCCESS')",
      [userId, orderId, amount]
    );

    // 4. Reduce stock
    await client.query(
      "UPDATE product_stock SET quantity = quantity - 1 WHERE product_id = $1",
      [productId]
    );

    await client.query("COMMIT");
    return { success: true, orderId };

  } catch (error) {
    await client.query("ROLLBACK");
    console.error("TRANSACTION FAILED:", error);
    return { success: false, error };
  } finally {
    await client.end();
  }
}

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Rohan", "Sam", "Pooja"]);
    }, 1000);
  });
}

function getOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Order1", "Order2"]);
    }, 1500);
  });
}

function getCart() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Item A", "Item B"]);
    }, 500);
  });
}

async function loadDashboard() {
  try {
    const [users, orders, cart] = await Promise.all([
      getUsers(),
      getOrders(),
      getCart()
    ]);

    console.log("Users:", users);
    console.log("Orders:", orders);
    console.log("Cart:", cart);

  } catch (error) {
    console.error("Error:", error);
  }
}

loadDashboard();

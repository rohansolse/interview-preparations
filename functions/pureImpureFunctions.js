function add(a, b) {
  return a + b;
}

add(2, 3);  // always 5
add(2, 3);  // always 5
// The function `add` is a pure function because:
// 1. It always produces the same output (5) for the same inputs (2, 3).
// 2. It has no side effects (it doesn't modify any external state).

let count = 0;

function increment() {
  count++;
}
// The function `increment` is an impure function because:
// 1. It does not always produce the same output for the same inputs (no inputs here, but it changes external state).
// 2. It has side effects (it modifies the external variable `count`).


// ✅ Pure functions – Food app examples
// 1️⃣ calculateOrderTotal (pure)

// 2️⃣ getDeliveryCharge (pure)

// ❌ Impure functions – Food app examples
// 1️⃣ addItemToCart (impure – changes outer state)
// 2️⃣ placeOrder (impure – API call + localStorage)
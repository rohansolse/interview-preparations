
// ## 1. What is CORS?

// **CORS = Cross-Origin Resource Sharing**

// * It’s a **browser security mechanism**.
// * It controls **which frontend origins** (protocol + domain + port) are allowed to call your **backend APIs**.
// * Example of **different origins**:

//   * `http://localhost:4200` (Angular dev)
//   * `http://localhost:3000` (Node/React dev)
    // These are **different origins**, so browser applies CORS rules.

// Without proper CORS setup, you see errors like:

// > “Access to fetch at '[http://localhost:3000/api/](http://localhost:3000/api/)...' from origin '[http://localhost:4200](http://localhost:4200)' has been blocked by CORS policy…”

// ## 2. Why do we need CORS?

// Because of the **Same-Origin Policy**:

// * Browsers **block** JS (frontend) from making requests to a **different origin** for security reasons.
// * CORS is a way for the **server** to say:

//   > “It’s okay, I trust this origin. Allow its requests.”

// So CORS is basically:
// **Server telling the browser which origins, methods, and headers are allowed.**

// ## 3. How CORS works (high-level)

// When frontend calls an API:
// ### a) Simple request
// For simple `GET` requests with basic headers, browser may directly send the request and check response headers like:
// * `Access-Control-Allow-Origin: http://localhost:4200`
// If header matches the calling origin (or `*`), browser **allows** JS to read the response.

// ## 4. How to implement CORS in Node.js + Express
// **Step 2: Use in your Express app**


// app.js or index.js
const express = require('express');
const cors = require('cors');

const app = express();

// 1️⃣ Allow ALL origins (dev only)
app.use(cors());

// Your routes
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from API' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


// This adds CORS headers automatically:
// * `Access-Control-Allow-Origin: *`
// Your Angular app at `http://localhost:4200` can now call `http://localhost:3000/api/data`.
// ### ✅ Better (recommended): Allow only specific origins

const express = require('express');
const cors = require('cors');

const app2 = express();

const allowedOrigins = [
  'http://localhost:4200',          // Angular local
  'https://myapp-prod.com'         // Production frontend
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g. Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);     // ✅ allowed
    } else {
      callback(new Error('Not allowed by CORS'));  // ❌ blocked
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // if you use cookies / auth headers
};

app2.use(cors(corsOptions));
app2.use(express.json());

app2.get('/api/data', (req, res) => {
  res.json({ message: 'CORS configured properly 😎' });
});

app2.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
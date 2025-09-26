const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.set('trust proxy', true);

app.get('/', (req, res) => {
  res.send('Hello from the backend (Node.js app)');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running at http://0.0.0.0:${PORT}`);
});


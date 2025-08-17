const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Redirect endpoint
app.get('/redirect', (req, res) => {
  const redirectUrl = req.query.redirectTo;

  if (!redirectUrl) {
    return res.status(400).json({ error: 'Missing redirectTo parameter' });
  }

  try {
    // Validate URL
    new URL(redirectUrl);
    res.redirect(redirectUrl);
  } catch (error) {
    res.status(400).json({ error: 'Invalid URL provided' });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to URL Redirector! Use /redirect?redirectTo=URL to redirect to a specific URL.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

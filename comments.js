// Create web server
// 1. Create web server
// 2. Create route for /comments
// 3. Create route for /comment/:id

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create route for /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// 3. Create route for /comment/:id
app.get('/comment/:id', (req, res) => {
    res.send(`GET /comment/${req.params.id}`);
});

// 4. Create route for /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});

// 5. Create route for /comment/:id
app.put('/comment/:id', (req, res) => {
    res.send(`PUT /comment/${req.params.id}`);
});

// 6. Create route for /comment/:id
app.delete('/comment/:id', (req, res) => {
    res.send(`DELETE /comment/${req.params.id}`);
});

// 7. Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

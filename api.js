require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT  

app.use(express.json()); // Middleware to parse JSON bodies

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}' - ${new Date().toISOString()}`);
    next();
});

app.get('/protected', (req, res) => {
    res.send('This was logged');
});
app.get('/', (req, res) => {
  res.send('My Week Two API!')
});

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: ' 400 Missing Fields' });
    } 
    res.status(201).json({ message: `Hello ${name}!` });
    
});

app.get('/user/:id', (req, res) => {
    res.json({ id: req.params.id, name: 'Jane Doe', email: 'jane.doe@example.com' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
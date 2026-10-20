import express from 'express';

const app = express();

const PORT = 3000;

const orders = [];

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    //res.send('Pizza Time!');
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Contact View Route
app.get('/contact-us', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/contact.html`);
})

// 
app.get('/confirm-order', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/contfirm.html`);
})

// 
app.get('/menu-page', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/menu.html`);
})

app.post('/submit-order', (req, res) => {
    const order = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        method: req.body.method,
        toppings: req.body.toppings,
        size: req.body.size,
        comment: req.body.comment,
        timestamp: new Date()
      };
    console.log(order);
    
    // Add the order to orders array
    orders.push(order);
    console.log(orders);
    // Direct the user to confirm page
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
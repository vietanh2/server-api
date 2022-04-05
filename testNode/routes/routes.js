// JSON data
const users = [{
    id: 1,
    name: "viet anh",
    email: "anhnv@vgsholding.com",
},
{
    id: 2,
    name: "viet anh 2",
    email: "anhnv2@vgsholding.com",
},
];

// Router
const router = app => {
app.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API' 
    });
});

app.get('/users', (request, response) => {
    response.send(users);
});
}

// Export the router
module.exports = router;
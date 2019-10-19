const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors());

app.get('/api/v1/:clientId', (req, res) => {
    let mock_data = {
        'ClientName': 'JP Morgan Chase',
        'Email': 'jpmorgan@chase.com',
        'Address': '1000 Polaris Pkwy, Columbus, OH 43240',
        'PhoneNumber': '+16141234567',
        'TotalDebt': 525.74,
        'MonthlyPayment': 15
    }
    res.json(mock_data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// Instructions to run
// node app.js (leave up and running)
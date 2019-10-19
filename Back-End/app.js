const express = require('express')
const app = express()
const port = 3000

app.get('/api/v1/:clientId', (req, res) => {
    let mock_data = {
        'ClientName': 12,
        'Address': '1110 Polaris Parkway',
        'PhoneNumber': '+16141234567',
        'TotalDebt': 525.74,
        'MonthlyPayment': 15
    }
    res.send(mock_data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// Instructions to run
// node app.js (leave up and running)
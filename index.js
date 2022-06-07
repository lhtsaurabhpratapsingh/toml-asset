const express = require('express');
const cors = require('cors');

// require('dotenv').config();

const path = require('path');

const app = express();

const PORT =  5000;

app.use(cors());
// app.get('/.well-known/stellar.toml', (req, res, next) => {
//     const options = {
//       root: path.join(__dirname, 'public'),
//     }
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("content-type", "text/plain");
//     res.sendFile('stellar.toml', options);
//   })

//   app.get('/sep24/info',(req,res)=>{
//     res.json({
//         "deposit": {
//             "stellarTOML": {
//                 "enabled": true,
//                 "fee_fixed": 1.0
//             }
//         },
//         "withdraw": {
//             "stellarTOML": {
//                 "enabled": true,
//                 "fee_fixed": 1.0
//             }
//         },
//         "fee": {
//             "enabled": true
//         },
//         "features": {
//             "account_creation": true,
//             "claimable_balances": true
//         }
//     })
//     })
    // endpoint

    // app.get('/auth', (req,res)=>{
    //   res.json({
    //     "account":"GCX4SATKSYRTNELBFPH6Q4DC2QMFIZRPSYBBGWFGUE4PITSITZZ3D4SK",
    //     "home_domain":"stellartomll.herokuapp.com",
    //     "client_domain":""

    //   })
    // })

app.get('/', (req, res) =>{
    res.send('hello world')
})


app.listen((PORT), () => console.log(`listening on port ${PORT}`));


const express = require('express')
const app = express()
const cors = require ('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'china',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffeinated': true,
        'flavour': 'deliciousness'

    },
    'matcha': {
        'type': 'green',
        'origin': 'china',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffeinated': false,
        'flavour': 'delicious'

    },
    'unknown': {
        'type': 'unknown',
        'origin': 'Unknown',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffeinated': true,
        'flavour': 'unknown'

    }
}

app.get('/',(req,res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=> {
    const teaName = req.params.name
    if (tea[teaName]) {
        res.json(tea[teaName])
    } else {
        res.json(tea['unknown'])
    }
    res.json(tea)
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on port ${PORT}! Better go catch it!!`)
})
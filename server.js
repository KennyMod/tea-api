const express = require('express')
const app = express()
const cors = require ('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'blackTea': {
        'type': 'black',
        'origin': 'china, india',
        'waterTemp(F)': 195 - 205,
        'variety' : 'Assam tea, Earl Grey tea, Darjeeling tea, English breakfast tea',
        'steepTimeMinutes': 2 ,
        'caffeinated': true,
        'amountHot(tsp)': 1.5 ,
        'flavour': 'malty, full-bodied, strong',
        'image': 'https://cdnimg.webstaurantstore.com/images/products/large/460522/1741195.jpg'

    },
    'greenTea': {
        'type': 'green',
        'origin': 'china, japan',
        'waterTemp(F)': 175,
        'variety' : 'Matcha, Earl Sencha, Gunpowder, Dragonwell tea',
        'steepTimeMinutes': 1 ,
        'caffeinated': true,
        'amountHot(tsp)': 1.5 ,
        'flavour': 'vegetal/grassy, earthy, bright',
        'image': 'https://cdnimg.webstaurantstore.com/images/products/large/460518/1737212.jpg'

    },
    'whiteTea': {
        'type': 'white',
        'origin': 'china(Fujian province)',
        'waterTemp(F)': 175,
        'variety' : 'Silver Needle and White Peony',
        'steepTimeMinutes': 5 ,
        'caffeinated': true,
        'amountHot(tsp)': 2 ,
        'flavour': 'floral, delicate,fruity',
        'image': 'https://cdnimg.webstaurantstore.com/images/products/large/460635/1738936.jpg'
    },
    'herbalTea': {
        'type': 'herbal',
        'origin': 'china',
        'waterTemp(F)': 208,
        'variety' : 'hibuscus, chamomile, peppermint, yerba mate',
        'steepTimeMinutes': 6 ,
        'caffeinated': false,
        'amountHot(tsp)': 2 ,
        'flavour': 'delicate, fruity/herbaceous, sweet',
        'image': 'https://cdnimg.webstaurantstore.com/images/products/large/25246/2453.jpg'
    },
    'rooibosTea': {
        'type': 'rooibos',
        'origin': 'south africa',
        'waterTemp(F)': 208,
        'variety' : 'red rooibos and green rooibos',
        'steepTimeMinutes': 6 ,
        'caffeinated': false,
        'amountHot(tsp)': 2 ,
        'flavour': 'sweet, smooth, earthy',
        'image': 'https://cdnimg.webstaurantstore.com/images/products/extra_large/460591/1738825.jpg'
    },
    'oolongTea': {
        'type': 'oolong',
        'origin': 'china',
        'waterTemp(F)': 195,
        'variety' : 'Ti Kuan Yin and Dan cong',
        'steepTimeMinutes': 3 ,
        'caffeinated': true,
        'amountHot(tsp)': 1.5 ,
        'flavour': 'has a range from light but fragrant to dark and full bodied',
        'image': 'https://cdnimg.webstaurantstore.com/images/products/large/460545/1739398.jpg'
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'Unknown',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffeinated': 'N/A',
        'flavour': 'N/A'

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
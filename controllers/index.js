const Truck = require('../models/truck')

module.exports = {
    index
}

// test data
const trucks = [
    {
        coordinates: [-122.3917968, 37.77632715],
        address: '90 BROADWAY', 
        name: 'frankies',
        sells: 'hot dogs'
    },
    {
        coordinates: [-122.3996179, 37.79926011],
        address: '90 BROADWAY', 
        name: 'bobs',
        sells: 'burgers'
    },
    {
        coordinates: [-122.4583917, 37.76386403],
        address: '90 BROADWAY', 
        name: 'joes',
        sells: 'pizza'
    },
    {
        coordinates: [-122.3884823, 37.76329906],
        address: '90 BROADWAY', 
        name: 'vanessas',
        sells: 'dumplings'
    },
    {
        coordinates: [-122.4002596, 37.77687639],
        address: '90 BROADWAY', 
        name: 'petes',
        sells: 'pie'
    }   
]

async function index(req, res) {
    const allTrucks = await Truck.getAll()
    res.render('index', {title: 'Find Food Trucks', mapbox_token:process.env.MAPBOX_TOKEN, search: null, trucks:allTrucks})
}
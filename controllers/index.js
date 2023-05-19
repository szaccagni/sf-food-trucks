const Truck = require('../models/truck')

module.exports = {
    index
}

async function index(req, res) {
    const allTrucks = await Truck.getAll()
    res.render('index', {image: '/images/CURB-CUSINE-SQR.jpeg', description: 'CURB CUISINE SF', title: 'CURB CUISINE SF', mapbox_token:process.env.MAPBOX_TOKEN, search: null, trucks:allTrucks})
}
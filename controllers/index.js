const Truck = require('../models/truck')

module.exports = {
    index
}

async function index(req, res) {
    const allTrucks = await Truck.getAll()
    res.render('index', {title: 'Find Food Trucks', mapbox_token:process.env.MAPBOX_TOKEN, search: null, trucks:allTrucks})
}
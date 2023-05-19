const Truck = require('../models/truck')

module.exports = {
    index
}

async function index(req, res) {
    const allTrucks = await Truck.getAll()
    res.render('index', {image: '/images/CURB-CUISIN-SQR.png', description: 'SF CURB CUISINE', title: 'SF CURB CUISINE', mapbox_token:process.env.MAPBOX_TOKEN, search: null, trucks:allTrucks})
}
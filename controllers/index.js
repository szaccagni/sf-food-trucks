const Truck = require('../models/truck')

module.exports = {
    index, 
    foodSuggestions,
    filter,
    resetFilter,
    test
}

async function index(req, res) {
    const allTrucks = await Truck.getTrucks()
    const filter = Truck.getFilteredBy()
    res.render('index', {image: '/images/CURB-CUISIN-SQR.png', description: 'SF CURB CUISINE', title: 'SF CURB CUISINE', mapbox_token:process.env.MAPBOX_TOKEN, filter:filter, trucks:allTrucks})
}

function foodSuggestions(req, res) {
    const query = req.params.query.toLowerCase();
    // testing
    // const foodItemsArray = ['burger', 'pizza', 'pasta', 'sandwich', 'chips'];
    const foodItemsArray = Truck.getItemList()
    const matchingSuggestions = foodItemsArray.filter(item => item.toLowerCase().startsWith(query));
    res.json(matchingSuggestions);
}

async function filter(req, res) {
    const query = req.body.foodInput
    await Truck.filterTrucks(query)
    res.redirect('/')
}

function resetFilter(req, res) {
    Truck.resetFilter()
    res.redirect('/')
}

async function test(req, res) {
    // const items = Truck.getItemList()
    const filterBy = Truck.getFilteredBy()
    const trucks = await Truck.getTrucks()
    res.render('test', {image: '/images/CURB-CUISIN-SQR.png', description: 'SF CURB CUISINE', title: 'testing', trucks, filter:filterBy})
}
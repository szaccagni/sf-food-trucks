const Truck = require('../models/truck')

module.exports = {
    index, 
    foodSuggestions,
    filter,
    resetFilter
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

function filter(req, res) {
    const query = req.body.foodInput
    Truck.filterTrucks(query)
    res.redirect('/')
}

function resetFilter(req, res) {
    Truck.resetFilter()
    res.redirect('/')
}
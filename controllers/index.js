
module.exports = {
    index
}

const coordinates = [
    [-122.3917968, 37.77632715],
    [-122.3996179, 37.79926011],
    [-122.4583917, 37.76386403],
    [-122.3884823, 37.76329906],
    [-122.4002596, 37.77687639]    
]

function index(req, res) {
    res.render('index', {title: 'Find Food Trucks', mapbox_token:process.env.MAPBOX_TOKEN, search: null, coordinates:coordinates})
}
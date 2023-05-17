module.exports = {
    index
}

function index(req, res) {
    res.render('index', {title: 'Find Food Trucks', mapbox_token:process.env.MAPBOX_TOKEN})
}
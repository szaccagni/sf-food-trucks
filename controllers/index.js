
module.exports = {
    index
}

const trucks = [
    {
        coordinates: [-122.3917968, 37.77632715],
        name: 'frankies',
        sells: 'hot dogs'
    },
    {
        coordinates: [-122.3996179, 37.79926011],
        name: 'bobs',
        sells: 'burgers'
    },
    {
        coordinates: [-122.4583917, 37.76386403],
        name: 'joes',
        sells: 'pizza'
    },
    {
        coordinates: [-122.3884823, 37.76329906],
        name: 'vanessas',
        sells: 'dumplings'
    },
    {
        coordinates: [-122.4002596, 37.77687639],
        name: 'petes',
        sells: 'pie'
    }   
]

function index(req, res) {
    res.render('index', {title: 'Find Food Trucks', mapbox_token:process.env.MAPBOX_TOKEN, search: null, trucks:trucks})
}
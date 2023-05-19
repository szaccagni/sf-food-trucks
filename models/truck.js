const token = process.env.SFGOV_DATA_TOKEN
const BASE_URL = 'https://data.sfgov.org/resource/rqzj-sfat.json'

const ITEMSLIST = []
const TRUCKS = []
let FILTERED = []
let FILTERBY = null

module.exports =  {
    getTrucks,
    getItemList,
    filterTrucks,
    resetFilter,
    getFilteredBy
}

async function getTrucks() {
    if (FILTERED.length === 0) {
        const data = await fetch(BASE_URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'X-App-Token': token
            }
        })
        const response = await data.json()
        response.forEach(truck => {
            const fooditems =  truck.fooditems ? truck.fooditems.replaceAll(':', ',') : ''
            if (truck.longitude !== '0' && truck.latitude !== '0') {
                fooditems.split(',').forEach( el => {
                    if(!ITEMSLIST.includes(el.trim()) && el.trim().length < 56) ITEMSLIST.push(el.trim())
                })
            }
            cleanTruck = {
                coordinates: [truck.longitude, truck.latitude],
                address: truck.address, 
                name: truck.applicant,
                sells: fooditems ? fooditems : 'none listed'
            }
            TRUCKS.push(cleanTruck)
        })
        return TRUCKS
    } else {
        return FILTERED
    }
}

function getItemList() {
    return ITEMSLIST.map(el => {
        el.toLowerCase()
        return el.slice(0,1).toUpperCase()+el.slice(1,el.length)
      }).filter((item, index) => ITEMSLIST.indexOf(item) === index).sort()
}

function filterTrucks(term) {
    TRUCKS.forEach(el => {
        if (el.sells.includes(term)) FILTERED.push(el)
    })
    FILTERBY = term
    return
}

function resetFilter() {
    FILTERBY = null
    FILTERED = []
    return
}

function getFilteredBy() {
    return FILTERBY
}
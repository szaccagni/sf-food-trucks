const token = process.env.SFGOV_DATA_TOKEN
const BASE_URL = 'https://data.sfgov.org/resource/rqzj-sfat.json'

module.exports =  {
    getAll
}

async function getAll() {
    const data = await fetch(BASE_URL, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'X-App-Token': token
        }
    })
    const response = await data.json()
    cleanedData = []
    response.forEach(truck => {
        cleanTruck = {
            coordinates: [truck.longitude, truck.latitude],
            address: truck.address, 
            name: truck.applicant,
            sells: truck.fooditems
        }
        cleanedData.push(cleanTruck)
    })
    return cleanedData
}
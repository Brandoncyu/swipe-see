import axios from 'axios'
import {CDGtoSEA} from './CDGtoSEA'

export const delta = async () => {
  try {
    const response = await axios(`https://stage-apigateway.delta.com/NDC/v18.1/AirShopping`, {
      method: 'POST',
      headers: {
          'Authorization': `Bearer WpaYasAvJflSZlahNGrF8ozf6AlR`,
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: CDGtoSEA
    })
    return response
  } catch(e){
    return false
  }
}

export const routeHappyEcon = async () => {
  try {
    const response = await axios.get(`https://us-east-1.api.routehappy.com/legs`, {
      headers: {
          'Auth': `e5bdd88a631e4023b94263c1fae33810`,
          'Accept': 'application/vnd.api.v3+json',
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        ids: 'CDG-SEA-DL-35-20190408-ECON',
        include: 'score,segments,segments.aircraft,segments.entertainment,segments.fresh_food,segments.layout,segments.power,segments.seat,segments.wifi,segments.beverage'
      }
    })
    return response.data
  } catch(e){
    return false
  }
}

export const routeHappyPremecon = async () => {
  try {
    const response = await axios.get(`https://us-east-1.api.routehappy.com/legs`, {
      headers: {
        'Auth': `e5bdd88a631e4023b94263c1fae33810`,
        'Accept': 'application/vnd.api.v3+json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        ids: 'CDG-SEA-DL-35-20190408-PREMECON',
        include: 'score,segments,segments.aircraft,segments.entertainment,segments.fresh_food,segments.layout,segments.power,segments.seat,segments.wifi,segments.beverage'
      }
    })
    return response.data
  } catch(e){
    return false
  }
}

export const expediaSeattle = async () => {
  try {
    const response = await axios.get(`https://apim.expedia.com/x/geo/features`, {
      headers: {
        'key': `4f8ce657-ee06-4527-a8d8-4b207f8f0d62`
      },
      params: {
        'ln.op': 'cn',
        'ln.value': 'Seattle',
        type: 'multi_city_vicinity',
        verbose: '2',
        limit: '1'
      }
    })
    return response
  } catch(e){
    return false
  }
}

export const expediaSeattleHotels = async () => {
  try {
    const response = await axios.get(`https://apim.expedia.com/x/geo/features/178307/features`, {
      headers: {
        'key': `4f8ce657-ee06-4527-a8d8-4b207f8f0d62`
      },
      params: {
        within: '5km',
        type: 'hotel'
      }
    })
    return response
  } catch(e){
    return false
  }
}

export const expediaSeattlePOI = async () => {
  try {
    const response = await axios.get(`https://apim.expedia.com/x/geo/features/178307/features`, {
      headers: {
        'key': `4f8ce657-ee06-4527-a8d8-4b207f8f0d62`
      },
      params: {
        within: '5km',
        type: 'point_of_interest'
      }
    })
    return response
  } catch(e){
    return false
  }
}

export const expediaSeattleAllFeatures = async () => {
  try {
    const response = await axios.get(`https://apim.expedia.com/x/geo/features/178307/features`, {
      headers: {
        'key': `4f8ce657-ee06-4527-a8d8-4b207f8f0d62`
      },
      params: {
        location: 'Seattle'
      }
    })
    return response
  } catch(e){
    return false
  }
}

export const expediaSeattleAllEvents = async () => {
  try {
    const response = await axios.get(`https://apim.expedia.com/x/activities/search`, {
      headers: {
        'key': `4f8ce657-ee06-4527-a8d8-4b207f8f0d62`
      }
    })
    return response
  } catch(e){
    return false
  }
}

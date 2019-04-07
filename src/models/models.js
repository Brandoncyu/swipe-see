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

import axios from 'axios'

export const Apisful = axios.create({
  // We are using apisful.com as a backend for this e-commerce website
  baseURL: 'https://api.apisful.com/v1/collections/',
  headers: {
    // Put your access key here
    'X-Api-Key': '5j51NcbzG15CmlqIQP5K0SXpaL9E_qPnETbYdRf5v4A'
  },
  validateStatus (status) {
    return status >= 200 && status < 500
  }
})

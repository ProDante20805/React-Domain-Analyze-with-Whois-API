import axios from 'axios'


export const fetchAPI = async (url, method, data) =>{

  const config = {
    baseUrl: process.env.REACT_APP_URL,
    method: method
  }

  return await axios({
      ...config,
      url: `${config.baseUrl}${url}`,
      data
  }).then ( (response) => {
      return {
          status: response.status,
          data: response.data
      }
  }).catch((error) =>{
      console.log(error)
      return {
          status: error.status,
          data: error.response
      }
  })
}
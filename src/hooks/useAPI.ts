import axios from "axios";
import { IGiphyData, SafeURLSearchParams } from "../types"
import { GIPHY_API_KEY } from "../constants"

const  GIPHY_PATH = 'https://api.giphy.com/v1/gifs'

export const useAPI = () => {
    const safeURLSearchParams = (obj: SafeURLSearchParams) => Object.keys(obj).map((key) => key + '=' + obj[key]).join('&')

    const getList = async (term: string) => {
        const query = {
            api_key: GIPHY_API_KEY,
            q: term,
            limit: 25,
            offset: 0
        }
        
        const response = await axios.get(`${GIPHY_PATH}/search?${safeURLSearchParams(query)}`)

        return response.data as IGiphyData
    }

    const getTrending = async () => {
    const query = {
        api_key: GIPHY_API_KEY,
        limit: 10,
        rating: 'g'
    }
        
        const response = await axios.get(`${GIPHY_PATH}/trending?${safeURLSearchParams(query)}`)

        return response.data as IGiphyData
    }

    return {
        getList,
        getTrending,
    }
}
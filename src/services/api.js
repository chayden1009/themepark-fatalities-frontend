import axios from "axios"

export const BASE_URL="https://themepark-fatalities-backend-a274584c8c2e.herokuapp.com/"

const Client = axios.create({baseURL: BASE_URL})

export default Client
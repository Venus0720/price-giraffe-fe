import axios from 'axios'

const getSearchClosestMatch = async () => {
  const response = await axios.get('/api/v1/searchings/closest_matches')
  return response.data
}

const getPopularSearches = async () => {
  const response = await axios.get('/api/v1/searchings/popular_searches')
  return response.data
}

const searchService = { getSearchClosestMatch, getPopularSearches }

export default searchService

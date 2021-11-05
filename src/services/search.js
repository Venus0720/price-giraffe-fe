import axios from 'axios'

const getSearchClosestMatch = () => {
  const response = axios.get('/api/v1/searchings/closest_matches')
  return response.data
}

const getPopularSearches = () => {
  const response = axios.get('/api/v1/searchings/popular_searches')
  return response.data
}

const searchService = { getSearchClosestMatch, getPopularSearches }

export default searchService

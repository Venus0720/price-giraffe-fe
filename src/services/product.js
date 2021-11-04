import BaseService from "./base";

export default class ProductService extends BaseService {
  constructor() {
    super('/products')
  }

  // Alerts
  addAlert(productId) {
    return this.axios.post(`/${productId}/alerts`)
  }

  removeAlert(productId) {
    return this.axios.delete(`/${productId}/alerts`)
  }

  // Favorites
  addFavorite(productId) {
    return this.axios.post(`/${productId}/favorites`)
  }

  removeFavorite(productId) {
    return this.axios.delete(`/${productId}/favorites`)
  }
}

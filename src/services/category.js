import BaseService from "./base";

export default class CategoryService extends BaseService {
  constructor() {
    super('/categories')
  }

  async fetchAll() {
    const res = await this.fetchMany({ per_page: 100 })
    return res.data
  }

  async fetchOne(id) {
    const { categories } = await this.fetchAll()
    return categories.find(category => category.id === id)
  }
}

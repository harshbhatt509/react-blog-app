import { SELECTED_CATEGORY_STATE_CHANGE, BLOGS_STATE_CHANGE } from '../constants/index'

export function setSelectedCategory(newCategory) {
   return {
      type: SELECTED_CATEGORY_STATE_CHANGE,
      newCategory
   }
}

export function setData(data) {
   return {
      type: BLOGS_STATE_CHANGE,
      blogsData: data
   }
}
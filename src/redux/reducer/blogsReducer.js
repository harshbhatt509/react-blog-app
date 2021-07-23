import { BLOGS_STATE_CHANGE, SELECTED_CATEGORY_STATE_CHANGE } from "../constants";

const initialState = {
   blogsData: { },
   selectedCategoryBlogs: [],
   selectedCategory: null
}

export function blogsReducer(state = initialState, action) {
   switch(action.type) {
      case BLOGS_STATE_CHANGE:
         return {
            ...state,
            blogsData: action.blogsData
         }
      case SELECTED_CATEGORY_STATE_CHANGE:
         const newCategory = action.newCategory
         return {
            ...state,
            selectedCategoryBlogs: state.blogsData[newCategory],
            selectedCategory: action.newCategory
         }
      default: 
         return state
   }
}
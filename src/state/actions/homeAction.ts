import { GET_ALL_CATEGORIES, GET_CATEGORY_DETAILS, SET_ALL_CATEGORIES, SET_CATEGORY_DETAILS } from "./homeConstant";


export const fetchAllCategories = () => ({
    type: GET_ALL_CATEGORIES
});

export const setAllCategories = (categories) => ({
    type: SET_ALL_CATEGORIES,
    payload: categories,
});
export const fetchCategoryDetails = (categoryName) => ({
    type: GET_CATEGORY_DETAILS,
    payload: categoryName,
});

export const setCategoryDetails = (categoryDetails) => ({
    type: SET_CATEGORY_DETAILS,
    payload: categoryDetails,
});
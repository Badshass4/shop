import { put, all, call, takeEvery } from "redux-saga/effects";
import { GET_ALL_CATEGORIES, GET_CATEGORY_DETAILS } from "../actions/homeConstant";
import { setAllCategories, setCategoryDetails} from "../actions/homeAction";
import { invoke } from "../../utils/apiConfig";

function* fetchCategories(action) {
  try {
    let response = yield call(invoke, "categories/", {
      method: "GET",
    });
    response = yield response.json();
    yield put(setAllCategories(response.categories));
  } catch (error) {
    console.log(error);
  }
}

function* fetchCategoryDetails(action) {
  const url = `categories/${action.payload}`;
  try {
    let response = yield call(invoke, url, {
      method: "GET",
    });
    response = yield response.json();
    yield put(setCategoryDetails(response.products));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchAll() {
  yield all([
    takeEvery(GET_ALL_CATEGORIES, fetchCategories),
    takeEvery(GET_CATEGORY_DETAILS, fetchCategoryDetails)],
  );
}

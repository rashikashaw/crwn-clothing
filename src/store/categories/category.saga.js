import { takeLatest, all, call, put } from 'redux-saga/effects'
import { getCategoriesAndDocuments } from '../../Utils/Firebase/firebase.utils';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.actions';
import { CATEGORIES_ACTION_TYPES } from './category.types';


export function* fetchCategoriesAsync () {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    yield put(fetchCategoriesFailed(error))
  }
}
export function* onFetchcategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
  yield all([call(onFetchcategories)]);
}
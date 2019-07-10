// const axios = require('axios');
// import { takeLatest, put } from 'redux-saga/effects';
// import { requestFailureActionTable, requestSuccessActionTable } from '../actions/index';
// import { SEND_REQUEST_TABLE } from '../constants/index';

// function* getTableData(action) {
//     try {
//         const response = yield axios.get(action.url);
//         yield put(requestSuccessActionTable(response.status, response.data));
//     } catch (error) {
//         yield put(requestFailureActionTable(response.status, response.statusText));
//     }
// }

// export function* watchTableActions() {
//     yield takeLatest(SEND_REQUEST_TABLE, getTableData);
// }
import { createFeature, createReducer, on } from '@ngrx/store';
import { AppState, Success, appActions } from './app.actions';

const initialState: AppState<Success | Error> = {
  loading: false,
  app: null
};
const loadAppReducer = createFeature({
  name: 'app',
  reducer: createReducer(
    initialState,
    on(appActions.request, (state) => (
        console.log(state),
        { ...state, loading: true })),
    on(appActions.appSuccess, (state) => (
        console.log(state),
        { ...state, loading: false })),
    on(appActions.appError, (state) => ({ ...state, loading: false })),
)});
export const {
  name: characterKeyFeature,
  reducer: appReducer, selectApp, selectLoading } = loadAppReducer;

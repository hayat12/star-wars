import { createFeature, createReducer, on } from '@ngrx/store';
import { AppState, Success, appActions } from './app.actions';

const initialState: AppState<Success | Error> = {
    loading: false,
    app: null,
};
const loadAppReducer = createFeature({
    name: 'app',
    reducer: createReducer(
        initialState,
        on(appActions.request, (state) => ({ ...state, loading: true })),
        on(appActions.appSuccess, (state, actions) => ({
            ...state,
            loading: false,
            app: actions.success
        })),
        on(appActions.appError, (state, actions) => ({
            ...state,
            loading: false,
            app: actions.error
        }))
    ),
});
export const {
    name: characterKeyFeature,
    reducer: appReducer,
    selectApp,
    selectLoading,
} = loadAppReducer;

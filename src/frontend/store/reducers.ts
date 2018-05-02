import {combineReducers} from 'redux';
import {mainReducer} from '../reducers/main-reducer';
import {IAppState} from './model';
import { diagReducer, diagStoreRoot} from 'diagnostic-tools/frontend';

export const rootReducer = combineReducers({
  main: mainReducer,
  [diagStoreRoot]: diagReducer,
});

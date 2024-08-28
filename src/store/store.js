import { createStore } from 'redux';
import videoReducer from './reducers';

const store = createStore(videoReducer);

export default store;

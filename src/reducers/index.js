import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';
import EventReducer from './EventReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
    authorization: AuthReducer,
    profile: ProfileReducer,
    event: EventReducer,
    posts: PostReducer
})
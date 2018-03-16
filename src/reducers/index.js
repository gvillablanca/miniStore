import {combineReducers} from 'redux';
import ItemReducers from './reducer_items';
import ActiveItem from './item';

const rootReducers = combineReducers({
    items: ItemReducers,
    activeItem: ActiveItem
});

export default rootReducers;
import { createStore, compose, applyMiddleware } from 'redux';
import root from './reducers/root';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
});


export default compose(applyMiddleware(logger, thunk))(createStore)(root);

import { GET_LIST, LOADING_END, LOADING_START, UPDATE_LIST } from '../actions/types';

const INITIAL_STATE = {
  list: [],
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOADING_START:
      return {
        ...state,
        loading: action.payload,
      };


    case LOADING_END:
      return {
        ...state,
        loading: action.payload,
      };


    case UPDATE_LIST:
      const obj = action.payload;
      let arr = state.list.slice()
      arr.push(obj)

      return {
        ...state,
        list: arr,
      };


    case GET_LIST:
      return {
        ...state,
        list: action.payload,
      };


    default:
      return state;
  }
};
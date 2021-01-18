import * as constant from './actionTypes'
import { Map } from 'immutable'

const defaultState = Map({
  isSearchFocused: false,
  list: [],
  page: 1,
  totalPage: 1
})

const reducer = (prevState = defaultState, action) => {
  switch (action.type) { 
    case constant.ONFOCUS:
      return prevState.set('isSearchFocused', true)
    case constant.ONBLUR:
      return prevState.set('isSearchFocused', false)
    case constant.GETLIST:
      return prevState.set('list', action.data).set('totalPage', action.totalPage)
    default:
      return prevState;
  }
}

export default reducer
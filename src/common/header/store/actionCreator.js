import { ONFOCUS, ONBLUR, GETLIST } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data) => {
  return {
    type: GETLIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
  }
}

export const onFoucs = () => {
  return {
    type: ONFOCUS
  }
}

export const onBlur = () => {
  return {
    type: ONBLUR
  }
}

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      dispatch(changeList(res.data.data))
    }).catch((error) => {
      console.warn(error)
    })
  }
}
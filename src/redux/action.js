import axios from "axios"
import * as types from "./actionType"


export const getContactSuccess =(payload)=>{
  return {
    type:types.GET_CONTACT_SUCCESS,
    payload
  }
}

export const postSuccess =()=>{
  return {
   type: types.GET_POST_CONTACT_SUCCESS
  }
}


export const getConatct =()=>(dispatch)=>{
    dispatch({type:types.GET_CONTACT_REQUEST})
   return axios.get('http://localhost:8000/user/contacts')
   .then((res)=>{
    return dispatch(getContactSuccess(res.data))
    }).catch((err)=>{
      dispatch({type:types.GET_CONTACT_FAILURE,
      payload:err
      })
    })   
}

export const postConatct =(payload)=>(dispatch)=>{
  dispatch({type:types.GET_POST_CONTACT_REQUEST})
  return axios.post('http://localhost:8000/user/contacts',payload)
  .then((res)=>{
   return dispatch(postSuccess())
  })
  .catch((err)=>{
    console.log(err)
  })
}



export const updateContacts=(id,payloads)=>(dispatch)=>{
  dispatch({type:types.UPDATE_CONTACT_REQUEST})
  return axios.patch(`http://localhost:8000/user/contacts/${id}`,payloads)
  .then((res)=>{
   return dispatch({type:types.UPDATE_CONTACT_SUCCESS ,
   payload:res.data
})
  })
  .catch((err)=>{
     return dispatch({type:types.UPDATE_CONTACT_FAILURE})
  })
}

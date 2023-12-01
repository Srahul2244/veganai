import  * as types from "./actionType";

const initialData ={
  data:[],
  isLoading:false,
  isError:false,
}


export const reducer =(state=initialData,action)=>{

  const {type,payload} =action;
  switch (type) {
      case types.GET_CONTACT_REQUEST:
        return {
          ...state,
          isLoading: true,
         data: [],
        }
     case types.GET_CONTACT_SUCCESS:
     return {
      ...state,
      isLoading:false,
      isError:false,
      data:payload,
     }
     case types.GET_CONTACT_FAILURE:
     return{
      ...state,
      isLoading:false,
      isError:true,
      data:[]
     }
  case types.UPDATE_CONTACT_SUCCESS:
     return { 
      ...state,
      data: state.data.map(contact =>
        contact._id === action.payload._id ? action.payload : contact
      ),
      isError:false 
    };
   case types.UPDATE_CONTACT_FAILURE:
     return { 
      ...state,
       isError:true,
       };



    default:
    return state;
  }
}
export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_NUMBER="CLEAR_NUMBER"
export const MEMORY_ADD="MEMORY_ADD"
export const MEMORY_CLEAR="MEMORY_CLEAR"
export const MEMORY_RECALL="MEMORY_RECALL"

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: Number(number)  });
}

export const clearNumber=()=>{
  return({type:CLEAR_NUMBER})
}

export const addMemory=()=>{
  return ({type:MEMORY_ADD})
}

export const clearMemory=()=>{
  return({type:MEMORY_CLEAR})
}

export const recallMemory=()=>{
  return({type:MEMORY_RECALL})
}
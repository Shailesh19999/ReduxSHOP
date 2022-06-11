export const ADD=(item)=>{
    return{
        type: "ADD_CART",
        payload:item
    }
}
export const DLT=(id)=>{
    return{
        type: "RMV_CARD",
        payload:id
    }
}
// remove indiv

export const REMOVE=(item)=>{
    return{
        type: "RMV_ONE",
        payload:item
    }
}
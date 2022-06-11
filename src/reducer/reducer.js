const INIT_STATE={
    carts:[],
}
export const cartreducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
            const itemIndex= state.carts.findIndex((item)=> item.id=== action.payload.id);
            if( itemIndex>=0){
                state.carts[ itemIndex].quantity +=1
            }
            else{
                const temp = {...action.payload,quantity:1}
                    return{
                        ...state,
                        carts:[...state.carts,temp]
                    }
                
            }
            // return{
            //     ...state,
            //     carts:[...state.carts,action.payload]
            // }


            case "RMV_CARD":
                const data = state.carts.filter((el)=>{
                    return el.id !== action.payload;
                })
                return{
                    ...state, 
                    carts: data
                }
                case "RMV_ONE":
                const itemIndex_dec= state.carts.findIndex((item)=> item.id=== action.payload.id);
                if(state.carts[itemIndex_dec].quantity>=2){
                     state.carts[itemIndex_dec].quantity -= 1
                    return{
                        ...state,
                        carts:[...state.carts]
                    }
                }
            default:
                return state
        
    }
}
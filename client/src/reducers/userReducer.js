export const initialState = null

export const reducer = (state,action)=>{
    if(action.type==="USER"){
        return action.payload
    }
    if(action.type==="CLEAR"){
        return null
    }
    if(action.type=="Update"){
        return {
            ...state,
            follower: action.payload.followers,
            following:action.payload.following
        }
    }
    return state
}
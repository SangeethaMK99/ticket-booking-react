
import { SIGNIN,SIGNOUT } from './authType'

export const signIn=()=>{
    return{
        type:SIGNIN
    }
}
export const signOut=()=>{
    return{
        type:SIGNOUT
    }
}


type AuthReducerActionType = setAuthUserDataACType
// const AuthReducerActionType =
type initialStateType = {
    id: null | number ,
    login: null | string,
    email: null | string
    isAuth:boolean
}
const initialState = {
    id: null ,
    login: null,
    email: null,
    isAuth:false
}

const authReducer = (state: initialStateType = initialState, action: AuthReducerActionType): initialStateType => {


    switch (action.type) {

        case "SET-USER-DATA":

            return {
                ...state,
                ...action.data,
                isAuth:true

            }
        default:
            return state
    }
}
type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (id:null, login:string, email:string) => {

    return {
        type: 'SET-USER-DATA',
        data: {
            id, login, email
        }
    } as const
}

export default authReducer

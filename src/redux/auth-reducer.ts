type AuthReducerActionType = setAuthUserDataACType | SetIsAuthType | logoutACType
// const AuthReducerActionType =
type initialStateType = {
    id: null | number,
    login: null | string,
    email: null | string
    isAuth: boolean
}
const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state: initialStateType = initialState, action: AuthReducerActionType): initialStateType => {
    switch (action.type) {
        case "SET-AUTH-DATA":

            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case "SET-ISAUTH":
            return {...state, isAuth: action.isAuth}
        case "LOGOUT":
            return {id: null, email: null, login: null, isAuth: false}
        default:
            return state
    }
}
type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (id: number, login: string, email: string) => {

    return {
        type: 'SET-AUTH-DATA',
        data: {
            id, login, email
        }
    } as const
}
type SetIsAuthType = ReturnType<typeof setIsAuthAC>
export const setIsAuthAC = (isAuth:boolean) => {
    return {
        type: 'SET-ISAUTH',
        isAuth
    } as const
}
type logoutACType = ReturnType<typeof logoutAC>
export const logoutAC = () => {
    return {
        type: 'LOGOUT'
    } as const
}


export default authReducer

type AppReducerActionType = setAuthUserDataACType
// const AuthReducerActionType =
type initialStateType = typeof initialState
const initialState = {
    isInitialized:false
}

export const appReducer = (state: initialStateType = initialState, action: AppReducerActionType): initialStateType => {
    switch (action.type) {
        case "SET-APP-INIT-STATUS":
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}
type setAuthUserDataACType = ReturnType<typeof setAppInitializedStatus>
export const setAppInitializedStatus = (isInitialized:boolean) => {
    return {
        type: 'SET-APP-INIT-STATUS',
        isInitialized
    } as const
}
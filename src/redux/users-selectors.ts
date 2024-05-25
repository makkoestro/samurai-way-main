import {AppRootStateType} from "redux/store";
import {createSelector} from "reselect";

export const getUsers = createSelector(

    [(state: AppRootStateType) => state.usersPage.users],
    users => {
        console.log('USERS')
        return users.filter(el => true)
    }
)
export const getPageSize = (state:AppRootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalCount = (state:AppRootStateType) => {
    return state.usersPage.totalCount
}
export const getPage = createSelector(
    [(state: AppRootStateType) => state.usersPage.Page],
    Page => Page
)
export const getPage_ = (state:AppRootStateType) => {
    return state.usersPage.Page
}
export const getIsFetching = (state:AppRootStateType) => {
    return state.usersPage.isFetching
}
export const getPortionSize = (state:AppRootStateType) => {
    return state.usersPage.portionSize
}

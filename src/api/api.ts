import axios from "axios";
import {ProfileUserResponseType, ProfileUserType} from "../redux/profile-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'df76ac7a-b95d-4748-a798-8ee5c154d07a'
    }

})
type LoginType = {
    email:string
    password: string
    rememberMe:boolean
}
export type setFollowStatusType = ReturnType<typeof userApi.setFollowStatus>
export type setUnfollowStatusType = ReturnType<typeof userApi.setUnfollowStatus>
export const userApi = {
    getUsers(pageSize: number, Page: number) {
        return instance.get(`users?count=${pageSize}&page=${Page}`)
    },
    setFollowStatus(userId:number) {
        return instance.post<ResponseType>(`follow/${userId}`)
    },
    setUnfollowStatus(userId:number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    }
}
export const authApi = {
    getAuthData() {
        return instance.get(`auth/me`)
    },
    login(loginData:LoginType) {
        return instance.post<ResponseType>(`auth/login`, loginData)
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
    }
}
export const profileApi = {
    getProfileData(userId:number) {
        return instance.get<ProfileUserResponseType>(`profile/${userId}`)
    },
    getStatus(userId:number) {
        return instance.get<any>(`profile/status/${userId}`)
    },
    updStatus(status:string) {
        return instance.put<ResponseType>(`profile/status/`, {status})
    }
}
type ResponseType<T = {}> = {
    resultCode: number
    messages: string[],
    fieldsErrors: [],
    data:T
}
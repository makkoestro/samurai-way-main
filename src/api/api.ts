import axios from "axios";
import {ProfileUserResponseType, ProfileUserType} from "../redux/profile-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'df76ac7a-b95d-4748-a798-8ee5c154d07a'
    }

})
export const userApi = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    setFollowStatus(userId:number) {
        return instance.post(`follow/${userId}`)
    },
    setUnfollowStatus(userId:number) {
        return instance.delete(`follow/${userId}`)
    }
}
export const authApi = {
    getAuthData() {
        return instance.get(`auth/me`)
    }
}
export const profileApi = {
    getProfileData(userId:string) {
        return instance.get<ProfileUserResponseType>(`profile/${userId}`)
    },
    getStatus(userId:string) {
        return instance.get<any>(`profile/status/${userId}`)
    },
    updStatus(status:string) {
        return instance.put<ResponseType>(`profile/status/`, {status})
    }
}
type ResponseType<T = {}> = {
    resultCode: number
    messages: string[],
    data:T
}
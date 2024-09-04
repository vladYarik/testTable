import { IGetUsersReq, IGetUsersRes, IUser } from "../types";
import { mainApi } from "./mainApi";


export const tableApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<IGetUsersRes,IGetUsersReq>({
            query({limit,skip}){
                return {
                    url:`users?limit=${limit}&skip=${skip}`,
                    credentials:"omit"
                }
            },
            providesTags(result) {
                let id = 0
                if(result?.limit && result?.skip){
                    id = (result?.skip + result?.limit)/result?.limit
                }
             
                return [{type:'Users',id:id-1}]
            },
        }),
    }),
    overrideExisting:false
})

export const {useGetUsersQuery} = tableApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from "../../consts/URLS";


export const mainApi = createApi({
    reducerPath: '',
    baseQuery:fetchBaseQuery({baseUrl: API_URL}),
    tagTypes:['Users'],
    endpoints:(builder) => ({
        test: builder.query({
            query(){
                return{
                    url:'',
                };
            },
        }),
    }),
});
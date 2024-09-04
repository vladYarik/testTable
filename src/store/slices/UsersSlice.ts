import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../index"



interface IUsersSlice{
   
    limit:number
}

const initialState:IUsersSlice = {
    
    limit:9
}

export const usersSlice = createSlice({
    name:'usersSlice',
    initialState,
    reducers:{
        
    }
})

export const {} = usersSlice.actions

export const selectUsersTableLimit = (state:RootState) => state.users.limit

export default usersSlice.reducer
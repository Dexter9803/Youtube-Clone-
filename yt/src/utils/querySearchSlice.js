import { createSlice } from "@reduxjs/toolkit";

const querySearchSlice = createSlice({
    name: "query",
    initialState: "",
    reducers: {
        setSearchQuery : (state,action) => {
            state = action.payload
        }
    }
})

export const {setSearchQuery} = querySearchSlice.actions
export default querySearchSlice.reducer
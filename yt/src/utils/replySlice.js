import { createSlice } from "@reduxjs/toolkit";

const replySlice = createSlice({
    name: "reply",
    initialState: {
        showReplies: false
    },
    reducers: {
        replyToggle: (state) => {
            state.showReplies = !state.showReplies;
        }
    }
}) 

export const {replyToggle} = replySlice.actions
export default replySlice.reducer
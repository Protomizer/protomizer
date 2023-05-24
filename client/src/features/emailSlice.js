import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    email: '',
    loading: false,
    message: '',
    type: '',
}



export const createEmail = createAsyncThunk('createEmail', async(email, thunkAPI) => {
    try {
        const {data} = await axios.post('/api/v1/email/createEmail', {email})
        return data
        //Success Msg
    } catch (error) {
       return thunkAPI.rejectWithValue(error.response.data.msg);
       //Error Msg
    }
})



const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        updateEmail: (state, action) => {
            state.email = action.payload
        },

         clearMessage: (state, action) => {
            state.message = ''
            state.type = ''
         }
    }, 

    extraReducers: {
    [createEmail.pending]: (state, action) => {
        state.loading = true
    },

    [createEmail.fulfilled]: (state, action) => {
        state.loading = false
        state.message = action.payload.msg
        state.type = 'success'
        state.email = ''
    },

    [createEmail.rejected]: (state, action) => {
        state.loading = false
        state.message = action.payload
        state.type = 'rejected'
    },
    }
})

export const {updateEmail, clearMessage} = emailSlice.actions
export default emailSlice.reducer;
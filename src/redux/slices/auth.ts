import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IInitialState } from "../../types/IinitialState"

const initialState: IInitialState = {
    user: null,
    isLogged: false
}

const AuthUser = createSlice({
    name: 'AuthUser',
    initialState,

    reducers:{
        setLogin: (state, action: PayloadAction<string>) => {
            state.user = action.payload
            state.isLogged = true
        },

        setLogout:(state) => {
            state.user = null
            state.isLogged = false
        }
    }
})

export const { setLogin, setLogout } = AuthUser.actions
export default AuthUser.reducer

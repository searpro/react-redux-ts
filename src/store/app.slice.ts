import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

/**
 * Interface for the application state. 
 * Keeping it here as it will make it easer to add new fields when the application grows. 
 */
interface AppState {
	user: any,
	error: { message: string; action: string },
	loading: EndpointLoadingType,
}

/**
 * Specify the properties which will be present in the state.
 */
const initialState: AppState = {
	user: {},
	error: { message: '', action: '' },
	loading: {} as EndpointLoadingType,
}

/**
 * When adding new properties in state, add the reducers here. 
 */
const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<AppState["loading"]>) => {
			for (const key in action.payload) {
				state.loading[key] = action.payload[key];
			}
		},
		setUser: (state, action: PayloadAction<any>) => {
			state.user = action.payload;
		},
		setError: (state, action: PayloadAction<AppState["error"]>) => {
			state.error = action.payload;
		}
	}
})

//export the setters. 
export const {
	setLoading,
	setUser,
	setError
} = appSlice.actions;

//export the selectors. 
export const selectLoading = (state: RootState) => state.app.loading;
export const selectUser = (state: RootState) => state.app.user;
export const selectError = (state: RootState) => state.app.error;

export default appSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movie",
    initialState:{
        currentlyPlayingMovies:null,
        trailer:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.currentlyPlayingMovies=action.payload;
        },
        addtrailer:(state,action)=>{
            state.trailer=action.payload;
        }
    }
});
export const {addNowPlayingMovies,addtrailer} = moviesSlice.actions;
export default moviesSlice.reducer;
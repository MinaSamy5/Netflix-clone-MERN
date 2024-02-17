import {
    configureStore,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit"
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";
import axios from "axios";

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async()=>{
    const {data:{genres}} = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    return genres;
    
});

const getRawData = (api,genres,paging)=>{} 

export const fetchMovies = createAsyncThunk("netflix/trending", async({type},thunkApi)=>{
    const {netflix:{genres}} = thunkApi.getState();
    return getRawData(`${TMDB_BASE_URL}/discover/${type}?`)
});


const NetflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action)=>{
        state.genres = action.payload;
        state.genresLoaded = true;
    });
},
});

export const store = configureStore({
    reducer:{
        neflix: NetflixSlice.reducer,
    },
});

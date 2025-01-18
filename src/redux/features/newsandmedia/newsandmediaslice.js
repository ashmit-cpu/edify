import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";
// Define the async thunk for fetching data
export const fetchitem = createAsyncThunk('newsandmedia/fetchitem', async () => {
    // Perform your API fetch here
    const query = {
        populate: [
            'image',
        ],
        //sort: ["Date:desc"]
        //   pagination: {
        //     pageSize: resultsPerPage,
        //     page: currentPage
        //   },
        //   fields: ['title'],
        // publicationState: 'live',
        // locale: ['en'],
        //  publicationState: published ? "live" : "preview"
    };
    const queryString = qs.stringify(query, {
        encodeValuesOnly: true,
    });
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/news-and-medias/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);
    const response = await axios.get(endpoint);
    const data = response.data.data
    return data;
});
// Create the data slice
const newsandmediaslice = createSlice({
    name: 'newsandmedia',
    initialState: {
        status: 'idle',
        data: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchitem.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchitem.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchitem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});
export default newsandmediaslice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";
// Define the async thunk for fetching data
export const fetchBLogs = createAsyncThunk('careers/fetchBlogs', async () => {
    // Perform your API fetch here
    const query = {
        populate: [
                ' ', 'seo' , 'seo.metaSocial' ,'seo.metaimage' , 'seo.image' , 'seo.schema' ,, 'seo' ,"seo.metaImage", "seo.schema", , 'seo.metaSocial' ,'seo.metaSocial.image'
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
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/blogs/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);
    const response = await axios.get(endpoint);
    const data = response.data.data
    return data;
});
// Create the data slice
const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        status: 'idle',
        data: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBLogs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBLogs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchBLogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});
export default blogSlice.reducer;
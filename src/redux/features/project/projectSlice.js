import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";
// Define the async thunk for fetching data
export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    // Perform your API fetch here
    const query = {
        populate: [
            'projectTitle','slug','sequenceNo' , 'projectBanner' , 'projectBanner.webBanner' , 'projectBanner.mobileBanner' , 'projectOverview' , 'projectOverview.overviewImage' , 'projectAmenities' , 'projectAmenities.amenitieslist' , 'projectAmenities.amenitieslist.icon' , 'amenitieslist.title' , 'amenitieslist.icon' , 'projectLocation' , 'mapItem' , 'mapItem.sublist' , 'projectGallery' , 'projectGallery.galleryItem'  , 'projectGallery.galleryItem.images', 'ProjectStatus' , 'projectCategory' , 'projectimage' 
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
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/projects/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);
    const response = await axios.get(endpoint);
    const data = response.data.data
    return data;
});
// Create the data slice
const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        status: 'idle',
        data: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});
export default projectSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import qs from "qs";
// Define the async thunk for fetching data
export const fetchTestimonial = createAsyncThunk('testimonial/fetchtestimonial', async () => {
    // Perform your API fetch here
    const query = {
        populate: [
            'Testimonial.Title',
            'Testimonial.subTitle',
            'Testimonial.videoTestimonial.videoLink',
            'Testimonial.videoTestimonial.Name',
            'Testimonial.videoTestimonial.organisation',
            'Testimonial.videoTestimonial.videothumbnail',
            'Testimonial.TestimonialText.Name',
            'Testimonial.TestimonialText.organisation',
            'Testimonial.TestimonialText.Content',
            'Testimonial.TestimonialText.image',

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
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/testimonial/?${queryString}`;
    // console.log(`Final url: ${endpoint}`);
    const response = await axios.get(endpoint);
    const data = response.data.data
    return data;
});
// Create the data slice
const testimonialSlice = createSlice({
    name: 'testimonial',
    initialState: {
        status: 'idle',
        data: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTestimonial.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTestimonial.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchTestimonial.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});
export default testimonialSlice.reducer;
import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './features/project/projectSlice'
import careerReducer from './features/career/OpeingSlice'
import newsandmediareducer from './features/newsandmedia/newsandmediaslice'
import blogreducer from './features/blog/blogSlice'
import seoreducer from './features/seoSlice'
import eventreducer from './features/event/eventSlice'
import testimonialreducer from './features/Testimonial/testimonialSlice'
export const store = configureStore({
    reducer: {
        projects: projectReducer,
        career: careerReducer,
        newsandmedia: newsandmediareducer,
        events: eventreducer,
        blogs: blogreducer,
        seo:seoreducer,
        testimonial:testimonialreducer
    },
})
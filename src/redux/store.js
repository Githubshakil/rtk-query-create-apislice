import { configureStore } from '@reduxjs/toolkit'
import postsApi from './services/posts/postApi'


const store = configureStore({
    reducer:{
        [postsApi.reducerPath]: postsApi.reducer
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})

export default store
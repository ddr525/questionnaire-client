import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Posts } from './post.interface'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getQuestions: builder.query<Posts[], null>({
            query: () => `posts`,
        }),
    }),
})

export const {useGetQuestionsQuery, useLazyGetQuestionsQuery, usePrefetch} = postApi
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { useGetQuestionsQuery } from '../../features/posts/post.api';

import questionnaireStyles from './Questionnaire.module.scss'

type Props = {}

const stringLimit = (string: string) => string.substring(0, 10).concat('...')

const Questionnaire = (props: Props) => {

    const { data, isSuccess } = useGetQuestionsQuery(null)

    return (
        <>
            <Link to={'another'}>Another</Link>
            <ul className={questionnaireStyles.question}>
                {isSuccess && data.map(post => <li key={post.id}>id: {post.id} user id:{post.userId} post: {post.title} --- {stringLimit(post.body)}</li>)}
            </ul>
        </>
    )
}

export default Questionnaire
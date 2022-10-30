import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Header from '../components/Header/Header';
import Questionnaire from '../components/QuestionnaireList/Questionnaire';
import { useGetQuestionsQuery } from '../features/posts/post.api';

import styleMain from './Home.module.scss'

type Props = {}

interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const stringLimit = (string: string) => string.substring(0, 10).concat('...')

const testData = [
    {
        id: 1,
        title: "Опрос 1",
        type: "yesno",
        description: "Тестовый опрос для проверки",
    },
    {
        id: 2,
        title: "Опрос 2",
        type: "yesno",
        description: "Тестовый опрос для проверки",
    },
    {
        id: 3,
        title: "Опрос 3",
        type: "yesno",
        description: "Тестовый опрос для проверки",
    },
    {
        id: 4,
        title: "Опрос 4",
        type: "yesno",
        description: "Тестовый опрос для проверки",
    },
    {
        id: 5,
        title: "Опрос 5",
        type: "yesno",
        description: "Тестовый опрос для проверки",
    },
    {
        id: 1,
        title: "Опрос 1",
        type: "yesno",
        description: "Тестовый опрос для проверки",
    },
    {
        id: 2,
        title: "Опрос 2",
        type: "yesno",
        description: "Тестовый опрос для проверки",
    },
    {
        id: 3,
        title: "Опрос 3",
        type: "yesno",
        description: "Тестовый опрос для проверки",
    },
    {
        id: 4,
        title: "Опрос 4",
        type: "yesno",
        description: "Тестовый опрос для проверки",
    },
    {
        id: 5,
        title: "Опрос 5",
        type: "yesno",
        description: "Тестовый опрос для проверки",
    },
]

const Home = (props: Props) => {


    return (
        <div className={styleMain.wrapper}>
            <Header />
            <main>
                <div className={styleMain.content__list}>
                    {testData.map(data =>
                        <div key={data.id} className={styleMain.content__block}>
                            <a href="/" className={styleMain.content}>
                                <p className="type">{data.type}</p>
                                <p className="title">{data.title}</p>
                                <p className="description">{data.description}</p>
                                </a>
                        </div>
                    )}
                </div>
            </main>
            {/* <Questionnaire /> */}
        </div>
    )
}
// [...Array(10).keys()]

export default Home
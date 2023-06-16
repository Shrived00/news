import React from 'react'
import './NewsContent.css'
import { Container } from '@mui/material'
import NewsCard from '../NewsCard/NewsCard'



const NewsContent = ({ newsArray, newsResults, loadmore, setLoadmore }) => {
    return (
        <Container maxWidth='md' >
            <div className="content">

                <div className="downloadMessage">
                    <span className='downloadText'>For best experience use inshorts moblie application.</span>
                    <img alt='..' height='40' src='https://assets.inshorts.com/website_assets/images/appstore.png' />
                    <img alt='..' height='40' src='https://assets.inshorts.com/website_assets/images/playstore.png' />
                </div>
                {
                    newsArray.map((newsItem) => (
                        <NewsCard newsItem={newsItem} key={newsItem.title} />
                    ))
                }



                {
                    loadmore <= newsResults && (
                        <>
                            <hr />

                            <button className='loadMore' onClick={() => setLoadmore(loadmore + 20)}>
                                Load More
                            </button>
                        </>
                    )
                }


            </div>

        </Container>
    )
}

export default NewsContent

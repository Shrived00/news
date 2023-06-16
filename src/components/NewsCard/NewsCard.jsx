import React from 'react'
import './NewsCard.css'

const NewsCard = ({ newsItem }) => {
    const fulldate = new Date(newsItem.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
    var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
    const hour = parseInt(date[4].substring(0, 2)); //
    const time = hour > 12 ? true : false;

    return (
        <div className='newsCard'>
            <img alt='...'
                src={newsItem.urlToImage ? newsItem.urlToImage : 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'} className='newsImage' />

            <div className="newsText">
                <div className="">
                    <span className='title'>{newsItem.title}</span>
                    <span className='author' style={{ textDecoration: 'underline' }} />
                    <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                        <b > short</b>
                    </a>{" "}
                    <span className="muted">
                        {" "}
                        by {newsItem.author ? newsItem.author : "unknown"} /{" "}
                        {time
                            ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                            : `${hour}:${date[4].substring(3, 5)} am`}{" "}
                        on {date[2]} {date[1]} {date[3]}, {date[0]}
                    </span>
                </div>
                <div className="lowerNewsText">
                    <div className="description">
                        {newsItem.description}
                    </div>
                    <span className="readmore">
                        read more at {newsItem.source.name}
                    </span>
                </div>
            </div>
        </div >
    )
}

export default NewsCard

import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spiner from './Spiner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props){

    const [articles,setArticles] = useState([]);
    const [page,setPage] = useState(1);
    const [totalResults,setTotalResults] = useState(0);
    const [loading,setLoading] = useState(false);

    const capital = (str)=>{
   return str.charAt(0).toUpperCase()+str.slice(1);
  }
 
    document.title =`${capital(props.category)}  | New For You Only`
  

   const updateData = async ()=>{ 
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}`;
    setLoading(true);
    const data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    // this.setState(parseData);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(()=>{
  updateData();
  // eslint-disable-next-line 
  },[]);
 

 const fetchMoreData = async () => {
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}`;
   setPage(page + 1);
    const data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults);    
};

    return (
      <>
        <h2 style={{color: "floralwhite",textAlign:"center" ,marginTop:"90px"}}> News Only For you  :  Top Headlines of {capital(props.category)} </h2>
       {loading && <Spiner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={ <Spiner/>}
        >
        <div className="container">
        <div className="row">
          {articles.map((news) => {
            return (
              <div className="col-md-4" key={news.url}>
                <NewsItem
                  title={news.title}
                  description={news.description}
                  imgUrl={news.urlToImage}
                  newsUrl={news.url}
                  dateTime={news.publishedAt}
                  author={news.author}
                  source= {news.source.name}
                />
              </div>
            );
          })}
          </div>
        </div>
          </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark " style={{backgroundColor :"#8425b5"}} onClick={this.prevClicked}> &larr; Previous</button>
        <button type="button"   disabled={this.state.page + 1>Math.ceil(this.state.totalResults/props.pageSize)} className= "btn btn-dark "  style={{backgroundColor :"#8425b5"}}  onClick={this.nextClicked}> &rarr; Next</button>
         </div> */}
          
      </>
    );


}
News.defaultProp = {
  country: "in",
  pageSize: 8,
  category: 'general',
  
}
News.propTypes = {
 country :PropTypes.string,
 pageSize: PropTypes.number,
 category:PropTypes.string,

}


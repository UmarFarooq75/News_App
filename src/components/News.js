import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    if (this.props.category === "general") {
      document.title = "NewsMonkey - Get Daily News | Best News ";
    } else {
      document.title =
        this.capitalizeFirstLetter(this.props.category) +
        " - Get Daily News | Best News ";
    }
  }

  async updatenews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(60);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updatenews();
  }

  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        page: this.state.page + 1,
      });
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
  };

  // handleNextClick = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updatenews();
  // };
  // handlePreviouseClick = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updatenews();
  // };

  //capitalFirstLetter
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    return (
      <>
        <div className="heading">
          <h2>
            NewsMonkey - Top
            {" " + this.capitalizeFirstLetter(this.props.category)} HeadLines
          </h2>
        </div>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-4">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 50) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 120)
                          : ""
                      }
                      imageurl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://www.hollywoodreporter.com/wp-content/uploads/2022/09/Bassam-Tariq-Getty-H-2022.jpg?w=1296&h=730&crop=1"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="containerbtn">
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-sm btn-dark"
              onClick={this.handlePreviouseClick}
            >
              &larr; Previuse
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 >=
                Math.ceil(this.state.totalResults / this.props.pagesize)
              }
              className="btn btn-sm btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div> */}
      </>
    );
  }
}

export default News;

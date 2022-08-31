import axios from "axios";
import React, { useState } from "react";


const FetchNews = () => {
  const [news, setNews] = useState([]);

  const fetchnews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=72bf93f2c546453ab4f22e363a0cb248"
      )
      .then((response) => {
        setNews(response.data.articles);
      });
  };

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-1">
            <button className="btn btn-primary my-3" onClick={fetchnews}>
              FetchNews
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {news.map((value) => {
            return (
              <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={value.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">
                     {value.description}
                    </p>
                    <a href={value.url} className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchNews;

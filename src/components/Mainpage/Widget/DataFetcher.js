import React, { useState, useEffect } from 'react';
import './datafetcher.css'

function DataFetcher({ category }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://newsdata.io/api/1/news?apikey=pub_185599643edf1c57b763aec7bf762cff48299&language=en&country=us&category='+ category.toLowerCase())
      .then(response => response.json())
      .then(data => setData(data.results[0]))
      .catch(error => console.error(error));
  }, []);

  const type = category;
  const title = data.title;
  const link = data.link;


  //forrmating the data into blocks
  return (
    <div>
        <div className='block'>
          <p className="type">{type}</p>
          <p className="title">{title}</p>
          <a href={link} className="fill-div"></a>
        </div>
    </div>
  );
}

export default DataFetcher;

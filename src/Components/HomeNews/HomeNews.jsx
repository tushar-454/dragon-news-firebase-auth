import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleNews from './SingleNews';

const HomeNews = () => {
  const news = useLoaderData();
  const [displayNews, setDisplayNews] = useState(news);
  const { id } = useParams();
  useEffect(() => {
    if (id === '0' || id === undefined) {
      setDisplayNews(news);
      return;
    }
    const filter = news.filter((news) => news.category_id === id);
    console.log(id);
    setDisplayNews(filter);
  }, [news, id]);
  console.log(displayNews);
  return (
    <div>
      <h1 className='text-xl font-semibold mb-10'>Dragon News Home</h1>
      <div>
        {displayNews.map((sn, index) => (
          <SingleNews key={index} sn={sn} />
        ))}
      </div>
    </div>
  );
};

export default HomeNews;

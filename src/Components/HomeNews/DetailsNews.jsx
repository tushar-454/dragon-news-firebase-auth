import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const DetailsNews = () => {
  const news = useLoaderData();
  const { newsId } = useParams();
  const _idNews = news.filter((viewNews) => viewNews._id === newsId);
  const { title, image_url, details } = _idNews[0];
  console.log(news);
  return (
    <div className='border rounded-md space-y-4 p-2'>
      <img src={image_url} className='w-full' />
      <h1 className='text-2xl font-semibold'>{title}</h1>
      <p>{details}</p>
    </div>
  );
};

DetailsNews.propTypes = {
  children: PropTypes.node,
};

export default DetailsNews;

import PropTypes from 'prop-types';
import { BsBookmark } from 'react-icons/bs';
import Rating from 'react-rating';
const SingleNews = ({ sn }) => {
  const { author, title, rating, image_url, details, total_view } = sn;
  return (
    <div className='mb-10 space-y-2 border rounded'>
      <div className='author flex justify-between items-center bg-gray-100'>
        <div className='flex gap-2 p-2 items-center'>
          <img src={author.img} className='w-[60px] rounded-full' />
          <div>
            <p>{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div>
          <BsBookmark />
        </div>
      </div>
      <h1 className='text-xl font-semibold p-2'>{title}</h1>
      <img src={image_url} className='w-full p-2' />
      <p className='px-2'>{`${details.slice(0, 300)} ...`}</p>
      <p className='text-[#FF8C47] px-2'>Read More</p>
      <hr className='p-2' />
      <div className='flex items-center justify-between p-2'>
        <div className='rating flex gap-2 items-center'>
          <Rating
            initialRating={rating.number}
            emptySymbol={
              <svg
                stroke='currentColor'
                fill='#FF8C47'
                strokeWidth='0'
                viewBox='0 0 1024 1024'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z'></path>
              </svg>
            }
            fullSymbol={
              <svg
                stroke='currentColor'
                fill='#FF8C47'
                strokeWidth='0'
                viewBox='0 0 1024 1024'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
              </svg>
            }
            readonly
          />{' '}
          {rating.number}
        </div>
        <div className='flex gap-2 items-center p-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15Z'
              fill='#706F6F'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75C16.971 3.75 21.186 6.973 22.676 11.44C22.796 11.802 22.796 12.192 22.676 12.553C21.189 17.024 16.971 20.25 11.999 20.25C7.029 20.25 2.813 17.027 1.324 12.56C1.20375 12.1987 1.20375 11.8083 1.324 11.447H1.323ZM17.25 12C17.25 13.3924 16.6969 14.7277 15.7123 15.7123C14.7277 16.6969 13.3924 17.25 12 17.25C10.6076 17.25 9.27225 16.6969 8.28769 15.7123C7.30312 14.7277 6.75 13.3924 6.75 12C6.75 10.6076 7.30312 9.27225 8.28769 8.28769C9.27225 7.30312 10.6076 6.75 12 6.75C13.3924 6.75 14.7277 7.30312 15.7123 8.28769C16.6969 9.27225 17.25 10.6076 17.25 12Z'
              fill='#706F6F'
            />
          </svg>
          {total_view}
        </div>
      </div>
    </div>
  );
};

SingleNews.propTypes = {
  sn: PropTypes.object,
};

export default SingleNews;

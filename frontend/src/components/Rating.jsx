import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span key={index}>
            {value >= index ? (
              <FaStar />
            ) : value >= index - 0.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
        );
      })}
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

export default Rating;

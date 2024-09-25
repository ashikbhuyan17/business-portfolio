import React from 'react';

// Define the props interface
interface RatingProps {
  rating: number; // Rating should be a number between 0 and 5
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <span
            key={i}
            className={
              i < rating ? 'text-[#FEC42D] text-2xl' : 'text-gray-300 text-2xl'
            }
          >
            &#9733; {/* Unicode star character */}
          </span>
        ))}
    </div>
  );
};

export default Rating;

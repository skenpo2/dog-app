import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { GiSittingDog } from 'react-icons/gi';
import { IoPawOutline } from 'react-icons/io5';
const Dog = ({ dog, getDogDescription }) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <article className="dog-container">
      <div className="image-container">
        <img src={dog.url} alt={`Dog ${dog.id}`} loading="lazy" />
      </div>
      <div className="info-container">
        <div className="details">
          {dog.breeds.length > 0 ? (
            <div className="dog-details">
              <h3>
                {dog.breeds[0].name}{' '}
                <IoPawOutline
                  style={{ paddingLeft: '0.2rem', fontSize: '0.85rem' }}
                />
              </h3>
              <p className="bred">
                <div className="span-class">Bred For</div>{' '}
                {dog.breeds[0].bred_for || 'Not Available'}
              </p>
              <p className="breed">
                <GiSittingDog className="sitting-dog" />
                {dog.breeds[0].breed_group || 'Not Available'}
              </p>
              <p className="temperament">
                <div className="span-class">Temperament</div>{' '}
                {dog.breeds[0].temperament}
              </p>
            </div>
          ) : (
            <div className="span-class">Breed information not available</div>
          )}
        </div>
        <div className="like">
          {isLike ? (
            <FaHeart className="like-icon" onClick={() => setIsLike(!isLike)} />
          ) : (
            <FaRegHeart
              className="like-icon"
              onClick={() => setIsLike(!isLike)}
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default Dog;

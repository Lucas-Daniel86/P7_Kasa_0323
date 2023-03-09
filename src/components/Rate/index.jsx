import React from 'react'
import emptyStar from '../../assets/images/emptyStar.svg'
import fullStar from '../../assets/images/star_rate.svg'

export default function Rate({ rating }) {
  const NumberOfStars = [1, 2, 3, 4, 5]
  return (
    <div className="rate">
      {NumberOfStars.map((stars) =>
        rating >= stars ? (
          <img
            key={stars.toString()}
            className="full-star"
            src={fullStar}
            alt=""
          />
        ) : (
          <img
            key={stars.toString()}
            className="empty-star"
            src={emptyStar}
            alt=""
          />
        )
      )}
    </div>
  )
}

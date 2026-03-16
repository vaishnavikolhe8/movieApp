import React, { useState } from 'react'
import './Card.css'
import { DetailCard } from './DetailCard';

export const Card = ({ data, onHandleDetail, onHandleFetchDetail, onHandleFavorite, page }) => {
  return (
    <>
      <div className='card'>

        <div className="img">
          <img src={data.Poster} alt={data.Title} />
        </div>

        <div className="overlay">
          <h3>{data.Title}</h3>
          <p>{data.Year}</p>

          <button onClick={() => {
            onHandleDetail(true)
            onHandleFetchDetail(data.imdbID)
          }}>
            Details
          </button>

          {page === "home" &&
            <button onClick={() => onHandleFavorite(data.imdbID)} >Favourite</button>
          }
          {page === "fav" &&
            <button onClick={() => onHandleFavorite(data.imdbID)} >Remove</button>
          }

        </div>


      </div>

    </>

  )
}


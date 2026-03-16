import React from 'react'
import './DetailCard.css'

export const DetailCard = ({ data ,oncloseDetail}) => {

  return (

    <div className="detailWrapper">

      <button className="closeBtn" onClick={oncloseDetail}>X</button>

      <div className="poster">
        <img src={data.Poster} alt={data.Title} />
      </div>

      <div className="movieInfo">

        <h1 className="title">{data.Title}</h1>

        <div className="meta">
          <span>⭐ {data.imdbRating}</span>
          <span>{data.Released}</span>
          <span>{data.Genre}</span>
        </div>

        <p className="plot">
          <strong>Description:</strong> {data.Plot}
        </p>

        <div className="extraInfo">
          <p><strong>Director:</strong> {data.Director}</p>
          <p><strong>Actors:</strong> {data.Actors}</p>
          <p><strong>Country:</strong> {data.Country}</p>
          <p><strong>Box Office:</strong> {data.BoxOffice}</p>
        </div>

      </div>

    </div>


  )
}

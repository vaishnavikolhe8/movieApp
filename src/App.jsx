import React, { useEffect, useState } from 'react'
import { Nav } from './comp/Nav'
import { Card } from './comp/Card'
import { DetailCard } from './comp/DetailCard';
import { Page } from './comp/Page';


export const App = () => {

  const [movie, setMovies] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [detailMovieData, setDetailMovieData] = useState({});
  const [favMovies, setFavMovies] = useState(() => {
    const rawFavdata = localStorage.getItem("FavMovieList");
    return rawFavdata ? JSON.parse(rawFavdata) : [];
  });
  const [page, setPage] = useState("home")
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(1);


  const API_key = import.meta.env.VITE_API_KEY;

  // fetching data from api
  const fetchMovies = async (name, pagination = 1) => {
    try {
      let data;
      if (name) {
        data = await (await fetch(`https://www.omdbapi.com/?apikey=${API_key}&s=${name}`)).json();
      }
      else {
        data = await (await fetch(`https://www.omdbapi.com/?apikey=${API_key}&s=movie&page=${pagination}`)).json();
      }
      setMovies(data.Search || []) // setting state of movie
      setLoading(false)

    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false)
      setError(error)
    }
  }
  useEffect(() => {
    fetchMovies("", pagination)
  }, [pagination])



  // boolean show obj
  const handleDetail = (exp) => {
    setShowDetail(exp)
  }
  // detail box
  const fetchMovieDetail = async (id) => {
    try {
      const data = await (await fetch(`https://www.omdbapi.com/?apikey=${API_key}&i=${id}`)).json();
      setDetailMovieData(data)
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(error)
    }
  }
  const handlecloseDetail = () => {
    setShowDetail(false)
  }
  const blurClassFun = showDetail ? "blurClass" : "";


  // handle which page to show 
  const handlePage = (exp) => {
    setPage(exp);
  }


  // setting fav
  const handleFavorite = (valId) => {
    const selectedfavMovie = movie.find((curEle) => {
      return curEle.imdbID == valId
    })

    const alreadyFav = favMovies.some((curEle) => curEle.imdbID == valId)

    if (alreadyFav) {
      const updateFav = favMovies.filter((curEle) => {
        return curEle.imdbID != valId
      })
      setFavMovies(updateFav)
    } else {
      setFavMovies((prev) => [...prev, selectedfavMovie])
    }
  }
  useEffect(() => {
    localStorage.setItem("FavMovieList", JSON.stringify(favMovies))
  }, [favMovies])

  // setting loading and error
  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    )

  }
  if (error) {
    return (
      <div>
        <h1>Something went wrong:</h1>
        <h3>{error.message}</h3>
      </div>
    )

  }


  return (
    <>

      <Nav onHandlePage={handlePage} onhandleFetchMoviesByName={fetchMovies} page={page} ></Nav>
      <div className={`container ${blurClassFun}`}>


        {(page === "home") &&

          <ul className="cardCont">
            {
              movie.map((curEle) => {
                return <Card
                  key={curEle.imdbID}
                  data={curEle}
                  onHandleDetail={handleDetail}
                  onHandleFetchDetail={fetchMovieDetail}
                  onHandleFavorite={handleFavorite}
                  page={page}
                ></Card>
              })
            }
          </ul>
        }

        {page === "fav" &&
          <ul className="cardCont">
            {
              favMovies.map((curEle) => {
                return <Card
                  key={curEle.imdbID}
                  data={curEle}
                  onHandleDetail={handleDetail}
                  onHandleFetchDetail={fetchMovieDetail}
                  onHandleFavorite={handleFavorite}
                  page={page}
                ></Card>
              })
            }
          </ul>
        }
        {(page === "home") &&
          <Page pagination={pagination} setPagination={setPagination} ></Page>}

      </div>
      {showDetail && <DetailCard data={detailMovieData} oncloseDetail={handlecloseDetail} ></DetailCard>}
    </>
  )
}


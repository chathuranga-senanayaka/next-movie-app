import React from "react";

const Home = () => {
  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 124,
      rating: 4.7,
      description: "A mind-bending thriller by Christopher Nolan.",
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 98,
      rating: 4.8,
      description: "A space exploration film by Christopher Nolan.",
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 255,
      rating: 4.9,
      description: "The iconic Batman film directed by Christopher Nolan.",
    },
  ];

  //how many movies
  const totalMovies = movies.length;
  //how many comments
  const totalComments = movies.reduce((sum, movie) => sum + movie.comments, 0);
  //average rating
  const averageRating = movies.reduce(
    (sum, movie) => (sum + movie.rating) / movies.length,
    0
  );

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Dashboard Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium ">Total Movies</p>
            <p className="text-4xl font-bold">Total Movies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

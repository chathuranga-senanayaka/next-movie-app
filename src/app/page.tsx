import Link from "next/link";
import React from "react";
import { FaComment, FaStar } from "react-icons/fa";

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
    {
      id: "4",
      title: "Avatar",
      comments: 189,
      rating: 4.6,
      description: "A visually stunning sci-fi film by James Cameron.",
    },
    {
      id: "5",
      title: "Titanic",
      comments: 276,
      rating: 4.7,
      description: "A tragic love story directed by James Cameron.",
    },
    {
      id: "6",
      title: "The Matrix",
      comments: 210,
      rating: 4.8,
      description: "A revolutionary sci-fi film by the Wachowskis.",
    },
    {
      id: "7",
      title: "Pulp Fiction",
      comments: 198,
      rating: 4.9,
      description: "A cult classic crime film directed by Quentin Tarantino.",
    },
    {
      id: "8",
      title: "Forrest Gump",
      comments: 245,
      rating: 4.8,
      description: "An inspiring drama starring Tom Hanks.",
    },
    {
      id: "9",
      title: "The Godfather",
      comments: 322,
      rating: 4.9,
      description: "The legendary mafia film directed by Francis Ford Coppola.",
    },
    {
      id: "10",
      title: "The Shawshank Redemption",
      comments: 278,
      rating: 4.9,
      description: "A story of hope and friendship in prison.",
    },
    {
      id: "11",
      title: "Fight Club",
      comments: 187,
      rating: 4.7,
      description:
        "A psychological thriller starring Brad Pitt and Edward Norton.",
    },
    {
      id: "12",
      title: "The Lord of the Rings: The Return of the King",
      comments: 312,
      rating: 4.9,
      description: "The epic conclusion to the Lord of the Rings trilogy.",
    },
    {
      id: "13",
      title: "The Lion King",
      comments: 174,
      rating: 4.8,
      description: "A classic Disney animated film.",
    },
    {
      id: "14",
      title: "Gladiator",
      comments: 198,
      rating: 4.7,
      description: "An epic historical drama starring Russell Crowe.",
    },
    {
      id: "15",
      title: "Joker",
      comments: 221,
      rating: 4.7,
      description: "A dark psychological thriller starring Joaquin Phoenix.",
    },
    {
      id: "16",
      title: "Whiplash",
      comments: 144,
      rating: 4.8,
      description: "A thrilling drama about a young drummer's ambition.",
    },
    {
      id: "17",
      title: "Parasite",
      comments: 189,
      rating: 4.8,
      description: "A dark comedy-thriller by Bong Joon-ho.",
    },
    {
      id: "18",
      title: "The Silence of the Lambs",
      comments: 154,
      rating: 4.9,
      description: "A psychological horror-thriller starring Anthony Hopkins.",
    },
    {
      id: "19",
      title: "Django Unchained",
      comments: 167,
      rating: 4.8,
      description: "A western revenge film directed by Quentin Tarantino.",
    },
    {
      id: "20",
      title: "The Green Mile",
      comments: 176,
      rating: 4.8,
      description: "A touching drama starring Tom Hanks.",
    },
  ];

  //how many movies
  const totalMovies = movies.length;
  //how many comments
  const totalComments = movies.reduce((sum, movie) => sum + movie.comments, 0);
  //average rating
  const averageRating = movies
    .reduce((sum, movie) => (sum + movie.rating) / totalMovies, 0)
    .toFixed(1); // round to 1 decimal

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Dashboard Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium ">Total Movies</p>
            <p className="text-4xl font-bold">{totalMovies}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium ">Total Comments</p>
            <p className="text-4xl font-bold">{totalComments}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium ">Average Rating</p>
            <p className="text-4xl font-bold">{averageRating}</p>
          </div>
        </div>
      </div>
      {/* Movie List */}
      <h2 className="text-3xl font-semibold text-white">Movie List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link
              href={`/movies/${movie.id}`}
              className="text-2xl font-bold text-blue-400 hover:text-blue-600"
            >
              {movie.title}
            </Link>
            <p className="text-gray-400 text-sm mt-2">{movie.description}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-sm text-gray-300">
                <FaComment className="mr-1" />
                <span>{movie.comments}</span>
              </div>
              <div className="flex items-center text-sm text-yellow-400">
                <FaStar className="mr-1" />
                <span>{movie.rating}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

import React from "react";
import { FaStar } from "react-icons/fa";
interface movieProps {
  params: {
    id: string;
  };
}

const MovieDetails = ({ params }: movieProps) => {
  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 124,
      rating: 4.7,
      description: "A mind-bending thriller by Christopher Nolan.",
      commentsList: ["Great movie!", "Mind-blowing!", "A true masterpiece."],
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 98,
      rating: 4.8,
      description: "A space exploration film by Christopher Nolan.",
      commentsList: [
        "Amazing visual effects!",
        "Loved the soundtrack.",
        "A bit confusing but great.",
      ],
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 255,
      rating: 4.9,
      description: "The iconic Batman film directed by Christopher Nolan.",
      commentsList: [
        "The best Batman movie!",
        "Heath Ledger was outstanding.",
        "Iconic movie.",
      ],
    },
    {
      id: "4",
      title: "Avatar",
      comments: 189,
      rating: 4.6,
      description: "A visually stunning sci-fi film by James Cameron.",
      commentsList: ["Amazing CGI!", "Loved Pandora!", "A must-watch!"],
    },
    {
      id: "5",
      title: "Titanic",
      comments: 276,
      rating: 4.7,
      description: "A tragic love story directed by James Cameron.",
      commentsList: ["Heartbreaking!", "Amazing cinematography!", "Classic!"],
    },
    {
      id: "6",
      title: "The Matrix",
      comments: 210,
      rating: 4.8,
      description: "A revolutionary sci-fi film by the Wachowskis.",
      commentsList: [
        "Mind-blowing!",
        "Great action scenes!",
        "Neo is the best!",
      ],
    },
    {
      id: "7",
      title: "Pulp Fiction",
      comments: 198,
      rating: 4.9,
      description: "A cult classic crime film directed by Quentin Tarantino.",
      commentsList: [
        "Tarantino at his best!",
        "Amazing dialogues!",
        "Classic!",
      ],
    },
    {
      id: "8",
      title: "Forrest Gump",
      comments: 245,
      rating: 4.8,
      description: "An inspiring drama starring Tom Hanks.",
      commentsList: [
        "Beautiful story!",
        "Emotional!",
        "Life is like a box of chocolates.",
      ],
    },
    {
      id: "9",
      title: "The Godfather",
      comments: 322,
      rating: 4.9,
      description: "The legendary mafia film directed by Francis Ford Coppola.",
      commentsList: ["Best movie ever!", "Iconic!", "Masterpiece!"],
    },
    {
      id: "10",
      title: "The Shawshank Redemption",
      comments: 278,
      rating: 4.9,
      description: "A story of hope and friendship in prison.",
      commentsList: ["Best ending ever!", "Inspirational!", "A must-watch!"],
    },
    {
      id: "11",
      title: "Fight Club",
      comments: 187,
      rating: 4.7,
      description:
        "A psychological thriller starring Brad Pitt and Edward Norton.",
      commentsList: [
        "Rule #1: Don't talk about it!",
        "Mind-blowing!",
        "Dark and gripping.",
      ],
    },
    {
      id: "12",
      title: "The Lord of the Rings: The Return of the King",
      comments: 312,
      rating: 4.9,
      description: "The epic conclusion to the Lord of the Rings trilogy.",
      commentsList: ["Epic battles!", "Best trilogy ever!", "Masterpiece!"],
    },
    {
      id: "13",
      title: "The Lion King",
      comments: 174,
      rating: 4.8,
      description: "A classic Disney animated film.",
      commentsList: ["Childhood favorite!", "Great music!", "Emotional!"],
    },
    {
      id: "14",
      title: "Gladiator",
      comments: 198,
      rating: 4.7,
      description: "An epic historical drama starring Russell Crowe.",
      commentsList: [
        "Are you not entertained?",
        "Great story!",
        "Epic fights!",
      ],
    },
    {
      id: "15",
      title: "Joker",
      comments: 221,
      rating: 4.7,
      description: "A dark psychological thriller starring Joaquin Phoenix.",
      commentsList: [
        "Dark and intense!",
        "Brilliant acting!",
        "Disturbing but amazing!",
      ],
    },
    {
      id: "16",
      title: "Whiplash",
      comments: 144,
      rating: 4.8,
      description: "A thrilling drama about a young drummer's ambition.",
      commentsList: ["Intense!", "Amazing performances!", "Powerful story!"],
    },
    {
      id: "17",
      title: "Parasite",
      comments: 189,
      rating: 4.8,
      description: "A dark comedy-thriller by Bong Joon-ho.",
      commentsList: [
        "Brilliant story!",
        "Twisted and gripping!",
        "Oscar-worthy!",
      ],
    },
    {
      id: "18",
      title: "The Silence of the Lambs",
      comments: 154,
      rating: 4.9,
      description: "A psychological horror-thriller starring Anthony Hopkins.",
      commentsList: [
        "Creepy and brilliant!",
        "Iconic!",
        "Hannibal Lecter is terrifying!",
      ],
    },
    {
      id: "19",
      title: "Django Unchained",
      comments: 167,
      rating: 4.8,
      description: "A western revenge film directed by Quentin Tarantino.",
      commentsList: [
        "Tarantino at his best!",
        "Great action!",
        "Loved the dialogues!",
      ],
    },
    {
      id: "20",
      title: "The Green Mile",
      comments: 176,
      rating: 4.8,
      description: "A touching drama starring Tom Hanks.",
      commentsList: [
        "Heartbreaking!",
        "Emotional and deep!",
        "One of the best!",
      ],
    },
  ];

  const movie = movies.find((m) => m.id === params.id);

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-white mb-4">
          {movie?.title}
        </h2>
        <p className="text-lg text-gray-300">{movie?.description}</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xl text-gray-300">Rating:</p>
            <div className="flex items-center text-yellow-400">
              <FaStar className="mr-1" />
              <span className="text-2xl font-bold">{movie?.rating}</span> / 5
            </div>
          </div>
          <div>
            <p className="text-xl text-gray-300">Comments:</p>
            <p className="text-2xl font-semibold text-white">
              {movie?.comments} comments
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-semibold text-white mb-4">Comments</h3>
        <ul className="space-y-4">
          {movie?.commentsList.map((comment, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-300">{comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;

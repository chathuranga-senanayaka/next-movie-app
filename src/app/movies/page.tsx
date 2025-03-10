import Link from "next/link";

export default function MoviesPage() {
  const movies = [
    { id: "1", title: "Inception" },
    { id: "2", title: "Interstellar" },
    { id: "3", title: "The Dark Knight" },
    { id: "4", title: "Avatar" },
    { id: "5", title: "Titanic" },
    { id: "6", title: "The Matrix" },
    { id: "7", title: "Pulp Fiction" },
    { id: "8", title: "Forrest Gump" },
    { id: "9", title: "The Godfather" },
    { id: "10", title: "The Shawshank Redemption" },
    { id: "11", title: "Fight Club" },
    { id: "12", title: "The Lord of the Rings: The Return of the King" },
    { id: "13", title: "The Lion King" },
    { id: "14", title: "Gladiator" },
    { id: "15", title: "Joker" },
    { id: "16", title: "Whiplash" },
    { id: "17", title: "Parasite" },
    { id: "18", title: "The Silence of the Lambs" },
    { id: "19", title: "Django Unchained" },
    { id: "20", title: "The Green Mile" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Movies List</h2>
      <ul className="space-y-4">
        {movies.map((movie) => (
          <li key={movie.id} className="bg-gray-800 p-4 rounded-lg">
            <Link
              href={`/movies/${movie.id}`}
              className="text-blue-400 hover:text-blue-600"
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

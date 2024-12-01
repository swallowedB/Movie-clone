import { Link } from "react-router-dom";

interface Props {
  coverImg: string;
  title: string;
  summary: string;
  genres?: string[];
  id: number;
}


export default function Movie({id, coverImg, title, summary, genres }:Props) {
  return (
    <div>
    <img src={coverImg} alt={title} />
    <h2 className="text-3xl">
      <Link to={`/movie/${id}`}> {title}</Link>
    </h2>
    <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
    <ul>
      {genres && genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </ul>
  </div>
  );
}

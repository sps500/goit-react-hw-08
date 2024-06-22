import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <p>
        404 - Сторінка не знайдена <Link to="/">home page</Link>!
      </p>
    </div>
  );
}

import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found__container">
      <Link to="/" className="link link--center">
        Back Home
      </Link>
      <div>
        <h3 className="not-found__title">404</h3>
        <p className="not-found__text">Page is not found</p>
      </div>
    </div>
  );
};

export default NotFoundPage;

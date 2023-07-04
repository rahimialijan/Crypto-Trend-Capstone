import './notFound.css';
import fourOfour from '../../assets/images/error_404.svg';

const NotFound = () => (
  <div className="category-secion not-found">
    <img src={fourOfour} alt="404" />
    <span className="engineer-emoji"> 🕵️‍♂️ </span>
  </div>
);

export default NotFound;

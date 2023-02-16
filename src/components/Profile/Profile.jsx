import PropTypes from 'prop-types';
import css from "../Profile/Profile.module.css"

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={avatar} alt={username}></img>
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.label}>
          Followers
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.label}>
          Views
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.label}>
          Likes
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propType = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};

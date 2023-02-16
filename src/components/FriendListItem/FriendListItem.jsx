import PropTypes from 'prop-types';
import css from "../FriendListItem/FriendListItem.module.css";

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      <div className={css.cards}>
        <span
          className={
            isOnline
              ? `${css.status} ${css.online}`
              : `${css.status} ${css.outlined}`
          }
        >
          {isOnline}
        </span>
        <img className={css.avatar} src={avatar} alt={avatar} width="48" />
        <p className={css.name}>{name}</p>
      </div>
    </li>
  );
};
FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string,
};
export default FriendListItem;

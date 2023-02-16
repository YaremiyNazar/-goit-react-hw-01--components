import PropTypes from 'prop-types';
import getRandomHexColor from '../../helpers/random';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}
      <ul className={css.stat}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
            key={id}
          >
            <span className={css.label}>{label}</span>
            <span className={percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

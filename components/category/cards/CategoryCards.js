import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import CategoryCard from '../card';

export default function CategoryCards(props) {
  const { categories } = props;
  return (
    <Card.Group>
      {categories.map((category) => (
        <CategoryCard
          title={category.title}
          description={category.description}
          buttontext={category.buttontext}
          href={category.href}
          percent={category.percent}
        />
      ))}
    </Card.Group>
  );
}

CategoryCards.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      percent: PropTypes.number.isRequired,
      href: PropTypes.string.isRequired,
      buttontext: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

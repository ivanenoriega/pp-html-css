import PropTypes from 'prop-types';
import { Card, Progress, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';

export default function CategoryCard(props) {
  const router = useRouter();
  const {
    title, description, percent, href, buttontext,
  } = props;
  const onClick = () => {
    router.push(href);
  };
  return (
    <Card>
      <Card.Content>
        <Card.Header textAlign="center">{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
        <Button basic fluid onClick={onClick}>
          {buttontext}
        </Button>
      </Card.Content>
      <Card.Content extra>
        <Progress percent={percent} progress indicating />
      </Card.Content>
    </Card>
  );
}

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  buttontext: PropTypes.string.isRequired,
};

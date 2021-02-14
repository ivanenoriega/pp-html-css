import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';
import auth0 from '../api/utils/auth0';
import NavBar from '../../components/navbar';
import ExercisesCards from '../../components/exercises/cards';
import { getExercisesFromCategory } from '../../content/exercises';

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);
  const { category } = context.query;

  if (!session || !session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const exercises = getExercisesFromCategory(category);
  // TODO: Check for completed exercises

  return {
    props: { user: session?.user || null, category, exercises },
  };
}

export default function Category({ category, exercises }) {
  return (
    <>
      <Head>
        <title>Practice Platform: Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active={category} />
      <Container>
        <h1>
          Practice Platform:
          {category}
        </h1>
        <ExercisesCards categories={exercises} />
      </Container>
    </>
  );
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

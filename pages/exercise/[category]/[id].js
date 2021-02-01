import { useState } from 'react';
import Head from 'next/head';
import auth0 from '../../api/utils/auth0';
import { getExercise } from '../../../content/exercises';

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);
  const { category, id } = context.query;

  if (!session || !session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { user: session?.user || null, exercise: getExercise(category, id) },
  };
}

export default function Home() {
  const task = {
    id: 'html_01',
    name: 'Estructura HTML',
    description: 'Completa el codigo arrastrando los valores correctos en los espacios vacios',
    type: 'drag_n_drop',
    task: `<!DOCTYPE html>
<$;input_c$;>
    <head>
    </$;input_c$;>
    <$;input_c$;>    
      <h1>My First Heading</h1>
      <p>My first paragraph.</p>
    </body>
</html>`,
    options: ['head', 'header', 'body', 'cuerpo', 'html', 'main', '!DOCTYPE'],
    solution: ['html', 'head', 'body'],
  };

  const [solution, setSolution] = useState([]);
  const [validSolutions, setValidSolutions] = useState([]);
  const setSolutionWithIndex = (index) => (event) => {
    // Set solution value
    const newSolution = [...solution];
    newSolution[index] = event.target.value;
    setSolution(newSolution);

    // Set Valid solutions
    const newValidSolutions = [...validSolutions];
    newValidSolutions[index] = task.solution[index] === newSolution[index];
    setValidSolutions(newValidSolutions);
  };
  let solutionIndex = -1;
  return (
    <div>
      <Head>
        <title>Practice Platform: Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Practice Platform: Home</h1>
        <a href="/api/logout">Logout</a>

        <div className="card">
          <h2>HTML</h2>
        </div>

        <pre>
          {task.task.split('$;').map((text, i) => {
            if (text === 'input_c') {
              solutionIndex += 1;
              return (
                <input
                  type="text"
                  value={solution[solutionIndex]}
                  className={
                    validSolutions[solutionIndex] === undefined
                      ? ''
                      : validSolutions[solutionIndex]
                        ? 'valid'
                        : 'invalid'
                  }
                  onChange={setSolutionWithIndex(solutionIndex)}
                />
              );
            }
            return text;
          })}
        </pre>
        <button type="button">Submit</button>

        <div className="card">
          <h2>CSS</h2>
        </div>
      </main>
    </div>
  );
}

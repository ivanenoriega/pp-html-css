const exercises = {
  html: {
    name: 'HTML',
    description: 'Vamos a aprender los conceptos basicos de este lenguaje de etiquetas.',
    tasks: [
      {
        id: 'basic_structure',
        name: 'Estructura HTML',
        description: 'Completa el codigo arrastrando los valores correctos en los espacios vacios',
        type: 'drag_n_drop',
        task: `<!DOCTYPE html>
        <$input_c>
            <head>
            </$input_c>
            <$input_c>
            
            <h1>My First Heading</h1>
            <p>My first paragraph.</p>
            
            </body>
        </html>`,
        options: ['head', 'header', 'body', 'cuerpo', 'html', 'main'],
        solution: ['html', 'head', 'body'],
      },
      {
        id: 'basic_structure_v2',
        name: 'Estructura HTML V2',
        description: 'Completa el codigo arrastrando los valores correctos en los espacios vacios',
        type: 'drag_n_drop',
        task: `<!DOCTYPE html>
        <$input_c>
            <head>
            </$input_c>
            <$input_c>
            
            <h1>My First Heading</h1>
            <p>My first paragraph.</p>
            
            </body>
        </html>`,
        options: ['head', 'header', 'body', 'cuerpo', 'html', 'main'],
        solution: ['html', 'head', 'body'],
      },
    ],
  },
  css: {
    name: 'CSS',
    description: 'Something about CSS.',
    tasks: [
      {
        id: 'basic_structure',
        name: 'Estructura HTML',
        description: 'Completa el codigo arrastrando los valores correctos en los espacios vacios',
        type: 'complete',
        task: `<!DOCTYPE html>
        <$input_c>
            <head>
            </$input_c>
            <$input_c>
            
            <h1>My First Heading</h1>
            <p>My first paragraph.</p>
            
            </body>
        </html>`,
        options: ['head', 'header', 'body', 'cuerpo', 'html', 'main'],
        solution: ['html', 'head', 'body'],
      },
    ],
  },
};

const getExercise = (category, id) => exercises[category].tasks.find((task) => task.id === id);

const getExercisesFromCategory = (category) => exercises[category].tasks;

const getCategories = () => {
  const categories = [];
  const keys = Object.keys(exercises);
  keys.forEach((key) => {
    const category = exercises[key];
    const { name: title, description } = category;
    const percent = 0;
    const buttontext = 'Iniciar';
    const href = `/${title.toUpperCase()}`;

    categories.push({
      title,
      description,
      percent,
      buttontext,
      href,
    });
  });
  return categories;
};

export {
  exercises, getExercise, getCategories, getExercisesFromCategory,
};

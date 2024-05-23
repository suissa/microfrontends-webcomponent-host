# Microfrontend - Host

Prova de conceito destinado a utilizar 2 webcomponents: course-list e course-search.

Precisei apenas de uma página que coloca a URL do webcomponent no script.

```js
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const courseListScript = document.createElement('script');
    courseListScript.src = 'http://localhost:4001/course-list.js';
    courseListScript.type = 'text/javascript';
    courseListScript.async = true;
    document.body.appendChild(courseListScript);

    const courseSearchScript = document.createElement('script');
    courseSearchScript.src = 'http://localhost:4002/course-search.js';
    courseSearchScript.type = 'text/javascript';
    courseSearchScript.async = true;
    document.body.appendChild(courseSearchScript);
  }, []);

  return (
    <div>
      <h1>Course Search and List</h1>
      <course-search></course-search>
      <course-list></course-list>
    </div>
  );
};

export default Home;

```

## Execução

```
yarn
yarn dev
```
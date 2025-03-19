import reactImage from './assets/react-core-concepts.png';
import componentImage from './assets/components.png';

const reactDescriptions: String[] = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max: any) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description: String = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept(props: any) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
            title='Components'
            description='The core UI building block'
            image={componentImage}
          />
          <CoreConcept title='Props' />
          <CoreConcept />
          <CoreConcept />
        </ul>
      </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
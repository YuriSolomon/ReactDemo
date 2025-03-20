import { CORE_CONCEPTS } from './data.ts';
import Header from './components/Header/Header.tsx';
import CoreConcept from './components/CoreConcepts/CoreConcepts.tsx';
import TabButton from './components/TabButton/TabButton.tsx';

function App() {
  function handleTabSelect() {
    console.log('test');
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onTabSelect={handleTabSelect}>Components</TabButton>
            <TabButton onTabSelect={handleTabSelect}>TSX</TabButton>
            <TabButton onTabSelect={handleTabSelect}>Props</TabButton>
            <TabButton onTabSelect={handleTabSelect}>State</TabButton>
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.ts';
import Header from './components/Header/Header.tsx';
import CoreConcept from './components/CoreConcepts/CoreConcepts.tsx';
import TabButton from './components/TabButton/TabButton.tsx';

function App() {
  const [selectedTab, setSelectedTab]: any[] = useState();

  function handleTabSelect(selectedButton: any) {
    setSelectedTab(selectedButton);
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
            <TabButton onTabSelect={() => handleTabSelect('components')}>Components</TabButton>
            <TabButton onTabSelect={() => handleTabSelect('tsx')}>TSX</TabButton>
            <TabButton onTabSelect={() => handleTabSelect('props')}>Props</TabButton>
            <TabButton onTabSelect={() => handleTabSelect('state')}>State</TabButton>
          </menu>
          {!selectedTab ? (
            <p>Please select tab</p>
            ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab as keyof typeof EXAMPLES].title}</h3>
              <p>{EXAMPLES[selectedTab as keyof typeof EXAMPLES].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTab as keyof typeof EXAMPLES].code}
                </code>
              </pre>
            </div>
            )}
        </section>
      </main>
    </div>
  );
}

export default App;
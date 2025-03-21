import { useState } from "react";
import TabButton from "../TabButton/TabButton"
import { EXAMPLES } from "../../data";

export default function Examples() {
    const [selectedTab, setSelectedTab]: any[] = useState();

    function handleTabSelect(selectedButton: any) {
      setSelectedTab(selectedButton);
    }
  
    let tabContent = <p>Please select tab</p>;
  
    if (selectedTab) {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTab as keyof typeof EXAMPLES].title}</h3>
          <p>{EXAMPLES[selectedTab as keyof typeof EXAMPLES].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTab as keyof typeof EXAMPLES].code}
            </code>
          </pre>
        </div>
      )
    }

    return (
        <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTab === 'components'} onTabSelect={() => handleTabSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTab === 'tsx'} onTabSelect={() => handleTabSelect('tsx')}>TSX</TabButton>
          <TabButton isSelected={selectedTab === 'props'} onTabSelect={() => handleTabSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTab === 'state'} onTabSelect={() => handleTabSelect('state')}>State</TabButton>
        </menu>
        {tabContent}
      </section>
    )
}
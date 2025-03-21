import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";
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
        <Section title="Examples" id="examples">
            <Tabs ButtonsContainer='menu' buttons={
                <>
                    <TabButton isSelected={selectedTab === 'components'} onClick={() => handleTabSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTab === 'tsx'} onClick={() => handleTabSelect('tsx')}>TSX</TabButton>
                    <TabButton isSelected={selectedTab === 'props'} onClick={() => handleTabSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTab === 'state'} onClick={() => handleTabSelect('state')}>State</TabButton>
                </>
            }
            >{tabContent}</Tabs>
        </Section>
    )
}
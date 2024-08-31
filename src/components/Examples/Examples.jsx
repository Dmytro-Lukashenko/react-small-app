import TabButton from "../TabButton/TabButton"
import { EXAMPLES } from '../../data'
import { useState } from 'react';
import Section from "../Ui/Section/Section";
import Tabs from "../Ui/Section/Tabs";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(null)

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = !selectedTopic ?
        <p>Please select a topic</p> :
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>

    return (
        <Section title="Examples" id="examples">
            <Tabs buttons={
                <>
                    <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    )
}
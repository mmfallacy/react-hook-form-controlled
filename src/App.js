import {
    Header,
    Page,
    FormSection
} from './containers'

import {
    TaskNameInput,
    TaskColorInput,
    TaskTimeInput
} from './components'

const COLORS = ["#FF4E4E", "#FF9C45", "#FFCE3A", "#86DFAB", "#8490FF"]

function App() {
    return (
        <Page>
            <Header />
            <form>
                <FormSection>
                    <TaskNameInput name="taskName"/>
                    <TaskColorInput name="color" colors={COLORS}/>
                </FormSection>

                <FormSection header="Settings">
                    <TaskTimeInput name=""/>
                </FormSection>
            </form>
        </Page>
    )
}

export default App

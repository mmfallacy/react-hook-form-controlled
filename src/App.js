import {
    Header,
    Page,
    FormSection
} from './containers'

import {
    TaskNameInput,
    TaskColorInput,
    TaskTimeInput,
    TaskNumericInput
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
                    <TaskTimeInput name="work-interval" header="Work Interval"/>
                    <TaskTimeInput name="break-interval" header="Break Interval"/>
                    <TaskNumericInput name="sessions" header="Sessions per Task"/>
                </FormSection>
            </form>
        </Page>
    )
}

export default App

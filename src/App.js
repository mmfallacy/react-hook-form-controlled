import {
    Header,
    Page,
    FormSection
} from './containers'

import {
    TaskNameInput,
    TaskColorInput,
} from './components'

const COLORS = ["#FF4E4E", "#FF9C45", "#FFCE3A", "#86DFAB", "#8490FF"]

function App() {
    return (
        <Page>
            <Header />
            <form>
                <FormSection>
                    <TaskNameInput />
                    <TaskColorInput name="Color" colors={COLORS}/>
                </FormSection>
            </form>
        </Page>
    )
}

export default App

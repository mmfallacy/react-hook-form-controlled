import {
    Header,
    Page,
    FormSection
} from './containers'

import {
    TaskNameInput,
    TaskColorInput,
} from './components'

function App() {
    return (
        <Page>
            <Header />
            <form>
                <FormSection>
                    <TaskNameInput />
                    <TaskColorInput name="Color" />
                </FormSection>
            </form>
        </Page>
    )
}

export default App

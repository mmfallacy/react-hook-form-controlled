import {
    Header,
    Page,
    FormSection
} from './containers'

import {
    TaskNameInput
} from './components'

function App() {
    return (
        <Page>
            <Header />
            <form>
                <FormSection>
                    <TaskNameInput />
                </FormSection>
            </form>
        </Page>
    )
}

export default App

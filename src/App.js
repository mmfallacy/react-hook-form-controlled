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

import {useForm} from 'react-hook-form'

const COLORS = ["#FF4E4E", "#FF9C45", "#FFCE3A", "#86DFAB", "#8490FF"]

function App() {

    const {handleSubmit, register} = useForm()

    const onSubmit = (data) => {
        data = {...data, workInterval:parseInt(data.workInterval), breakInterval:parseInt(data.breakInterval), sessions:parseInt(data.sessions)}
        
        console.log(data)
    }

    return (
        <Page>
            <Header />
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormSection>
                    <TaskNameInput name="taskName" ref={register}/>
                    <TaskColorInput name="color" colors={COLORS} ref={register}/>
                </FormSection>

                <FormSection header="Settings">
                    <TaskTimeInput name="workInterval" header="Work Interval" ref={register}/>
                    <TaskTimeInput name="breakInterval" header="Break Interval" ref={register}/>
                    <TaskNumericInput name="sessions" header="Sessions per Task" ref={register}/>
                </FormSection>

                <button>asda</button>
            </form>
        </Page>
    )
}

export default App

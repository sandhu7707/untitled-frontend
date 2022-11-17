import FormSection from "./form-section.component";

export default function EducationHistory(props) {

    const { educationList, projectList, addItem } = props;

    const educationItemLabel = (item) => {

        return `${item.degree}`
    }

    return (
        <FormSection
            sectionName='Education History'
            sectionKey="education"
            initialValues={{
                college: '',
                degree: '',
                dateFrom: '',
                dateTo: '',
                description: '',
                projectIds: []
            }}
            textInputs={[
                {
                    name: 'college',
                    placeholder: 'Enter Name of Institution',
                    label: 'College/University Name'
                },
                {
                    name: 'degree',
                    placeholder: 'Enter your degree',
                    label: 'Level of Education'
                }
            ]}
            dateInputs={[
                {
                    name: 'dateFrom',
                    placeholder: 'DD/MM/YYYY',
                    label: 'From'
                },
                {
                    name: 'dateTo',
                    placeholder: 'DD/MM/YYYY',
                    label: 'To'
                }
            ]}
            bigTextInputs={[
                {
                    name: 'description',
                    placeholder: 'Enter description...',
                    label: 'Description'
                }
            ]}
            associatedInputs={[
                {
                    name: 'project',
                    associationName: 'projects',
                    label: 'During this Degree',
                    itemLabel : (project) => `${project.title}`
                }
            ]}
            sectionList={{
                items: educationList,
                itemLabel: educationItemLabel
            }}
            handleAdd={addItem}
            associations = {{ projects: projectList }}
        />)


}
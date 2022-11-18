import FormSection from "./form-section.component"

export default function Projects(props) {

    const { projectList, educationList, workExperienceList, addItem } = props;

    const projectItemLabel = (item) => {
        return `${item.title}`
    }

    return (
        <FormSection
            sectionName="Projects"
            sectionKey="project"
            handleAdd={addItem}
            inputs={{
                textInputs: [
                    {
                        name: 'title',
                        placeholder: 'Enter project title',
                        label: 'Title'
                    }
                ],
                dateInputs: [
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
                ],
                bigTextInputs: [
                    {
                        name: 'description',
                        placeholder: 'Enter description...',
                        label: 'Description'
                    }
                ],
                conditionalInputs: [
                    {
                        name: "type",
                        label: 'Project Type',
                        categories: [
                            {
                                name: 'education',
                                label: 'Academic',
                                value: 'E',
                                items: educationList
                            },
                            {
                                name: 'workExperience',
                                label: 'Professional',
                                value: 'W',
                                items: workExperienceList
                            },
                            {
                                name: 'personal',
                                label: 'Personal',
                                value: 'P',
                                items: []
                            }
                        ]
                    }
                ]
            }}
            sectionList={{
                items: projectList,
                itemLabel: projectItemLabel
            }}
        />
    )
}
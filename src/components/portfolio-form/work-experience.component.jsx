import FormSection from "./form-section.component";

export default function WorkExperience(props) {

    const { workExperienceList, projectList, skillList, addItem } = props;

    const workExperienceItemLabel = (item) => {

        return `${item.jobTitle} at ${item.company}`
    }

    return (
        <FormSection
            sectionName='Work Experience'
            sectionKey="workExperience"
            handleAdd={addItem}
            inputs={{
                textInputs: [
                    {
                        name: "company",
                        placeholder: "Enter company name",
                        label: "Company"
                    },
                    {
                        name: "jobTitle",
                        placeholder: "Enter your job title",
                        label: "Job Title"
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
                associatedInputs: [
                    {
                        name: 'project',
                        items: projectList,
                        label: 'During this work experience',
                        itemLabel: (project) => `${project.title}`
                    }, {
                        name: 'skill',
                        items: skillList,
                        label: 'During this ...',
                        itemLabel: (skill) => `${skill.title}`
                    }
                ]
            }}
            sectionList={{
                items: workExperienceList,
                itemLabel: workExperienceItemLabel
            }}
        />
    )
}
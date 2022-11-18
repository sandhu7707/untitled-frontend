import FormSection from "./form-section.component";

export default function Skills(props) {

    const { skillList, workExperienceList, addItem } = props;

    const skillItemLabel = (item) => {
        // const experienceSuffix = <div className="section-list-experience-suffix">  </div>    TODO: make it fancy
        // const experienceSuffix = <div className="section-list-experience-suffix">  </div>
        // const experienceSuffix = <div className="section-list-experience-suffix">  </div>

        return `${item.title}`
    }

    return (
        <FormSection
            sectionName='Skills'
            sectionKey="skill"
            handleAdd = { addItem }
            inputs={{
                textInputs:  
                    [
                    {
                        name: 'title',
                        placeholder: 'Enter a skill',
                        label: 'Skill'
                    },
                    {
                        name: 'rating',
                        placeholder: 'Rate this skill out of 10',
                        label: 'Rating'
                    },
                    {
                        name: 'yearsOfExperience',
                        placeholder: 'Experience in years',
                        label: 'Years of Experience'
                    }
                    ],
                associatedInputs: [
                    {
                        name: 'experience',
                        items: workExperienceList,
                        label: 'Used at roles ',
                        itemLabel: (experience) => `${experience.jobTitle} at ${experience.company}`
                    }
            ]
        }}
        sectionList = {{
            items: skillList,
            itemLabel: skillItemLabel
        }}
        />
    )
}
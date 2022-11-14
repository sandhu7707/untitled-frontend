import FormSection from "./form-section.component";

export default function Skills(props){

    const { skillList, workExperienceList, addItem } = props;

    const skillItemLabel = (item) => {
        // const experienceSuffix = <div className="section-list-experience-suffix">  </div>    TODO: make it fancy
        // const experienceSuffix = <div className="section-list-experience-suffix">  </div>
        // const experienceSuffix = <div className="section-list-experience-suffix">  </div>

        return `${item.title}`
    }

    const sectionKey = "skill";

    return(<FormSection
        sectionName='Skills'
        sectionKey={sectionKey}
        initialValues={{
            title: '',
            rating: '',
            yearsOfExperience: '',
            experienceIds: []
        }}
        textInputs={[{
            name: 'title',
            placeholder: 'Enter a skill'
        },
        {
            name: 'rating',
            placeholder: 'Rate this skill out of 10'
        },
        {
            name: 'yearsOfExperience',
            placeholder: 'Experience in years'
        }
        ]}
        associatedInputs={[{
            name: 'experience',
            associationName: 'workExperience',
            label: 'Used at roles: ',
            itemLabel: (experience) => `${experience.jobTitle} at ${experience.company}`
        }]}
        sectionList={{
            items: skillList,
            itemLabel: skillItemLabel,
            itemKey: (i) => i.title    
        }}
        handleAdd={(item) => addItem(item, sectionKey, 'title')}
        associations={{workExperience: workExperienceList}}
    />)
}
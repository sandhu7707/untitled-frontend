import FormSection from "./form-section.component";
import "./portfolio-form.styles.scss"
import { useEffect } from "react";

export default function PortfolioForm({ resume, setResume, saveResume }) {

    useEffect(() => {
        window.addEventListener('beforeunload', (e) => {            //TODO : do this, however this is done!
            e.preventDefault()
            // return <alert>
            //     <h1>reloading will clear form inputs!!</h1>
            //     <button>Continue</button>
            //     <button onClick={() => {e.preventDefault()}}>Cancel</button>
            // </alert>
        })
    }, [])

    const addSkill = (skill) => {

        resume.skillList.push(skill)
        setResume(resume)
        console.log(resume)
    }

    return (
        <>
            <div className="portfolio-form">
                <FormSection
                    sectionName='Skills'
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
                        name: 'experienceIds',
                        label: 'Used at roles: ',
                        itemLabel: (experience) => `${experience.jobTitle} at ${experience.company}`
                    }]}
                    initialValues={{
                        title: '',
                        rating: '',
                        yearsOfExperience: '',
                        experienceIds: []
                    }}
                    sectionList={{
                        items: resume.skillList,
                        itemLabel: (i) => i.title,
                        itemKey: (i) => i.title    
                    }}
                    handleAdd={addSkill}
                    associations={{experienceIds: resume.workExperienceList}}
                />
                <button
                    className="save-resume-button"
                    onClick={saveResume}
                >
                    save resume
                </button>
            </div>
        </>
    )

}
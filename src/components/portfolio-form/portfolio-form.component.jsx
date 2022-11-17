import "./portfolio-form.styles.scss"
import { useEffect } from "react";
import Skills from "./skills.component";
import EducationHistory from "./education-history.component";

export default function PortfolioForm({ profile, setProfile, saveProfile }) {

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


    const addItem = (item, sectionKey) => {


        const list = profile[`${sectionKey}List`]
        const itemIdx = list.findIndex(i => i.id === item.id)

        console.log(itemIdx)
        if(itemIdx > -1){
            list.splice(list.indexOf(itemIdx), 1)
            list.push(item)
        }
        else{
            item.id = list.length + 1
            list.push(item)
        }

        setProfile(profile)
        console.log(profile)
    }

    return (
        <>
            <div className="portfolio-form">
                <Skills
                    addItem={addItem}
                    skillList={profile.skillList}
                    workExperienceList={profile.workExperienceList}
                />
                <EducationHistory
                    addItem={addItem}
                    educationList={profile.educationList}
                    projectList={profile.projectList}
                />
                <button
                    className="save-profile-button"
                    onClick={saveProfile}
                >
                    save profile
                </button>
            </div>
        </>
    )

}
import FormSection from "./form-section.component";
import "./portfolio-form.styles.scss"
import { useEffect } from "react";
import Skills from "./skills.component";

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


    const addItem = (item, sectionKey, identifier) => {

        console.log(sectionKey, identifier)

        const list = profile[`${sectionKey}List`]
        const itemIdx = list.findIndex(i => i[identifier] === item[identifier])

        console.log(itemIdx)
        if(itemIdx > -1){
            list.splice(list.indexOf(itemIdx), 1)
            list.push(item)
        }
        else{
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
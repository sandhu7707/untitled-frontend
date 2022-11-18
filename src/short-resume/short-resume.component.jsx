import { useState, useEffect } from "react"

import "./short-resume.styles.scss"

export default function ShortResume() {

    const [profile, setProfile] = useState(null); //TODO: use global state for profile !!!!!!!

    useEffect(() => {
        fetch('http://localhost:9909/profile', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:9909',
            }
        })
            .then(response => response.json())
            .then(data => setProfile(data))
            .catch(err => console.error(err))

    }, [])

    const skills = profile && profile.skillList.map(s => <div>{s.title}</div>)
    const workExperience = profile && profile.workExperienceList.map(w => <div>{w.company}</div>)
    const education = profile && profile.educationList.map(e => <div>{e.degree}</div>)
    const projects = profile && profile.projectList.map(p => <div>{p.title}</div>)

    return (
        <article className="short-resume">
            <div className="introduction">
                To Be Implemented :)
            </div>
            <div className="main-content">
            <section id="skills" className="collapsible-section">
                <h2 className="heading">Skills</h2>
                <div className="collapsible-content">
                    <p className="collapsible-content">
                        {skills}
                    </p>
                </div>
            </section>
            <section id="work-history" className="collapsible-section">
                <h2 className="heading">Work History</h2>
                <div className="collapsible-content">
                    {workExperience}
                </div> 
            </section>
            <section id="education" className="collapsible-section">
                <h2 className="heading">Education</h2>
                <div className="collapsible-content">
                    {education}
                </div>
            </section>
            <section id="relevant-college-projects" className="collapsible-section">
                <h2 className="heading">Relevant Projects From College</h2>
                <div className="collapsible-content">
                    {projects}
                </div>
            </section>
            </div>
            <section id="contact-me">
                <h2>Contact Me</h2>
                <form className="contact-form" action="https://formsubmit.co/2ecb270189f1ff5b2adc2dffee80da0e" method="POST">
                    <p className="contact-details">
                        <label>Name</label>
                        <input type="text" id="name" name="name" />
                    </p>
                    <p className="contact-details">
                        <label>
                            Email
                        </label>
                        <input type="email" id="email" name="email" />
                    </p>
                    <p className="message">
                        <label>Message</label>
                        <textarea id="message" name="message" rows="6"></textarea>
                    </p>
                    <div className="button-container"><button className="contact-button" type="submit"></button></div>
                </form>
            </section>
        </article>
    )
}
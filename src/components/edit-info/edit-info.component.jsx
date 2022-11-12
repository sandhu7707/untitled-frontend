import { useEffect, useState } from "react"
import PortfolioForm from "../portfolio-form/skills-form/portfolio-form.component";

export default function EditInfo() {

    const [resume, setResume] = useState(null);

    useEffect(() => {
        fetch('http://localhost:9909/resume', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:9909',
            }
        })
            .then(response => response.json())
            .then(data => setResume(data))
            .catch(err => console.error(err))

    }, [])

    const saveResume = () => {
        fetch('http://localhost:9909/resume', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:9909',
            },
            body: JSON.parse(resume)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))

    }

    return resume ? (
        <article 
            style={{
                width: '80vw',
                margin: 'auto'
            }}
        >
            <PortfolioForm
                resume={resume}
                setResume={setResume}
                saveResume={saveResume}
            />
        </article>
    ) : <div>Loading.....</div>
}
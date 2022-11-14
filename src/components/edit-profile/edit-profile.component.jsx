import { useEffect, useState } from "react"
import PortfolioForm from "../portfolio-form/portfolio-form.component";

export default function EditInfo() {

    const [profile, setProfile] = useState(null);

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

    const saveProfile = () => {
        fetch('http://localhost:9909/profile', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:9909',
            },
            body: JSON.parse(profile)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))

    }

    console.log(profile)

    return profile ? (
        <article 
            style={{
                width: '80vw',
                margin: 'auto'
            }}
        >
            <PortfolioForm
                profile={profile}
                setProfile={setProfile}
                saveProfile={saveProfile}
            />
        </article>
    ) : <div>Loading.....</div>
}
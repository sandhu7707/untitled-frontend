import ShortResume from '../../short-resume/short-resume.component'
import './home.styles.scss'

export default function Home(){


    return(
        <div className="home">
            <ShortResume />
            {/* <hgroup className="headings">
                <h1 className="headline">How are you ?</h1>
            </hgroup>
            <div className="type-container">
            <section className="type-item">Very good, thank you for asking!</section>
            <section className="type-item">Busy.</section>
            </div> */}
        </div>
    )
}
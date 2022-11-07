import './navbar.styles.scss'

export default function Navbar() {
    return(
        <div className="navbar">
            <a className="navbar-home-item" href="/">Home</a>
            <ul className="navbar-items">
                <li className="navbar-item">
                    <a href="/edit-info">Edit</a>
                </li>
            </ul>
        </div>
    )
}
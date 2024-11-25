import { NavLink } from "react-router-dom"

export default function MainMenu() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/posts-list">Post List</NavLink>
        </nav>
    )
}
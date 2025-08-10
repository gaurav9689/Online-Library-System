import React from "react"
import { Link } from "react-router-dom"
import "../App.css"; // Ensure this path is correct for your project structure


function NotFound() {

    return (
        <div className="notFound-container">
            <Link className="button" to="/">Back to Home Page</Link>
            <div>Not Found 404:</div>
        </div>
    )
}



export default NotFound
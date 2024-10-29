import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="hero ">
        <div className="text-center hero-content">
            <div className="max-w-lg">
                <h1 className="mb-8 text-8xl font-bold">Page Not Found</h1>
                <p className="mb-5">Sorry, we couldn't find the page you're looking for.</p>
                <Link to="/" className="btn btn-primary btn-lg"><FaHome></FaHome>Back to Home</Link>
            </div>
            </div>
            
            
    </div>
  )
}

export default NotFound
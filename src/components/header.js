import { Link } from "react-router-dom";
export default function Header() {
    return (
        <Link to="/cpu"><span className='text-red-500'>Pick a CPU</span></Link>
    )
}
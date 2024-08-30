import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <div className="bg-primary p-4 d-flex navbar">
    <Link to='/' style={{color:'#ffff', fontSize:'25px'}}>logo</Link>
      <Link to="/add">
   
        <button className="btn btn-light px-4">Add+</button>
      </Link>
    </div>
  );
}

export default Nav
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"



const Card = ({blog, onclick}) => {
  return (
    <>
      <div
        className="card col-lg-4 col-md-2 col-1 "
        style={{ maxwidth: 'calc(25%-10px)', margin: "5px" }}
      >
        <img
          src={blog.image}
          className="card-img-top "
          height={400}
          alt="pic"
        />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text"></p>
          <Link to={`/${blog.id}`} className="btn btn-primary me-2">
            Read more
          </Link>
          <Link className="btn btn-success me-2" to={`/edit/${blog.id}`}>Edit</Link>
          <Link className="btn btn-danger " onClick={() => onclick(blog.id)}>
            Delete
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card
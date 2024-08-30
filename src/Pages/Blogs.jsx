import axios from "axios"
import Card from "../Component/Card"
import { useEffect, useState } from "react"


// http://localhost:3000/blog
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


   const getStory =async()=>{
    try{
    const res = await axios.get("http://localhost:3000/blog");
    setBlogs(res.data)
    
    }catch(err){
        console.error("Error occurred", err.message)
        setError(err.message)

    }finally{
        setLoading(false)
    }

   } 
   useEffect(()=>{
    getStory()
   },[])

if(loading){
    return <div>Loading...</div>
}
if(error){
    return<div> {error}</div>
}

const Del = (id)=>{
    axios.delete(`http://localhost:3000/blog/${id}`).then(getStory());
}

  return (
    <div>
      <h1>Blogs</h1>
      <div className=" row">
        {blogs.map((blog) => {
          return <Card key={blog.id} blog={blog} onclick={Del} />;
        })}
      </div>
    </div>
  );
}

export default Blogs
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Story = () => {
    const [story, setStory] = useState()
    const {id} = useParams()

    const getStory = async()=>{
       const res =  await axios.get(`http://localhost:3000/blog/${id}`);
        setStory(res.data)
    }
    useEffect(()=>{
   getStory()
    },[])




  return (
    <div style={{height:'100vh'}}>
        <h1>{story?.title}</h1>
        <p>{story?.story}</p>
        <img src={story?.image} width="100%" height={800} style={{objectFit:'cover'}}/>
    </div>
  )
}

export default Story
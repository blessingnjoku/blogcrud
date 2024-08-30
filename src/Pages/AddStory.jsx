import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddStory = () => {
    const [title, setTitle]=useState('')
     const [image, setImage] = useState(null);
      const [story, setStory] = useState("");

const newContent = {
  title,
 story,
 image,
};

const handleImage=(e)=>{
    const file = e.target.files[0];
    const reading = new FileReader();
    reading.onloadend = (e) => {
        setImage(e.target.result);
       
    }
     if (file) {
       reading.readAsDataURL(file);
     }

}

const navigate = useNavigate()

const handleSubmit =async(e)=>{
    e.preventDefault()
    try{
  const res = await axios.post("http://localhost:3000/blog", newContent);
   console.log(res.data)
   navigate('/')
    }catch(err){
     console.error("Your error is ", err.message)
    }
 

}


  return (
    <form className="w-50 m-auto mt-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Story Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Story Title...."
        />
      </div>
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          placeholder="Story Title...."
          onChange={handleImage}
          name="image"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Your Story</label>
        <textarea
          className="form-control"
          rows="3"
          value={story}
          onChange={(e) => setStory(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary px-4">
        Add+
      </button>
    </form>
  );
}

export default AddStory
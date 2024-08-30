import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditStory = () => {
     const [title, setTitle] = useState("");
     const [image, setImage] = useState(null);
     const [story, setStory] = useState("");

      const { id } = useParams();
const newContent = {
  title,
  story,
  image,
};
      const handleImage = (e) => {
        const file = e.target.files[0];
        const reading = new FileReader();
        reading.onloadend = (e) => {
          setImage(e.target.result);
        };
        if (file) {
          reading.readAsDataURL(file);
        }
      };

      const getStory = async () => {
        const res = await axios.get(`http://localhost:3000/blog/${id}`);
        setTitle(res.data.title);
           setImage(res.data.image);
           setStory(res.data.story);
      };


      useEffect(() => {
        getStory();
      }, []);

      const navigate= useNavigate()
     
const handleSubmit=async(e)=>{
    e.preventDefault();
     await axios.put(`http://localhost:3000/blog/${id}`, newContent);
    navigate('/')

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

export default EditStory
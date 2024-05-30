import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const UpdatePage = () => {
  const assignment = useLoaderData();
  console.log(assignment)
  const { _id, thumbnail, title, mark, difficulty, description } = assignment;
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const location = useLocation()
  const navigate= useNavigate()
  const [imagePreview ,setImagePreview] =useState()
  const [imageText ,setImageText] =useState('Upload image')
  const from = location.state || '/assignments'
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const mark = form.mark.value;
    const difficulty = form.difficulty.value;
    const deadline = startDate;
    const description = form.description.value;
    const name = user?.displayName;
    const email = user?.email;

    const assignmentData = {
      title,
      thumbnail,
      mark,
      difficulty,
      deadline,
      description,
      name,
      email,
    };
    // console.log(assignmentData);

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/assignments/${_id}`,
        assignmentData
      );
      toast.success("Assignment update successfully");
      console.log(data);
      navigate(from)
    } catch (err) {
      console.log(err);
    }
  };
  const handleImage =image =>{
    setImagePreview(URL.createObjectURL(image))
    setImageText(image.name)
  }
  return (
    <div className="max-w-[850px] mx-auto ">
      <Helmet>
      <title> Update - Case Study </title>
    </Helmet>
      <h2 className="text-2xl font-bold font-poppins mb-4">
        Update Assignment
      </h2>
      {/* {successMessage && <p className="text-green-500">{successMessage}</p>} */}
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-xl font-serif mb-1 font-semibold">
            Title:
          </label>
          <input
            type="text"
            name="title"
            defaultValue={title}
            className="border rounded w-full p-2 input-bordered"
          />
        </div>
        <div>
          <label className="block mb-1 text-xl font-serif font-semibold">
            Thumbnail Image URL:
          </label>
          <input
            type="text"
            name="thumbnail"
            defaultValue={thumbnail}
            className="border rounded w-full p-2 input-bordered"
          />
        </div>

        <div>
          <label className="block mb-1 text-xl font-serif font-semibold">
            Marks:
          </label>
          <input
            type="number"
            name="mark"
            defaultValue={mark}
            className="border rounded w-full p-2 input-bordered"
          />
        </div>

        <div className="grid grid-cols-3 gap-7">
          <div className="">
            <label className="block mb-1 text-xl font-serif font-semibold">
              Difficulty Level:
            </label>
            <select
              name="difficulty"
              id="difficulty"
              defaultValue={difficulty}
              className="border rounded w-full p-2 input-bordered"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="">
            <label className="block mb-1 text-xl font-serif font-semibold">
              Due Date:
            </label>
            {/* <DatePicker name="dueDat"  className="border rounded w-full p-2 input-bordered" /> */}
            <DatePicker
              className="border p-2 rounded-md input-bordered"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
           {/* image Upload  */}
           <div className=' p-4 bg-white w-full  m-auto rounded-lg flex justify-around items-center'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      onChange={(e)=>handleImage(e.target.files[0])}
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-[#5447E0] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3
  '>
                     {imageText.length >20 ? imageText.split('.')[0].slice(0.15) +'...' + imageText.split('.')[1]:imageText}
                    </div>
                  </label>
                </div>
              </div>
              <div className='h-20 w-20 object-cover overflow-hidden flex items-center '>
              {imagePreview && <img className='rounded-lg border-2 border-[#f43f5e]' src={imagePreview}></img>}
              </div>
            </div>
        </div>
        <div>
          <label className="block mb-1 text-xl font-serif font-semibold">
            Description:
          </label>
          <textarea
            name="description"
            defaultValue={description}
            className="border rounded w-full p-2 input-bordered"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Assignment
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;

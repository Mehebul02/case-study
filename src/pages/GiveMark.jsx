import axios from "axios";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const GiveMark = () => {
  const assignment = useLoaderData();
  const {user} = useAuth()
  const { _id, title,email, url, note, mark, difficulty } = assignment;
  const status =' Completed'
  const handleGiveMark =async (e) => {
    e.preventDefault();
    const form = e.target;
    const mark = form.mark.value;
    const feedback = form.feedback.value
    const giveMark = {
      mark,
      feedback,status
    }
    try{
      if (user.email === email) {
        toast.error("Only examiner can submit assignment number.");
        return;
      }
      const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/update/${_id}`,giveMark)
      console.log(data)
      toast.success('Give mark successfully')

    }
    catch(err){
      console.log(err)
    }
    console.log(giveMark)
  };
  return (
    <div>
      <div className="max-w-[1320px] mx-auto mt-14 space-y-6">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <h1 className="text-2xl font-poppins font-semibold">
            Assignment Url:
          </h1>
          <input
            type="text"
            placeholder=""
            defaultValue={url}
            className="input input-bordered input-primary w-full max-w-xl"
          />
          <a
            href={url}
            target="_blank"
            className="text-blue-600 text-2xl font-poppins font-semibold  mr-10 visited:text-purple-600 ..."
          >
            <button className=" border-2 px-4 py-2 rounded-md"> visit</button>
          </a>
        </div>
        <h1 className="text-2xl font-poppins  text-center">
          Examinee Note:{" "}
          <span className="text-red-700 font-serif font-semibold">{note}</span>
        </h1>
        <form onSubmit={handleGiveMark}>
          <div className="text-center">
            <input
              type="text"
              placeholder="Enter the marks"
              name="mark" required
              className="input input-bordered input-primary w-full max-w-xl"
            />
            <br />
            <div className="mt-10">
              <textarea
                name="feedback"
                placeholder=" Feedback........"
                rows="4" required
                className="textarea textarea-bordered  textarea-lg w-full max-w-xl"
              ></textarea>
            </div>
            <button className="text-xl font-poppins bg-green-700 text-white rounded-md px-4 py-2 mt-6">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiveMark;

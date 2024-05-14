import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const AssignmentSubForm = () => {
  const assignment = useLoaderData();
  const navigate= useNavigate()
  const {user} = useAuth()
  const { _id,  thumbnail, title, email,description, mark, difficulty } =
    assignment;
const status = 'Pending'
const  feedback=''
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const url = form.url.value;
    const note = form.note.value;
    const email = user?.email
    const name = user?.displayName
    const submitData = {
      title,
      mark,
      difficulty,
      url,
      note,
      status,
      feedback,
      name,
      email,
      
    };
    try {
      if (user.email !== email) {
        toast.error("The person creating the assignment cannot submit it.");
        return;
      }

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/submits`,
        submitData
      );
      toast.success('Assignment submit successfully')
      navigate('/assignments')
      form.reset()
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="max-w-[1020px] mx-auto bg-base-200 p-10 rounded-xl shadow-lg">
      <Helmet>
      <title> Submit- Case Study </title>
    </Helmet>
      <h1 className="text-3xl font-poppins text-center font-semibold text-red-700">
        Assignment Submission Form
      </h1>
{/* <h1>{_id}</h1> */}
      <form onSubmit={handleSubmit}>
        <div className="text-center mt-14 space-y-4">
          <input
            type="text"
            name="url" required
            placeholder="Assignment Url"
            className="input input-bordered input-warning w-full max-w-2xl"
          />
          <br />
          <textarea
            name="note"
            placeholder="Quick Note........"
            rows="4" required
            className="textarea textarea-bordered  textarea-lg w-full max-w-2xl"
          ></textarea>
        </div>
        <div className="text-center mt-10">
          <button className="text-xl font-poppins bg-green-700 text-white rounded-md px-4 py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignmentSubForm;

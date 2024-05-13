import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AssignmentSubForm = () => {
  const assignment = useLoaderData();
  const {user} = useAuth()
  const { _id,  thumbnail, title, description, mark, difficulty } =
    assignment;
const status = 'Pending'
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
      name,
      email,
      
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/submits`,
        submitData
      );
      toast.success('Assignment submit successfully')
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="max-w-[1020px] mx-auto bg-base-200 p-10 rounded-xl shadow-lg">
      <h1 className="text-3xl font-poppins text-center font-semibold text-red-700">
        Assignment Submission Form
      </h1>
{/* <h1>{_id}</h1> */}
      <form onSubmit={handleSubmit}>
        <div className="text-center mt-14 space-y-4">
          <input
            type="text"
            name="url"
            placeholder="Assignment Url"
            className="input input-bordered input-warning w-full max-w-2xl"
          />
          <br />
          <textarea
            name="note"
            placeholder="Quick Note........"
            rows="4"
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

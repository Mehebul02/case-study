import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AssignmentCard = ({ assignment,getData, }) => {
  const { user } = useAuth();
  const { _id, email, thumbnail, title, mark, difficulty } = assignment;

  const handleDelete = async (_id) => {
    try {
      if (user.email !== email) {
        toast.error("You can only delete assignments created by you.");
        return;
      }
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/assignments/${_id}`
      );

      console.log(data);
      toast.success("Assignment delete successfully");
      // const remaining =assignments.filter(i => i._id !== _id)
      // setAssignments(remaining)
      getData()
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={thumbnail} className="" />
      <h3 className="text-lg font-poppins font-semibold">{title}</h3>
      <p className="text-gray-600 mb-2">Marks: {mark}</p>
      <p className="text-gray-600 mb-2">Difficulty: {difficulty}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
        <Link to={`/update/${_id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Update
          </button>
        </Link>

       <Link to={`/details/${_id}`}>
       <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          View
        </button>
       </Link>
      </div>
    </div>
  );
};

export default AssignmentCard;

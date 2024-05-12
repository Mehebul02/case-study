import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const assignment = useLoaderData();
  const { _id, email, thumbnail, title,description, mark, difficulty } = assignment;

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col  lg:flex-row">
          <img src={thumbnail} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">
             {description}
            </p>
           <div className="space-y-2">
           <p className="font-poppins font-semibold">Mark:<span className="">{mark}</span></p>
           <p className="text-gray-600 mb-2">Difficulty: {difficulty}</p>
           </div>
           <Link to={`/submit/${_id}`}>
           <button className="text-xl font-poppins mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-60 ">Take Assignment</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

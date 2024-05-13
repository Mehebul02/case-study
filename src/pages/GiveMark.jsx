import { Link, useLoaderData } from "react-router-dom";

const GiveMark = () => {
  const assignment = useLoaderData();
  const { _id,  title, url,note, mark, difficulty } =
    assignment;
  return (
    <div>
      <div className="max-w-[1320px] mx-auto mt-14 space-y-6">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <h1 className="text-2xl font-poppins font-semibold">
          Assignment Url:
          </h1>
          <input
            type="text" 
            placeholder=''
            
            className="input input-bordered input-primary w-full max-w-xl"
          />
          <a href={url} target="_blank" className="text-blue-600 text-2xl font-poppins font-semibold  mr-10 visited:text-purple-600 ...">
           <button className=" border-2 px-4 py-2 rounded-md"> visit</button>
          </a>
        
        </div>
        <h1 className="text-2xl font-poppins  text-center">Examinee Note: <span className="text-red-700 font-serif font-semibold">{note}</span></h1>
        <div className="text-center">
        <input
            type="text" 
            placeholder='Enter the marks'
            
            className="input input-bordered input-primary w-full max-w-xl"
          />
          <br />
           <div className="mt-10">
           <textarea
            name="note"
            placeholder=" Feedback........"
            rows="4"
            className="textarea textarea-bordered  textarea-lg w-full max-w-xl"
          ></textarea>
           </div>
          <button className="text-xl font-poppins bg-green-700 text-white rounded-md px-4 py-2 mt-6">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiveMark;

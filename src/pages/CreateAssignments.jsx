import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateAssignments = () => {
    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <div className="max-w-[850px] mx-auto ">
        <h2 className="text-2xl font-bold font-poppins mb-4">Create Assignment</h2>
        {/* {successMessage && <p className="text-green-500">{successMessage}</p>} */}
        <form  className="space-y-4">
          <div>
            <label className="block text-xl font-serif mb-1 font-semibold">Title:</label>
            <input
              type="text"
              
              name="title"
              className="border rounded w-full p-2 input-bordered"
            />
          </div>
          <div>
            <label className="block mb-1 text-xl font-serif font-semibold">Thumbnail Image URL:</label>
            <input
              type="text"
              name="thumbnail"
              className="border rounded w-full p-2 input-bordered"
            
            />
          </div>
          
          <div>
            <label className="block mb-1 text-xl font-serif font-semibold">Marks:</label>
            <input
              type="number"
              name="mark"
             
              className="border rounded w-full p-2 input-bordered"
            />
          </div>
          
         <div className="grid grid-cols-6 gap-7">
         <div className="col-span-3"> 
            <label className="block mb-1 text-xl font-serif font-semibold">Difficulty Level:</label>
            <select value='' name="difficulty"  className="border rounded w-full p-2 input-bordered">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="col-span-3">
            <label className="block mb-1 text-xl font-serif font-semibold">Due Date:</label>
            {/* <DatePicker name="dueDat"  className="border rounded w-full p-2 input-bordered" /> */}
            <DatePicker 
                className="border p-2 rounded-md input-bordered"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />

          </div>

         </div>
          <div>
            <label className="block mb-1 text-xl font-serif font-semibold">Description:</label>
            <textarea
              name="description"
            
              className="border rounded w-full p-2 input-bordered"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600">Create Assignment</button>
        </form>
      </div>
    );
};

export default CreateAssignments;
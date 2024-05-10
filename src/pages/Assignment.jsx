import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
// import { IoIosArrowDown } from "react-icons/io";

const Assignment = () => {
 const [assignments ,setAssignments] = useState([])
const [filter , setFilter]= useState('')
  useEffect(() => {
    getData();
  }, [filter]);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/assignments?filter =${filter}`);
    // console.log(data);
    setAssignments(data)
  };
  console.log(assignments)
  return (
    <div>
      <div className="max-w-[1300px] mx-auto text-center">
      {/* <div className="dropdown dropdown-end ">
  <div tabIndex={0} role="button" className="bg-green-700 px-6 m-1 flex items-center gap-3 text-white py-2 font-serif text-xl font-semibold mt-7 rounded-lg">Filter <IoIosArrowDown/></div>
  <ul tabIndex={0} className="dropdown-content  z-[1] menu p-2 text-xl font-medium font-serif shadow bg-base-200 rounded-box w-52">
    <li ><a>easy</a></li>
    <li><a>medium</a></li>
    <li><a>hard</a></li>
  </ul>
</div> */}
<select
              onChange={e => {
                setFilter(e.target.value)
                
              }}
              value={filter}
              name='difficulty'
              id='difficulty'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
      }
      
    </div>
    </div>
    </div>
  );
};

export default Assignment;

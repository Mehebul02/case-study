import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";

// import { IoIosArrowDown } from "react-icons/io";

const Assignment = () => {
 const [assignments ,setAssignments] = useState([])
const{user}=useAuth()
const [filteredAssignments, setFilteredAssignments] = useState([]);
const [filter, setFilter] = useState('');
  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/assignments`);
    // console.log(data);
    setAssignments(data)
  };
  console.log(assignments)

  useEffect(() => {
    if (filter !== '') {
      const filtered = assignments.filter(assignment => assignment.difficulty === filter);
      setFilteredAssignments(filtered);
    } else {
      setFilteredAssignments(assignments);
    }
  }, [filter, assignments]);

  return (
    <div>
      <Helmet>
      <title> Assignment- Case Study </title>
    </Helmet>
      <div className="max-w-[1300px] mx-auto text-center">
  
<select
               onChange={(e) => setFilter(e.target.value)}
              value={filter}
              name='difficulty'
              id='difficulty'
              className='border-2 p-4 rounded-lg border-green-800'
            >
              <option value=''>Filter By Category</option>
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {
        filteredAssignments.map(assignment => <AssignmentCard key={assignment._id} 
         getData={getData}
          assignments ={assignments}
          setAssignments={setAssignments}
          assignment={assignment}></AssignmentCard>)
      }
      
    </div>
    </div>
    </div>
  );
};

export default Assignment;

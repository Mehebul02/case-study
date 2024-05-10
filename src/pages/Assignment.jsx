import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";

const Assignment = () => {
 const [assignments ,setAssignments] = useState([])

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/assignments`);
    // console.log(data);
    setAssignments(data)
  };
  console.log(assignments)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
      }
      
    </div>
  );
};

export default Assignment;

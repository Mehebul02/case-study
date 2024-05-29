const Student = ({ submit }) => {
//   const { mark } = submit;
const pendingAssignments = submit?.filter(assignment => assignment.status === 'Pending');
console.log(pendingAssignments);


  return <div>
    {/* totalMark:{totalMark} */}
  </div>;
};

export default Student;

import { FaBook } from "react-icons/fa";
import Card from "../../components/StudentInfo/Card";
import useAuth from "../../hooks/useAuth";
import useSubmit from "../../hooks/useSubmit";
import { GoBookmark } from "react-icons/go";
import { MdPendingActions } from "react-icons/md";

const StudentHome = () => {
 
    const {user} = useAuth()
    const [mySubmits] = useSubmit();
    const pendingAssignments = mySubmits?.filter(assignment => assignment.status === 'Pending');
  const totalMark = mySubmits?.reduce((total, assignment) => total +Number( assignment.mark), 0) || 0;

    console.log(mySubmits);
    return (
        <div className="p-14">
            <h1 className="text-5xl text-[#5449E0] font-bold">Hi ,Welcome {user?.displayName}</h1>
           
            <div className="flex flex-wrap gap-5 my-10">
            <Card  icon={FaBook} total={mySubmits.length} label='Assignment' bgColor='bg-purple-500' />
            <Card  icon={GoBookmark} total={totalMark} label='Mark' bgColor='bg-blue-500' />
            <Card  icon={MdPendingActions} total={pendingAssignments.length} label='Pending' bgColor='bg-purple-500' />
           
            </div>
          
         
        </div>
    );
};

export default StudentHome;
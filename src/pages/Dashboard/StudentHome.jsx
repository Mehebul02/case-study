import { FaBook } from "react-icons/fa";
import Card from "../../components/StudentInfo/Card";
import useAuth from "../../hooks/useAuth";
import useSubmit from "../../hooks/useSubmit";
import { GoBookmark } from "react-icons/go";
import { MdOutlineFileDownloadDone, MdPendingActions } from "react-icons/md";
import { HashLoader } from "react-spinners";

const StudentHome = () => {
 
    const {user,loading} = useAuth()
    const [mySubmits,isLoading] = useSubmit();

    if (isLoading || loading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <HashLoader height={140} radius={9} width={40} color="#36d7b7" />
          </div>
        );
      }
    const pendingAssignments = mySubmits?.filter(assignment => assignment.status === 'Pending');
    const completedAssignments = mySubmits?.filter(assignment => assignment.status === ' Completed');
  const totalMark = mySubmits?.reduce((total, assignment) => total +Number( assignment.mark), 0) || 0;

    console.log(mySubmits);
    return (
        <div className="p-14">
            <h1 className="text-5xl text-[#5449E0] font-bold">Hi ,Welcome {user?.displayName}</h1>
           
            <div className="flex flex-wrap gap-5 my-10">
            <Card  icon={FaBook} total={mySubmits.length} label='Assignment' bgColor='bg-purple-500' />
            <Card  icon={GoBookmark} total={totalMark} label='Total Mark'bgColor='bg-blue-500' />
            <Card  icon={MdPendingActions} total={pendingAssignments.length} label='Pending' bgColor='bg-purple-500' />
            <Card  icon={MdOutlineFileDownloadDone} total={completedAssignments.length} label='Complete' bgColor='bg-cyan-600' />
           
            </div>
            <div className="w-1/2  bg-[#ffedd5] rounded-md p-10 ">
          <div className="avatar flex justify-center items-center">
            <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} />
            </div>
          </div>
          <h1 className="text-3xl text-center font-semibold my-6">
         {user?.displayName}
      </h1>
        </div>

         
        </div>
    );
};

export default StudentHome;
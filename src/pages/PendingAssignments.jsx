import { Link, useLoaderData } from "react-router-dom";

const PendingAssignments = () => {
    const assignment = useLoaderData()
//     const {  _id,email,name, thumbnail, title,description, mark, difficulty } = assignment;
// console.log(assignment._id)
    return (
        <div className="max-w-[1320px] mx-auto">
            <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-black ">Pending Assignment</h2>

        <span className="px-3 py-1 text-xs bg-[#544CE0] font-poppins font-medium text-blue-100 rounded-full ">
          {assignment.length} 
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-500">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4  text-left rtl:text-right text-white font-poppins font-bold text-sm"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>No</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5  text-left rtl:text-right  text-white font-poppins font-bold text-sm"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Title</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left rtl:text-right  text-white font-poppins font-bold text-sm"
                    >
                      Marks
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5  text-sm text-left rtl:text-right  text-white font-poppins font-bold "
                    >
                       Examinee Name
                    </th>

                    <th className="px-4 py-3.5 text-sm  text-left rtl:text-right  text-white font-poppins font-bold  ">
                      
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                {assignment.map((submit,idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {idx+1}
                        </td>
  
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                         {submit.title}
                        </td>
  
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {submit.mark}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          {submit.name}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <Link to={`/give-mark/${submit._id}`}>
                          <button className="btn-link  font-poppins">Give Mark</button>
                          </Link>
                        </td>
                        
                       
                      </tr>
                    ))}



                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default PendingAssignments;
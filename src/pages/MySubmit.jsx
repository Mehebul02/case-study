import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

import { Link } from "react-router-dom";
import axios from "axios";

const MySubmit = () => {
  const { user } = useAuth();
  const [submits, setSubmits] = useState([]);
  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/my-submit/${user?.email}`);
    setSubmits(data);
  };

  return (
    <div className="max-w-[1320px] mx-auto">
      <section className="container px-4 mx-auto pt-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">
            My Submit Assignment
          </h2>

          <span className="px-3 py-1 bg-[#544CE0] font-poppins font-medium  text-xs  text-white rounded-full ">
            {submits.length} Job
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
                        className="py-3.5 px-4  text-left rtl:text-right  text-white font-poppins font-bold text-sm"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>No</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Title</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm"
                      >
                        Marks
                      </th>

                      <th className="px-4 py-3.5  text-left rtl:text-right text-white font-poppins font-bold text-sm">
                        Feedback
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {submits.map((submit, idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {idx + 1}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {submit.title}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {submit.status}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          {submit.mark}
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

export default MySubmit;

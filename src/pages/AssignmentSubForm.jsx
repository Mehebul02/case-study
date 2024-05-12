const AssignmentSubForm = () => {
  return (
    <div className="max-w-[1020px] mx-auto bg-base-200 p-10 rounded-xl shadow-lg">
      <h1 className="text-3xl font-poppins text-center font-semibold text-red-700">
        Assignment Submission Form
      </h1>

      <div className="text-center mt-14 space-y-4">
        <input
          type="text"
          placeholder="Assignment Url"
          className="input input-bordered input-warning w-full max-w-2xl"
        />
        <br />
        <textarea
          placeholder="Quick Note........"
          rows="4"
          className="textarea textarea-bordered  textarea-lg w-full max-w-2xl"
        ></textarea>

        
      </div>
      <div className="text-center mt-10">
      <button className="text-xl font-poppins bg-green-700 text-white rounded-md px-4 py-2">Submit</button>
      </div>
    </div>
  );
};

export default AssignmentSubForm;

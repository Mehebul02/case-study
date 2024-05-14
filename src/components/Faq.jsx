const Faq = () => {
  return (
    <div className="max-w-[1200px] mx-auto  mt-10">
      
     <div className=" ">
     <h1 className="text-3xl font-poppins font-bold text-black text-center">Frequently Asked Questions</h1>
      <p className="text-center  ">Find questions and answers related to the design system purchase, update,and support</p>
      <div className="divider"></div>
     </div>
     <div className="space-y-8">
     <div className="collapse collapse-arrow bg-base-200 border mt-10">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is Case Study?
        </div>
        <div className="collapse-content">
          <p>
            What is Case Study? At Case Study, you're never alone. Our Focus
            Room is a shared virtual study space where students from all over
            the world work independently in a supportive and uplifting
            environment. We also have interactive features and spaces where you
            can make meaningful connections with others. Join us to boost your
            focus, reach your personal goals, and connect with like-minded
            students.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What should I do first?
        </div>
        <div className="collapse-content">
          <p>
            Start in the Focus Room; it's like a virtual library study space.
            'Pin' other users to create a personalized experience and send
            'encouragements' to support and motivate others to keep going. You
            could also enter a Public pod and chat with other users!
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        How much does Case Study cost?
        </div>
        <div className="collapse-content">
          <p>Case Study is completely free to use! You're welcome 😁</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Faq;

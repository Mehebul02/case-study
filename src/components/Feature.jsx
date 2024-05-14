
export default function Component() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32  lg:p-7 ">
 <div className=" ">
     <h1 className="text-4xl font-poppins font-bold text-black text-center"> Feature section</h1>
      <p className="text-center p-3 lg:w-1/2 mx-auto  ">Case Study :Join or create study groups based on your interests and subjects, fostering collaboration and peer support.Shared Resources: Access a wealth of study materials, including notes, presentations, and practice quizzes, shared by fellow students.</p>
      <div className="divider"></div>
     </div>
       
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:px-6">
          <div className="rounded-lg  p-6  transition-all hover:scale-[1.02] hover:shadow-md border shadow-lg bg-gray-200 ">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 ">
              <BoltIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Blazing Fast</h3>
            <p className="text-sm text-gray-600 dark:text-gray-500">
              Our platform is optimized for lightning-fast performance, ensuring your applications load in the blink of an
              eye.
            </p>
          </div>
          <div className="rounded-lg  p-6  transition-all hover:scale-[1.02] hover:shadow-md border shadow-lg bg-gray-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 ">
              <LayersIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Scalable</h3>
            <p className="text-sm text-gray-600 dark:text-gray-500">
              Our infrastructure scales seamlessly to handle your growing needs, whether you have 10 users or 10 million.
            </p>
          </div>
          <div className="rounded-lg  p-6  transition-all hover:scale-[1.02] hover:shadow-md border shadow-lg bg-gray-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 ">
              <ShieldCheckIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Secure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-500">
              We take security seriously, with enterprise-grade encryption and compliance features to keep your data safe.
            </p>
          </div>
          <div className="rounded-lg  p-6  transition-all hover:scale-[1.02] hover:shadow-md border shadow-lg bg-gray-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 ">
              <AlignCenterHorizontalIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Customizable</h3>
            <p className="text-sm text-gray-600 dark:text-gray-500">
              Our platform is highly customizable, allowing you to tailor it to your unique business needs and branding.
            </p>
          </div>
          <div className="rounded-lg  p-6  transition-all hover:scale-[1.02] hover:shadow-md border shadow-lg bg-gray-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 ">
              <BriefcaseIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Enterprise-Ready</h3>
            <p className="text-sm text-gray-600 dark:text-gray-500">
              Our platform is trusted by leading enterprises, with enterprise-grade features and support.
            </p>
          </div>
          <div className="rounded-lg  p-6  transition-all hover:scale-[1.02] hover:shadow-md border shadow-lg bg-gray-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <SparklesIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Innovative</h3>
            <p className="text-sm text-gray-600 dark:text-gray-500">
              We're constantly innovating and adding new features to help you stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  function AlignCenterHorizontalIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h20" />
        <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
        <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
        <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
        <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
      </svg>
    )
  }
  
  
  function BoltIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    )
  }
  
  
  function BriefcaseIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    )
  }
  
  
  function LayersIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </svg>
    )
  }
  
  
  function ShieldCheckIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
  
  
  function SparklesIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
      </svg>
    )
  }
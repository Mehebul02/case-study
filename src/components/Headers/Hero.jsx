import { BiWorld } from 'react-icons/bi';
import banner1 from '../../assets/images/banner1.avif'
const Hero = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className=" flex flex-col  p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ">
            
            <div className="flex flex-col justify-center p-6 text-center rounded-sm   lg:text-left">
               <div className='flex items-center gap-2'>
               <div className=  'w-4 h-4  f rounded-full  bg-green-600'>
                   

                   </div>
                   <h1 className='text-sm font-poppins font-medium'>122 Online Now</h1>
               </div>
                <h1 className="text-5xl font-poppins font-semibold leading-none sm:text-5xl p-2">Working towards your <br />dreams is hard. Not <br />reaching them is harder
                   
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12 flex items-center gap-2">Get work done with other from 
                    <br  className="hidden md:inline lg:hidden" /> around the < BiWorld></BiWorld>
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Suspendisse</a>
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Let's Go</a>
                </div>
            </div>
            <div className="grid grid-cols-2 w-1/2 gap-10">
                {/* <img src={banner1} alt="" className="object-contain w-1/2 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                <img src={banner1} alt="" className="object-contain w-1/2 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                <img src={banner1} alt="" className="object-contain w-1/2 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                <img src={banner1} alt="" className="object-contain w-1/2 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
           <div>
           <img src={banner1} className='rounded-md'  alt="" />
           </div>
           <div>
           <img src={banner1}  alt="" />
           </div>
           <div>
           <img src={banner1}  alt="" />
           </div>
           <div>
           <img src={banner1}  alt="" />
           </div>
           
            </div>
        </div>
    </section>
  )
};

export default Hero;
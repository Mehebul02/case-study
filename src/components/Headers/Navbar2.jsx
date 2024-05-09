import flower from '../../assets/images/Avatar_flower.png'
const Navbar2 = () => {
    return (
        <div className='flex flex-col  lg:flex-row justify-center items-center bg-gradient-to-r p-3 from-[#5434DC] to-[#5691EE]'>
       <h1 className="text-sm font-poppins text-white text-center">“Do what is right, not what is easy.”</h1>
    <img className='w-5' src={flower} alt="" />
    </div>
    );
};

export default Navbar2;
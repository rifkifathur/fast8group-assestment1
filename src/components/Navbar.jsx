const Navbar = () => {

    return (
        <nav className='h-auto flex justify-end sticky bg-white'>
            <div className='flex justify-between items-center h-16 w-full shadow-md px-4 md:px-16'>
                <div>
                    <div className="w-[24px] h-[5px] bg-slate-600 m-1 rounded-md"></div>
                    <div className="w-[24px] h-[5px] bg-slate-600 m-1 rounded-md"></div>
                    <div className="w-[24px] h-[5px] bg-slate-600 m-1 rounded-md"></div>
                </div>
                <div>
                    <img src="/assets/gadjian.svg" alt="search" width={120} className="block md:hidden"/>
                </div>
                <div className='flex basis-1/2 justify-end items-center box-content px-8'>
                    <p className="mx-2">Hallo, <span className="text-[#00a090]">Gadjian User</span></p>
                    <div className="text-xs border border-black w-[50px] h-[50px] rounded-[50%]">
                        <p className="my-3.5 mx-2">Photo</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
// import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const sideList = [
        {
            id: 1,
            txt: 'Beranda',
            icon: '/assets/beranda.svg',
            link: '/beranda',
            color: 'text-[#000]'
        },
        {
            id: 2,
            txt: 'Personnel List',
            icon: '/assets/team.svg',
            link: '/personnel-list',
            color: 'text-[#00a090]'
        },
        {
            id: 3,
            txt: 'Daily Attendance',
            icon: '/assets/calender.svg',
            link: '/daily-attendance',
            color: 'text-[#000]'
        }
    ]

    return (
        <aside className='flex flex-col w-60 h-full top-0 bg-white text-white fixed hidden md:block'>
            <div className='p-2 mx-9'>
                <img src="/assets/gadjian.svg" alt="search" width={120}/>
            </div>
            <div className='mt-8'>
                <div className='ml-8'>
                    <ul className='text-lg'>
                        {sideList.map(item => {
                            return (
                                <li key={item.id} className='py-3 px-2 flex rounded-md cursor-pointer'>
                                    <img src={item.icon} alt='item.txt' className='mx-2' width={24} />
                                    <span className={item.color}>{item.txt}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Container from "../components/Container";
import Header from "../components/Header";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const PersonnelList = () => {

    const data = useSelector(state => state);
    const [personnel, setPersonnel] = useState([]);
    const [pagi, setPagi] = useState(1);
    const [pages, setPages] = useState(1);
    const [disablePrev, setDisablePrev] = useState(false);
    const [disableNext, setDisableNext] = useState(true);

    useEffect(() => {
        if (data.loading) {
            console.log("load");
        } else {
            let trimStart = (pagi - 1) * 4;
            let trimEnd = trimStart + 4;
            let resultData = data.personnel.results.slice(trimStart, trimEnd);
            let pages = data.personnel.results.length / 4;
            setPersonnel(resultData);
            setPages(pages);
        }

        if (pagi === 1) {
            setDisablePrev(false);
        } else if (pagi === pages) {
            setDisableNext(false);
        }
    }, [data, pagi, pages])

    const handleNext = () => {
        if (pagi < pages) {
            setPagi(pagi + 1);
            setDisablePrev(true);
        }
    }
    const handlePrev = () => {
        if (pagi > 1) {
            setPagi(pagi - 1);
            setDisableNext(true);
        }
    }
    return (
        <>
            <Navbar />
            <Sidebar />
            <Main>
                <Container>
                    {data.loading ? (
                        <p>loading</p>
                    ) : (
                        <>
                            <Header>
                                <div className='flex justify-between flex-col lg:flex-row'>
                                    <div>
                                        <p className='font-bold text-xl text-[#00a090]'>PERSONNEL LIST</p>
                                        <p>List off all personnel</p>
                                    </div>
                                    <div className='flex flex-col lg:flex-row'>
                                        <div className="self-start md:self-center relative w-[100%] my-2">
                                            <img src="./assets/search.svg" alt="search" width={24} className="absolute left-2 top-2" />
                                            <input type='search' placeholder='Find Personnels' className="mr-3 lg:w-auto w-[100%] h-10 border border-gray-400 self-center pl-8 font-bold" />
                                        </div>
                                        <div className='bg-[#00a090] h-10 self-start md:self-center relative p-2 w-[100%]'>
                                            <button className="md:mr-4 text-white font-bold">ADD PERSONNEL</button>
                                            <img src="./assets/plus.svg" alt="search" width={16} className="absolute right-2 top-3" />
                                        </div>
                                    </div>
                                </div>
                            </Header>
                            <div className="flex flex-col lg:flex-row">
                                {personnel.map((item, i) => {
                                    return (
                                        <div key={i}>
                                            <Card>
                                                <div className='flex justify-between border-b border-slate-600 p-3'>
                                                    <p>Personnel ID: <span className="text-[#00a090]">{item.id.value}</span></p>
                                                    <img src='/assets/dot.svg' alt='item.txt' width={24} />
                                                </div>
                                                <div className="p-3 flex md:block justify-start">
                                                    <div className='text-center p-8 md:p-8 flex justify-center'>
                                                        <img src={item.picture.large} alt="" className="rounded-[50%]"/>
                                                    </div>
                                                    <div className="ml-5">
                                                        <ul>
                                                            <li className="font-bold text-md">Name</li>
                                                            <li className="text-lg break-words">{item.name.first} {item.name.last}</li>
                                                        </ul>
                                                        <ul>
                                                            <li className="font-bold text-md">Telephone</li>
                                                            <li className="text-lg break-words">{item.cell}</li>
                                                        </ul>
                                                        <ul>
                                                            <li className="font-bold text-md hidden md:block">Birthday</li>
                                                            <li className="text-lg break-words hidden md:block">{item.dob.date}</li>
                                                        </ul>
                                                        <ul>
                                                            <li className="font-bold text-md hidden md:block">Email</li>
                                                            <li className="text-lg break-words hidden md:block">{item.email}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    )}
                </Container>
                <div className='flex mx-[35%] my-4'>
                    <div className="flex  w-[200px]">
                        <img src='/assets/prev.svg' alt='item.txt' width={24} className={disablePrev ? "opaciry-100" : "opacity-50 cursor-no-drop"} onClick={handlePrev} />
                        <button className={disablePrev ? "opaciry-100" : "opacity-50 cursor-no-drop"} onClick={handlePrev}>Previous Page</button>
                    </div>
                    <div className="flex w-[100px]">
                        <button className={disableNext ? "opaciry-100" : "opacity-50 cursor-no-drop"} onClick={handleNext}>Next Page</button>
                        <img src='/assets/next.svg' alt='item.txt' width={24} className={disableNext ? "opaciry-100" : "opacity-50 cursor-no-drop"} onClick={handleNext} />
                    </div>
                </div>
            </Main>
        </>
    );
};

export default PersonnelList;
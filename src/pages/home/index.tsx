import { Fragment ,useRef,useEffect} from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Business', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'News', href: '#' },
]

const business=[
    {
        img:'https://cdn.discordapp.com/attachments/882986018280726578/883178197846470666/inch.png',
        title:'Research and Analysis  ',
        text:'Defi, Web3.0, NFT, crosschain infrastructure, distributed storage, etc'
    },
    {
        img:'https://cdn.discordapp.com/attachments/882986018280726578/883178197846470666/inch.png',
        title:'Venture Capital',
        text:'Investment portfolio comprises (not constrained to specific jurisdiction) token and equity investment.'
    },
    {
        img:'https://cdn.discordapp.com/attachments/882986018280726578/883178197846470666/inch.png',
        title:'Digital currency  management',
        text:'Customers like private equity, industry fund, fund of fund, investment institutions, individuals, etc'
    },
    {
        img:'https://cdn.discordapp.com/attachments/882986018280726578/883178197846470666/inch.png',
        title:'Accelerator & Consultancy',
        text:'Services include research and analysis, strategic planning, structure construction, legal compliance, market solutions, etc'
    }

]
const portfolio =[
    {
    number:"1",
    href:'',
    img:"https://www.ti-capital.co/uploads/images/20210712/1626096572305370.png",
    },
    {
        number:"2",
        href:'',
        img:"https://www.ti-capital.co/uploads/images/20210712/1626096572305370.png",
    },
    {
        number:"3",
        href:'',
        img:"https://www.ti-capital.co/uploads/images/20210712/1626096572305370.png",
    },
    {
        number:"4",
        href:'',
        img:"https://www.ti-capital.co/uploads/images/20210712/1626096572305370.png",
    },
    {
        number:"5",
        href:'',
        img:"https://www.ti-capital.co/uploads/images/20210712/1626096572305370.png",
    },
    {
        number:"6",
        href:'',
        img:"https://www.ti-capital.co/uploads/images/20210712/1626096572305370.png",
    },
    {
        number:"7",
        href:'',
        img:"https://www.ti-capital.co/uploads/images/20210712/1626096572305370.png",
    },

]

export default function Home() {
    let dot1=useRef(null)
    let dot2=useRef(null)
    let dot3=useRef(null)
    let dot4=useRef(null)
    let mobile=useRef(null)
    const TapDot1=()=>{
        // @ts-ignore
        mobile.current.style.transform="translateX(-0%)"
        dot1.current.style.background="yellow"
        dot2.current.style.background=""
        dot3.current.style.background=""
        dot4.current.style.background=""

    }
    const TapDot2=()=>{
        mobile.current.style.transform="translateX(-21%)"
        dot2.current.style.background="yellow"
        dot1.current.style.background=""
        dot3.current.style.background=""
        dot4.current.style.background=""
    }
    const TapDot3=()=>{
        mobile.current.style.transform="translateX(-50%)"
        dot3.current.style.background="yellow"
        dot1.current.style.background=""
        dot2.current.style.background=""
        dot4.current.style.background=""
    }
    const TapDot4=()=>{
        mobile.current.style.transform="translateX(-72%)"
        dot4.current.style.background="yellow"
        dot1.current.style.background=""
        dot2.current.style.background=""
        dot3.current.style.background=""
    }
    const left=()=>{
        if(dot1.current.style.background=="yellow"){
            TapDot4()
        }else{
            if(dot2.current.style.background=="yellow"){
                TapDot1()
            }else{
                if(dot3.current.style.background=="yellow"){
                    TapDot2()
                }else{
                    if(dot4.current.style.background=="yellow"){
                        TapDot3()
                    }

                }
            }
        }

    }
    const right=()=> {
        if (dot1.current.style.background == "yellow") {
            TapDot2()
        } else {
            if (dot2.current.style.background == "yellow") {
                TapDot3()
            } else {
                if (dot3.current.style.background == "yellow") {
                    TapDot4()
                } else {
                    if (dot4.current.style.background == "yellow") {
                        TapDot1()
                    }

                }
            }


    }


    }
    useEffect(()=>{
        dot1.current.style.background="yellow"
        mobile.current.style.transition="0.5s"

    },[])


    return (
        <div className="min-h-screen ">
            <header>
                <Popover className="relative ">
                    <div className="flex  fixed z-40 inset-x-0 bg-black bg-opacity-0 md:bg-opacity-75 justify-between items-center p-5 sm:px-6 md:justify-start md:space-x-10 lg:px-20 ">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="home">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="flex -mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2  inline-flex items-center  justify-center text-black text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                            <div  className="relative text-xl p-2 ">
                                <i className="fa fa-weixin pl-3 pr-3" aria-hidden="true"></i>
                               <div className="absolute hidden -left-6 w-24 ">
                                <i className="fa fa-chevron-up ml-11" aria-hidden="true"></i>
                                <img src="https://cdn.discordapp.com/attachments/897398778166906911/897504553799393360/image0.jpg" alt=""/>
                            </div>
                            </div>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10  ">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-xl rounded-lg p-2 font-medium text-gray-50 active:bg-red-50 hover:bg-blue-500">
                                    {item.name}
                                </a>
                            ))}
                        </Popover.Group>
                        <div className="hidden md:flex text-gray-50 items-center justify-end md:flex-1 lg:w-0 text-2xl ">
                            <a  className="mr-5" href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a className="mr-5" href=""><i className="fa fa-telegram" aria-hidden="true"></i></a>
                            <a className="mr-5" href=""><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                            <div  className="relative text-2xl  ">
                                <i className="fa fa-weixin " aria-hidden="true"></i>
                                <div className="absolute hidden -left-8 w-24 ">
                                    <i className="fa fa-chevron-up ml-9" aria-hidden="true"></i>
                                    <img src="https://cdn.discordapp.com/attachments/897398778166906911/897504553799393360/image0.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5 ">
                                    <div className="flex items-center justify-between ">
                                        <div>
                                            <a href="home">
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                    alt="Workflow"
                                                /></a>
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 px-5 ">
                                    {navigation.map((item) => (
                                        <div   key={item.name} className="m-1   text-center ">
                                            <a
                                                href={item.href}
                                                className="p-0.5  text-2xl rounded-lg bg-indigo-300 font-medium text-gray-50  "
                                            >
                                                {item.name}
                                            </a>  </div>
                                    ))}

                                    <div className="mt-6">
                                        <p className="mt-6 text-center text-xl font-medium text-gray-500">
                                            <a  className="m-5" href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            <a className="m-5" href=""><i className="fa fa-telegram" aria-hidden="true"></i></a>
                                            <a className="m-5" href=""><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header>
            <main>
                <div>
                    {/* Hero card */}
                    <div className="relative"  >
                        <div className="relative  bg-cover  md:bg-center sm:overflow-hidden"
                             style={{backgroundImage:"url('https://img.tukuppt.com/bg_grid/00/03/39/trTD0kQKQJ.jpg!/fh/350') "}}>
                            <div className=" px-8 py-32 md:p-72 ">
                                <div className="p-5">
                                    <div className="text-center  text-lg block text-indigo-600 font-extrabold tracking-tight sm:text-5xl ">
                                        <div className="mb-3">
                                           The Essence of Investment is</div>
                                        <div className="text-2xl sm:text-6xl">
                                            Cognitive Realization
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/*  TWO  */}
                        <div className="bg-white  border-b-2">
                            <div className="px-4 py-8 md:px-20 md:py-36 ">
                            <div className="px-2 flex justify-between text-3xl md:text-5xl">
                                <div>
                                    Business
                                </div>

                            </div>

                                <div>
                                    <div className="hidden xl:flex justify-end  text-lg md:text-2xl mr-5">
                                        <div onClick={left} className="px-2 md:px-5 md:py-2 border-2 border-blue-600">
                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                        </div>
                                        <div onClick={right} className="px-2 md:px-5 md:py-2 border-2 border-l-0 border-blue-600">
                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        </div>

                                    </div>
                                <div className="flex  overflow-x-auto xl:overflow-hidden  h-80 mt-5 md:mt-20 relative  justify-between ">
                                    <div ref={mobile} className="flex  justify-between  transform ">
                                    {business.map((item)=>(
                                        <div key={item.title}  className="flex  w-11/12  bg-yellow-200 rounded-lg p-5  max-w-xl  md:min-w-max mr-6  transform duration-700 hover:shadow-2xl hover:translate-x-3 hover:bg-indigo-500">
                                            <div className="w-24  rounded-full overflow-hidden ">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className="p-3 min-w-min md:max-w-xl md:p-8">
                                                <div className="text-2xl md:text-4xl">{item.title}</div>
                                                <div className="text-sm text-gray-300 pt-6 md:text-lg">{item.text}</div>
                                            </div>
                                        </div>
                                        ))}

                                    </div>
                                </div>



                                    <div className=" justify-center relative mt-4 hidden xl:flex  ">
                                    <div onClick={TapDot1} ref={dot1} className="w-4 h-4 rounded-full bg-gray-200 mx-1 hover:bg-yellow-100"></div>
                                    <div onClick={TapDot2} ref={dot2} className="w-4 h-4 rounded-full bg-gray-200 mx-1 hover:bg-yellow-100"></div>
                                    <div onClick={TapDot3}  ref={dot3} className="w-4 h-4 rounded-full bg-gray-200 mx-1 hover:bg-yellow-100"></div>
                                    <div onClick={TapDot4}  ref={dot4} className="w-4 h-4 rounded-full bg-gray-200 mx-1 hover:bg-yellow-100"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    {/* THREE   */}
                        <div className="bg-white border-b-2">
                                <div className="px-4 py-10 md:px-20 md:py-36 ">
                                    <div className="px-2 mb-5 flex justify-between text-3xl md:text-5xl">
                                        <div>
                                            Portfolio
                                        </div>

                                    </div>
                                    <div className="flex  grid grid-cols-2  md:grid-cols-5 gap-y-0 h-60 md:h-96 overflow-y-auto  overflow-hidden justify-between ">
                                            {portfolio.map((item)=>(
                                                <div key={item.number} className="border  ">
                                                    <a href={item.href}>
                                                    <img src={item.img} alt="loading.."/></a>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                    {/*  FOUR  */}
                        <div className="flex">
                            <div className="p-3">
                                <div className="px-4 py-10 md:px-20 md:py-36  ">
                                    <div className="flex text-3xl md:text-5xl">
                                    <i className="fa fa-hand-o-right " aria-hidden="true"></i>
                                    <div className="ml-5">
                                      About Us
                                    </div>
                                    </div>
                                    <div className=" text-gray-500 p-3 md:px-32 md:py-14 md:text-xl">
                                <p className="my-5">As a professional investment and consultative institution, TI Capital covers four major areas: venture capital, asset management, accelerator & consultancy, research and analysis.</p>
                                <p className="my-5">Ti Capital is currently managing multiple crypto currency funds.</p>
                                <p className="my-5">Ti Capital has invested and partnered with multiple projects with bright prospect and broad commercial use successively.</p>
                                <p className="my-5">Not only providing the optimal investment service, Ti Capital also provides investors with an early stage industry distribution with result in a high rate of return.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    {/*  end  */}
                        <div className="bg-black">
                            <div>
                                <div className="max-w-max mx-auto p-10 md:p-16">
                                    <a href="home">
                                        <img
                                            className="h-16 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        /></a>
                                </div>
                                <div className=" text-white text-center p-3 md:p-10">
                                    <div>
                                    playerlink.org
                                        </div>
                                    <div className="mt-3">
                                        <a href="">©2020 by PLAYERLINK. </a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div >
                </div>
            </main>

            </div>
    )
}

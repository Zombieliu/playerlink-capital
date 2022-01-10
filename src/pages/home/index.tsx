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
        img:'https://cdn.discordapp.com/attachments/897398778166906911/928294692767010906/20220105223124.jpg',
        title:'Research and Analysis  ',
        text:'Defi, Web3.0, NFT, crosschain infrastructure, distributed storage, etc'
    },
    {
        img:'https://cdn.discordapp.com/attachments/897398778166906911/928294692767010906/20220105223124.jpg',
        title:'Venture Capital',
        text:'Investment portfolio comprises (not constrained to specific jurisdiction) token and equity investment.'
    },
    {
        img:'https://cdn.discordapp.com/attachments/897398778166906911/928294692767010906/20220105223124.jpg',
        title:'Digital currency  management',
        text:'Customers like private equity, industry fund, fund of fund, investment institutions, individuals, etc'
    },
    {
        img:'https://cdn.discordapp.com/attachments/897398778166906911/928294692767010906/20220105223124.jpg',
        title:'Accelerator & Consultancy',
        text:'Services include research and analysis, strategic planning, structure construction, legal compliance, market solutions, etc'
    }

]
const invest1=[
    {
        name:"",
        img:"https://i0.wp.com/a16z.com/wp-content/uploads/2020/08/logo_0011E00001jI8Rt.png?resize=150%2C150&ssl=1",
    },
    {
        name:"",
        img:"data:image/png;base64,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",
    },
    {
        name:"",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAefRrsVGthtEHGXdnp1RfeZDINI5c66gQwQ&usqp=CAU",
    },
    {
        name:"",
        img:"https://i2.wp.com/a16z.com/wp-content/uploads/2021/11/logo_0018000001NN1Nx.png?resize=125%2C70&ssl=1",
    },
    {
        name:"",
        img:"https://i0.wp.com/a16z.com/wp-content/uploads/2021/11/logo_0018000001XlQd1.png?resize=125%2C59&ssl=1",
    },
    {
        name:"",
        img:"https://i2.wp.com/a16z.com/wp-content/uploads/2021/11/logo_0018000001XyTpg.png?resize=150%2C150&ssl=1",

    },
    {
        name:"",
        img:"https://i1.wp.com/a16z.com/wp-content/uploads/2019/09/logo_0018000001dPvE7.png?resize=150%2C150&ssl=1",

    },
    {
        name:"",
        img:"https://i1.wp.com/a16z.com/wp-content/uploads/2021/11/logo_0011E00001ib9lP.png?resize=100%2C125&ssl=1",

    },
    {
        name:"",
        img:"data:image/png;base64,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",

    },
    {
        name:"",
        img:"https://i2.wp.com/a16z.com/wp-content/uploads/2021/07/logo_0011E00001ooLsE.png?resize=150%2C150&ssl=1",

    },
    {
        name:"",
        img:"https://i2.wp.com/a16z.com/wp-content/uploads/2021/11/logo_0018000001STSzG.png?resize=125%2C57&ssl=1",

    },
    {
        name:"",
        img:"https://i0.wp.com/a16z.com/wp-content/uploads/2021/06/logo_0018000001faiWc.png?resize=109%2C125&ssl=1",

    },
    {
        name:"",
        img:"data:image/png;base64,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"
    },
    {
        name:"",
        img:"data:image/png;base64,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"
    },
    {
        name: "",
        img:"data:image/jpeg;base64,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"
    }

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
        dot1.current.style.background="black"
        dot2.current.style.background=""
        dot3.current.style.background=""
        dot4.current.style.background=""

    }
    const TapDot2=()=>{
        mobile.current.style.transform="translateX(-21%)"
        dot2.current.style.background="black"
        dot1.current.style.background=""
        dot3.current.style.background=""
        dot4.current.style.background=""
    }
    const TapDot3=()=>{
        mobile.current.style.transform="translateX(-50%)"
        dot3.current.style.background="black"
        dot1.current.style.background=""
        dot2.current.style.background=""
        dot4.current.style.background=""
    }
    const TapDot4=()=>{
        mobile.current.style.transform="translateX(-72%)"
        dot4.current.style.background="black"
        dot1.current.style.background=""
        dot2.current.style.background=""
        dot3.current.style.background=""
    }
    const left=()=>{
        if(dot1.current.style.background=="black"){
            TapDot4()
        }else{
            if(dot2.current.style.background=="black"){
                TapDot1()
            }else{
                if(dot3.current.style.background=="black"){
                    TapDot2()
                }else{
                    if(dot4.current.style.background=="black"){
                        TapDot3()
                    }

                }
            }
        }

    }
    const right=()=> {
        if (dot1.current.style.background == "black") {
            TapDot2()
        } else {
            if (dot2.current.style.background == "black") {
                TapDot3()
            } else {
                if (dot3.current.style.background == "black") {
                    TapDot4()
                } else {
                    if (dot4.current.style.background == "black") {
                        TapDot1()
                    }

                }
            }


    }


    }
    useEffect(()=>{
        dot1.current.style.background="black"
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
                                    src="https://cdn.discordapp.com/attachments/897398778166906911/918369386992128010/viewfile.png"
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
                                                    src="https://cdn.discordapp.com/attachments/897398778166906911/918367515242029106/viewfile.png"
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
                             style={{backgroundImage:"url('https://cdn.discordapp.com/attachments/897398778166906911/930124639559102484/123123.jpg') "}}>
                            <div className=" px-8 py-32 md:p-72 ">
                                <div className="p-5">
                                    <div className="text-center  text-lg block text-white font-extrabold tracking-tight sm:text-5xl ">
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
                                        <div key={item.title}  className="flex  w-11/12  bg-purple-500 rounded-lg p-5  max-w-xl  md:min-w-max mr-6  transform duration-700 hover:shadow-2xl hover:translate-x-3 hover:bg-indigo-500">
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
                                    <div onClick={TapDot1} ref={dot1} className="w-4 h-4 rounded-full bg-gray-200 mx-1 hover:bg-black"></div>
                                    <div onClick={TapDot2} ref={dot2} className="w-4 h-4 rounded-full bg-gray-200 mx-1 hover:bg-black"></div>
                                    <div onClick={TapDot3}  ref={dot3} className="w-4 h-4 rounded-full bg-gray-200 mx-1 hover:bg-black"></div>
                                    <div onClick={TapDot4}  ref={dot4} className="w-4 h-4 rounded-full bg-gray-200 mx-1 hover:bg-black"></div>
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
                                    <div className="flex  flex-wrap justify-center md:justify-between grid grid-cols-5 ">
                                        {invest1.map((INVEST1)=>
                                            <div key={INVEST1.name} className="max-w-max m-5 mx-auto md:mx-6">
                                                <img
                                                    className="h-32 w-32   object-fill"
                                                    src={INVEST1.img}
                                                    alt={INVEST1.name}
                                                />
                                            </div>
                                        )}

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
                                <p className="my-5">As a professional investment and consultative institution, PlayerLink Capital covers four major areas: venture capital, asset management, accelerator & consultancy, research and analysis.</p>
                                <p className="my-5">PlayerLink Capital is currently managing multiple crypto currency funds.</p>
                                <p className="my-5">PlayerLink Capital has invested and partnered with multiple projects with bright prospect and broad commercial use successively.</p>
                                <p className="my-5">Not only providing the optimal investment service, PlayerLink Capital also provides investors with an early stage industry distribution with result in a high rate of return.</p>
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
                                            src="https://cdn.discordapp.com/attachments/897398778166906911/918367143777673216/viewfile.png"
                                            alt="Workflow"
                                        /></a>
                                </div>
                                <div className=" text-white text-center p-3 md:p-10">
                                    <div>
                                    PlayerLink-Capital
                                        </div>
                                    <div className="mt-3">
                                        <a href="">©2022 by PLAYERLINK </a>
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

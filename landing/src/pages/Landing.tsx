import logoDark from "../assets/images/logo-dark.svg"
import objectA from "../assets/images/object-1.svg"
import objectB from "../assets/images/object-2.svg"
import objectC from "../assets/images/object-3.svg"
import objectD from "../assets/images/object-4.svg"
import ecoSystem from "../assets/images/ecosystem.svg"
import EllipseA from "../assets/images/Ellipse 12.svg"
import EllipseB from "../assets/images/Ellipse 13.svg"
import EllipseC from "../assets/images/Ellipse 14.svg"
import EllipseD from "../assets/images/Ellipse 15.svg"
import bot from "../assets/images/emma2 1.png"
import trend from "../assets/images/trend.png"
import coin from "../assets/images/coin.png"
import teamOne from "../assets/images/filipe-leonor 1.png"
import teamTwo from "../assets/images/alexander 3.png"
import teamThree from "../assets/images/stan 3.png"
import teamFour from "../assets/images/mark-s 1.png"
import teamFive from "../assets/images/carlos-c 1.png"
import teamSix from "../assets/images/talissa-f 1.png"
import bogdan from "../assets/images/bogdan 1.png"
import dima from "../assets/images/dima 1.png"
import diogo from "../assets/images/diogo-coelho 1.png"
import richard from "../assets/images/richard 1.png"
import TeamMember from "../components/TeamMember"
import { FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { useState, useEffect } from "react"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll"
import { IoClose } from "react-icons/io5"

const LandingPage = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    // useEffect(() => {
    
    //     // Registering the 'begin' event and logging it to the console when triggered.
    //     Events.scrollEvent.register('begin');
    
    //     // Registering the 'end' event and logging it to the console when triggered.
    //     Events.scrollEvent.register('end');
    
    //     // Updating scrollSpy when the component mounts.
    //     scrollSpy.update();
    
    //     // Returning a cleanup function to remove the registered events when the component unmounts.
    //     return () => {
    //       Events.scrollEvent.remove('begin');
    //       Events.scrollEvent.remove('end');
    //     };
    //   }, []);

    const handleScroll = () => {
        if (window.scrollY > 200) {
          setShowScrollToTop(true);
        } else {
          setShowScrollToTop(false);
        }
      };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        // Registering scroll events
        Events.scrollEvent.register('begin');
        Events.scrollEvent.register('end');
        scrollSpy.update();
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
        };
      }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    return (
        <div className="main max-w-screen font-poppins bg-[#001314] overflow-x-hidden">
            <div className={`bg-[url(./assets/images/bg-hero.svg)] bg-no-repeat bg-cover bg-top pb-32`}>

                {/* Navigation */}
                <nav className="bg-transparent relative w-full z-20 pt-20 pb-5 md:py-20 start-0 font-gothambook">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={ logoDark } className="" alt="Logo"/>
                        </a>

                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button type="button" className="hidden md:block text-dark bg-green w-44 focus:ring-0 focus:outline-none font-bold rounded-[25px] text-sm p-3 text-center">Enter Dapp</button>
                            <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                            </button>
                        </div>
                        <div className="items-center text-gray-200 justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-[400] rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                                <li>
                                    <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">Emma Ai</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">The Ecosystem</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">Team</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Smaller Screens */}
                    <div className={`${openMenu ? "blcok" : "hidden"} fixed top-0 left-0 bg-[url(./assets/images/bg-hero.svg)] bg-no-repeat bg-cover bg-center w-full z-40 w-screen h-screen`} id="mobile-menu">
                        <div className="space-y-1 pb-3 bg-[#001314]/80 w-full h-full z-10 flex flex-col items-center pt-20 text-[30px]">
                            <a href="#" className="text-white block px-3 py-3">Home</a>
                            <a href="#" className="text-white block px-3 py-3">The Ecosystem</a>
                            <a href="#" className="text-white block px-3 py-3">Emma AI</a>
                            <a href="#" className="text-white block px-3 py-3">Team</a>
                            <a href="#" className="bg-gradient-to-r from-[#4CFAC7] to-[#9999FF] w-64 text-center py-2.5 text-[24px] text-white font-semibold rounded-[30px]">
                                Enter Daap
                            </a>
                        </div>
                        <span onClick={toggleMenu} className="absolute top-5 right-5 z-20 text-gray-200">
                            <IoClose size={34}/>
                        </span>
                    </div>
                </nav>

                {/* Hero Section */}
                <section id="hero" className="p-4 text-center md:text-left relative max-w-screen-xl mx-auto text-white pb-64 md:my-20">
                    <h1 className="text-[2.5rem] md:text-[4rem] font-bold">
                        SafeYields DAO
                    </h1>
                    <p className="w-3/5 md:w-2/5 mx-auto md:mx-0">
                        A decentralized one-click solution for AI-powered 
                        trading on GMX and DeFi automated strategies
                    </p>
                    <div className="flex space-x-3 my-6 font-[500] justify-center md:justify-start">
                        <a href="#" className="text-black bg-green w-44 rounded-[25px] text-sm p-3 text-center">
                            Read Pitch Deck</a>
                        <a href="#" className="text-gray-200 border-2 border-green w-44 rounded-[25px] text-sm p-3 text-center">
                            Read Whitepaper</a>
                    </div>
                </section>

            </div>

            {/* Socials */}
            <section className="bg-[url(./assets/images/bg-social.svg)] bg-no-repeat bg-cover bg-center text-gray-200 w-full relative overflow-hidden">
                <img src={ objectA } className="absolute bottom-0 md:left-72 w-[30%] md:w-[20%]" />
                <img src={ objectB } className="absolute top-40 left-36" width={'30%'} />
                <img src={ objectC } className="absolute top-2 left-12" width={'30%'} />
                <img src={ objectD } className="absolute -bottom-8 right-0" width={'30%'} />
                <div className="w-4/5 md:w-3/5 mx-auto pt-16 pb-32 md:pt-32 md:pb-60 text-center">
                    <h1 className="font-black text-[32px] text-green my-12">
                    “We’re here entering the era where computers will trade 
                    against computers, and humans are being pushed to the side.”
                    </h1>
                    <p>
                    Christopher Steiner
                    </p>
                </div>
            </section>

            {/* The Ecosystem */}
            <section id="the-ecosystem" className="w-full pt-28 md:pt-60 w-full">
                <div className="flex justify-center uppercase font-black text-[32px] text-green relative text-center w-2/5 mx-auto">
                    <img src={ ecoSystem } alt="" />
                    <h1 className="absolute top-32">The Ecosystem</h1>
                </div>
                <div className="w-11/12 flex flex-wrap justify-center sm:justify-start lg:justify-center mx-auto text-justify p-4 my-8 text-[#F2ECE4]/80 text-sm leading-6 font-[400] font-gothambook gap-8">
                    <div id="card-1" className="flex flex-col items-center bg-[#D9D9D9]/10 rounded-[40px] space-y-6 max-w-[300px] p-8 hover:border hover:border-[#4CFAC7] hover:shadow-[0_0_12px_1px_rgba(76,250,199,1)]">
                        <h1 className="text-green font-bold">Emma Ai</h1>
                        <p className="h-[288px]">
                        The core of our ecosystem, an artificial intelligence portfolio assistant for trading 
                        and DeFi automated strategies, set to launch in Q1 2024 via our decentralized application 
                        (dApp) for 30% performance fee, it leverages advanced machine learning models, including 
                        neural-like networks, advanced analytics, human input and market historical data to 
                        analyze and generate high-performing portfolios.
                        </p>
                        <a href="#" className="text-black bg-green w-44 rounded-[25px] text-sm p-3 text-center">
                            Get early access
                        </a>
                    </div>
                    <div id="card-2" className="flex flex-col items-center bg-[#D9D9D9]/10 rounded-[40px] space-y-6 max-w-[300px] p-8 hover:border hover:border-[#4CFAC7] hover:shadow-[0_0_12px_1px_rgba(76,250,199,1)]">
                        <h1 className="text-green font-bold">SAFE NFTs</h1>
                        <p className="h-[288px]">
                        Holders not only gain governance rights within our ecosystem and early access to Emma AI 
                        but will also receive a share of the revenue once it is live to the public as 50% of the 
                        fees collected from Emma AI are distributed back to NFT holders, adding on top of the high 
                        yields that Emma AI generates, this will tend to scale as TVL and the protocol grow.
                        </p>
                        <a href="#" className="text-black bg-green w-44 rounded-[25px] text-sm p-3 text-center">
                            Get your NFT
                        </a>
                    </div>
                    <div id="card-3" className="flex flex-col items-center bg-[#D9D9D9]/10 rounded-[40px] space-y-6 max-w-[300px] p-8 hover:border hover:border-[#4CFAC7] hover:shadow-[0_0_12px_1px_rgba(76,250,199,1)]">
                        <h1 className="text-green font-bold">SAFE Tokens</h1>
                        <p className="h-[288px]">
                        Serving as our utility token, SAFE is meticulously designed to maintain its value over time, 
                        making it an ideal option for long-term value storage. SAFE token holders can enjoy a 12% 
                        Annual Percentage Rate (APR) which has the potential to increase when used throughout DeFi. 
                        SAFE tokens are crafted to be resilient against market volatility and downturns, thus proving 
                        to be a unique asset for users.
                        </p>
                        <a href="#" className="text-black bg-green w-44 rounded-[25px] text-sm p-3 text-center">
                            Get SAFE Token
                        </a>
                    </div>
                </div>
            </section>

            {/* Emma Ai */}
            <section className="w-full py-28 lg:py-56">
                <div className="flex flex-col sm:flex-row text-[#F2ECE4]/80 w-10/12 lg:w-8/12 font-gothambook space-x-4 mx-auto">
                    <div className="sm:w-1/2 py-4">
                        <h1 className="font-black text-[40px] text-gray-200 uppercase leading-tight">
                            <span className="text-green">Emma AI </span> gives you an Edge
                        </h1>
                        <p className="text-justify text-sm font-light leading-7 lg:pr-12 my-6">
                        Emma AI is your one-click portfolio manager, capable of executing AI-powered trading strategies 
                        on GMX for BTC-ETH-LTC for both long and short positions, it uses trading portfolios of 300+ 
                        strategies and is ever-evolving. It is also able to execute proven high yield DeFi automated 
                        strategies such as concentrated liquidity and looping.
                        </p>
                        <a href="#" className="text-black bg-green w-44 rounded-[25px] text-sm p-3 text-center">
                            Get early access
                        </a>
                    </div>
                    <div className="sm:w-1/2 relative flex items-center pl-20">
                        <img src={ EllipseA } className="absolute z-20 -top-0 left-8" width={"60%"}/>
                        <img src={ EllipseB } className="absolute z-20 -bottom-0 -right-6" width={"60%"}/>
                        <img src={ bot } alt="bot" className="z-50" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="font-gothambook text-gray-200 w-full relative">
                <img src={ EllipseD } width={"20%"} className="absolute left-0 -top-[200px]"/>
                <h1 className="font-black text-right text-[28px] w-11/12 leading-8 uppercase flex justify-end my-12">
                    <span className="w-3/5 md:w-4/12">outperforming the market in 
                        <span className="text-green"> 2023</span>
                    </span>
                </h1>

                <p className="md:hidden block font-black text-center text-[28px] leading-8 py-5">EMMA AI TRADING</p>
                <div className="grid grid-cols-3 md:grid-cols-4 w-11/12 lg:w-9/12 mx-auto sm:mt-6 gap-4 mb-8">
                    <p className="hidden md:flex font-black items-center text-[28px] leading-8">EMMA AI TRADING</p>
                    <div className="flex items-center justify-center flex-col bg-[#D9D9D9]/10 rounded-[30px] max-w-[180px] lg:min-w-[250px] h-28 sm:h-36">
                        <p>APR</p>
                        <p className="text-green font-black text-[40px]">46%</p>
                    </div>
                    <div className="flex items-center justify-center flex-col bg-[#D9D9D9]/10 rounded-[30px] max-w-[180px] lg:min-w-[250px] h-28 sm:h-36">
                        <p>Max. Drawndown</p>
                        <p className="text-green font-black text-[40px]">5.5%</p>
                    </div>
                    <div className="flex items-center justify-center flex-col bg-[#D9D9D9]/10 rounded-[30px] max-w-[180px] lg:min-w-[250px] h-28 sm:h-36">
                        <p>Sharp Ratio</p>
                        <p className="text-green font-black text-[40px]">4.1%</p>
                    </div>
                </div>

                <p className="md:hidden font-black text-center text-[28px] uppercase leading-8 px-20 py-5">Emma <br/> automated strategies</p>
                <div className="grid grid-cols-3 md:grid-cols-4 w-11/12 lg:w-9/12 mx-auto gap-4 sm:mt-6">
                    <p className="hidden md:flex font-black items-center text-[28px] uppercase leading-8">Emma automated strategies</p>
                    <div className="flex items-center justify-center flex-col bg-[#D9D9D9]/10 rounded-[30px] max-w-[180px] lg:min-w-[250px] h-28 sm:h-36">
                        <p>APR</p>
                        <p className="text-green font-black text-[40px]">46%</p>
                    </div>
                    <div className="flex items-center justify-center flex-col bg-[#D9D9D9]/10 rounded-[30px] max-w-[180px] lg:min-w-[250px] h-28 sm:h-36">
                        <p>Max. Drawndown</p>
                        <p className="text-green font-black text-[40px]">5.5%</p>
                    </div>
                    <div className="flex items-center justify-center flex-col bg-[#D9D9D9]/10 rounded-[30px] max-w-[180px] lg:min-w-[250px] h-28 sm:h-36">
                        <p>Sharp Ratio</p>
                        <p className="text-green font-black text-[40px]">4.1%</p>
                    </div>
                </div>
                <a href="#" className="text-black bg-green w-44 rounded-[25px] text-sm p-3 flex justify-center mx-auto text-center my-14">
                    learn more
                </a>
            </section>

            {/* Statistics */}
            <section className="text-gray-200 relative w-full md:py-44">
                <div className="w-11/12 lg:w-9/12 flex flex-col md:flex-row space-x-6 mx-auto p-4">
                    <div className="lg:w-5/12 p-5 my-5">
                        <h1 className="font-black text-[40px] text-gray-200 uppercase leading-tight">
                            <span className="text-green">Get early access </span> to Emma AI now
                        </h1>
                        <p className="text-justify text-sm font-light leading-7 md:pr-16 my-6">
                        Set to launch in QI 2024 however NFT holders can get early access, our DAO voted fund 
                        yielded 29% in 2023 by leveraging Emma AI. NFTs also grant governance power over the 
                        DAO and revenue share once Emma AI goes live to the public. 
                        </p>
                        <a href="#" className="text-black bg-green rounded-[25px] text-sm p-3 text-center">
                            Get early access
                        </a>
                    </div>
                    <div className="lg:w-7/12">
                        <img src={ EllipseC } width={"40%"} className="absolute right-0 -top-[300px]" />
                        <img src={ trend } alt="trend" className="p-4 bg-[#D9D9D9]/10 rounded-[25px]"/>
                    </div>
                </div>
            </section>

            {/* Coin */}
            <section className="text-gray-200 relative w-full py-28 md:py-44">
                <div className="w-11/12 lg:w-9/12 flex flex-col-reverse sm:flex-row-reverse space-x-6 mx-auto order-2 justify-center items-center">
                    <div className="sm:w-3/5 md:w-1/2 p-5 sm:text-right lg:pl-16">
                        <h1 className="font-black text-[40px] text-gray-200 uppercase leading-tight">
                            utility token Designed to <span className="text-green">sustain price over time </span>
                        </h1>
                        <p className="text-sm font-light leading-7 my-6 md:pl-12">
                        SAFE is backed by USDC, deflationary with trading volume and protocol 
                        revenue providing an average of 12% APR making it perfect to hedge against 
                        market volatility. 
                        </p>
                        <a href="#" className="md:hidden w-1/2 mx-2 text-green border-2 border-green w-44 rounded-[25px] text-sm p-3 text-center">
                            Learn more
                        </a>
                        <a href="#" className="w-1/2 mx-2 text-black bg-green rounded-[25px] text-sm px-4 p-3 text-center">
                            Trade SAFE
                        </a>
                    </div>
                    <div className="sm:w-2/5 md:w-1/2">
                        <img src={ coin } width={"80%"} alt="trend" className="p-4 w-full md:w-[80%]"/>
                    </div>
                </div>
            </section>

            {/* Core Contributors */}
            <section className="md:pt-24 text-gray-200 text-sm font-gothambook px-6 flex flex-col justify-center">
                <h1 className="uppercase font-black text-green text-[30px] my-12 px-12">Core Contributor</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-11/12 lg:w-9/12 mx-auto gap-y-6 gap-x-8">

                    <TeamMember
                        image={ teamOne }
                        name="Filipe Leonor"
                        role="Founder"
                        description="
                            Serial entrepreneur and co-founder of Decentralized Foundation, a web3 revenue-share 
                            model protocol on Avalanche with a charitable focus. Over 12 years of team leadership, 
                            over five years in crypto mining, and a DeFi investor since 2016. 
                        "/>
                    <TeamMember
                        image={ teamTwo }
                        name="Alexander"
                        role="Solidity Developer"
                        description="
                            Passionate DeFi builder. Experience in Smart Contracts, Gas optimizations, 
                            Scripts (BOT) and security vulnerabilities.
                        "/>
                    <TeamMember
                        image={ teamThree }
                        name="Stan Trenev"
                        role="Lead Dev"
                        description="
                            Web3 Builder with over eight years of experience and the founder of 0xFusion, a 
                            prominent web3 studio. His focus is on web3 security, assembling DeFi Money Legos 
                            and hunting for smart contract bugs.
                        "/>
                    <TeamMember
                        image={ teamFour }
                        name="Mark Spang"
                        role="Community & Communication"
                        description="
                            With experience since 2016 in crypto and community DAOs, specializes in building 
                            communities and Twitter growth. Successfully helped launch projects, significantly 
                            increasing visibility and conversion rates in the crypto space.
                        "/>
                    <TeamMember
                        image={ teamFive }
                        name="Carlos Chop"
                        role="Front End Developer"
                        description="
                            Software developer with experience in frontend, backend and mobile applications.
                        "/>
                    <TeamMember
                        image={ teamSix }
                        name="Talissa Fregona"
                        role="UI/UX & Branding"
                        description="
                            Experienced UI/UX designer with a history of optimizing website user experiences for 
                            major European companies. Expertise also includes creating visuals for web3 projects, 
                            creating and elevating brand awareness, and structuring heavy documentation such as 
                            whitepapers
                        "/>
                    
                </div>
            </section>

            {/* Advisory Contributors */}
            <section className="md:py-32 text-gray-200 text-sm font-gothambook px-6">
                <h1 className="uppercase font-black text-green text-[30px] my-12 px-12 text-right leading-7">Advisory Contributor</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-11/12 lg:w-9/12 mx-auto gap-y-6 gap-x-8">
                    
                    <TeamMember
                        image={ bogdan }
                        name="Bogdan Ivaniuk"
                        role="Fintexh"
                        description="
                            Co-Founder and CEO of AlphaCube. Building AI solutions for algorithmic trading. 
                            12 years as a quantitative analyst and AI/ML engineer.
                        "/>
                    <TeamMember
                        image={ richard }
                        name="Richard Caetano"
                        role="Strategy"
                        description="
                            A blockchain pioneer, co-founded Akord and Stratumn and authored 'Learning Bitcoin.' 
                            Expertise in blockchain integration and data security.
                        "/>
                    <TeamMember
                        image={ diogo }
                        name="Diogo Coelho"
                        role="Legal"
                        description="
                            Founder of DPC - Legal Services and registered with the Portuguese
                            Bar Association, focuses his activity on the areas of Web 3.0 & Fintech.
                        "/>
                    <TeamMember
                        image={ dima }
                        name="Dima Yastremsky"
                        role="Strategy"
                        description="
                            Building digital companies since 2014. Founder with 2 exits. Ex- Managing Partner at NEARʼs 
                            Ecosystem VC Fund. Advisor in Strategy, Product, Growth, and Fundraising.
                        "/>

                </div>
            </section>

            {/* Footer */}
            <section className="flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center sm:justify-between items-center w-4/5 mx-auto text-gray-200 py-12 font-gothambook">
                <a href="#">
                    <img src={ logoDark } alt="logo" width={'70%'} />
                </a>
                <div className="text-center">
                    <h1 className="font-black text-[30px] my-6">Join our Community</h1>
                    <div className="flex justify-center space-x-3 my-6">
                            <span className="rounded-full inline-flex size-10 justify-center items-center bg-[#9999FF] cursor-pointer hover:shadow-[0_0_12px_1px_rgba(225,225,225,0.6)]">
                                <FaGithub size={23} />
                            </span>
                            <span className="rounded-full inline-flex size-10 justify-center items-center bg-[#9999FF] cursor-pointer hover:shadow-[0_0_12px_1px_rgba(225,225,225,0.6)]">
                                <FaYoutube size={23} />
                            </span>
                            <span className="rounded-full inline-flex size-10 justify-center items-center bg-[#9999FF] cursor-pointer hover:shadow-[0_0_12px_1px_rgba(225,225,225,0.6)]">
                                <FaDiscord size={23} />
                            </span>
                            <span className="rounded-full inline-flex size-10 justify-center items-center bg-[#9999FF] cursor-pointer hover:shadow-[0_0_12px_1px_rgba(225,225,225,0.6)]">
                                <FaTwitter size={23} />
                            </span>
                    </div>
                    <p>Audited by Defimoon</p>
                </div>
                <small className="text-base mt-8">© 2023 SafeYields.</small>
            </section>

            {/* Scroll To Top */}
            {showScrollToTop && (
                <div onClick={scrollToTop} className="fixed bottom-10 right-10 bg-green rounded-full p-2 cursor-pointer">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </a>
                </div>
            )}

        </div>
    )
}


export default LandingPage
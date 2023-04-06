import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Hero() {

    return (
        <>
            <div className="lg:hidden flex flex-col items-center w-screen h-[635px] pt-8 pb-4 gap-8">
                <div className="flex flex-col items-center h-[245px]">
                    <div className="flex flex-row justify-center items-center gap-2 mt-8 font-Lalezar text-sm text-light-green-accent font-black uppercase">
                        explore
                        <span className="bg-light-green-accent w-1 h-1 shadow-[0_4px_7px_0_rgba(0,0,0,0.25)]">
                        </span> discover
                        <span className="bg-light-green-accent w-1 h-1 shadow-[0_4px_7px_0_rgba(0,0,0,0.25)]"></span> track
                    </div>
                    <div className="flex flex-row text-center justify-center items-center font-Lalezar uppercase text-4xl font-extrabold leading-10 text-light-gray-400 mt-2">
                        what the floor
                    </div>
                    <div className="flex flex-row justify-center text-center items-center text-xl font-bold font-DM-Sans leading-7 text-light-gray-400 mt-3">
                        The Ultimate Zilliqa NFT <br/>Marketplace Aggregator
                    </div>
                    <div className="flex flex-col justify-center w-[342px] h-[48px] mt-8 gap-4">
                        <label htmlFor="search" className="sr-only text-light-gray-200">
                            Search Collections
                        </label>
                        <div className="relative text-gray-400 focus-within:text-gray-600">
                            <input
                                id="search"
                                className="block w-full h-[48px] rounded-xl border-0 bg-light-gray-100 py-1.5 px-4 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Search Collections"
                                type="search"
                                name="search"
                            />
                            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pl-3">
                                <MagnifyingGlassIcon
                                    className="h-6 w-6 stroke-2 text-light-gray-200"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex flex-row justify-between items-center mt-8 px-[100px] gap-[153px] w-screen height-[363.31px]">
                <div className="flex flex-col justify-center items-center pb-10 gap-4">

                    <div className="flex flex-row justify-center items-center gap-2 font-Lalezar-sans text-lg leading-7 text-light-green-accent font-black uppercase">
                        explore
                        <span className="bg-light-green-accent w-1 h-1 shadow-[0_4px_7px_0_rgba(0,0,0,0.25)]">
                        </span> discover
                        <span className="bg-light-green-accent w-1 h-1 shadow-[0_4px_7px_0_rgba(0,0,0,0.25)]"></span> track
                    </div>

                    <div className="flex flex-row text-center justify-center items-center font-Lalezar-sans uppercase text-6xl font-extrabold leading-[60px] tracking-[1px] text-light-gray-400 mt-4">
                        what the floor
                    </div>
                    <div className="flex flex-row justify-center text-center items-center text-2xl font-bold font-DM-Sans leading-8 text-light-gray-400 mt-4">
                        The Ultimate Zilliqa NFT <br/>Marketplace Aggregator
                    </div>
                </div>
            </div>
        </>
    )

}
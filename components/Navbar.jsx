import Link from 'next/link';
import { useRouter } from 'next/router'
import { useRef } from 'react';

function Navbar() {
    const router = useRouter();
    const searchRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        router.push(`/search-results?q=${searchRef?.current?.value}`)
    }
    return (
        <header className="text-gray-600 body-font -mt-4 fixed z-50 top-0 right-0 left-0 pt-1 backdrop-blur-lg">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 lg:pr-44 cursor-pointer" href='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-red-800 p-2 bg-white rotate-90 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="ml-3 text-xl text-red-800">NewsStop.com</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href='/trending'><a className="mr-5 hover:text-red-900 cursor-pointer">Trending</a>
                    </Link>
                    <Link href='/breaking-news'>
                        <a className="mr-5 hover:text-red-900 cursor-pointer">Breaking News</a>
                    </Link>
                    {/* <a className="mr-5 hover:text-red-900">Third Link</a> */}
                    <form class="flex relative " onSubmit={submitHandler}>
                        <input ref={searchRef} autoComplete='off' type="text" id="email-with-icon" class=" rounded-l-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" name="email" placeholder="Search News" />
                        <button type='submit' class="rounded-r-md inline-flex  items-center px-3 border-t bg-white border-r border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>
                </nav>
                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button> */}

                <div class="relative inline-block text-left z-40 group ring ring-red-800 rounded-md mt-2 lg:ml-4 lg:mt-0">
                    <div>
                        <button type="button" class=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                            <h1 className='pr-1'>Explore</h1>
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" className='text-red-800'>
                                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="origin-top-right absolute mt-0 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 hidden group-hover:flex">
                        <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <Link href='/business'>
                            <a href="#" class="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                <span class="flex flex-col">
                                    <span>
                                        Business
                                    </span>
                                </span>
                            </a>
                            </Link>
                            <Link href='/sports'>
                            <a href="#" class="px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 block" role="menuitem">
                                <span class="flex flex-col">
                                    <span>
                                        Sports
                                    </span>
                                </span>
                            </a>
                            </Link>
                            <Link href='/entertainment'>
                            <a href="#" class="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                <span class="flex flex-col">
                                    <span>
                                        Entertainment
                                    </span>
                                </span>
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Navbar

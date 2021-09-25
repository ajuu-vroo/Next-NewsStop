export default function Hero({setReading}) {
    return (

        <div class="max-w-screen-xl p-4 bg-gray-50 dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-12 mt-32">
            <div class="relative">
                <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
                        <p class="text-base leading-6 text-indigo-500 font-semibold">
                            #fastasflash
                        </p>
                        <h4 class="mt-2 text-2xl leading-8 font-extrabold text-red-800 dark:text-white sm:text-3xl sm:leading-9">
                            News from all over the world trusted by the best.
                        </h4>
                        <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                            Delivered to you from the top-notch and leaders of News and Media, trusted sources include Times Of India , NDTV ,and many more.
                        </p>
                        <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
                            <li class="mt-6 lg:mt-0">
                                <div class="flex">
                                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Live News
                                    </span>
                                </div>
                            </li>
                            <li class="mt-6 lg:mt-0">
                                <div class="flex">
                                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        100% Genuine Sources
                                    </span>
                                </div>
                            </li>
                            <li class="mt-6 lg:mt-0">
                                <div class="flex">
                                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        24/7 support
                                    </span>
                                </div>
                            </li>
                            <li class="mt-6 lg:mt-0">
                                <div class="flex">
                                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                        Online news team of 30+ staff
                                    </span>
                                </div>
                            </li>
                            <li>

                                <button class="flex items-center px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-red-800 hover:text-white border-2 border-red-800 focus:outline-none group mt-5" onClick={()=>setReading(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-800 group-hover:text-white duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                   <h1 className='text-red-800 font-semibold pl-4 group-hover:text-white duration-200'>Start Reading</h1>
                                </button>

                            </li>
                        </ul>
                    </div>
                    <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                        <div class="relative space-y-4">
                            <div class="flex items-end justify-center lg:justify-start space-x-4">
                                <img class="rounded-lg shadow-lg w-32 md:w-56" width="200" src="https://static.toiimg.com/photo/47529300.cms" alt="1" />
                                <img class="rounded-lg shadow-lg w-40 md:w-64 saturate-150" width="260" src="https://cdn1.vectorstock.com/i/thumb-large/75/40/news-newspaper-icon-on-a-yellow-background-vector-23887540.jpg" alt="2" />
                            </div>
                            <div class="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                                <img class="rounded-lg shadow-lg w-24 md:w-40" width="170" src="https://1000logos.net/wp-content/uploads/2021/04/CNN-logo.png" alt="3" />
                                <img class="rounded-lg shadow-lg w-32 md:w-56" width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/225px-Fox_News_Channel_logo.svg.png" alt="4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
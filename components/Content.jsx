function Content({data}) {
    return (
        <section className="flex flex-col sm:flex-row bg-gray-100 py-5 h-full md:mx-10 items-center justify-center ">
            <div className=''>
                <img className='scale-90 md:scale-100 md:h-40 md:w-60 object-cover
                ' src={data?.urlToImage || "https://previews.123rf.com/images/bluebay/bluebay1409/bluebay140900035/31543593-words-news-on-digital-red-background.jpg"} alt="" />
            </div>
            <div className='px-5 -mt-2 h-full w-full xl:min-w-[1010px] xl:max-w-[1010px]'>
                <h1 className='text-xl font-semibold text-gray-600'>{data?.title}</h1>
                <p className='text-base text-gray-500 pt-2'>{data?.description}</p>
                <a href={data?.url} target='_blank' className="text-indigo-500 inline-flex items-center mt-4">Read More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
            </div>

      </section>
    )
}

export default Content

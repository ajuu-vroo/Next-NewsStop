import Navbar from '../components/Navbar'
import Content from '../components/Content';

function entertainment(props) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
            <Navbar />
            <div className='mt-40 lg:mt-16 '>
            {props.data?.map((item, index) => {
                return <Content data={item} key={index} />
            })}
            </div>
        </div>
    )
}

export default entertainment;

export async function getStaticProps(context){
    const response = await fetch(`https://newsapi.org/v2/everything?q=entertainment&apiKey=${process.env.API_KEY}&language=en&pageSize=10`)
    const data = await response.json()
  
    return{
      props :{
        data : data.articles,
      }
      ,
      revalidate : 600
    }
}
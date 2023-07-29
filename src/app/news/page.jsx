import newsLoad from '@/api/newsLoad';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export const metadata = {
   title: 'Recent News ',
   openGraph: {
      title: 'world news',
   },
}


const News = async () => {
   const data = await newsLoad();
   const news = data.news;

   return (
      <div className=' mx-auto m-5 p-4'>

         <div>
            <h2 className='text-4xl font-semibold text-center m-4'>Recent News</h2>
         </div>
         <div className='flex flex-wrap justify-center gap-8 '>
            {/* card */}

            {
               news.splice(0, 4).map(news => (
                  <div key={news.id} className="card w-96 bg-base-100 shadow-xl mt-5">
                     <figure>
                        <Image priority={false} src={news.image}
                           width={500}
                           height={500}
                           alt="Picture of the author" />
                     </figure>
                     <div className="card-body">
                        <h2 className="card-title">{news.title}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                           <Link href={`news/${news.id}`}>
                              <button className="btn btn-primary">See full..</button>
                           </Link>
                        </div>
                     </div>
                  </div>
               ))
            }

            {/* card */}
         </div>
      </div>
   );
};

export default News;
import newsSingle from '@/api/newsSingle';
import React from 'react';

const SingleNews = async ({ params }) => {

   const data = await newsSingle(params.nid);

   const news = data.news;
   const { id } = news;
   return (
      <div className="h-screen   ">
         <div className="container mx-auto m-5">
            <div className="text-sm breadcrumbs">
               <ul>
                  <li><a href="/">Home</a></li>
                  <li><a>Documents</a></li>
               </ul>
            </div>

            <div>

               {/* <h2>single news: {params.nid}</h2> */}
               <div>

                  <div className="card lg:card-side bg-base-100 shadow-xl mt-4">
                     <figure></figure>
                     <div className="card-body">
                        <h2 className="card-title">New album is released!{news.title}</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                           <button className="btn btn-primary">Listen</button>
                        </div>
                     </div>
                  </div>


               </div>

            </div>
         </div>
      </div>
   );
};

export default SingleNews;

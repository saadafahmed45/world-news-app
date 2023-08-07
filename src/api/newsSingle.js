
const newsSingle = async (id) => {
   const response = await fetch(`https://api.worldnewsapi.com/search-news?api-key=67715fcebbe445d8aad2f379896d7a1a&text=tesla/${id}`);

   const data = response.json();
   return data.news[0];

};

export default newsSingle;

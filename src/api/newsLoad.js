
const newsLoad = async () => {
   const response = await fetch(`https://api.worldnewsapi.com/search-news?api-key=67715fcebbe445d8aad2f379896d7a1a&text=tesla`);

   const data = response.json();
   return data;
   console.log(data.news);
};

export default newsLoad;


// API Key: 67715fcebbe445d8aad2f379896d7a1a
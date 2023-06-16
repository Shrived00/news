import { useEffect, useState } from 'react';
import './App.css';
import NavInshort from './components/NavInshort';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import apiKey from './data/config';
import Footer from './components/Footer/Footer';

function App() {
  const [category, setCategory] = useState('General');
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);


  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const news = await axios.get(
        `https://${proxyUrl}newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pagesize=${loadmore}`);

      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }

  };
  console.log(newsArray);

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadmore]);

  return (
    <div className="App">
      <NavInshort setCategory={setCategory} />
      <NewsContent newsArray={newsArray} newsResults={newsResults}
        loadmore={loadmore}
        setLoadmore={setLoadmore} />
      <Footer />
    </div>
  );
}

export default App;

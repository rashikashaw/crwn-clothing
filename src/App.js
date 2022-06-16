import React from 'react';
import './App.css';
import './categories.styles.scss'
import { CategoryList } from './components/CategoryList/CategoryList';

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    },
  ]
  return (
    <CategoryList categories={categories} />
  );
}

export default App;
// {/* <div className='category-container'>
// {/*<img/>*/}
// <div className='category--body-conatiner'>
//   <h1>Hats</h1>
//   <p>Shop Now</p>
// </div>
// </div>
// <div className='category-container'>
// {/*<img/>*/}
// <div className='category--body-conatiner'>
//   <h1>Jackets</h1>
//   <p>Shop Now</p>
// </div>
// </div>
// <div className='category-container'>
// {/*<img/>*/}
// <div className='category--body-conatiner'>
//   <h1>Sneakers</h1>
//   <p>Shop Now</p>
// </div>
// </div>
// <div className='category-container'>
// {/*<img/>*/}
// <div className='category--body-conatiner'>
//   <h1>Womens</h1>
//   <p>Shop Now</p>
// </div>
// </div>
// <div className='category-container'>
// {/*<img/>*/}
// <div className='category--body-conatiner'>
//   <h1>Mens</h1>
//   <p>Shop Now</p>
// </div>
// </div>  */}
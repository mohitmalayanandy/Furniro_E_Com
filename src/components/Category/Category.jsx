import React from 'react'
import './Category.css'
import { category_list } from '../../assets/assets'

const Category = ({ category, setCategory }) => {
  return (
    <div className="category">
      <h2>Browse The Range</h2>
      <p className='category-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nobis? </p>
      <div className='category-list'>
        {category_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.category_name ? "all" : item.category_name)} key={index} className='category-list-item'>
              <img className={category === item.category_name ? "active" : ""} src={item.category_image} alt="" />
              <p>{item.category_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Category
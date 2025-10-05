import { useState } from 'react'

const Categories = ({ categories }) => {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <div className='categories'>
      <ul>
        {categories.map((category, index) => (
          <li className={activeItem === index ? 'active' : ''} onClick={() => setActiveItem(index)} key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories

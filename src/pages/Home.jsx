import { Categories, SortPopup } from '../components/index.js'
import PizzaBlock from '../components/PizzaBlock.jsx'

const Home = ({ items }) => {
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories categories={['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup
          sortItems={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {items.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Home

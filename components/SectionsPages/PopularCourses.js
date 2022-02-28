import React from 'react'
import ButtonFilter from './ButtonFilter';
import items from '../Data/DataFilter';
import Courses from './Courses';
const allCategories = ["All", ...new Set(items.map((item) => item.category))];
export default function PopularCourses() {
    const [menuItem, setMenuItem] = React.useState(items);
  const [buttons, setButtons] = React.useState(allCategories);
  const filter = (button) => {
    if (button == "All") {
      setMenuItem(items);
      return;
    }
    const filterData = items.filter((item) => item.category === button);
    setMenuItem(filterData);
  };
  return (
    <section className='popularCourses px-5'>
      <div className=' grid grid-cols-1 container mb-6'>
        <div className=' col-span-1 text-center'>
          <h2 className=' text-6xl font-bold mb-3 text-black text-opacity-80'>Most Popular Courses</h2>
          <span className=' text-color_1 font-semibold'>Choose from hundreds of courses from specialist organizations</span>
        </div>
      </div>
        <ButtonFilter button={buttons} filter={filter} />
        <Courses menuItem={menuItem}/>
    </section>
  )
}

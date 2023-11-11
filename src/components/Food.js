import React, { useState } from 'react'
import { Data } from '../data/Data.js'
function Food() {

    // console.log(Data);

    const [food, setFood] = useState(Data)
    console.log(food)

    const filterType = (category) =>{
        setFood(
            Data.filter((item)=>{
                return item.category === category;
            })
        )
    }

    const filterPrice = (price) =>{
        setFood(
            Data.filter((item)=>{
                return item.price === price;
            })
        )
    }

    return (
        <div className='max-w-[1240px] mx-auto px-4 py-12'>
            <h1 className='text-center font-bold text-4xl text-orange-500'>Top Rated Menu Items</h1>
            <div className='lg:flex justify-between px-4 py-10'>
                {/* Filer type */}
                <div className=''>
                    <p className='text-gray-700 font-bold text-xl'>Filter Type</p>
                    <div className='py-4 flex gap-6 flex-wrap'>
                        <button onClick={()=> setFood(Data)} className='border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>All</button>
                        <button onClick={()=> filterType('burger')} className='border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>Burgers</button>
                        <button onClick={()=> filterType('pizza')} className='border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>Pizza</button>
                        <button onClick={()=> filterType('salad')} className='border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>Salads</button>
                        <button onClick={()=> filterType('chicken')} className='border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>Chicken</button>
                    </div>
                </div>
                {/* Filer Price */}
                <div>
                    <p className='text-gray-700 font-bold text-xl'>Filter Price</p>
                    <div className='py-4 flex gap-6 flex-wrap'>
                        <button onClick={()=> filterPrice('$')} className='border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white' >$</button>
                        <button onClick={()=> filterPrice('$$')} className='border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white' >$$</button>
                        <button onClick={()=> filterPrice('$$$')} className='border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white' >$$$</button>
                        <button onClick={()=> filterPrice('$$$$')} className='border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white' >$$$$</button>
                    </div>
                </div>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {food.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-t-lg hover:scale-105 duration-300 cursor-pointer'>
                        <div className=''>
                            <img className='w-full h-[200px] object-cover rounded-t-lg ' src={item.image} alt={item.name} />
                        </div>
                        <div className='px-2 pt-2 font-semibold'>
                            <p>{item.name}</p>
                        </div>
                        <div className='px-2 py-2 '>
                            <p>
                                <span className='rounded-lg p-1 bg-orange-500 text-white'>{item.price}</span></p>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}

export default Food
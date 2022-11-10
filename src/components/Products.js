import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios config/axiosInstance';

export const Products = () => {
    const [apiProducts, setApiProducts] = useState([]);
    useEffect(()=>{
        // axiosInstance.get('/product',
        //         { headers: {"authentication" : localStorage.getItem('token')}}
        //         ).then(async (res)=> {
        //             await setApiProducts(res.data);
        //             console.log(apiProducts);

        //         }).catch ((err) => {
        //         console.log(err);
        //     })
         axiosInstance.get('/product/',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'authentication' : localStorage.getItem('token')
                        },
                        
                    }).then((res) => {
                        setApiProducts(res.data);
                        console.log(res.data);
                        console.log(apiProducts)
                    }).catch ((err) => {
                        console.log(err);
                    })
         }

    ,[])

    useEffect(()=>{

    },[apiProducts])

  return (
  <>
    <div className='grid grid-cols-10'>
        <div className='min-h-screen bg-indigo-600 shadow col-span-2 text-center'>
            <h2 className='mt-2 text-lg font-semibold'>Categories</h2>
            <ul className='space-y-4 mt-3 text-md font-bold text-slate-100'>
                <li className='hover:cursor-pointer hover:text-slate-700 transition-all'>Men's Clothing</li>
                <li className='hover:cursor-pointer hover:text-slate-700 transition-all'>Women's CLothing</li>
                <li className='hover:cursor-pointer hover:text-slate-700 transition-all'>Jewellry</li>
                <li className='hover:cursor-pointer hover:text-slate-700 transition-all'>Electronics</li>
                <li className='hover:cursor-pointer hover:text-slate-700 transition-all'>Mobiles</li>
            </ul>
        </div>
        <div className='col-span-8'>
        <h2 className='text-center font-thin text-4xl bg-white'>Products</h2>
        <div className='p-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 place-items-center mx-auto md:space-x-2 text-center bg-white'>
        {apiProducts.map((prod) => {
            return (
            <div key={prod.id} className=' space-y-2 pb-3 bg-slate-200 rounded-md md:mx-auto text-center shadow-md'>
                <img className='w-full rounded-t-md' src={prod.image} alt='product#1'/>
                <h3 className='font-extrabold'>{prod.title}</h3>
                <p>{prod.description}</p>
                <p className='font-extrabold'>${prod.price}</p>
                {/* <p className='font-medium'>${prod.rating.rate} / <span className='text-amber-400'>{prod.rating.count}</span></p> */}
                <p className='font-bold text-white bg-indigo-600 p-1 rounded-full'>{prod.rating}</p>
                <button className='text-center text-slate-50 font-extrabold bg-green-600 hover:translate-y-0.5 hover:bg-slate-300 hover:text-gray-700 transition-all w-fit mx-auto rounded-full py-2 px-5'>Add To Cart</button>
            </div>
            )
        })}
    </div>
        </div>
    </div>
    </>
  )
}

import React from 'react';
import img3 from "./assets/a4.jpg"
import logo from "./assets/logo-01.png"
import { Link } from "react-router-dom";
import "./pakage.css"
export default function Package() { // Fixed the typo in the component name
  return (
    <div className='bg-image'>
      <div className='flex justify-center py-6'>

</div>
      <h1 className='text-center text-4xl pt-12 font-bold'>
        Beauty Packages to Elevate Your Style
      </h1>
      <p className='text-center mx-12 my-12'>
        Discover our premium beauty packages that cater to the needs of your personal style. Our packages include haircuts, makeup, skincare, and more.
      </p>
     
      <div class="container mx-auto p-4">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
    
  
    <div class="transparent-card text-black shadow-md rounded-lg p-4">
      <img src={img3} alt="Card Image" class="w-full h-64 object-cover rounded-t-lg"/>
      <h2 class="text-xl  mt-4 text-center font-bold">Normal</h2>
      <ul class="list-disc list-inside mt-2">
        <li>Facial</li>
        <li>Bleach</li>
        <li>Manicure</li>
        <li>padicure</li>
        <li>wax (Half leggs arms)</li>
        <p className='text-center text-xl mt-28 font-bold'>Price - 1200</p>
        <div className='flex  justify-center mt-6'>

        <Link to="/book" className='bg-pink-500 hover:bg-pink-600 py-1 rounded-xl px-2 mb-4'>Contact Us</Link>
        </div>
      </ul>
    </div>

    
    <div class="transparent-card text-black shadow-md rounded-lg p-4">
      <img src={img3} alt="Card Image" class="w-full h-64 object-cover rounded-t-lg"/>
      <h2 class="text-xl  mt-4 text-center font-bold">Combo plus package </h2>
      <ul class="list-disc list-inside mt-2">
      <li>Facial</li>
        <li>Bleach</li>
        <li>Manicure</li>
        <li>padicure</li>
        <li>wax (Half leggs arms)</li>
        <li>Cutting</li>
        <li>Threading</li>
        <p className='text-center text-xl font-bold mt-16'>Price - 1200</p>
        <div className='flex  justify-center mt-6'>

        <Link to="/book" className='bg-pink-500 hover:bg-pink-600 py-1 rounded-xl px-2 mb-4'>Contact Us</Link>
        </div>
      </ul>
    </div>
   
   
    <div class="transparent-card text-black shadow-md rounded-lg p-4">
      <img src={img3} alt="Card Image" class="w-full h-64 object-cover rounded-t-lg"/>
      <h2 class="text-xl  mt-4 text-center font-bold">monthly package platinum</h2>
      <ul class="list-disc list-inside mt-2">
      <li> facial</li>
        <li>Bleach</li>
        <li>Back Bleack</li>
        <li>wax (full arms/ full legs) under arm</li>
        <li>Delux Mani / Pedi spa</li>
        <li>Hair colour</li>
        <li>Hair spa</li>
        <li>Shampoo and sty;ing(with deep conditioning)</li>
        <p className='text-center text-xl font-bold mt-12'>Price - 1200</p>
        <div className='flex  justify-center mt-6'>

        <Link to="/book" className='bg-pink-500 hover:bg-pink-600 py-1 rounded-xl px-2 mb-4'>Contact Us</Link>
        </div>
      </ul>
    </div>
  
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
    
  
    <div class="transparent-card text-black shadow-md rounded-lg p-4">
      <img src={img3} alt="Card Image" class="w-full h-64 object-cover rounded-t-lg"/>
      <h2 class="text-xl  mt-4 text-center font-bold">monthly package gold</h2>
      <ul class="list-disc list-inside mt-2">
        <li>Facial</li>
        <li>Bleach</li>
        <li>Back Bleack</li>
        <li>wax (full arms/ full legs)</li>
        <li>Mini Mani / Pedi</li>
        <li>Head Mani/ pedi, arm leg taning</li>
        <li>Shampoo and styling(with deep conditioning)</li>
        <p className='text-center text-xl font-bold mt-12'>Price - 1200</p>
        <div className='flex  justify-center mt-6'>

        <Link to="/book" className='bg-pink-500 hover:bg-pink-600 py-1 rounded-xl px-2 mb-4'>Contact Us</Link>
        </div>
        
      </ul>
    </div>

    
    <div class="transparent-card text-black shadow-md rounded-lg p-4">
      <img src={img3} alt="Card Image" class="w-full h-64 object-cover rounded-t-lg"/>
      <h2 class="text-xl  mt-4 text-center font-bold">Bridal package gold</h2>
      <ul class="list-disc list-inside mt-2">
        <li>Two sitting facial</li>
        <li>Bleach</li>
        <li>Manicure</li>
        <li>Pedicure</li>
        <li>Body Bleach</li>
        <li>Makeup</li>
        <li>Body wax</li>
        <li>Hair spa</li>
        <p className='text-center text-xl font-bold mt-6'>Price - 1200</p>
        <div className='flex  justify-center mt-6'>
        <Link to="/book" className='bg-pink-500 hover:bg-pink-600 py-1 rounded-xl px-2 mb-4'>Contact Us</Link>
        </div>
      </ul>
    </div>

   
    <div class="transparent-card text-black shadow-md rounded-lg p-4">
      <img src={img3} alt="Card Image" class="w-full h-64 object-cover rounded-t-lg"/>
      <h2 class="text-xl  mt-4 text-center font-bold">Bridal package platinum</h2>
      <ul class="list-disc list-inside mt-2">
      <li>Two sitting facial</li>
        <li>Bleach</li>
        <li> Two Manicure</li>
        <li> Two Pedicure</li>
        <li>Body Bleach</li>
        <li>Makeup</li>
        <li>Body wax</li>
        <p className='text-center text-xl font-bold mt-12'>Price - 1200</p>
        <div className='flex  justify-center mt-6'>
        <Link to="/book" className='bg-pink-500 hover:bg-pink-600 py-1 rounded-xl px-2 mb-4'>Contact Us</Link>
        </div>
      </ul>
    </div>
    
  
  </div>
</div>


    </div>
  );
}

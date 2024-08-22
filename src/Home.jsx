import React from 'react';
import "./home.css";
import img1 from './assets/a1.png';
import img2 from './assets/a2.jpg';
import { Link } from "react-router-dom";
import logo from "./assets/logo-01.png";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <div id="b1">
          <h1 className="md:text-5xl text-3xl sm:text-4xl font-bold text-center mt-36 text-white">Welcome to One Stop</h1>
          <p className="text-center md:text-3xl sm:text-2xl text-xl font-bold text-white mt-6">Beauty Salon and Academy</p>
        </div>
      </section>

      {/* Ad Section */}
      <section>
        <div id='b2' className='sm:flex space-y-6 mx-12 my-12 justify-evenly items-center'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold'>Our Salon is Most Popular</h1>
            <p className='text-xl mt-6'>The Ultimate Experience for Natural Beauty</p>
            <p className='text-xl mt-2'>And Relaxation</p>
          </div>

          <div className='sm:flex gap-8 space-y-6'>
            <img src={img1} className='rounded-sm' alt="Salon interior view" width={300} height={300} />
            <img src={img2} className='rounded-sm' alt="Salon service in action" width={300} height={300} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[url('/src/assets/bg3.jpg')] bg-cover bg-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col transparent-card">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="One Stop Beauty Salon logo" src={logo} />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">One Stop Beauty Salon & Academy</h1>
            <p className="mb-8 leading-relaxed">One stop Beauty salon & Academy , Our staff and management at One Stop Beauty Salon & Academy are in the business of offering the highest possible professional hair care and service, in a warm and friendly, family-oriented environment. We believe our clients to be the most valuable people to us in our profession. Our clients are all treated with respect and we always strive to exceed their overall expectations. With honesty and integrity, we service our clients with the best care.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-blue-500">clients</span> say
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
          </p>

          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg border-slate-400">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Testimonial from Robert" />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                  <span className="text-sm text-gray-500">CTO, Robert Consultency</span>
                </div>
              </div>
            </div>

            <div className="p-8 border rounded-lg border-slate-400">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="Testimonial from Jeny Doe" />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">Jeny Doe</h1>
                  <span className="text-sm text-gray-500">CEO, Jeny Consultency</span>
                </div>
              </div>
            </div>

            <div className="p-8 border rounded-lg border-slate-400">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Testimonial from Ema Watson" />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson</h1>
                  <span className="text-sm text-gray-500">Marketing Manager at Stech</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Appointment Section */}
      <section>
        <div id='b3'>
          <div className='content ml-12'>
            <h3 className='md:text-4xl sm:text-3xl text-xl font-bold mt-20'>Ready for a Refreshing Experience?</h3>
            <p className='md:text-xl text-md font-bold mt-8'>Our skilled professionals are here to make you look and feel your best.</p>
            <p className='md:text-xl text-md font-bold'>Reserve your appointment now and enjoy exceptional care in a relaxing environment. Don’t wait—book today and treat yourself!</p>
            <div className='mt-6'>
              <Link to="/Book" className='text-white text-xl border-2 py-1 bg-pink-400 px-2 rounded-xl hover:bg-pink-600'>Book an appointment</Link>
            </div> 
          </div>
        </div>
      </section>
    </div>
  );
}

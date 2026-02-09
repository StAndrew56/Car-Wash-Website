import React from "react";
import "./index.css"; 
import { useEffect, useState } from "react";
import Map from "./components/Map";



function App() {
  const [message, setMessage] = useState("");

    useEffect(() => {
      fetch("http://localhost:5050")
        .then((res) => res.text())
        .then((data) => setMessage(data))
        .catch((err) => console.error(err));
    }, []);

  return (
    <div>
      {/* Navbar*/}
      <nav className="flex items-center justify-between py-2 px-4 bg-gray-800">
        <img
          src="/images/backroadImage.png"
          className="h-20 w-20 object-contain"
          alt="Logo Image"
        />
        <ul className="flex gap-8 text-lg">
          <li className="text-white hover:text-gray-300 cursor-pointer">Home</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">About Us</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">Services</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="relative w-full h-[500px]">
        <img
          src="/images/bluecar.png"
          className="w-full h-full object-cover"
          alt="Blue Car"
        />


        <div className="absolute top-0 right-0 h-full bg-white bg-opacity-80 p-8 shadow-lg max-w-xl flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Your Car, Our Care
          </h1>
          <p className="text-lg text-black">
            Professional hand car wash with attention to every detail.
          </p>
        </div>
      </section>

      {/* Spacer / Decorative Sections */}
      <section className="w-full h-16 bg-gray-50"></section>
      <section className="w-full h-16 bg-gradient-to-r from-blue-400 via-blue-800 to-blue-400 -rotate-2"></section>      
      <section className="w-full h-16 bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800 rotate-2"></section>
      <section className="w-full h-16 bg-gradient-to-r from-blue-400 via-blue-800 to-blue-400 -rotate-2"></section>
      <section className="w-full h-16 bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800 rotate-2"></section>
      <section className="w-full h-16 bg-white"></section>

      {/* Why Choose Us */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-gray-800">
          Why Choose Backroad Handwash?
        </h2>
        <p className="text-xl text-gray-500">
          We treat every car like it's our own, scroll down to learn more!
        </p>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center p-16 gap-8 bg-white">
        <div className="md:w-2/3 p-12 bg-gray-100 rounded-xl shadow-xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">
            About Us
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Family owned and operated hand car wash focused on honest work, 
            family values, and careful attention to every vehicle. 
            Proud to serve Needville.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src="/images/handwashCar.jpg"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            alt="Hand Wash Image"
          />
        </div>
      </section>

      {/* Why Choose Us Boxes */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-16 bg-gray-50"> 
        <div className="w-full md:w-1/3 p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-center text-xl font-bold mb-4 text-blue-800">
            Attention to detail
          </h3>
          <p className="text-center text-gray-600">
            We take the time to ensure every inch of your car is spotless, 
            from the rims to the roof.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-center text-xl font-bold mb-4 text-blue-800">
            Family Values
          </h3>
          <p className="text-center text-gray-600">
            As a family owned business, we treat every customer like part of our family.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-center text-xl font-bold mb-4 text-blue-800">
            Honest Work
          </h3>
          <p className="text-center text-gray-600">
            We believe in providing honest, high-quality service at a fair price.
          </p>
        </div>
      </section>

      {/* Spacer / Decorative Sections */}
      <section className="w-full h-16 bg-gray-50"></section>
      <section className="w-full h-16 bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800 rotate-2"></section>
      <section className="w-full h-16 bg-gradient-to-r from-blue-400 via-blue-800 to-blue-400 -rotate-2"></section>
      <section className="w-full h-16 bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800 rotate-2"></section>
      <section className="w-full h-16 bg-gradient-to-r from-blue-400 via-blue-800 to-blue-400 -rotate-2"></section>
      <section className="w-full h-16 bg-white"></section>


      {/* Services */}
      <section id="services" className="p-16 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6 text-blue-900">Services</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/3 p-8 bg-gray-100 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Basic Wash</h3>
            <p className="text-gray-600">
              Exterior hand wash, tire shine, and window cleaning.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-8 bg-gray-100 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Deluxe Wash</h3>
            <p className="text-gray-600">
              Basic Wash plus interior vacuum, dashboard wipe down, and air freshener.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-8 bg-gray-100 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Premium Wash</h3>
            <p className="text-gray-600">
              Deluxe Wash plus hand wax, tire dressing, and interior window cleaning.
            </p>
          </div>
        </div>
        <h1 className="text-3xl font-bold mt-12 text-blue-900">
          Click below to find more information about our services and pricing!
        </h1>
        <a
          href="https://www.backroadhandwash.com/services"
          className="inline-block mt-6 bg-blue-800 text-white px-6 py-3 rounded"
        >
          View Services
        </a>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="p-20 text-center bg-gradient-to-br from-blue-900 via-blue-600 to-blue-900 text-white"
      >
        <h2 className="text-5xl font-extrabold mb-6">
          Ready to Get Your Car Looking New?
        </h2>

        <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
          Call or text us today and experience a hand wash that treats your car like our own.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center py-10">
          <a
            href="tel:+1830303030"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
          >
            📞 Call Now
          </a>

          <a
            href="sms:+1830303030"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
          >
            💬 Text Us
          </a>
        </div>

        {/* Location Section */}
        <section id="location" className="p-16 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
            Find Us Here
          </h2>
          <Map />
        </section>
        
      </section>


      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6">
        &copy; 2024 Backroad Handwash. All rights reserved.
      </footer>
    </div>
    
  );
}

export default App;

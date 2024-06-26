import Navbar from "./components/Navbar";



import SocialMedia from "./SocialMedia.jpg";
import Salah from "./Salah.jpeg";
import VideoPlayer from './components/VideoPlayer';


import ContactForm from "./components/ContactForm";


import image3 from "./image3.png";

function App() {
  const handleSignUpClick = () => {
    console.log("Sign Up button clicked!");
  };

  const handleLogInClick = () => {
    console.log("Log In button clicked!");
  };



  return (
    <div className="App">
    
      <Navbar
        onSignUpClick={handleSignUpClick}
        onLogInClick={handleLogInClick}
      />
        
    <section className="hero-section text-black bg-gray-200 p-10 mb-6 flex flex-col md:flex-row">
  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h1 className="text-4xl font-bold mt-4 mb-4 md:mt-0">Masjid Tarbiyah</h1>
    <p className="text-lg mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div>
  
    </div>
  </div>
<div className="w-full md:w-3/4 flex justify-end"> {/* Increase the width of the container */}
  <img
    src={SocialMedia}
    alt="A beautiful view of nature"
    className="md:max-w-full mt-4 md:mt-0 rounded-lg shadow-lg"
    style={{ objectFit: 'cover', width: '400px' }} // Increase the size of the image
  />
</div>



</section>

<section className="flex justify-start bg-gray-100 p-16 pt-20 pb-20 mb-8">
  <div className="w-1/2">
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <p className="text-lg mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis id justo elementum feugiat.
        Fusce porttitor vitae risus vel euismod. Nam ac arcu id ipsum scelerisque tristique a id nisl.
        Nullam nec justo et urna laoreet semper in nec purus. Aenean pharetra tempor nibh eget rutrum.
        In id sem vitae enim elementum consequat eget eu eros. Integer vitae pharetra lorem.
      </p>
      <p className="text-lg mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis id justo elementum feugiat.
        Fusce porttitor vitae risus vel euismod. Nam ac arcu id ipsum scelerisque tristique a id nisl.
        Nullam nec justo et urna laoreet semper in nec purus. Aenean pharetra tempor nibh eget rutrum.
        In id sem vitae enim elementum consequat eget eu eros. Integer vitae pharetra lorem.
      </p>
    </div>
     
  </div>
</section>
<section className="bg-blue-500 text-white p-6 mb-20" style={{ height: '400px' }}> {/* Adjusted height */}
      <h2 className="text-3xl font-bold mb-6 text-center">Keep the masjid running</h2>
      <div className="flex flex-col-reverse md:flex-row items-start justify-between">
        <div className="w-full md:w-1/2 pr-6 mb-4 md:mb-0"> {/* Adjusted width */}
          <h3 className="text-2xl font-bold">Sign Up</h3>
          <p className="text-lg mt-4">
            We encourage you all to donate; and for Allah ﷻ not only reward you, but to also put barakah in your wealth.
            <br/><br/>
            Various Hadith cite the Prophet ﷺ saying: “Whoever builds a Masjid for the sake of Allah ﷻ, Allah ﷻ will build for him a house in Paradise! By donating, not only will you be providing a place of worship but laying foundations for your own spiritual rewards in this life and the next.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-end"> {/* Adjusted flexbox properties */}
          <div style={{ marginLeft: 'auto' }}> {/* Added a container with marginLeft: 'auto' */}
            <VideoPlayer style={{ width: '100%', height: '100%' }} /> {/* Adjusted width and height */}
          </div>
        </div>
      </div>
    </section>


  
    
<section className="flex justify-center items-center h-auto py-10">
  <div className="card w-80 glass text-center mx-16"> {/* Decreased card width, increased mx value */}
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
    <div className="card-body">
      <h2 className="card-title">Life hack</h2>
      <p>How to park your car at your garage?</p>
      <div className="card-actions justify-center">
        <button className="btn btn-primary">Learn now!</button>
      </div>
    </div>
  </div>

  <div className="card w-80 glass text-center mx-16"> {/* Decreased card width, increased mx value */}
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
    <div className="card-body">
      <h2 className="card-title">Life hack</h2>
      <p>How to park your car at your garage?</p>
      <div className="card-actions justify-center">
        <button className="btn btn-primary">Learn now!</button>
      </div>
    </div>
  </div>
</section>



<section className="bg-gray-200 text-gray-800 p-8 md:p-16 mb-8 md:mb-16 rounded-lg shadow-lg">
  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">Join Our Campaign</h2>
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
    <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center md:items-start">
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center md:text-left">Prayer Time</h3>
      <p className="text-lg md:text-xl text-center md:text-left leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tortor dignissim, vehicula magna at, sodales augue.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur tincidunt quam non diam dignissim, sed consequat lectus lacinia.
      </p>
    </div>
    <div className="w-full md:w-1/2 p-4 md:p-8 flex justify-center items-center">
      <img
        src={Salah}
        alt="Join Campaign Image"
        className="max-w-sm md:max-w-md rounded-lg"
      />
    </div>
  </div>
</section>

<section className="flex justify-center items-center h-auto py-10">
  <div className="p-2 mt-2 mb-2 text-center">
    <h2 className="text-3xl font-bold mt-2 mb-16">
      Get in touch with us
    </h2>
    <p className="text-lg mt-2">
    Below is a form which you can get in touch with us and send us a message. We will get back to you as soon as possible.
    </p>
   
  </div>
      </section>

      <ContactForm />





      <footer className="footer footer-center p-10 bg-blue-500 text-white rounded">
        <h1 className="text-3xl">Logo</h1>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245-11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v-3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default App;



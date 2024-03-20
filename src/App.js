import Navbar from "./components/Navbar";

// import { GoSmiley } from "react-icons/go";
import HeroSection from "./Hero-Section.png";
import signup from "./signup.png";
import image2 from "./image2.png";
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

      <div className="hero-section text-black p-10 mb-6 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mt-4">Masjid tarbiyah</h1>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-6">
            <button
              onClick={() => console.log("Sign Up button clicked")}
              className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 hover-text-white m-2"
            >
              Sign up
            </button>
            <button
              onClick={() => console.log("Log In button clicked")}
              className="text-blue-500 bg-white px-4 py-2 rounded-lg border border-blue-500 hover-bg-blue-500 hover-text-white m-2"
            >
              Log in
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={HeroSection}
            alt="A beautiful view of nature"
            className="max-w-full mt-4 md:mt-0"
          />
        </div>
      </div>

      <section className="bg-gray-100 p-10 mb-6 text-center">
        <h2 className="text-3xl font-bold">Our users</h2>
        <p className="text-lg mt-4">
          Get to follow campaigns by people you know.
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* box 1  */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            {/* <GoSmiley className="text-2xl mb-2" /> */}
            <span className="text-2xl">250+</span>
            <p className="text-base">customers</p>
          </div>
          {/* box 2  */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            {/* <GoSmiley className="text-2xl mb-2" /> */}
            <span className="text-2xl">600+</span>
            <p className="text-base">customers</p>
          </div>
          {/* box 3  */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            {/* <GoSmiley className="text-2xl mb-2" /> */}
            <span className="text-2xl">1.8k+</span>
            <p className="text-base">customers</p>
          </div>
          {/* box 4  */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            {/* <GoSmiley className="text-2xl mb-2" /> */}
            <span className="text-2xl">250+</span>
            <p className="text-base">customers</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-500 text-white p-10 mb-6">
        <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 pr-6">
            <h3 className="text-2xl font-bold">Sign Up</h3>
            <p className="text-lg mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quos amet exercitationem modi quod similique labore aliquam alias
              facilis? Dicta voluptates cupiditate, ab nesciunt modi ullam ea
              corrupti voluptatem. Maxime.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={signup} alt="Screenshot" className="max-w-full" />
          </div>
        </div>
      </section>

      <section className="p-10 mb-6 flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <img src={image2} alt="Image 1" className="max-w-full mb-4" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold">Browse Campaigns</h2>
          <p className="text-lg mt-4">
            Description of how to browse campaigns.
          </p>
        </div>
      </section>

      <section className="bg-blue-500 text-white p-16 mb-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Join Campaign</h2>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 p-4 flex items-center">
            <div>
              <h2 className="text-5xl font-bold mt-1 mb-4">Join Campaign</h2>
              <p className="text-lg mt-2">
                Description of how to join a campaign.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img
              src={image3}
              alt="Join Campaign Image"
              className="max-w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center h-screen">
        <div className="p-2 mt-2 mb-2 text-center">
          <h2 className="text-3xl font-bold mt-2 mb-16">
            Join the community and let's make a difference
          </h2>
          <p className="text-lg mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            mollitia omnis optio ratione officiis eveniet fugit aliquid ipsum
            qui quibusdam dolorem, odio nesciunt suscipit debitis maxime fugiat
            voluptates totam iusto.
          </p>

          <div className="flex justify-center mt-2">
            <button
              onClick={() => console.log("Sign up button clicked")}
              className="text-white bg-blue-500 px-8 py-3 rounded-lg hover-bg-blue-700 hover-text-white m-2 w-48"
            >
              Sign up
            </button>
            <button
              onClick={() => console.log("Log in button clicked")}
              className="text-blue-500 bg-white px-8 py-3 rounded-lg border border-blue-500 hover-bg-blue-500 hover-text-white m-2 w-48"
            >
              Log in
            </button>
          </div>
        </div>
      </section>

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

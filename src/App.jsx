import github from "../src/assets/images/icon-github.svg";
import frontend from "../src/assets/images/icon-frontend-mentor.svg";
import linkedin from "../src/assets/images/icon-linkedin.svg";
import twitter from "../src/assets/images/icon-twitter.svg";
import adam from "../src/assets/images/image-profile-desktop.webp";
import adam2 from "../src/assets/images/image-profile-tablet.webp";
import adam3 from "../src/assets/images/image-profile-mobile.webp";
import design from "../src/assets/images/thumbnail-project-1-large.webp";
import design2 from "../src/assets/images/thumbnail-project-1-small.webp";
import eLearning from "../src/assets/images/thumbnail-project-2-large.webp";
import eLearning2 from "../src/assets/images/thumbnail-project-2-small.webp";
import todo from "../src/assets/images/thumbnail-project-3-large.webp";
import todo2 from "../src/assets/images/thumbnail-project-3-small.webp";
import entertainment from "../src/assets/images/thumbnail-project-4-large.webp";
import entertainment2 from "../src/assets/images/thumbnail-project-4-small.webp";
import memory from "../src/assets/images/thumbnail-project-5-large.webp";
import memory2 from "../src/assets/images/thumbnail-project-5-small.webp";
import art from "../src/assets/images/thumbnail-project-6-large.webp";
import art2 from "../src/assets/images/thumbnail-project-6-small.webp";
import "./App.css";

function App() {
  return (
    <>
      <main className="max-w-[1110px] mx-auto">
        <nav className="flex flex-col p-4 md:flex-row gap-4 md:gap-0 items-center justify-between">
          <h2 className="font-bold text-3xl lg:text-4xl">adamkeyes</h2>
          <div className="flex items-center gap-8">
            <img src={github} alt="" />
            <img src={frontend} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
          </div>
        </nav>

        <section className="flex flex-col-reverse p-4 items-center md:flex-row justify-between  md:text-start my-10">
          <div>
            <div className="my-10">
              <h2 className="font-bold text-4xl md:text-7xl lg:text-8xl">
                Nice to meet you!
              </h2>
              <div className="relative">
                <h1 className="font-bold text-4xl md:text-7xl lg:text-8xl">
                  I'm Adam Keyes
                </h1>
                <div className="h-2 w-48 md:w-96 lg:w-[34rem] bg-[#4ee1a0] absolute left-32 md:left-28 lg:left-40"></div>
              </div>
            </div>
            <p className="w-96 text-[#d9d9d9] my-10">
              Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <div className="relative">
              <span className="font-bold uppercase hover:text-[#4ee1a0] cursor-pointer">
                Contact me
              </span>
              <div className="h-1 w-28 md:w-24 bg-[#4ee1a0] left-[8.5rem] md:left-0 absolute top-10"></div>
            </div>
          </div>
          <div className="hidden md:block relative bottom-40 -z-10">
            <img src={adam} alt="" className="w-[30rem] hidden lg:block" />
            <img src={adam2} alt="" className="md:block lg:hidden -z-10 w-96" />
          </div>
          <div>
            <img src={adam3} alt="" className="w-44 md:hidden" />
          </div>
        </section>

        <div className="p-4">
          <hr />
        </div>

        <section className="flex items-center p-4 md:items-start md:text-start justify-center md:justify-between flex-wrap flex-grow">
          <div className="w-96">
            <h2 className="font-bold text-3xl md:text-5xl my-8">HTML</h2>
            <p className="text-[#d9d9d9] text-lg">4 Years Experience</p>
          </div>
          <div className="w-96">
            <h2 className="font-bold text-3xl md:text-5xl my-8">CSS</h2>
            <p className="text-[#d9d9d9] text-lg">4 Years Experience</p>
          </div>
          <div className="w-96">
            <h2 className="font-bold text-3xl md:text-5xl my-8">JavaScript</h2>
            <p className="text-[#d9d9d9] text-lg">4 Years Experience</p>
          </div>
          <div className="w-96">
            <h2 className="font-bold text-3xl md:text-5xl my-8">
              Accessibility
            </h2>
            <p className="text-[#d9d9d9] text-lg">4 Years Experience</p>
          </div>
          <div className="w-96">
            <h2 className="font-bold text-3xl md:text-5xl my-8">React</h2>
            <p className="text-[#d9d9d9] text-lg">3 Years Experience</p>
          </div>
          <div className="w-96">
            <h2 className="font-bold text-3xl md:text-5xl my-8">Sass</h2>
            <p className="text-[#d9d9d9] text-lg">3 Years Experience</p>
          </div>
        </section>

        <div className="p-4 md:hidden">
          <hr />
        </div>

        <section className="my-40 p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-4xl md:text-8xl">Projects</h2>
            <div className="relative">
              <span className="font-bold uppercase">Contact me</span>
              <div className="h-1 w-24 bg-[#4ee1a0] absolute top-10"></div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-between gap-8">
            <div className="flex flex-col items-start">
              <img src={design} alt="" className="w-[35rem] hidden lg:block" />
              <img src={design2} alt="" className="md:w-96 lg:hidden" />
              <h3 className="my-5 font-bold text-2xl uppercase">
                Design Portfolio
              </h3>
              <p className="text-lg">HTML CSS</p>
              <div className="flex gap-8 mt-5 uppercase font-bold lg:hidden">
                <div className="relative">
                  <p>view project</p>
                  <div className="h-[1px] w-28 bg-[#4ee1a0] absolute top-7"></div>
                </div>
                <div className="relative">
                  <p>view code</p>
                  <div className="h-[1px] w-20 bg-[#4ee1a0] absolute top-7"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <img
                src={eLearning}
                alt=""
                className="w-[35rem] hidden lg:block"
              />
              <img src={eLearning2} alt="" className="md:w-96 lg:hidden" />
              <h3 className="my-5 font-bold text-2xl uppercase">
                E-learning landing page
              </h3>
              <p className="text-lg">HTML CSS</p>
              <div className="flex gap-8 mt-5 uppercase font-bold lg:hidden">
                <div className="relative">
                  <p>view project</p>
                  <div className="h-[1px] w-28 bg-[#4ee1a0] absolute top-7"></div>
                </div>
                <div className="relative">
                  <p>view code</p>
                  <div className="h-[1px] w-20 bg-[#4ee1a0] absolute top-7"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <img src={todo} alt="" className="w-[35rem] hidden lg:block" />
              <img src={todo2} alt="" className="md:w-96 lg:hidden" />
              <h3 className="my-5 font-bold text-2xl uppercase">
                todo web app
              </h3>
              <p className="text-lg">HTML CSS JAVASCRIPT</p>
              <div className="flex gap-8 mt-5 uppercase font-bold lg:hidden">
                <div className="relative">
                  <p>view project</p>
                  <div className="h-[1px] w-28 bg-[#4ee1a0] absolute top-7"></div>
                </div>
                <div className="relative">
                  <p>view code</p>
                  <div className="h-[1px] w-20 bg-[#4ee1a0] absolute top-7"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <img
                src={entertainment}
                alt=""
                className="w-[35rem] hidden lg:block"
              />
              <img src={entertainment2} alt="" className="md:w-96 lg:hidden" />
              <h3 className="my-5 font-bold text-2xl uppercase">
                entertainment web app
              </h3>
              <p className="text-lg">HTML CSS JAVASCRIPT</p>
              <div className="flex gap-8 mt-5 uppercase font-bold lg:hidden">
                <div className="relative">
                  <p>view project</p>
                  <div className="h-[1px] w-28 bg-[#4ee1a0] absolute top-7"></div>
                </div>
                <div className="relative">
                  <p>view code</p>
                  <div className="h-[1px] w-20 bg-[#4ee1a0] absolute top-7"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <img src={memory} alt="" className="w-[35rem] hidden lg:block" />
              <img src={memory2} alt="" className="md:w-96 lg:hidden" />
              <h3 className="my-5 font-bold text-2xl uppercase">memory game</h3>
              <p className="text-lg">HTML CSS JAVASCRIPT</p>
              <div className="flex gap-8 mt-5 uppercase font-bold lg:hidden">
                <div className="relative">
                  <p>view project</p>
                  <div className="h-[1px] w-28 bg-[#4ee1a0] absolute top-7"></div>
                </div>
                <div className="relative">
                  <p>view code</p>
                  <div className="h-[1px] w-20 bg-[#4ee1a0] absolute top-7"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <img src={art} alt="" className="w-[35rem] hidden lg:block" />
              <img src={art2} alt="" className="md:w-96 lg:hidden" />
              <h3 className="my-5 font-bold text-2xl uppercase">
                art gallery showcase
              </h3>
              <p className="text-lg">HTML CSS JAVASCRIPT</p>
              <div className="flex gap-8 mt-5 uppercase font-bold lg:hidden">
                <div className="relative">
                  <p>view project</p>
                  <div className="h-[1px] w-28 bg-[#4ee1a0] absolute top-7"></div>
                </div>
                <div className="relative">
                  <p>view code</p>
                  <div className="h-[1px] w-20 bg-[#4ee1a0] absolute top-7"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#242424]">
        <div className="max-w-[1110px] mx-auto p-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            <div>
              <div className="text-start">
                <h2 className="text-8xl font-bold">Contact</h2>
                <p className="w-96 mt-5">
                  I would love to hear about your project and how I could help.
                  Please fill in the form, and I’ll get back to you as soon as
                  possible.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="name"
                className="border-solid p-4 w-96 placeholder:uppercase focus:outline-none bg-transparent border-b-[1px] border-b-white"
              />
              <input
                type="email"
                placeholder="email"
                className="border-solid p-4 placeholder:uppercase focus:outline-none bg-transparent border-b-[1px] border-b-white"
              />
              <input
                type="text"
                placeholder="message"
                className="border-solid p-4 placeholder:uppercase focus:outline-none bg-transparent border-b-[1px] border-b-white"
              />
              <div className="relative self-end mt-4">
                <span className="font-bold uppercase cursor-pointer hover:text-[#4ee1a0]">
                  Send message
                </span>
                <div className="h-[1px] w-28 bg-[#4ee1a0] absolute top-10"></div>
              </div>
            </div>
          </div>
          <hr className="mt-20" />
          <nav className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between mt-20">
            <h2 className="font-bold text-4xl">adamkeyes</h2>
            <div className="flex items-center gap-8">
              <img src={github} alt="" />
              <img src={frontend} alt="" />
              <img src={linkedin} alt="" />
              <img src={twitter} alt="" />
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;


// import React, { useState } from 'react';
// import CV from "../assets/Favour-Mbata_Frontend-Engineer_Resumè.pdf";
// import favourImage from "../assets/favur.png"

// const Hero = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <section className='h-full md:h-dvh w-dvh overflow-hidden relative'>
//       <div className='relative h-full w-full'>
//         <div className='mt-32 md:mt-0 flex items-center justify-center flex-col-reverse md:flex-row h-full px-10 lg:px-0 pb-10 gap-x-10'>
        
//           <div className='mt-10 md:mt-0 flex flex-col items-start'>
           
//             <div className='py-6 flex items-start flex-col w-full'>
//               <h2 className='class="text-4xl md:text-5xl text-[#020E7C] font-bold overflow-hidden font-poppins"'>
//                 <span className='inline-block overflow-hidden' style={{opacity: "1", transform: "none"}}>Hello, I'm Favour Mbata</span>
//               </h2>
//               <h1 className='text-[#50555C] '><span>Software Developer</span></h1>
//             </div>

//             <div className=''>
//               <p className="md:text-xl py-4 flex flex-wrap justify-start text-[#50555C]  gap-2 font-inter text-left sm:text-left ">
//               <span className=' inline-block overflow-hidden'>  I  Build Scalable Modern Websites For the Future</span>
      
//               </p>
//             </div>
//             <div className='w-full text-left'>
//               <a href={CV} download>
//                 <button className="border-2 mt-3 border-gray-700 rounded-2xl text-[#020E7C] w-[45%] md:w-[33%] lg:w-[21%] sm:w-[33%]" style={{ fontSize: '25px', fontWeight: '20px' }}>
//                   Resume
//                 </button>
//               </a>
//             </div>
//             <div className='max-w-xl mt-5' style={{opacity: 1}}>
//               <p className='text-xl font-rethink-sans text-[#50555C] font-medium duration-300 text-foreground/50 text-left' onMouseMove={toggleVisibility}>
//                 See more
//               </p>
              
//            <div
//             className={`transition-all duration-300 my-3 ${
//               isVisible ? 'border-b-[1px] border-gray-600 opacity-100' : 'opacity-0'
//             }`}
//           />

         
//           <div
//             className={`overflow-hidden mt-3 ${
//               isVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//             }`}
//             onMouseMove={() => setIsVisible(true)}
//             onMouseLeave={() => setIsVisible(false)}
//           >
//             <p className="text-foreground/60 py-2 text-sm font-rethink-sans text-left text-[#50555C]">
//               <span>
//                 I am a Full Stack Engineer specializing in building highly
//                 scalable, responsive, and user-friendly web applications. These
//                 days, I primarily work with Next.js, React, and TypeScript. I am
//                 well-versed and experienced in a variety of technology stacks,
//                 including JavaScript, Python, Django, and Bash.
//               </span>
//               <br />
//             </p>

//             <div
//               className={`transition-all duration-300 my-3 ${
//                 isVisible ? 'border-b-[1px] border-gray-700 opacity-100' : 'opacity-0'
//               }`} />
//           </div>

//               <div className='overflow-hidden mt-3' style={{height: "0px"}}></div>
//             </div>
//           </div>
         
         
          
          
//           <div className=' lg:ml-10'>
//             <img
//               src={favourImage}
//               alt='favour'
//               className='className="w-full md:w-3/4 h-auto object-contain rounded-2xl' 
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useState } from 'react';
import CV from "../../assets/Favour-Mbata_Frontend-Engineer_Resumè.pdf";
import favourImage from "../../assets/favur.png";
import './Hero.css'; // Import the extracted CSS

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
        
          <div className="hero-text">
           
            <div className="py-6">
              <h2 className="hero-heading">
                Hello, I'm Favour Mbata
              </h2>
              <h1 className="hero-subheading">Software Developer</h1>
            </div>

            <div>
              <p className="hero-description">
                I Build Scalable Modern Websites For the Future
              </p>
            </div>

            <div className="hero-button-wrapper">
              <a href={CV} download>
                <button className="hero-button">
                  Resume
                </button>
              </a>
            </div>

            <div className="hero-see-more" style={{ opacity: 1 }}>
              <p className="hero-see-more-text" onMouseMove={toggleVisibility}>
                See more
              </p>
              
              <div
                className={`hero-border ${isVisible ? 'visible' : ''}`}
              />

              <div
                className={`hero-more-content ${isVisible ? 'visible' : ''}`}
                onMouseMove={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
              >
                <p className="hero-more-description">
                  I am a Full Stack Engineer specializing in building highly
                  scalable, responsive, and user-friendly web applications. These
                  days, I primarily work with Next.js, React, and TypeScript. I am
                  well-versed and experienced in a variety of technology stacks,
                  including JavaScript, Python, Django, and Bash.
                </p>

                <div
                  className={`hero-more-border ${isVisible ? 'visible' : ''}`}
                />
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src={favourImage}
              alt="favour"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

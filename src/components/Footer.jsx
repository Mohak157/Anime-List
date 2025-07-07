import { FaDiscord, FaTwitter, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="w-screen bg-[#b0aec0] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4">
        <p className="text-center text-sm font-light ">
          ANIME INFO
        </p>

        <div className="flex justify-center gap-4 ">
          <a
          
           
            rel="noopener noreferrer"
            className="text-black transition-colors duration-500 ease-in-out hover:text-white"  >
            <FaDiscord />
          </a>
          <a
           
            
            rel="noopener noreferrer"
            className="text-black transition-colors duration-500 ease-in-out hover:text-white" >
            <FaGithub />
          </a>
          <a
          
            
            rel="noopener noreferrer"
            className="text-black transition-colors duration-500 ease-in-out hover:text-white" >
            <FaYoutube />
          </a>
          <a
           
           
            rel="noopener noreferrer"
            className="text-black transition-colors duration-500 ease-in-out hover:text-white" >
            <FaLinkedin />
          </a>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;

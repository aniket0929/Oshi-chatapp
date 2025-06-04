import panda1 from "../assets/panda1.gif";
import panda2 from "../assets/panda2.gif";
import panda3 from "../assets/panda3.gif";
import panda4 from "../assets/panda4.gif";
import panda5 from "../assets/panda5.gif";
import panda6 from "../assets/panda6.gif";
import panda7 from "../assets/panda7.gif";
import panda8 from "../assets/panda8.gif";
import panda9 from "../assets/panda9.gif";

const pandaGifs = [panda1, panda2, panda3, panda4, panda5, panda6, panda7, panda8, panda9];


const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {pandaGifs.map((gif, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={gif}
                alt={`panda-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;

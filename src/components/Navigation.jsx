import mushroom from "../img/mushroom.png";
import cart from "../img/shopping-cart.png";

export const Navigation = () => {
  return (
    <nav className="w-screen flex justify-center">
      <div className="w-5/6 flex flex-row justify-between p-5 text-lg text-gray-600 align-middle border-b-2 border-gray-300">
        <button
          id="mobile-open-button"
          className="text-3xl md:hidden focus:outline-none">
          &#9776;
        </button>
        <div className="flex-row w-1/2 hidden md:flex space-x-8 text-sm lg:text-lg">
          <a className="w-10">
            <img src={mushroom} alt="mushroom" className="" />
          </a>
          <a href="" className="hover:text-black p-2 transition-all ease">
            Headgear
          </a>
          <a href="" className="hover:text-black p-2 transition-all ease">
            Mouse
          </a>
          <a href="" className="hover:text-black p-2 transition-all ease">
            Keyboard
          </a>
          <a href="" className="hover:text-black p-2 transition-all ease">
            Monitor
          </a>
        </div>
        <div className="flex flex-row justify-end w-1/2 gap-4 lg:text-lg text-sm">
          <a href="" className="hover:text-black p-2 transition-all ease">
            Login
          </a>
          <a href="" className="hover:text-black p-2 transition-all ease">
            Create Account
          </a>
          <a className="w-8 h-8 flex justify-center align-middle">
            <img
              src={cart}
              alt=""
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

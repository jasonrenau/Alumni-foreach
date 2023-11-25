import { arrowup } from "../../assets/index";

const ButtonTop = ({ scrollToTop }) => {
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-[18%] right-0 z-50 mr-2 w-10 animate-scale-slow md:bottom-[10%]"
    >
      <img src={arrowup} alt="fleche-haut" />
    </button>
  );
};
export default ButtonTop;

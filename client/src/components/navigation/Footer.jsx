// icon
import { facebook, linkedin, instagram, twitter } from "../../assets/index";

const Footer = () => {
  return (
    <footer className="w-full bg-pgreen-200">
      <div className="flex w-full justify-between px-2  ">
        <div>
          <a
            className="text-xs hover:underline"
            href="http://"
            target="_blank"
            rel="noreferrer"
          >
            Conditions générales d utilisation
          </a>
          <br />
          <a
            className="text-xs hover:underline"
            href="http://"
            target="_blank"
            rel="noreferrer"
          >
            Confidentialité des données
          </a>
          <br />
          <a
            className="text-xs hover:underline "
            href="https://www.foreach-academy.fr/mentions-legales/"
            target="_blank"
            rel="noreferrer"
          >
            Mentions légales
          </a>
        </div>
        <div className="hidden  md:flex">
          <p className=" m-1 flex  items-center  gap-5">
            <a
              className="animate-scale-slow"
              href="https://www.linkedin.com/school/foreach-academy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-7" src={linkedin} alt="linkedin" />
            </a>
            <a
              className="animate-scale-slow"
              href="https://www.instagram.com/foreach_academy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-7" src={instagram} alt="instagram" />
            </a>
            <a
              className="animate-scale-slow"
              href="https://www.facebook.com/forEachAcademy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-7" src={facebook} alt="facebook" />
            </a>
            <a
              className="animate-scale-slow"
              href="https://twitter.com/forEachAcademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-7" src={twitter} alt="twitter" />
            </a>
          </p>
        </div>
        <div className="px-5">
          <p className="text-right ">
            For<span className="text-porange-700">Each</span> Academy
          </p>
          <p className="text-right text-xs">
            393 Rue du Général de Gaulle,
            <br /> 59700 Marcq-en-Barœul, France
          </p>
          <p className="text-right text-xs">Contact : 03.20.74.87.30</p>
        </div>
      </div>

      <div className="px-5 md:hidden">
        <p className=" flex justify-end gap-5 ">
          <a
            className="animate-scale-slow"
            href="https://www.linkedin.com/school/foreach-academy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-7" src={linkedin} alt="linkedin" />
          </a>
          <a
            className="animate-scale-slow"
            href="https://www.instagram.com/foreach_academy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-7" src={instagram} alt="instagram" />
          </a>
          <a
            className="animate-scale-slow"
            href="https://www.facebook.com/forEachAcademy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-7" src={facebook} alt="facebook" />
          </a>
          <a
            className="animate-scale-slow"
            href="https://twitter.com/forEachAcademy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-7" src={twitter} alt="twitter" />
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;

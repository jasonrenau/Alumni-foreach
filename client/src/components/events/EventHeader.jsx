import { people } from "../../assets";

const EventHeader = () => {
  return (
    <div className="md:flex">
      <div className="flex w-full items-center justify-center">
        <img
          className="h-40 object-contain md:h-64"
          src={people}
          alt="photo de groupe"
        />
      </div>
      <div className="">
        <h1 className="pb-0 pt-8  text-center text-3xl font-bold text-white md:pt-16">
          une communauté d'entraide et de soutien
        </h1>
        <h4 className="mt-2 px-4 text-center text-sm text-white md:mt-4">
          Nos anciens élèves se rassemblent pour vous aider à réussir, que ce
          soit sur le plan académique, professionnel ou personnel. C'est un
          espace où l'entraide est notre priorité.
        </h4>
      </div>
    </div>
  );
};
export default EventHeader;

import { useInView } from "framer-motion";
import { useRef } from "react";
import { ForEach } from "../assets/index";
import Footer from "../components/navigation/Footer";

const Section = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(0px)",
          opacity: isInView ? 1 : 0,
          transition: "transform 0.9s, opacity 0.9s 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};
export default function About() {
  return (
    <>
      <section className="  bg-gray-200">
        <video className="w-full" muted autoPlay src={ForEach}></video>
        <div className="  mx-auto w-[90%] max-w-6xl">
          <h2 className="my-10 text-center">
            For
            <span className="font-poppins text-3xl text-porange-700">Each</span>
            Academy
          </h2>

          <Section>
            <div className="  flex justify-end">
              <p className="text-right max-sm:w-60 md:w-3/4">
                professionnels de l’IT exerçant dans la Région Hauts de France,
                réunis autour de valeurs communes.
              </p>
            </div>
            <br />
          </Section>
          <Section>
            <div className=" flex">
              <p className=" text-left max-sm:w-60 md:w-3/4">
                Depuis des années, cette équipe se retrouve à l’occasion de
                missions, de sessions de formation ou d’évènements
                professionnels. Ils échangent régulièrement sur leurs envies de
                prendre une part active à la formation initiale et permanente
                dans l’IT, de partager leurs expériences.
              </p>
            </div>
            <br />
          </Section>
          <Section>
            <div className="flex justify-end">
              <p className="text-right max-sm:w-60 md:w-3/4">
                Ainsi est née ForEach Academy…Un campus des métiers du
                numérique, dont l’équipe pédagogique est composée de passionnés,
                experts en IT. ForEach Academy propose ses formations en centre
                sur le territoire de la Région Hauts-de-France mais également
                partout en France, grâce à sa formation en téléprésentiel. Notre
                organisme de formation est déclaré en Préfecture du Nord,
                référencé dans le DataDock et certifié Qualiopi.
              </p>
            </div>
            <br />
          </Section>
          <Section>
            <div>
              <p className=" text-left max-sm:w-60 md:w-3/4">
                ForEach Academy est avant tout, un campus ouvert et inclusive.
                Quel que soit son parcours, nous donnons à chacun·e, la chance
                de devenir un·e Développeur·se Web épanoui·e !
              </p>
            </div>
          </Section>
          <br />
          <Section>
            <div className=" flex justify-end">
              <p className=" text-right max-sm:w-60 md:w-3/4">
                Chez nous, les prérequis techniques importent peu, mais la
                motivation et la personnalité sont essentielles. Nous valorisons
                l’ouverture aux autres et au monde de l’entreprise, grâce à
                notre équipe pédagogique composée exclusivement de
                professionnels de l’IT et à nos intervenants extérieurs.
              </p>
            </div>
          </Section>
          <article className=" mx-auto  w-[90%] max-w-6xl ">
            <h3 className="my-10 text-center">Nos derniers posts</h3>
            <div className="flex justify-around max-lg:flex-col max-lg:items-center ">
              <div className="mb-8 h-screen max-w-xl">
                <iframe
                  className=" h-full w-full "
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7120698413242802179"
                  allowfullscreen="true"
                  title="Post intégré"
                ></iframe>
              </div>{" "}
              <div className="mb-8 h-screen max-w-xl">
                <iframe
                  className=" h-full w-full "
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7120336330382786560"
                  allowfullscreen=""
                  title="Post intégré"
                ></iframe>
              </div>
              <div className="mb-8 h-screen max-w-xl">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7120337250290159616"
                  className=" h-full w-full "
                  allowfullscreen=""
                  title="Post intégré"
                ></iframe>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

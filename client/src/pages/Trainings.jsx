import {
  hat,
  trainings1,
  trainings2,
  trainings3,
  stars,
  formation,
  profess,
  certification,
  financement,
  jobOffer,
  money,
  upgrade,
} from "../assets/index";

const Trainings = () => {
  const backgroundStyle = (params) => ({
    background: `url(${params})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });
  return (
    <section className="min-h-screen bg-gray-200">
      <div style={backgroundStyle(trainings1)}>
        <div className="ml-3">
          <h1 className="py-0 text-3xl  text-pblue-500">développeur.se</h1>
          <h5>Web & Web mobile</h5>
          <p className="text-porange-600"> [en 6 mois]</p>
          <button className=" my-3 rounded-full border-[1px] border-porange-600 px-3 text-porange-600">
            <a
              href="https://meetings-eu1.hubspot.com/laury-bossaert"
              target="_blank"
              rel="noopener noreferrer"
            >
              Je prends rendez-vous ici
            </a>
          </button>
        </div>
      </div>
      <article className="mx-auto w-[90%] max-w-6xl">
        {/* start */}
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h3 className="my-5  text-pgreen-500 ">
              L école du web pour tous.tes
            </h3>
            <p className=" font-semibold">
              Apprends un nouveau métier avec notre formation inclusive et
              professionnalisante !
            </p>
            <div>
              <img className="mx-auto" src={hat} alt="logohat" />
            </div>
            <div className="mb-7 flex justify-center">
              <img className="h-full w-5" src={stars} alt="stars" />
              <img className="h-full w-5" src={stars} alt="stars" />
              <img className="h-full w-5" src={stars} alt="stars" />
              <img className="h-full w-5" src={stars} alt="stars" />
              <img className="h-full w-5" src={stars} alt="stars" />
            </div>

            <p>
              Le manutentionnaire qui en a plein le dos, la technicienne de labo
              qui a fait le tour de son boulot, l’accro de l’informatique qui
              décide de faire de sa passion, son métier ou encore l’étudiant qui
              souhaite se lancer dans le développement web….bref, une formation
              pour tous et toutes
            </p>
          </div>
          <br />
          {/* start tuile */}
          <div className="justify-around lg:flex lg:gap-10">
            <div>
              <div className=" h-40 max-w-sm">
                <img
                  className="w-18 mx-auto mt-8"
                  src={formation}
                  alt="logo formation"
                />
                <h5 className=" text-center">Formation</h5>
                <p className="  text-center text-xs ">
                  840h de cours, en présentiel ou à distance. Une pédagogie
                  basée sur la pratique et l’accompagnement.
                </p>
                <div className=" text-center">
                  <a
                    className=" text-pgreen-500 underline"
                    href="https://www.foreach-academy.fr/formation-reconversion-developpeur-web-lille/#formation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>

              <div className="h-40 max-w-sm">
                <img className="w-18 mx-auto mt-8 " src={profess} alt="logo " />
                <h5 className=" text-center">Professionnalisation</h5>
                <p className=" text-center text-xs">
                  Un projet concret à réaliser en équipe et la possibilité de
                  réaliser un stage de 7 semaines minimum après la formation.
                </p>
                <div className="text-center">
                  <a
                    className=" text-pblue-500 underline"
                    href="https://www.foreach-academy.fr/formation-reconversion-developpeur-web-lille/#professionnalisation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="h-40 max-w-sm">
                <img
                  className="w-18  mx-auto mt-8 "
                  src={certification}
                  alt="logo formation"
                />
                <h5 className=" text-center ">Certification</h5>
                <p className=" text-center text-xs">
                  A la clé : un titre pro certifié par l’Etat « Développeur Web
                  et Web Mobile » (niveau 5, bac +2).
                </p>
                <div className="  text-center">
                  <a
                    className=" text-[#CB4899] underline"
                    href="https://www.foreach-academy.fr/formation-reconversion-developpeur-web-lille/#certification"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
              <div className=" max-w-sm">
                <img
                  className=" w-18 mx-auto mt-8"
                  src={financement}
                  alt="logo formation"
                />
                <h5 className=" text-center">Financements</h5>
                <p className=" my-auto text-center text-xs">
                  Formation éligible au PTP et au CPF, financement partiel ou
                  total possible !
                </p>
                <div
                  className=" text-center
                 "
                >
                  <a
                    className="  text-porange-500 underline"
                    href="https://www.foreach-academy.fr/formation-reconversion-developpeur-web-lille/#financements"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <h3 className="mt-6 p-0">Pourquoi devenir</h3>
            <h3 className="mb-6 p-0 text-porange-500">Développeur.se Web?</h3>
          </div>
          <div className="flex flex-col items-center justify-around lg:flex-row">
            <div className=" m-3 h-80 w-80 rounded-lg border-[1px] border-black  ">
              <img
                className="mx-auto h-20 object-cover"
                src={jobOffer}
                alt="logoJob"
              />
              <h4 className="text-center">Un métier recherché</h4>
              <p className="m-6">
                Les développeur·ses web font partie des profils les plus
                recherchés du secteur numérique et ce n’est pas prêt de
                s’arrêter !
              </p>
            </div>

            <div className="m-3 h-80 w-80 rounded-lg border-[1px] border-black ">
              <img
                className=" mx-auto h-20 object-cover"
                src={money}
                alt="logoJob"
              />
              <h4 className="text-center">Un métier bien payé</h4>
              <p className="m-6">
                En France, le salaire moyen d’un·e développeur·se web junior
                oscille entre 30 et 34 k€ par an.
              </p>
            </div>
          </div>
        </div>
      </article>
      <div style={backgroundStyle(trainings2)}>
        <div className="ml-3">
          <h1 className="py-0 text-3xl  text-pblue-500">Le bachelor</h1>
          <h5>ForEach</h5>
          <p>
            <span className="text-porange-600">[2 ans ]</span> <br />
            en alternance pour se professionnaliser
          </p>
          <button className=" my-3 rounded-full border-[1px] border-porange-600 px-3 text-porange-600">
            <a
              href="https://meetings-eu1.hubspot.com/laury-bossaert"
              target="_blank"
              rel="noopener noreferrer"
            >
              Je prends rendez-vous ici
            </a>
          </button>
        </div>
      </div>
      <article className="mx-auto w-[90%] max-w-6xl">
        <div className="flex flex-col items-center">
          <div className="text-center ">
            <h3 className="my-5  text-pgreen-500 ">
              Notre Bachelor «Web Genius»
            </h3>
            <p className="font-semibold">
              L’excellence par la formation et l’alternance,ou comment apprendre
              un métier en étant payé
            </p>
            <div>
              <img className="mx-auto" src={hat} alt="" />
            </div>
            <div className="mb-7 flex justify-center">
              <img className="h-full w-5" src={stars} alt="" />
              <img className="h-full w-5" src={stars} alt="" />
              <img className="h-full w-5" src={stars} alt="" />
              <img className="h-full w-5" src={stars} alt="" />
              <img className="h-full w-5" src={stars} alt="" />
              <img className="h-full w-5" src={stars} alt="" />
            </div>
            <p>
              Les développeur·ses en herbe, les pros de fortnite, les geeks du
              web ayant réussi le concours d’entrée ou nos étudiants de la Prépa
            </p>
          </div>
          <br />
          <div className=" justify-around lg:flex lg:gap-5 ">
            <div>
              <div className=" h-40 max-w-sm">
                <img
                  className="w-18 mx-auto mt-8"
                  src={formation}
                  alt="logo formation"
                />
                <h5 className=" text-center">Formation</h5>
                <p className=" text-center text-xs">
                  25% de ton temps est réservé à ta formation en centre, soit 13
                  semaines de cours la 1ère année et 12 semaines de cours la
                  2ème année.
                </p>
                <div className=" text-center">
                  <a
                    className=" text-center text-pgreen-500 underline"
                    href="https://www.foreach-academy.fr/formation-reconversion-developpeur-web-lille/#formation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
              <div className=" h-40 max-w-sm">
                <img
                  className="w-18 mx-auto mt-8"
                  src={profess}
                  alt="logo formation"
                />
                <h5 className="text-center">Professionnalisation</h5>
                <p className=" text-center text-xs">
                  L’alternance permet de se former à un métier tout en étant
                  rémunéré, en alternant le théorique et la pratique (au rythme
                  d’1 semaine de cours et 3 semaines en entreprise).
                </p>
                <div className=" text-center">
                  <a
                    className=" text-pblue-500 underline"
                    href="https://www.foreach-academy.fr/formation-reconversion-developpeur-web-lille/#professionnalisation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="h-40 max-w-sm">
                <img
                  className="w-18 mx-auto mt-8"
                  src={certification}
                  alt="logo formation"
                />
                <h5 className=" text-center ">Certification</h5>
                <p className=" text-center text-xs">
                  Titre professionnel certifié RNCP de « Concepteur Développeur
                  d’Applications »(niveau 6, équivalent Bac +3/4) reconnu par
                  l’Etat.
                </p>
                <div className=" text-center">
                  <a
                    className="text-[#CB4899] underline"
                    href="https://www.foreach-academy.fr/formation-reconversion-developpeur-web-lille/#certification"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
              <div className="h-40 max-w-sm ">
                <img
                  className="w-18 mx-auto mt-8"
                  src={financement}
                  alt="logo formation"
                />
                <h5 className=" text-center">Financements</h5>
                <p className=" my-auto text-center text-xs">
                  Le Bachelor est entièrement pris en charge par ton contrat
                  d’alternance qui te rémunèrera également.
                </p>
                <div className="text-center ">
                  <a
                    className=" text-porange-500 underline"
                    href="https://www.foreach-academy.fr/formation-reconversion-developpeur-web-lille/#financements"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="mt-6 p-0">Pourquoi devenir</h3>
            <h3 className="mb-6 p-0 text-porange-500">Développeur.se Web?</h3>
          </div>
          <div className="flex flex-col items-center justify-around lg:flex-row ">
            <div className=" m-3 h-80 w-80 rounded-lg border-[1px] border-black ">
              <img
                className="mx-auto h-20 object-cover"
                src={jobOffer}
                alt="logoJob"
              />
              <h4 className="text-center">Un métier recherché</h4>
              <p className="m-6">
                192 000 nouveaux postes de développeur·se web en France en
                2022.Top 10 des métiers les plus recrutés.90% des étudiants
                trouvent un emploi moins de 6 mois après leur sortie de
                formation.
              </p>
            </div>

            <div className="m-3 h-80 w-80 rounded-lg border-[1px] border-black ">
              <img
                className="mx-auto h-20 object-cover"
                src={money}
                alt="logoJob"
              />
              <h4 className="text-center">Un métier bien payé</h4>
              <p className="m-6">
                Un salaire médian annuel à 35 000 € annuel en France (Source :
                fr.talent.com) soit 2917€/mois.
              </p>
            </div>

            <div className="m-3 h-80 w-80 rounded-lg border-[1px] border-black ">
              <img
                className=" mx-auto h-20 object-cover"
                src={upgrade}
                alt="logoJob"
              />
              <h4 className="text-center">Un métier qui évolue</h4>
              <p className="m-6">
                La possibilité de travailler de chez soi, en France ou à
                l’international, et un métier au coeur des enjeux de toutes les
                entreprises.
              </p>
            </div>
          </div>
        </div>
      </article>
      <div style={backgroundStyle(trainings3)}>
        <div className="ml-3 ">
          <h1 className="py-0 text-3xl  text-pblue-500">
            Assistant·e Ressources Humaines
          </h1>
          <h5>ForEach</h5>
          <p className="text-porange-600">
            <span>
              [En 6 mois à temps plein <br /> ou en 1 an en alternance]
            </span>
          </p>
          <button className=" my-3 rounded-full border-[1px] border-porange-600 px-3 text-porange-600">
            <a
              href="https://meetings-eu1.hubspot.com/laury-bossaert"
              target="_blank"
              rel="noopener noreferrer"
            >
              Je prends rendez-vous ici
            </a>
          </button>
        </div>
      </div>
      <article className="mx-auto w-[90%] max-w-6xl">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h3 className="my-5  text-pgreen-500 ">
              L’école du web pour tous.tes
            </h3>
            <p className="font-semibold">
              Deviens recruteur.euse IT, membre essentiel de l’équipe RH des
              sociétés innovantes
            </p>
            <div>
              <img className="mx-auto" src={hat} alt="" />
            </div>
            <div className="mb-7 flex justify-center">
              <img className="h-full w-5" src={stars} alt="" />
              <img className="h-full w-5" src={stars} alt="" />
              <img className="h-full w-5" src={stars} alt="" />
              <img className="h-full w-5" src={stars} alt="" />
              <img className="h-full w-5" src={stars} alt="" />
            </div>
            <p>
              Celui ou celle qui veut travailler dans un domaine en constante
              évolution, contribuer à l’essor d’une entreprise, être sur les
              dernières technologies et tendances, contribuer à développer le
              potentiel de ses collaborateurs…
            </p>
          </div>
          <br />
          <div className="justify-around lg:flex ">
            <div>
              <div className=" h-40 max-w-sm">
                <img
                  className="w-18 mx-auto mt-8"
                  src={formation}
                  alt="logo formation"
                />
                <h5 className=" text-center">Formation</h5>
                <p className=" text-center text-xs">
                  25% de ton temps est réservé à ta formation en centre, soit 13
                  semaines de cours la 1ère année et 12 semaines de cours la
                  2ème année.
                </p>{" "}
                <div className=" text-center">
                  <a
                    className=" text-center text-pgreen-500 underline"
                    href="https://www.foreach-academy.fr/formation-reconversion-developpeur-web-lille/#formation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
              <div className="  h-40 max-w-sm ">
                <img
                  className="w-18 mx-auto mt-8"
                  src={profess}
                  alt="logo formation"
                />
                <h5 className="text-center">Professionnalisation</h5>
                <p className=" text-center text-xs">
                  L’alternance permet de se former à un métier tout en étant
                  rémunéré, en alternant le théorique et la pratique (au rythme
                  d’1 semaine de cours et 3 semaines en entreprise).
                </p>
                <div className=" text-center">
                  <a
                    className=" text-pblue-500 underline"
                    href="https://www.foreach-academy.fr/formation-reconversion-developpeur-web-lille/#professionnalisation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="  h-40 max-w-sm ">
                <img
                  className="w-18 mx-auto mt-8"
                  src={certification}
                  alt="logo certification"
                />
                <h5 className="  text-center">Certification</h5>
                <p className=" text-center text-xs">
                  Titre professionnel certifié RNCP de « Concepteur Développeur
                  d’Applications »(niveau 6, équivalent Bac +3/4) reconnu par
                  l’Etat.
                </p>{" "}
                <div className=" text-center">
                  <a
                    className=" text-[#CB4899] underline"
                    href="https://www.foreach-academy.fr/formation-reconversion-developpeur-web-lille/#certification"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
              <div className=" h-40 max-w-sm">
                <img
                  className="w-18 mx-auto mt-8"
                  src={financement}
                  alt="logo formation"
                />
                <h5 className=" text-center">Financements</h5>
                <p className=" text-center text-xs">
                  Le Bachelor est entièrement pris en charge par ton contrat
                  d’alternance qui te rémunèrera également.
                </p>
                <div className="text-center ">
                  <a
                    className=" text-porange-500 underline"
                    href="https://www.foreach-academy.fr/formation-reconversion-developpeur-web-lille/#financements"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <h3 className="mt-6 p-0">Pourquoi devenir</h3>
            <h3 className="mb-6 p-0 text-porange-500">Recruteur.euse IT ?</h3>
          </div>
          <div className="flex flex-col items-center justify-around lg:flex-row ">
            <div className=" m-3 h-80 w-80 rounded-lg border-[1px] border-black ">
              <img
                className=" mx-auto h-20 object-cover"
                src={jobOffer}
                alt="logoJob"
              />
              <h4 className="text-center">Un métier recherché</h4>
              <p className="m-6">
                Le métier de recruteur.euse IT fait partie du top 10 des
                tendances en terme de recrutement dans les années à venir.
                (source Atlas 2023)
              </p>
            </div>

            <div className="m-3 h-80 w-80 rounded-lg border-[1px] border-black ">
              <img
                className="mx-auto h-20 object-cover"
                src={money}
                alt="logoJob"
              />
              <h4 className="text-center">
                Travailler avec des professionnels de haut niveau
              </h4>
              <p className="m-6">
                C’est l’opportunité de travailler avec des ingénieurs, des
                développeurs, des experts en cybersécurité… en leur offrant des
                opportunités de carrières stimulantes
              </p>
            </div>

            <div className="m-3 h-80 w-80 rounded-lg border-[1px] border-black ">
              <img
                className="mx-auto h-20 object-cover"
                src={upgrade}
                alt="logoJob"
              />
              <h4 className="text-center">Un métier qui évolue</h4>
              <p className="m-6">
                Il est possible d’évoluer vers des postes tels que responsable
                de recrutement, consultant en ressources humaines, responsable
                de la formation…
              </p>
            </div>
          </div>
        </div>
      </article>{" "}
    </section>
  );
};
export default Trainings;

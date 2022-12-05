import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import ReactPlayer from "react-player";

const Header = () => {
  return (
    <div className="header bg-transparent h-64 w-full flex flex-col md:flex-row cursor-default z-10">
      {window.innerWidth > 768 ? (
        <>
          <Image
            className="absolute object-cover w-full h-40 md:h-64 top-0 blur-sm brightness-50"
            height={10000}
            width={10000}
            src={require("../assets/angers.webp")}
            alt={"Paysage Angers"}
          />
          <span className="basis-1/4 flex h-full items-center justify-center gap-4 px-3">
            <Link
              href={"https://www.instagram.com/ville_d_angers/"}
              target={"_blank"}
            >
              <Image
                className="invert cover h-14 w-14 hover:opacity-75 transition-opacity selection:bg-purple-400"
                height={100}
                width={100}
                src={require("../assets/instagram.webp")}
                alt={"Instagram"}
              />
            </Link>
            <Link href={"https://twitter.com/Angers"} target={"_blank"}>
              <Image
                className="invert cover h-16 w-16 hover:opacity-75 transition-opacity selection:bg-purple-400"
                height={100}
                width={100}
                src={require("../assets/twitter.webp")}
                alt={"Twitter"}
              />
            </Link>
            <Link
              href={"https://fr-fr.facebook.com/ville.angers/"}
              target={"_blank"}
            >
              <Image
                className="invert cover h-14 w-14 hover:opacity-75 transition-opacity selection:bg-purple-400"
                height={100}
                width={100}
                src={require("../assets/facebook.webp")}
                alt={"Facebook"}
              />
            </Link>
          </span>
          <span className="basis-1/2 flex flex-col">
            <span className="text-3xl md:text-4xl  xl:text-5xl font-bold flex justify-center w-full pt-16 pb-8 text-white z-30">
              Vivre&nbsp;à&nbsp;{"  "}
              <a
                className="underline hover:text-blue-200 hover:transition-all "
                href={
                  "https://www.google.fr/maps/place/Angers/@47.4819487,-0.5979541,13z/data=!3m1!4b1!4m5!3m4!1s0x480878da00e58e9d:0x40d37521e0d9c30!8m2!3d47.4711616!4d-0.5518257"
                }
              >
                Angers
              </a>
            </span>
            <span className="text-2xl xl:text-2xl flex text-gray-200 flex w-full pb-28 justify-center text-center z-30 px-2">
              Découvrez pourquoi Angers est la ville dont vous avez besoin
            </span>
          </span>
          <span className="basis-1/4 flex h-full items-center justify-center px-3">
            <Link
              href={"https://www.angersloiremetropole.fr/"}
              target={"_blank"}
            >
              <Image
                className="w-64 invert hover:opacity-75 transition-opacity selection:bg-purple-400"
                src={require("../assets/alm.webp")}
                alt={"Angers Loire Métropole"}
              />
            </Link>
          </span>
        </>
      ) : (
        <>
          <Image
            className="absolute object-cover w-full h-64 top-0 blur-sm brightness-50"
            height={10000}
            width={10000}
            src={require("../assets/angers.webp")}
            alt={"Paysage Angers"}
          />

          <span className="flex flex-row h-1/3 justify-around">
            <span className="basis-1/3 flex items-center justify-center gap-2">
              <Link
                href={"https://www.instagram.com/ville_d_angers/"}
                target={"_blank"}
              >
                <Image
                  className="invert cover h-10 w-10 hover:opacity-75 transition-opacity selection:bg-purple-400"
                  height={100}
                  width={100}
                  src={require("../assets/instagram.webp")}
                  alt={"Instagram"}
                />
              </Link>
              <Link href={"https://twitter.com/Angers"} target={"_blank"}>
                <Image
                  className="invert cover h-12 w-12 hover:opacity-75 transition-opacity selection:bg-purple-400"
                  height={100}
                  width={100}
                  src={require("../assets/twitter.webp")}
                  alt={"Twitter"}
                />
              </Link>
              <Link
                href={"https://fr-fr.facebook.com/ville.angers/"}
                target={"_blank"}
              >
                <Image
                  className="invert cover h-10 w-10 hover:opacity-75 transition-opacity selection:bg-purple-400"
                  height={100}
                  width={100}
                  src={require("../assets/facebook.webp")}
                  alt={"Facebook"}
                />
              </Link>
            </span>

            <span className="basis-1/3 flex h-full items-center justify-center gap-4">
              <Link
                href={"https://www.angersloiremetropole.fr/"}
                target={"_blank"}
              >
                <Image
                  className="w-64 invert hover:opacity-75 transition-opacity selection:bg-purple-400"
                  src={require("../assets/alm.webp")}
                  alt={"Angers Loire Métropole"}
                />
              </Link>
            </span>
          </span>

          <span className="text-4xl h-1/3 py-4 box-border font-bold flex justify-center w-full text-white z-30">
            Vivre&nbsp;à&nbsp;{"  "}
            <a
              className="underline hover:text-blue-200 hover:transition-all "
              href={
                "https://www.google.fr/maps/place/Angers/@47.4819487,-0.5979541,13z/data=!3m1!4b1!4m5!3m4!1s0x480878da00e58e9d:0x40d37521e0d9c30!8m2!3d47.4711616!4d-0.5518257"
              }
            >
              Angers
            </a>
          </span>

          <span className="text-xl flex box-border text-gray-100 flex h-1/3 w-full justify-center text-center z-30">
            Découvrez pourquoi Angers est la ville dont vous avez besoin
          </span>
        </>
      )}
    </div>
  );
};

const LinkedText = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="text-blue-400 underline hover:text-blue-500 hover:transition-all"
    >
      {props.text}
    </a>
  );
};

const CustomImage = (props) => {
  return (
    <span className="flex flex-col w-full">
      <Image
        className="rounded-sm object-cover w-full"
        width={1000}
        height={1000}
        quality={65}
        alt={props.label}
        src={props.src}
      />
      <span className="text-gray-400 font-thin  text-center w-full text-xl py-0.5">
        {props.label}
      </span>
    </span>
  );
};

const Card = (props) => {
  return (
    <div
      onClick={() => {
        if (!props.state) {
          props.setState(true);
        }
      }}
      className={`card md:transition-all rounded-2xl flex flex-col justify-around hover:z ${
        props.state
          ? "pt-14 w-full z-30 h-full inset-0 px-0 fixed md:absolute cursor-default bg-gray-100"
          : "px-6 md:px-8 py-4 relative z-10 w-5/6 md:w-1/4 h-full  shadow-md hover:shadow-xl cursor-pointer bg-white hover:bg-gray-100 gap-8"
      }`}
      style={{ minHeight: "calc(22rem + 5vw)" }}
    >
      <span
        className={`rounded-md flex items-center justify-between ${
          props.state && "bg-white px-8 md:px-16 py-8"
        }`}
      >
        <span
          className={`transition-none capitalize flex items-center text-2xl md:text-2xl xl:text-3xl font-bold text-center ${
            props.state ? "justify-start" : "justify-center"
          }`}
        >
          {props.title}
        </span>
        <Image
          onClick={() => props.setState(false)}
          className={`h-9 w-9 cursor-pointer rotate-180 ${
            !props.state && "hidden"
          }`}
          alt={"Fermer l'article"}
          src={require("../assets/arrow.png")}
        />
      </span>
      <span
        className={`basis-1/2 text-xl text-start ${props.state && "hidden"}`}
      >
        {props.text}
      </span>
      <span
        className={`flex justify-center items-center basis-1/4 ${
          props.state && "hidden"
        }`}
      >
        <span className={` text-xl -translate-y-0.5`}>En savoir plus</span>
        <Image
          className={`arrow cover h-7 w-7 opacity-60`}
          alt={"En savoir plus"}
          src={require("../assets/arrow.png")}
        />
      </span>
      <div
        className={`rounded-md w-full bg-white h-full ${
          !props.state && "hidden"
        }`}
      >
        <div className="h-full w-full px-8 md:px-32 overflow-scroll pt-2 md:pt-16 pb-32">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const [down, setDown] = useState(false);

  useEffect(() => {
    if (first || second || third) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [first, second, third]);

  const scroll = () => {
    down
      ? window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      : document.querySelector(".bot").scrollIntoView({
          behavior: "smooth",
        });
  };

  let footerObserver = new IntersectionObserver(
    function (entries) {
      if (entries[0].intersectionRatio > 0) setDown(true);
    },
    { threshold: [0.1] }
  );

  let headerObserver = new IntersectionObserver(
    function (entries) {
      if (entries[0].intersectionRatio > 0) setDown(false);
    },
    { threshold: [0.1] }
  );

  useEffect(() => {
    footerObserver.observe(document.querySelector(".foot"));
    headerObserver.observe(document.querySelector(".header"));
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div
        style={{ minHeight: "40rem" }}
        className={`${
          !first && !second && !third && "py-16"
        } gap-8  md:gap-0  transition-all flex flex-col md:flex-row relative w-full px-6 xl:px-24 justify-around items-center md:items-start  z-20`}
      >
        <Card
          state={first}
          setState={setFirst}
          title={"I - une ville en constante évolution"}
          text={
            "Voyons comment Angers se maintient en évolution en ne cessant jamais d'évoluer dans ses infrastructures, ses activités, et sa population."
          }
        >
          <span className="text-2xl flex flex-col md:flex-row gap-8 justify-around">
            <span className="cursor-text basis-1/2 ">
              {
                "Angers est une ville en constante évolution, l'augmentation de la population de 25% en 30 ans illustre bien cette évolution, ainsi que toutes les nouvelles infrastructures de la ville en train d’émerger parmi lesquelles la 2nd ligne de tramway de la ville ainsi que la nouvelle patinoire "
              }
              <LinkedText
                link="https://www.angers-iceparc.com/"
                text="Ice Parc"
              />
              {
                " qui a abrité la finale de coupe du monde de hockey sur glace féminin, dans des villes en constantes évolutions telles qu’Angers, les prix des habitations s’envolent souvent très vite, Angers n'échappe pas à la logique mais les prix restent raisonnables, ils sont actuellement de 3000€/ m² en moyenne.  Un grand quartier d’affaires est en construction dans le centre ville, ce qui pourrait encore élever le statut de la grande ville qu’est Angers. Depuis 2020, le groupe industriel énergétique français "
              }
              <LinkedText link="https://particuliers.engie.fr/" text="Engie" />
              {
                " a décidé d'investir environ 120 millions d'euros en 25 ans pour faire de Angers le premier "
              }
              <LinkedText
                link="https://www.engie.com/journalistes/communiques-de-presse/creer-premier-territoire-intelligent-france"
                text="territoire intelligent"
              />
              {
                "de France, les innovations vont notamment viser l'optimisation de l'éclairage publique. La courbe d'évolution d'Angers est également propulsé par ses liens avec les autres métropoles avoisinantes facilités par la gare d'Angers,"
              }{" "}
              <LinkedText
                link="https://www.garesetconnexions.sncf/fr/gares-services/angers-saint-laud"
                text="Angers Saint-Laud"
              />
              {
                " qui dessert de nombreuses destinations telles que Paris Nantes ou encore Rennes"
              }
            </span>
            <span className="flex h-full flex-col justify-start gap-2  md:w-1/2 xl:w-1/3">
              <CustomImage
                label={"Tramway angevin"}
                src={require("../assets/tram.webp")}
              />
              <CustomImage
                label={"Patinoire IceParc"}
                src={require("../assets/iceparc.webp")}
              />
              <CustomImage
                label={"Quartier d'affaires"}
                src={require("../assets/cbd.webp")}
              />
              <CustomImage
                label={"Centre ville de nuit"}
                src={require("../assets/angersnuit.webp")}
              />
              <CustomImage
                label={"Gare Angers Saint-Laud"}
                src={require("../assets/tgv.webp")}
              />
            </span>
          </span>
        </Card>

        <Card
          state={second}
          setState={setSecond}
          title={"II - un atmosphère de vie agréable"}
          text={
            "La vie à Angers est agréable, la météo et l'aspect sociale de la ville apporte une vraie plus value en comparaison aux autres métropoles du pays."
          }
        >
          <span className="text-2xl flex flex-col md:flex-row gap-8 justify-around">
            <span className="cursor-text basis-1/2">
              {
                "Angers fournit une atmosphère de vie des plus agréables tout d’abord de part sa verdure qui lui a permi d’accéder au rang de ville la plus verte de France 3 fois consécutives ("
              }
              <LinkedText
                link="https://www.lefigaro.fr/flash-actu/2014/02/19/97001-20140219FILWWW00075-angers-ville-la-plus-verte-de-france.php"
                text="2014"
              />
              {"-"}
              <LinkedText
                link="https://www.lenergietoutcompris.fr/actualites-conseils/villes-les-plus-vertes-de-france-qui-est-en-tete-48117#:~:text=Comme%20lors%20du%20premier%20palmar%C3%A8s%20%C3%A9tabli%20en%202014%2C,professionnelle%20regroupant%20les%20responsables%20d%E2%80%99espaces%20verts%20en%20ville."
                text="2017"
              />
              {"-"}
              <LinkedText
                link="https://www.18h39.fr/articles/classement-villes-vertes-france.html"
                text="2020"
              />

              {
                "), son climat exceptionnel en fait également la seule ville d’Europe capable d’accueillir le parc floral"
              }

              <br />
              <LinkedText
                link="https://www.terrabotanica.fr/"
                text="Terra Botanica"
              />

              {
                ", où se développent de nombreuses plantes, exotiques ou non, qui nécessitent le climat tempéré d’Angers pour vivre. L’atmosphère de vie d’Angers est également favorisée par le faible trafic automobile qui est notamment dû à la forte densité de transports en commun au sein de la ville (Tramways, Bus, Navettes). Le faible trafic automobile associé au transports en communs et a la verdure fait de Angers une des villes les "
              }
              <LinkedText
                link="https://www.linternaute.com/actualite/monde/1031263-particules-fines-les-villes-les-plus-et-les-moins-polluees-du-monde/1031266-les-villes-les-moins-polluees-de-france"
                text="moins polluées"
              />
              {
                " de France. Angers a été élue métropole la plus sûre de l’Ouest en 2021"
              }
            </span>
            <span className="flex h-full flex-col justify-start gap-2  md:w-1/2 xl:w-1/3">
              <CustomImage
                label={"Avenue Jeanne d'Arc"}
                src={require("../assets/verdure.webp")}
              />
              <CustomImage
                label={"Terrabotanica"}
                src={require("../assets/terrabotanica.webp")}
              />
              <CustomImage
                label={"Navette gratuite"}
                src={require("../assets/navette.webp")}
              />
            </span>
          </span>
        </Card>

        <Card
          state={third}
          setState={setThird}
          title={"III - un grand patrimoine culturel et éducatif"}
          text={
            "Cette ville est dôtée d'une grande richesse culturelle, notamment dûe à son passé historique datant du Moyen-Âge. Le patrimoine Éducatif de cette ville réputée étudiante est aussi très dense."
          }
        >
          <span className="text-2xl flex flex-col md:flex-row gap-8 justify-around">
            <span className="cursor-text basis-1/2">
              {
                "Angers possède un grand patrimoine éducatif composé de grandes écoles telles que les différentes universités de l'"
              }
              <LinkedText
                link="https://www.univ-angers.fr/fr/index.html"
                text="Université d'Angers"
              />
              {
                ", qui s'étend sur 3 campus (Belle-Beille, Saint-Serge, Santé) et qui compte près de 26 000 étudiants, on trouve aussi de grands établissements tel que l'"
              }
              <LinkedText
                link="https://www.uco.fr/fr"
                text="Université Catholique de l'Ouest"
              />
              {
                " qui est réputée dans tout le pays notamment pour ses formations en Théologie et sciences religieuses, on trouve aussi des écoles d'ingénieurs: "
              }{" "}
              <LinkedText link="https://eseo.fr/" text="ESEO" />
              {","}
              <LinkedText link="https://www.esaip.org/" text="ESAIP" />
              {"."}
              {
                " Pour des études artistiques Angers abrite la prestigieuse école des"
              }{" "}
              <LinkedText link="https://esad-talm.fr/" text="Beaux-Arts" />
              {
                " qui attire de nombreux étudiants. On y trouve aussi, des établissements de prépas médecine ou encore des écoles pour des filiaires agricoles comme l'"
              }{" "}
              <LinkedText link="https://www.groupe-esa.com/" text="ESA" />
              {
                " notamment. La ville possède aussi un fort patrimoine historique. En effet, des vestiges du passés sont présents à tout endroit de la ville et sa périphérie, notamment l’"
              }{" "}
              <LinkedText
                link="https://www.anciens-aerodromes.com/AtlasDGACOct16/html/aero20.htm"
                text="Aérodrome d'Avrillé"
              />
              {
                " chargé d’histoire qui, jusque dans les années 80 abritait encore des ballets aériens d’aéroplanes, le principal attrait historique étant le, "
              }{" "}
              <br />
              <LinkedText
                link="https://www.chateau-angers.fr/#"
                text="Chateau du Roi René"
              />
              {
                ", monument majeur au sein de la ville fièrement, installé depuis le XIIIe siècle sur le promontoire rocheux qui domine la Maine, le château d’Angers est l’emblème de la ville avec ses 17 imposantes tours défensives. Occupé depuis le Néolithique, ce site très ancien est un haut-lieu de l’histoire angevine, Le château d’Angers est fortement marqué par les aménagements réalisés par les ducs d’Anjou, notamment le dernier d’entre eux, le roi René (1409-1480) qui voulait faire de l’Anjou « le jardin de la France ». René d’Anjou est considéré comme précurseur de l’horticulture en Anjou. Il fait cultiver la vigne et importe en Anjou des essences méditerranéennes. Entre histoire, innovation et développement durable, les jardins du château d’Angers sont un reflet du patrimoine végétal de l’Anjou. Aujourd’hui, le château d’Angers recèle différents jardins que vous aurez bonheur à découvrir en vivant à Angers. Ils sont un havre de paix pour les visiteurs comme pour la faune et la flore sauvage qui y sont protégées au titre de la biodiversité."
              }
            </span>
            <span className="flex h-full flex-col justify-start gap-2  md:w-1/2 xl:w-1/3">
              <CustomImage
                label={"Campus UA"}
                src={require("../assets/ua.webp")}
              />
              <CustomImage
                label={"Les Beaux-Arts"}
                src={require("../assets/beauxarts.webp")}
              />
              <CustomImage
                label={"Chateau du Roi René"}
                src={require("../assets/chateau.webp")}
              />
              <CustomImage
                label={"Vignes angevines"}
                src={require("../assets/vignes.webp")}
              />
            </span>
          </span>
        </Card>

        <Image
          onClick={() => scroll()}
          className={`${
            down ? "-rotate-90" : "rotate-90"
          } fixed right-8 bottom-8 self-center cursor-pointer h12 w-12 transition-all animate-pulse md:hover:animate-none bg-gray-300 rounded-full z-20 p-2`}
          src={require("../assets/arrow.png")}
          alt={"Descendre"}
        />
      </div>
      <span className="pb-16 w-full justify-center flex flex-col items-center bot">
        <span className=" capitalize font-bold text-3xl text-center mb-12">
          tout savoir en 1 minute
        </span>
        {window.innerWidth < 768 ? (
          <ReactPlayer url="https://youtu.be/hUn5KAPrMnM" width={"100%"} />
        ) : (
          <ReactPlayer url="https://youtu.be/hUn5KAPrMnM" />
        )}
        <div className="text-gray-700 text-2xl w-4/5 md:w-1/2 mt-12">
          <span className="font-semibold foot">
            {
              "Je vous résume les 5 raisons principales de vivre à Angers en 1 minutes:"
            }
          </span>
          <br />
          <br />
          <ul className="list-disc">
            <li>
              {"Première raison:"}
              <br />
              {
                "Angers est située à proximité des autres métropoles, elle est située à 135km de Rennes, soit 94 minutes en TGV; à 90km de Nantes, soit 54 minutes en TGV; et à 300km de Paris, soit une durée de 108 minutes en TGV."
              }
              <br />
              <br />
            </li>
            <li>
              {"Deuxième raison:"}
              <br />
              {
                "Le prix immobilier à Angers est 3 fois moins élevé que celui de Paris, le mètre carré à Angers coûte 3000€ contre 9000€ à Paris."
              }
              <br />
              <br />
            </li>
            <li>
              {"Troisième raison:"}
              <br />
              {
                "Angers est la ville la plus dotée d'espaces verts du pays, c'est aussi une des villes les moins poluées, et elle est dotée de nombreuses activités, notamment Terrabotanica, AquaVita, et la patinoire fraîchement construite IceParc."
              }
              <br />
              <br />
            </li>
            <li>
              {"Quatrième raison:"}
              <br />
              {
                "Angers est la ville la plus sûre de l'Ouest et elle figure parmis les 20 villes les plus sûres du pays."
              }
              <br />
              <br />
            </li>
            <li>
              {"Cinquième raison:"}
              <br />
              {
                "On retrouve à Angers de nombreux établissements scolaires et universitaires, comme l'Université de Saint Serge, de Belle Beille, l'Université Catholique de l'Ouest, ou encore l'ESEO, l'ESSCA, l'ESA, et de nombreux autres campus."
              }
            </li>
          </ul>
        </div>
      </span>
    </div>
  );
}

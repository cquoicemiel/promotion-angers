import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import ReactPlayer from "react-player";

const Header = () => {
  return (
    <div className="bg-transparent h-64 w-full flex cursor-default z-10">
        <Image
            className="absolute object-cover w-full h-64 top-0 blur-sm brightness-50"
            height={10000}
            width={10000}
            src={require('../assets/angers.webp')}
            alt={"Paysage Angers"}
        />
      <span className="basis-1/4 flex h-full items-center justify-center gap-4">
        <Link
          href={"https://www.instagram.com/ville_d_angers/"}
          target={"_blank"}
        >
          <Image
            className="invert cover h-14 w-14 hover:opacity-75 transition-opacity"
            height={100}
            width={100}
            src={require("../assets/instagram.webp")}
            alt={"Instagram"}
          />
        </Link>
        <Link href={"https://twitter.com/Angers"} target={"_blank"}>
          <Image
            className="invert cover h-16 w-16 hover:opacity-75 transition-opacity"
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
            className="invert cover h-14 w-14 hover:opacity-75 transition-opacity"
            height={100}
            width={100}
            src={require("../assets/facebook.webp")}
            alt={"Facebook"}
          />
        </Link>
      </span>
      <span className="basis-1/2 flex flex-col">
        <span className="text-5xl xl:text-5xl font-bold flex justify-center w-full pt-16 pb-8 text-white z-30">
          Vivre à Angers
        </span>
        <span className="text-2xl xl:text-2xl flex text-gray-200 flex w-full pb-28 justify-center text-center z-30">
          Découvrez pourquoi Angers est la ville dont vous avez besoin
        </span>
      </span>
      <span className="basis-1/4 flex h-full items-center justify-center gap-4">
        <Link href={"https://www.angersloiremetropole.fr/"} target={"_blank"}>
          <Image
            className="w-64 invert hover:opacity-75 transition-opacity"
            src={require("../assets/alm.webp")}
            alt={"Angers Loire Métropole"}
          />
        </Link>
      </span>
    </div>
  );
};

const Card = (props) => {

    return(
        <div style={{minHeight: 'calc(24rem + 5vw)'}} onClick={() => {
            if(!props.state){
                props.setState(true)
            }
        }} className={`card transition-all rounded-2xl flex flex-col px-8 justify-around hover:z ${props.state ? "w-full z-30 h-full absolute cursor-default bg-gray-100" : "relative z-10 w-1/4 h-full shadow-md hover:shadow-xl cursor-pointer bg-white hover:bg-gray-100 "}`}>
            <span className={`flex items-center justify-between ${props.state && "px-16 py-8"}`}>
                <span className={`transition-none capitalize flex  items-center text-3xl font-bold text-center my-8 ${props.state ? "justify-start" : "justify-center"}`}>{props.title}</span>
                <Image onClick={() => props.setState(false)} className={`h-9 w-9 cursor-pointer rotate-180 ${!props.state && "hidden"}`} alt={"Fermer l'article"} src={require('../assets/arrow.png')}/>
            </span>
            <span className={`basis-1/2 text-xl text-start selection:bg-green-400 selection:text-white ${props.state && "hidden"}`}>{props.text}</span>
            <span className='flex my-8 justify-center items-center basis-1/4'>
                <span className={` text-xl -translate-y-0.5 ${props.state && "hidden"}`}>En savoir plus</span>
                <Image className={`arrow transition-all cover h-7 w-7 opacity-60 ${props.state && "hidden"}`} alt={"En savoir plus"} src={require('../assets/arrow.png')}/>
            </span>
            <div className={`w-full min-h-full ${!props.state && "hidden"}`}>
                <div className='h-full w-full px-32 py-6 mt-8 overflow-scroll bg-white pb-32'>

                    {props.children}
                </div>
            </div>
        </div>
    )
}


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
      : window.scrollTo({
          top: 920,
          behavior: "smooth",
        });
    setDown(!down);
  };

    return(
            <div className='flex flex-col min-h-screen bg-gray-100'>
                <Header/>
                <div style={{minHeight: '40rem'}} className='flex relative w-full px-6 xl:px-48 py-12 justify-around z-20'>
                    <Card state={first} setState={setFirst} title={"I - une ville en constante évolution"} text={"Voyons comment Angers se maintient en évolution en ne cessant jamais d'évoluer dans ses infrastructures, ses activités, et sa population."}>
                        <span className='text-2xl flex flex-col gap-8 justify-center items-center'>
                            <span className='flex flex-row gap-8'>
                                Angers est une ville en constante évolution de par sa population qui a évolué de 25 % en 30ans ainsi que par toutes ses nouvelles infrastructures en train d’émerger parmi lesquelles la 2nd ligne de tramway de la ville ainsi que la nouvelle patinoire Ice parc qui a abrité la finale de coupe du monde de hockey sur glace féminin, dans des villes en constantes évolutions telles qu’Angers, les prix des habitions s’envolent souvent très vite, ce n’est pas le cas d’Angers qui malgré sa constante évolution garde un prix raisonnable de 3000€/ m² .  Un grand quartier d’affaire est en construction de le centre ville ce qui pourrait encore élever le statut de la grande ville qu’est Angers . Angers a également signé un contrat qui fera d’elle la première ville connéctée de France .
                         <Image className='rounded-sm object-cover w-1/2' width={10000} height={100000} alt={"Ligne Tram"} src={require('../assets/tram.webp')}/>
                            </span>
                    <span className='flex flex-row gap-8'>
                        <span className='opacity-0'>
                            Angers est une ville en constante évolution de par sa population qui a évolué de 25 % en 30ans ainsi que par toutes ses nouvelles infrastructures en train d’émerger parmi lesquelles la 2nd ligne de tramway de la ville ainsi que la nouvelle patinoire Ice parc qui a abrité la finale de coupe du monde de hockey sur glace féminin, dans des villes en constantes évolutions telles qu’Angers, les prix des habitions s’envolent souvent très vite, ce n’est pas le cas d’Angers qui malgré sa constante évolution garde un prix raisonnable de 3000€/ m² .  Un grand quartier d’affaire est en construction de le centre ville ce qui pourrait encore élever le statut de la grande ville qu’est Angers . Angers a également signé un contrat qui fera d’elle la première ville connéctée de France .
                        </span>
                        <Image className='rounded-sm object-cover w-1/2' width={10000} height={100000} alt={"Patinoire IceParc"} src={require('../assets/iceparc.webp')}/>
                            </span>
                            <Image className="h-72 w-72" alt={"Carte"} src={require('../assets/th.jpeg')}/>
                        </span>
                    </Card>
                    <Card state={second} setState={setSecond} title={"II - un atmosphère de vie agréable"} text={"La vie à Angers est agréable, la météo et l'aspect sociale de la ville apporte une vraie plus value en comparaison aux autres métropoles du pays."}>
                        <span className='text-2xl flex gap-8'>
                        Angers fournit une atmosphère de vie des plus agréables tout d’abord de part sa verdure qui lui a permis d’accéder au rang de ville la plus verte de France 3 fois consécutives (2014-2017-2020) son climat exceptionnel en fait également la seule ville d’Europe capable d’accueillir le parc floral
                        Terra Botanica qui fait la culture de nombreuses plantes exotiques ou non qui nécessitent le climat tempéré d’ Angers pour vivre. L’atmosphère de vie d’Angers est également favorisée par le faible trafic automobile qui lui est favorisé par la forte densité de transport en commun au sein de la ville (Tramway, Bus …) . Le faible trafic automobile associé au transports en communs et a la verdure fait de Angers une des villes les moins polluées de France. Angers a été élue métropole la plus sure de l’ouest en 2021
                        <Image className='rounded-sm' alt={"Pont Angers"} src={require('../assets/pontangers.webp')}/>
                        </span>
                    </Card>
                    <Card state={third} setState={setThird} title={"III - un grand patrimoine culturel et éducatif"} text={"Cette ville est dôtée d'une grande richesse culturelle, notamment dûe à son passé historique datant du Moyen-Âge. Le patrimoine Éducatif de cette ville réputée étudiante est aussi très dense."}>
<                       span className='text-2xl flex gap-8'>
                            {"Angers possède un grand potentiel éducatif de part ses grandes écoles telles que  l 'Université de Saint Serge, de Belle Beille, l'Université Catholique de l'Ouest, ou encore l'ESEO, l'ESSCA ou l'ESA, La ville abrite  un fort patrimoine historique. En effet, des vestiges du passés sont présent a tout endroit de la ville et sa périphérie, notamment l’aérodrome d’Avrillé chargé d’histoire qui jusqu’a dans les années 80 abritait encore des ballets aériens d’aéroplanes, sans oublier le château du Roi  René, monument majeur au sein de la ville fièrement installé depuis le XIIIe siècle sur le promontoire rocheux qui domine la Maine, le château d’Angers est l’emblème de la ville avec ses 17 imposantes tours défensives. Occupé depuis le Néolithique, ce site très ancien est un haut-lieu de l’histoire angevine,Le château d’Angers est fortement marqué par les aménagements réalisés par les ducs d’Anjou, notamment le dernier d’entre eux, le roi René (1409-1480) qui voulait faire de l’Anjou « le jardin de la France ». René d’Anjou est considéré comme précurseur de l’horticulture en Anjou. Il fait cultiver la vigne et importe en Anjou des essences méditerranéennes. Entre histoire, innovation et développement durable, les jardins du château d’Angers sont un reflet du patrimoine végétal de l’Anjou. Aujourd’hui, le château d’Angers recèle différents jardins que vous aurez bonheur à découvrir au gré de votre visite. Ils sont un havre de paix pour les visiteurs comme pour la faune et la flore sauvage qui y sont protégées au titre de la biodiversité."}
                            <Image className='rounded-sm w-1/2 object-cover' alt={"Pont Angers"} src={require('../assets/chateau.webp')}/>
                        </span>
                    </Card>
                    <Image onClick={() => scroll()} className={`${down ? "-rotate-90" : "rotate-90"} fixed right-8 bottom-8 self-center cursor-pointer h12 w-12 transition-all animate-pulse hover:animate-none bg-gray-300 rounded-full p-2`} src={require('../assets/arrow.png')} alt={"Descendre"}/>
                </div>
                <span className="py-16 w-full justify-center flex flex-col items-center">
        <span className="capitalize font-bold text-3xl text-center mb-12">
          tout savoir en 1 minute
        </span>
        <ReactPlayer url="https://youtu.be/hUn5KAPrMnM" />
        <div className="text-gray-700 text-2xl w-1/2 selection:bg-green-400 mt-12 selection:text-white">
          <span className="font-semibold">
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

    )
}


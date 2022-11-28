import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import ReactPlayer from "react-player";

const Header = () => {
  return (
    <div
      className="bg-gray-700 h-64 w-full flex cursor-default z-10"
      id="header-background"
    >
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
        <span className="text-5xl xl:text-5xl font-bold flex justify-center w-full pt-16 pb-8 text-white">
          Vivre à Angers
        </span>
        <span className="text-2xl xl:text-2xl flex text-gray-400 flex w-full pb-28 justify-center text-center">
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
        <div style={{minHeight: 'calc(24rem + 5vw)'}} onClick={() => {props.setState(!props.state)}} className={`card transition-all rounded-2xl flex flex-col px-8 cursor-pointer hover:bg-gray-100 bg-white justify-around hover:z ${props.state ? "w-full z-30 h-full absolute" : "relative z-10 w-1/4 h-full shadow-md hover:shadow-xl"}`}>
            <span className={`capitalize basis-1/4 flex  items-center text-2xl font-bold text-center ${props.state ? "justify-start" : "justify-center"}`}>{props.title}</span>
            <span className={`basis-1/2 text-xl text-start selection:bg-green-400 selection:text-white ${props.state && "hidden"}`}>{props.text}</span>
            <span className='flex justify-center items-center basis-1/4'>
                <span className={`text-xl -translate-y-0.5 ${props.state && "hidden"}`}>En savoir plus</span>
                <Image className={`arrow transition-all cover h-7 w-7 opacity-60 ${props.state && "hidden"}`} alt={"En savoir plus"} src={require('../assets/arrow.png')}/>
            </span>
            <div className={`w-full min-h-full ${!props.state && "hidden"}`}>
                <div className='bg-yellow-100 h-full w-full mt-8'>
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

                    </Card>
                    <Card state={second} setState={setSecond} title={"II - un atmosphère de vie agréable"} text={"La vie à Angers est agréable, la météo et l'aspect sociale de la ville apporte une vraie plus value en comparaison aux autres métropoles du pays."}>

                    </Card>
                    <Card state={third} setState={setThird} title={"III - un grand patrimoine culturel et éducatif"} text={"Cette ville est dôtée d'une grande richesse culturelle, notamment dûe à son passé historique datant du Moyen-Âge. Le patrimoine Éducatif de cette ville réputée étudiante est aussi très dense."}>

                    </Card>
                    <Image onClick={() => scroll()} className={`${down ? "-rotate-90" : "rotate-90"} fixed right-8 bottom-8 self-center cursor-pointer h12 w-12 transition-all animate-pulse hover:animate-none bg-gray-300 rounded-full p-2`} src={require('../assets/arrow.png')} alt={"Descendre"}/>
                </div>
                <span className="py-16 w-full justify-center flex flex-col items-center">
        <span className="capitalize font-bold text-3xl text-center mb-12">
          tout savoir en 1 minute
        </span>
        <ReactPlayer url="https://youtu.be/hUn5KAPrMnM" />
        <div className="text-gray-500 text-2xl w-1/2 selection:bg-green-400 mt-12 selection:text-white">
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


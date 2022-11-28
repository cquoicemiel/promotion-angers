import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useState} from "react";





const Part = (props) => {


    return(
        <div style={props.state? {left: 0, opacity: 1} : {left: '-100%', opacity: 0}} className={`w-screen h-screen fixed bg-white top-0 bottom-0 transition-all z-30 overflow-y-scroll px-12 py-8`}>
            <div className='h-24 flex justify-around items-center'>
                <span className='basis-5/6 flex items-center pl-8 text-3xl xl:text-4xl font-semibold capitalize'>{props.title}</span>
                <Image onClick={() => {props.setState(false)}} className={'rotate-180 contain h-10 w-10 cursor-pointer box-content p-1 hover:invert hover:border-white bg-white transition-all border-2 border-black rounded-xl'} src={require('../assets/arrow.png')} alt={"Back"}/>
            </div>
            <div className='w-full min-h-full'>
                {props.children}
            </div>
        </div>
    )
}

const Header = () => {

    return(
            <div className='bg-gray-700 h-64 w-full flex cursor-default z-10' id="header-background" >
            <span className='basis-1/4 flex h-full items-center justify-center gap-4'>
                <Link href={"https://www.instagram.com/ville_d_angers/"} target={"_blank"}>
                    <Image className='invert cover h-14 w-14 hover:opacity-75 transition-opacity' height={100} width={100} src={require('../assets/instagram.webp')} alt={'Instagram'}/>
                </Link>
                <Link href={"https://twitter.com/Angers"} target={"_blank"}>
                    <Image className='invert cover h-16 w-16 hover:opacity-75 transition-opacity' height={100} width={100} src={require('../assets/twitter.webp')} alt={'Twitter'}/>
                </Link>
                <Link href={"https://fr-fr.facebook.com/ville.angers/"} target={"_blank"}>
                    <Image className='invert cover h-14 w-14 hover:opacity-75 transition-opacity' height={100} width={100} src={require('../assets/facebook.webp')} alt={'Facebook'}/>
                </Link>
            </span>
            <span className='basis-1/2 flex flex-col'>
                <span className='text-5xl xl:text-5xl font-bold flex justify-center w-full pt-16 pb-8 text-white'>Vivre à Angers</span>
                <span className='text-2xl xl:text-2xl flex text-gray-400 flex w-full pb-28 justify-center text-center'>Découvrez pourquoi Angers est la ville dont vous avez besoin</span>
            </span>
            <span className='basis-1/4 flex h-full items-center justify-center gap-4'>
                <Link href={"https://www.angersloiremetropole.fr/"} target={"_blank"}>
                    <Image className='w-64 invert hover:opacity-75 transition-opacity' src={require('../assets/alm.webp')} alt={"Angers Loire Métropole"}/>
                </Link>
            </span>
        </div>
    )
}

const Card = (props) => {

    return(
        <div style={{minHeight: 'calc(24rem + 5vw)'}} onClick={() => {props.setState(true)}} className='card rounded-2xl w-full h-full w-1/4 shadow-xl flex flex-col px-8 cursor-pointer shadow-md hover:shadow-xl transition-all hover:bg-gray-100 bg-white z-10 justify-around hover:z'>
            <span className='capitalize basis-1/4 flex justify-center items-center text-2xl font-bold text-center'>{props.title}</span>
            <span className='basis-1/2 text-xl text-start selection:bg-green-400 selection:text-white'>{props.text}</span>
            <span className='flex justify-center items-center basis-1/4'>
                <span className='text-xl -translate-y-0.5'>En savoir plus</span>
                <Image className='arrow transition-all cover h-7 w-7 opacity-60' alt={"En savoir plus"} src={require('../assets/arrow.png')}/>
            </span>
        </div>
    )
}


export default function Home() {





    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)

    const [down, setDown] = useState(false)

    useEffect(() => {
        if(first || second || third){
            document.body.style.overflowY = "hidden"
        }
        return(() => {
            document.body.style.overflowY = "auto"
        })

    }, [first, second, third]);

    const scroll = () =>{
        down
            ?

            (window.scrollTo({
                top: 0,
                behavior: 'smooth'
            }))

            :

            (window.scrollTo({
            top: 920,
            behavior: 'smooth'
        }))
        setDown(!down)
    };








    return(
            <div className='flex flex-col min-h-screen bg-gray-100'>
                <Header/>
                <div style={{minHeight: '40rem'}} className='flex relative w-full px-6 xl:px-48 py-12 justify-around z-20'>
                    <Card state={first} setState={setFirst} title={"I - une ville en constante évolution"} text={"Voyons comment Angers se maintient en évolution en ne cessant jamais d'évoluer dans ses infrastructures, ses activités, et sa population."}/>
                    <Card state={second} setState={setSecond} title={"II - un atmosphère de vie agréable"} text={"La vie à Angers est agréable, la météo et l'aspect sociale de la ville apporte une vraie plus value en comparaison aux autres métropoles du pays."}/>
                    <Card state={third} setState={setThird} title={"III - un grand patrimoine culturel et éducatif"} text={"On trouve dans cette Ville une richesse culturelle de par ses nombreuses infrastructures telles que le célèbre chateau d'angers"}/>
                    <Image onClick={() => scroll()} className={`${down ? "-rotate-90" : "rotate-90"} fixed right-8 bottom-8 self-center cursor-pointer h12 w-12 transition-all animate-pulse hover:animate-none bg-blue-300 rounded-full p-2`} src={require('../assets/arrow.png')} alt={"Descendre"}/>
                </div>
                <span className='py-16 w-full justify-center flex flex-col items-center'>
                    <span className='capitalize font-bold text-3xl text-center'>tout savoir en 1 minute</span>
                    <video  width="320" height="240"  autoPlay controls  poster='../assets/poster.png'> <source src='../assets/video.mp4' type="video/mp4"/> </video>
                    <div className='text-gray-500 text-2xl w-1/2 selection:bg-green-400 selection:text-white'>
                        <span className='font-semibold'>{"Je vous résume les 5 raisons principales de vivre à Angers en 5 minutes:"}</span>
                        <br/>
                        <br/>
                        <ul className='list-disc'>
                            <li>
                                {"Première raison:"}
                                <br/>
                                {"Angers est située à proximité des autres métropoles, elle est située à 135km de Rennes, soit 94 minutes en TGV; à 90km de Nantes, soit 54 minutes en TGV; et à 300km de Paris, soit une durée de 108 minutes en TGV."}
                                <br/>
                                <br/>
                            </li>
                            <li>
                                {"Deuxième raison:"}
                                <br/>
                                {"Le prix immobilier à Angers est 3 fois moins élevé que celui de Paris, le mètre carré à Angers coûte 3000€ contre 9000€ à Paris."}
                                <br/>
                                <br/>
                            </li>
                            <li>
                                {"Troisième raison:"}
                                <br/>
                                {"Angers est la ville la plus dotée d'espaces verts du pays, c'est aussi une des villes les moins poluées, et elle est dotée de nombreuses activités, notamment Terrabotanica, AquaVita, et la patinoire fraîchement construite IceParc."}
                                <br/>
                                <br/>
                            </li>
                            <li>
                                {"Quatrième raison:"}
                                <br/>
                                {"Angers est la ville la plus sûre de l'Ouest et elle figure parmis les 20 villes les plus sûres du pays."}
                                <br/>
                                <br/>
                            </li>
                            <li>
                                {"Cinquième raison:"}
                                <br/>
                                {"On retrouve à Angers de nombreux établissements scolaires et universitaires, comme l'Université de Saint Serge, de Belle Beille, l'Université Catholique de l'Ouest, ou encore l'ESEO, l'ESSCA, l'ESA, et de nombreux autres campus."}
                            </li>
                        </ul>






                    </div>
                </span>

                <Part state={first} setState={setFirst} title={"I - une ville en constante évolution"}>

                </Part>
                <Part state={second} setState={setSecond} title={"II - un atmosphère de vie agréable"}>

                </Part>
                <Part state={third} setState={setThird} title={"III - un grand patrimoine culturel et éducatif"}>

                </Part>
            </div>

    )
}

/*
const Article = (props) => {
    return(
        <div className=''>
            <span className='flex w-full items-center'>
                  <span className='text-5xl font-bold px-12 text-center'>{props.nb}.</span>
                  <span className='flex w-full text-5xl font-bold capitalize'>{props.title}</span>
              </span>
            <span className='flex flex-col w-full pt-12 items-start'>
                <span className='flex flex-row'>
                    <span className='text-3xl w-2/3 px-24'>Lorem ipsum dolor sit amet. Ab corrupti laudantium in obcaecati laborum ut temporibus numquam qui amet repellendus. Et enim enim ut molestias velit et harum voluptatum 33 numquam illo est ipsa doloribus. Est porro culpa rem natus atque id molestiae commodi.</span>
                    <Image className='object-cover w-1/3 px-4' alt={"Terrabotanica"} height={1000} width={1000} src={require('../assets/terrabotanica.webp')}/>
                </span>
                <button className='self-center bg-black text-white rounded-lg px-8 py-4 capitalize my-16 text-3xl font-bold'>Découvrir</button>
            </span>
        </div>
    )
}


export default function Home() {
  return (
      <div className='flex flex-row'>
          <div className='px-8 pb-32 w-11/12'>
              <span className='text-7xl font-bold flex justify-center w-full pt-16 pb-8'>Vivre à Angers</span>
              <span className='text-3xl flex text-gray-500 flex w-full pb-28 justify-center'>Découvrez pourquoi Angers est la ville dont vous avez besoin</span>

              <Article nb={1} title={"un grand potentiel d'investissement"}/>
              <Article nb={2} title={"une ville qui sait divertir"}/>
              <Article nb={3} title={"un patrimoine culturel et éducatif"}/>

          </div>

          <div className='h-full relative'>
              <div className='w-1/12 h-full right-0 flex flex-col fixed justify-center items-center'>
                  <span className='py-1 px-3 cursor-pointer hover:text-white hover:bg-black transition-all my-1.5 border-2 rounded-xl border-black font-bold text-2xl'>1</span>
                  <span className='py-1 px-3 cursor-pointer hover:text-white hover:bg-black transition-all my-1.5 border-2 rounded-xl border-black font-bold text-2xl'>2</span>
                  <span className='py-1 px-3 cursor-pointer hover:text-white hover:bg-black transition-all my-1.5 border-2 rounded-xl border-black font-bold text-2xl'>3</span>
              </div>
          </div>

      </div>


  )
}
*/
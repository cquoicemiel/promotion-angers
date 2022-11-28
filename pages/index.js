import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from "react";





const Part = (props) => {


    return(
        <div style={props.state? {left: 0} : {left: '-110%'}} className={`w-screen h-screen fixed bg-white top-0 bottom-0 transition-all z-30 overflow-scroll`}>
            <div className='shadow-md h-24 flex justify-between justify-center items-center'>
                <span className='basis-5/6 flex items-center pl-8 text-4xl xl:text-5xl font-semibold capitalize'>{props.title}</span>
                <Image onClick={() => {props.setState(false)}} className={'rotate-180 contain h-12 xl:h-16 w-12 xl:w-16 mr-24 cursor-pointer'} src={require('../assets/arrow.png')} alt={"Back"}/>
            </div>
        </div>
    )
}

const Header = () => {

    return(
        <div className='bg-gray-700 h-64 w-full flex cursor-default z-10'>
            <span className='basis-1/4 flex h-full items-center justify-center gap-4'>
                <Link href={"https://www.instagram.com/ville_d_angers/"} target={"_blank"}>
                    <Image className='invert cover h-14 w-14' height={100} width={100} src={require('../assets/instagram.webp')} alt={'Instagram'}/>
                </Link>
                <Link href={"https://twitter.com/Angers"} target={"_blank"}>
                    <Image className='invert cover h-16 w-16' height={100} width={100} src={require('../assets/twitter.webp')} alt={'Twitter'}/>
                </Link>
                <Link href={"https://fr-fr.facebook.com/ville.angers/"} target={"_blank"}>
                    <Image className='invert cover h-14 w-14' height={100} width={100} src={require('../assets/facebook.webp')} alt={'Facebook'}/>
                </Link>
            </span>
            <span className='basis-1/2 flex flex-col'>
                <span className='text-5xl xl:text-5xl font-bold flex justify-center w-full pt-16 pb-8 text-white'>Vivre à Angers</span>
                <span className='text-2xl xl:text-2xl flex text-gray-400 flex w-full pb-28 justify-center text-center'>Découvrez pourquoi Angers est la ville dont vous avez besoin</span>
            </span>
            <span className='basis-1/4 flex h-full items-center justify-center gap-4'>
                <Link href={"https://www.angersloiremetropole.fr/"} target={"_blank"}>
                    <Image className='w-64 invert' src={require('../assets/alm.webp')} alt={"Angers Loire Métropole"}/>
                </Link>
            </span>
        </div>
    )
}

const Card = (props) => {

    return(
        <div style={{minHeight: '25rem'}} onClick={() => {props.setState(true)}} className='card rounded-2xl w-full h-full w-1/4 shadow-xl flex flex-col px-8 cursor-pointer shadow-xl bg-white z-10 justify-around'>
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
            <div className='flex flex-col min-h-screen selection:bg-none'>
                <Header/>
                <span className='hidden xl:flex bg-green-400 blur-3xl absolute top-1/3 left-40 h-96 w-96 rounded-full'></span>
                <span className='hidden xl:flex bg-green-400 blur-3xl absolute top-2/3 right-96 h-96 w-96 rounded-full'></span>
                <div style={{minHeight: '40rem'}} className='flex relative w-full px-6 xl:px-48 py-12 justify-around z-20'>
                    <Card state={first} setState={setFirst} title={"I - le premier titre"} text={"Lorem ipsum dolor sit amet. Ut magni fuga est omnis molestiae ut odit sapiente sit esse quia non reprehenderit mollitia et exercitationem esse aut aperiam obcaecati.s"}/>
                    <Card state={second} setState={setSecond} title={"II - le deuxieme titre"} text={"Lorem ipsum dolor sit amet. Ut magni fuga est omnis molestiae ut odit sapiente sit esse quia non reprehenderit mollitia et exercitationem esse aut aperiam obcaecati.s"}/>
                    <Card state={third} setState={setThird} title={"III - le troisieme titre"} text={"Lorem ipsum dolor sit amet. Ut magni fuga est omnis molestiae ut odit sapiente sit esse quia non reprehenderit mollitia et exercitationem esse aut aperiam obcaecati.s"}/>
                    <Image onClick={() => scroll()} className={`${down ? "-rotate-90" : "rotate-90"} fixed right-8 bottom-8 self-center cursor-pointer h12 w-12 transition-all animate-pulse bg-gray-300 rounded-full p-2`} src={require('../assets/arrow.png')} alt={"Descendre"}/>
                </div>
                <span className='py-16 w-full justify-center flex flex-col items-center'>
                    <span className='capitalize font-bold text-3xl text-center'>tout savoir en 1 minute</span>
                    <div className='bg-gray-500 text-white font-bold text-2xl w-1/3 h-80 flex justify-center items-center text-center my-16'>Vidéo</div>
                    <div className='text-gray-500 text-2xl w-1/2 selection:bg-green-400 selection:text-white'>Lorem ipsum dolor sit amet. Ut error eveniet qui magnam vero non sint omnis et quaerat deserunt qui debitis recusandae! Ex ipsa possimus ea esse galisum ea illo placeat 33 quis accusantium cum doloribus libero. Ea omnis ducimus sed laudantium voluptatum ex voluptas quibusdam qui quae consequuntur qui dolorem excepturi. Vel tenetur dolor a maxime officiis et accusantium sint et nisi beatae! Aut odit commodi id maiores maiores et nemo expedita ad autem velit sed recusandae eius nam tempora commodi. Qui odio unde vel adipisci sapiente aut repellat odio vel iure iure eos dolorem veritatis ut incidunt excepturi. Ad fugiat numquam vel veritatis incidunt sed autem vitae. Et soluta voluptates ut ratione voluptatem ea dignissimos delectus sit magni consequuntur non pariatur quidem et reprehenderit eaque. Ut delectus nulla non numquam fugiat in dolorem quia qui cupiditate aperiam aut totam reprehenderit quo internos sequi. Eum accusamus eligendi aut unde alias ex veritatis sunt quo voluptatibus consequatur. Hic omnis neque ex laudantium itaque id atque quibusdam.</div>
                </span>

                <Part state={first} setState={setFirst} title={"I - le premier titre"}/>
                <Part state={second} setState={setSecond} title={"II - le deuxieme titre"}/>
                <Part state={third} setState={setThird} title={"III - le troisieme titre"}/>
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
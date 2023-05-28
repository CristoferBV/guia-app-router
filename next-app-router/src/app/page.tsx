
import Link from "next/link"
import Image from 'next/image'

type Repository = {
  id: number;
  name : string;
  full_name : string;
  owner : {
    avatar_url : string;
  }
}

async function getData(){
  const res = await fetch('https://api.github.com/repos/CristoferBV/Asignacion2-Parte2');
  const data: Repository = await res.json();
  return data;
}

export default async function Home() {
   const data = await getData();
  return (
    <div>
    <h1>Hello world</h1>
    <h2>{data.id}</h2>
    <h3>{data.owner.avatar_url}</h3>
    <Image
      src={data.owner.avatar_url}
      width={500}
      height={500}
      alt="Picture of the author"/>
    </div>
  )
}

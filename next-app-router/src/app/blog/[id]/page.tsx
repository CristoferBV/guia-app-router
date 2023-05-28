export default function Page({params}:{params:{id:string}}) {
    return (
     <h1>
      Blog Id:{params.id}
      </h1>
    )
  }
import { useQuery } from "@tanstack/react-query"

const App = () => {
  
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetch(`https://jsonplaceholder.typicode.com/posts/`).then(res => res.json())
  })

  if (postsQuery.isLoading) return <h1>Loading...</h1>
  if (postsQuery.isError) return <h1>An error occurred</h1>
  
  return (
    <div className="flex flex-row flex-wrap justify-center bg-slate-800 p-5">
      {postsQuery.data.map((post:any) => (
        <div key={post.id} className="bg-slate-900 w-96 m-2 text-white p-5">
          <h3 className="font-bold capitalize text-center">{post.title}</h3>
          <p className="text-justify">{post.body}</p>
        </div>
      ))}
    </div>
  )
}



export default App
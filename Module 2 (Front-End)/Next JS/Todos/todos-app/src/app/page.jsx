import Input from "./Components/Input"
import ListTodos from "./Components/ListTodos"
import { Toaster } from 'react-hot-toast';
import ClearAll from "./Components/ClearAll";



async function getData() {
  const res = await fetch('http://localhost:5000/todos', 
  {cache: "no-store"})
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <main>
      <Toaster />
      <section className='h-full bg-gradient-to-b from-stone-900 to-indigo-500 flex justify-center items-center'>
        <div className='m-12'>
          <div className="card w-96 bg-white text-black shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-4xl pb-4">Todo App</h2>
              <Input />
              <ListTodos data={data}/>
              <div className="card-actions justify-between mt-4">
                <p>You have {data.length} pending tasks</p>
                <ClearAll />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import Head from "next/head"
import Card from "./components/Card"

export default function Home() {
   return (
      <div>
         <Head>
            <title>Vivid Card</title>
         </Head>
         <div className="w-full h-screen flex justify-center items-center">
            <Card
               category="Travel"
               title="Title goes here"
               content="Pair of boats on water in Lago di Braies and another pair of boats on water in Lago di Braies"
            />
         </div>
      </div>
   )
}

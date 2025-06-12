import { useEffect, useState } from "react";

export default function Card(){
    const [pokeId, setPokeId] = useState(1);
    const [pokeData, setPokeData] = useState(null);

    useEffect(() => {
        const fetchPoke = async () => {
            try{
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`) // response from the PokeAPI
                const data = await res.json();
                setPokeData(data);
            } catch(err){
                console.error('Failed to fetch Pokemon: ',err)
            }
        }
        fetchPoke()
    }, [pokeId])
    return (
        <>
        <h1 className="text-2xl font-bold capitalize">{pokeData?.name}</h1>
        <img className="scale-150" src={pokeData?.sprites?.front_default} alt={pokeData?.name} />
        <div className="flex flex-row space-x-2.5">
            <button className="w-8 h-8 bg-slate-300 hover:bg-slate-400" onClick={() => setPokeId(prev => Math.max(1, prev -1))}>⮜</button>
            <button className="w-8 h-8 bg-slate-300 hover:bg-slate-400"  onClick={() => setPokeId(next => next + 1)}>⮞</button>
        </div>
        </>
    );
}
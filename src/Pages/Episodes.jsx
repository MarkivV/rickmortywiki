import React, {useEffect, useState} from 'react';
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/category/InputGroup";

const Episodes = () => {
    const [episode, setEpisode] = useState(1)
    let [info, setInfo] = useState([])
    const [results, setResults] = useState([])
    let {air_date, name} = info
    let api = `https://rickandmortyapi.com/api/episode/${episode}`
    useEffect(()=>{

        (async function (){
            let data = await fetch(api).then((res)=>res.json())
            // let {} = data
            setInfo(data)
            let a = await Promise.all(
                data.characters.map((x)=>{
                    return fetch(x).then((res)=>res.json())
                })
            )
            setResults(a)
        })()

    }, [api])
    return (
        <div className="container">
            <div className="row mb-4">
                <h1 className="text-center mb-3">
                    Episode:{" "}
                    <span className="text-primary">{name==="" ? "unknown" : name}</span>
                </h1>
                <h5 className="text-center">
                    Air date: {air_date==="" ? "unknown" : air_date}
                </h5>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12">
                    <h4 className="text-center mb-4">Pick Episode</h4>
                        <InputGroup setEpisode={setEpisode} total={51} name="Episode"/>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Cards page="/episodes/" results={results}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Episodes;

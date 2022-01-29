import React, {useEffect, useState} from 'react';
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/category/InputGroup";

const Location = () => {
    const [episode, setEpisode] = useState(1)
    let [info, setInfo] = useState([])
    const [results, setResults] = useState([])
    let {name, type, dimension} = info
    let api = `https://rickandmortyapi.com/api/location/${episode}`
    useEffect(()=>{

        (async function (){
            let data = await fetch(api).then((res)=>res.json())
            // let {} = data
            setInfo(data)
            let a = await Promise.all(
                data.residents.map((x)=>{
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
                    Location:{" "}
                    <span className="text-primary">{name==="" ? "unknown" : name}</span>
                </h1>
                <h5 className="text-center">
                    Dimension: {dimension==="" ? "unknown" : dimension}
                </h5>
                <h6 className="text-center">
                    Type: {type==="" ? "unknown" : type}
                </h6>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12">
                    <h4 className="text-center mb-4">Pick Location</h4>
                        <InputGroup setEpisode={setEpisode} total={126} name="Location"/>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Cards page="/location/" results={results}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Location;

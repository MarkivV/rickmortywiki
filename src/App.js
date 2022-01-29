import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import {useEffect, useState} from "react";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Location from "./Pages/Location";
import Episodes from "./Pages/Episodes";
import CardDetail from "./components/Cards/CardDetail";


function App(){
    return(
        <BrowserRouter>
            <div className="App">
                <Navbar/>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<CardDetail/>}/>

                <Route path="/episodes" element={<Episodes/>}/>
                <Route path="/episodes/:id" element={<CardDetail/>}/>

                <Route path="/location" element={<Location/>}/>
                <Route path="/location/:id" element={<CardDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

const Home = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [search, setSearch] = useState("")
    const [fetchedData, setFetchedData] = useState([])
    const [status, setStatus] = useState("")
    const [gender, setGender] = useState("")
    const [species, setSpecies] = useState("")
    let {info, results} = fetchedData
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
    useEffect(() => {
        (async () => {
            let data = await fetch(api).then(res=>res.json())
            setFetchedData(data)
        })()
    }, [api]);
      return (
        <div className="App">
            <h1 className="text-center mb-4">Characters</h1>
            <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
            <div className="container">
                <div className="row">
                        <Filters setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber}/>
                   <div className="col-lg-8 col-12">
                       <div className="row">
                           <Cards page="/" results={results}/>
                       </div>
                   </div>
                </div>
            </div>
            <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info}/>
        </div>
      );
    }
export default App;

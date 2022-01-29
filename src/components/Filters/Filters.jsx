import React from 'react';
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const MyComponent = ({setStatus, setGender, setPageNumber, setSpecies}) => {

    let clear = () =>{
        window.location.reload(false)
    }

    return (
        <div className="col-lg-3 col-12 mb-5">
            <div className="text-center fw-bold fs-4 mb-2">Filter</div>
            <div onClick={clear} style={{cursor: "pointer"}} className="text-center text-primary text-decoration-underline mb-4">
                Clear Filters
            </div>


            <div className="accordion" id="accordionExample">
                <Gender setGender={setGender} setPageNumber={setPageNumber}/>
                <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
                <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
            </div>



        </div>
    );
};

export default MyComponent;

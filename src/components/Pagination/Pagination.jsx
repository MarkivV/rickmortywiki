import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
const Pagination = ({setPageNumber, pageNumber, info}) => {

    const [width, setWidth] = useState(window.innerWidth)


    let updateDimension = () =>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize", updateDimension)
        return () => window.removeEventListener("resize", updateDimension)

    }, [])

    return (
        <>
            <style jsx>
                {`
                  @media (max-width: 768px){
                    .next, .prev{
                    display: none;
                    }
                    .pagination{
                      font-size: 14px;
                    }
                  }
                `}
            </style>
        <ReactPaginate
            className="pagination justify-content-center gap-4 my-4"
            forcePage={pageNumber===1? 0 : pageNumber -1}
            nextLabel="Next"
            previousLabel="Prev"
            previousClassName="btn btn-primary prev"
            nextClassName="btn btn-primary next"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            marginPagesDisplayed={width < 576 ? 1 : 2}
            pageRangeDisplayed={width < 576 ? 1 : 2}
            onPageChange={(data)=>{setPageNumber(data.selected + 1)}}
            activeClassName="active"
            pageCount={info?.pages}/>
        </>
    );
};

export default Pagination;

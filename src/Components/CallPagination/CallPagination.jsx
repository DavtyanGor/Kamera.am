import React from 'react';
import Pagination from "../Pagination/Pagination.jsx";

function CallPagination({currentPage,length,productPerPage,setCurrentPage}) {
	return (
		length > 10 ? <Pagination cuurentPage={currentPage}
								total={length}
								productPerPage={productPerPage}
								setCurrentPage={setCurrentPage} /> :"" 
	);
}

export default CallPagination;
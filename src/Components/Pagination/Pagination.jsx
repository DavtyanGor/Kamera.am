import React from 'react';
import pagination from "./pagination.module.scss";
import cl from "classnames";
import {FaChevronRight,FaChevronLeft} from "react-icons/fa"
function Pagination({productPerPage, total,setCurrentPage,cuurentPage}) {
	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(total / productPerPage); i++) {
		pageNumbers.push(i)
		window.scrollTo({top:0,left:0})
	}
	const changePage = page => setCurrentPage(page)
 return (
			<nav className={pagination.pagination_bar}>
			<ul className={pagination.pagination_list}>
				<button type={"button"}
								disabled={cuurentPage === pageNumbers[0]}
								onClick={()=>setCurrentPage(cuurentPage - 1)}
								className={pagination.arrows}><FaChevronLeft size={25} title={"prev"} /></button>

				{pageNumbers?.map(page=>(
					<li key={page} className={cl(pagination.pagination_item, page === cuurentPage? pagination.currentPage :"")} onClick={()=>changePage(page)}>{page}</li>
				))}
				<button type={"button"}
						onClick={()=>setCurrentPage(cuurentPage + 1)}
						disabled={cuurentPage === pageNumbers.reverse()[0]}
						className={pagination.arrows}><FaChevronRight  size={25} title={"next"} /></button>
			</ul>
		</nav>
	);
}

export default Pagination;
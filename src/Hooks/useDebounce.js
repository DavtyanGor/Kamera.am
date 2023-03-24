import {useEffect, useState} from "react";

function useDebounce(value,delay=300){
		const [debauncedValue,setDebauncedValue] = useState(value)
	  useEffect(()=>{
			const debouncing =	setTimeout(()=>{
				setDebauncedValue(value)
				},
				delay)
			return	() => clearTimeout(debouncing)
		},[value])
	
	return debauncedValue
}
export default useDebounce;
import { useEffect } from "react"

/**
 * A simple hook for setting the page title. 
 * @param title The title you need for the page / component. 
 * @returns void.
 */

const useTitle = (title: string) => {
	useEffect(() => {
		document.title = title;
	}); 
	return; 
}

export default useTitle; 
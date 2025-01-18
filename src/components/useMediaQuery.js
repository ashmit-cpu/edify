// import React, { useEffect, useState } from 'react'

// function useMediaQuery(query) {
//     const [matches, setMatches] = useState(false);

//     useEffect(() => {
//         const mediaQuery = window.matchMedia(query);
//         const handler = () => setMatches(mediaQuery.matches);

//         handler(); // Set the initial value
//         mediaQuery.addEventListener('change', handler); // Listen for changes

//         return () => {
//             mediaQuery.removeEventListener('change', handler); // Cleanup listener on unmount
//         };
//     }, [query]);

//     return matches;
// }

// export default useMediaQuery

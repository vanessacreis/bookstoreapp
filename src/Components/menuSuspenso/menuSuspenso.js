// import { useState, useEffect } from "react";

// export const menuSuspenso = (element, initialState) => {
//   const [isActive, setActive] = useState(initialState);

//   useEffect(() => {
//     const onClick = (e) => {
//       if (element.current !== null && !element.current.contains(e.target)) {
//         setActive(!isActive);

//     }

//     if (isActive) {
//       window.addEventListener("click", onClick);
//     }

//     return () => {
//       window.removeEventListener("click", onClick);
//     };
//   }, [isActive, {element}]);

//   return [isActive, setActive];
// };

import React, { RefObject } from 'react'


const useClickOutside = (ref:RefObject<HTMLElement>, callback:()=>void) => {
    const handleClick = (e:MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    React.useEffect(() => {
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    });
  };


  export default useClickOutside
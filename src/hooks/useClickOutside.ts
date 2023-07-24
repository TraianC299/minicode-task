import React, { RefObject } from 'react'


const useClickOutside = (ref:RefObject<HTMLElement>, callback:Function) => {
    const handleClick = (e:MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
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
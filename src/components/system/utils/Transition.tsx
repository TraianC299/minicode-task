import  { useState, useRef } from 'react';
import styled from 'styled-components';
import useDidMountEffect from '../../../hooks/useDidMountEffect';



const Container = styled.div`
width: 100%;
&.smooth-fade-in-out {
  transition: opacity 0.3s ease;
}

&.fade-in {
  opacity: 1;
}

&.fade-out {
  opacity: 0;
}`
const Transition = ({ children }:{
  children: React.ReactNode
}) => {
  const [copyOfChildren, setCopyOfChildren] = useState(children);
  
  const [isFadingOut, setIsFadingOut] = useState(false);
  const containerRef = useRef(null);

  useDidMountEffect(() => {
    setIsFadingOut(true);

    const fadeOutTimer = setTimeout(() => {
      setCopyOfChildren(children);
      setIsFadingOut(false);
    }, 300); // You can adjust the duration of the fade-out transition (in milliseconds) as per your preference

    return () => {

      clearTimeout(fadeOutTimer);
    };
  }, [children]);

  return (
    children &&<Container className={`smooth-fade-in-out ${isFadingOut ? 'fade-out' : 'fade-in'}`} ref={containerRef}>
      {copyOfChildren}
    </Container>
  );
};

export default Transition;

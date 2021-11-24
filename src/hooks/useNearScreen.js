import { useEffect, useRef, useState } from 'react';

export const useNearScreen = ({externalRef, once = true} = {}) => {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    let observer;
    const element = externalRef ? externalRef.current : elementRef.current;
   
    // observer.unobserve(entry)

    const onChange = (entries, observer) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {      
      observer = new IntersectionObserver(onChange, {
        rootMargin: '50px' 
      })

      if (element) observer.observe(element);
    });

    return () => observer && observer.disconnect();
  })

  return {show , elementRef}
}

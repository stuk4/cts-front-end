import  { useEffect, useState } from 'react';


export const useDetectOutsideClick = (ref,initialState) => {
    const [isActive, setIsActive] = useState(initialState)
    
    useEffect(() => {
        const onClick = (e) =>{
            if (ref.current !== null && !ref.current.contains(e.target)) {
                setIsActive(!isActive);
             
              }
       
        }
        if (isActive ) {
            window.addEventListener('click', onClick);
            
        }

        return () => {
            window.removeEventListener('click', onClick);
          }
        
    }, [isActive,ref])

    return [isActive,setIsActive]

};


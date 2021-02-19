


const useFetch = (url,data,method='GET')=>{
    

        // hacer dispatch
        if(method === 'GET')
        {
        
            return fetch(url,
                {
                method,
                }
                );
           
        }else{

           return fetch(url,
                {
                    method,
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(data)
                }
               )
            
        }


}

export default useFetch;

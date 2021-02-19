export const errors = (json) =>{
    const container = document.createElement("div");
    // const bold1 = document.createElement('b');
    // const bold2 = document.createElement('b');
    for ( var [key,value] of Object.entries(json)){
         
        container.innerHTML += "<br><b>Campo: </b>"+key+"<br><b> Error: </b> "+value+"<br><hr>"
        
    }
    return container

}


export function useCaptcha(){
    let code  = ``;
    code = ` ${Math.floor(Math.random()*10)}
             ${Math.floor(Math.random()*10)}   
             ${Math.floor(Math.random()*10)}   
             ${Math.floor(Math.random()*10)}   
             ${Math.floor(Math.random()*10)}   
             ${Math.floor(Math.random()*10)}  `
             return code;
}

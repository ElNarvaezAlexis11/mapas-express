export default function (){
    const check = document.getElementById('theme-button');
    const button = document.getElementById('icon-mode');

    const sun = document.createElement('i');
    sun.className = "bi bi-sun";
    const moon = document.createElement('i');
    moon.className = "bi bi-moon";

    button.innerHTML = "";

    if(check.checked){
        document.body.setAttribute('data-bs-theme','dark');
        button.appendChild(moon);
    }else{
        document.body.setAttribute('data-bs-theme','ligth');
        button.appendChild(sun);
    }

    check.addEventListener('change',(e)=>{     
     
        if(e.target.checked){   
            document.body.setAttribute('data-bs-theme','dark');
            button.innerHTML = "";
            button.appendChild(moon);
        }else{
            document.body.setAttribute('data-bs-theme','ligth');
            button.innerHTML = "";
            button.appendChild(sun);
        }
    });
};
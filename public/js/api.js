import { component as c } from "./components/component.js"

export default function () {
    const selectorStates = document.getElementById('selectorState');
    selectorStates.addEventListener('change', async (event) => {
        if (!(event.target.value)) {
            return;
        }
        const url = `/api/state/${event.target.value}`;

        const response = await fetch(url, {
            method: "GET"
        });

        const municipals = await response.json();
        const selectorMuni = document.getElementById('selectorMuni');
        selectorMuni.innerHTML = null;
        municipals.forEach(muni => {
            const opt = c({
                type: 'option',
                props: {
                    value: muni.INMUEBLE_C_NOM_MUN
                },
                child: muni.INMUEBLE_C_NOM_MUN
            }); 
            c.innerText = muni.INMUEBLE_C_NOM_MUN;
            selectorMuni.appendChild(opt);
        });
        selectorMuni.disabled = false;
    });
}
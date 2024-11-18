function getPoke() {
    const namePoke = document.getElementById('pokename').value;
    const url = "https://pokeapi.co/api/v2/pokemon/" + namePoke;
    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }
    
    fetch(url,param)
    .then(function(data){
        return data.json();
    })
    .then(function(result){      
        if (!result.error){
            // document.getElementById("mostrarPoke").value = result.name.toUpperCase();
            pokeinfo.innerHTML = `
            <h2>${result.name.toUpperCase()}</h2>
            <img src="${result.sprites.front_default}">
            <img src="${result.sprites.back_default}">
            <table>
            <tr>
            <th>Habilidades</th>
            </tr>
            ${(() => {
            let rows = '';
            for (let i = 0; i < result.abilities.length; i++) {
                rows += `<tr><td>${result.abilities[i].ability.name}</td></tr>`;
            }
            return rows;
            })()}
            </table>
        `;}
        else
            alert("El pokemon no existe")
    })
    .catch(function(error){
        alert("El pokemon no existe")
        console.log(error);
    })
}




function pesquisar() {
    let section = document.getElementById
    ("resultados-pesquisa")
    console.log(section);
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML ="Digite algo no campo de Pesquisa!"
        return
    }

    console.log(campoPesquisa);
    
    campoPesquisa = campoPesquisa.toLowerCase()
        
    let resultados = "";
    let titulo = "";
    let descricao ="";
    let tags ="";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase() 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}.</p>
            </div>
            `;
        }
     }
      
     if (!resultados) {
        resultados = "Nada foi encontrado!!!"
     }
    
    section.innerHTML = resultados
}
//  console.log(dados);




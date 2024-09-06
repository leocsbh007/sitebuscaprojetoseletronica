function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value;


    //console.log(campoPesquisa);

    if(!campoPesquisa){
        section.innerHTML = "<h3> Você não digitou nada em sua Busca </h3>";
        return;
    }

    // Atribui os valores da base de dados
    let titulo = "";
    let descricao = "";
    let tags = ""

    // Aletar as entradas para minusculas
    campoPesquisa = campoPesquisa.toLocaleLowerCase();   


    // Itera sobre cada dado da lista de dados
    for (let post of posts) {      

        // Atribui os posts e transforma em minuscula
        titulo = post.titulo.toLocaleLowerCase();
        descricao = post.descricao.toLocaleLowerCase();
        tags = post.tags.toLocaleLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Cria um novo elemento HTML para cada resultado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${post.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${post.descricao}</p>
                    <p class="descricao-meta">${post.nivel}</p>
                    <p class="descricao-meta">${post.data}</p>
                    <a href=${post.link} target="_blank">Assista um Vídeo</a>
                </div>
            `;
        }
    }

    if(!resultados){
        section.innerHTML = "<h3> Digite um valor valido </h3> <h3> Use as Tags como referência </h3>";
        return;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
    
}

// Essa função serve para mostrar na tela as tags dispniveis no sistema
function mostrarTags() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let tag of posts) {      
 
        // Cria um novo elemento HTML para cada resultado
        tags += `
            <div class="item-resultado">                
                <p class="descricao-meta">${tag.tags}</p>                      
            </div>
            `;
    }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = tags;
    
}
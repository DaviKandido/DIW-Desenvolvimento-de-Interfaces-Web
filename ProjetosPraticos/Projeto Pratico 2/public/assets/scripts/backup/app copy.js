document.addEventListener("DOMContentLoaded", () => {

    const divcontemRepositorio = document.querySelector(".contemRepositorio");
    const divconteudoSugeridos = document.querySelector(".contemConteudoSugeridos");
    const divContemColegas = document.querySelector(".contemColegas");



      //-------------------------------- FUNÇÕES JSONServer -----------------------------------//

    const dataURL = "https://e7d94e95-e58c-47ed-bd20-80e0dbf66e1c-00-34htdzkpnbhsy.spock.replit.dev";

    function ReadData(functionCallBack, objeto){
        fetch(`${dataURL}/${objeto}`, {
            method: 'GET'
          })
        .then(response => response.json())
        .then(data => {
            functionCallBack(data);
            return data;
            console.log(data);
        })
        .catch(error => {
            console.error('Erro:', error);
          });
    }

      //-------------------------------- END - FUNÇÕES JSONServer -----------------------------------//

      //-------------------------------- Funções de Criação de Conteudo -----------------------------------//

    
    function CriaColegas(data){

            divContemColegas.innerHTML = `<div class="row row-cols-1 row-cols-md-3 g-3">`;

        data.forEach(colega => {
            divContemColegas.innerHTML += `
                  <div class="col">
                    <div class="card">
                      <img src="${colega.URLfoto}" class="card-img-top" alt="${colega.Nome}">
                      <div class="card-body">
                        <h5 class="card-title">${colega.Nome}</h5>
                        <p class="card-text">${colega.Descricao}</p>
                        <a href="${colega.URLGit}" class="btn btn-primary">Git Hub</a>
                      </div>
                    </div>`;
        });

        divContemColegas.innerHTML += `</div>`;

    }


    function CriaConteudosSugeridos(data){

        let Travamento = true;

    data.forEach(Conteudo => {

        if(Travamento){
            divconteudoSugeridos.innerHTML = `    
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${Conteudo.URLfoto}" class="d-block w-100" alt="${Conteudo.Titulo}">
                            <div class="carousel-caption d-none d-md-block">
                              <h5><p class="text-dark">${Conteudo.Titulo}</p>
                              </h5>
                              <p><p class="text-dark">${Conteudo.Descricao}</p>
                            </div>
                          </div>`;
            }

        divconteudoSugeridos.innerHTML += `
                      <div class="carousel-item">
                        <img src="${Conteudo.URLfoto}" class="d-block w-100" alt="${Conteudo.Titulo}">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>${Conteudo.Titulo}</h5>
                          <p>${Conteudo.Descricao}</p>
                        </div>
                      </div>`;
    });

    divconteudoSugeridos.innerHTML += ` </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>`;


    Travamento = false;

}

      //--------------------------------Chama Funções-----------------------------------//

    
      ReadData(CriaColegas, "Colegas-de-Trabalho");
      //ReadData(CriaConteudosSugeridos, "Conteudos-Sugeridos");

    
    })
// Função para verificar se o perfil está armazenado no localStorage
function verificaLocalStorage() {
    return localStorage.getItem("meuperfil") ? true : false;
}

// Função para pegar informações do GitHub
function pegarInfoGit() {
    const api = 'https://api.github.com/users/andrielmark';
    $.ajax({
        url: api,
        method: "GET",
    }).done((data) => {
        localStorage.setItem("meuperfil", JSON.stringify(data));
        loadProfile();
    });
}

// Função para carregar o perfil do usuário
function loadProfile() {
    if (verificaLocalStorage()) {
        let dados = JSON.parse(localStorage.getItem("meuperfil"));
        $("#meunome").html(`<b>${dados.name}</b>`);
        $("#bio").html(`${dados.bio}`);
        $("#location").html(`${dados.location}`);
        $("#linkGithub").text(`${dados.html_url}`).attr('href', dados.html_url);
        $("#foto").attr('src', dados.avatar_url);
    } else {
        pegarInfoGit();
    }
}

// Função para carregar o conteúdo sugerido
function loadConteudoSugerido() {
    const api = 'http://localhost:3000/conteudoSugerido';
    $.ajax({
        url: api,
        method: "GET",
    }).done((data) => {
        let carouselContent = $('#carouselContent');
        data.forEach((item, index) => {
            let activeClass = index === 0 ? 'active' : '';
            carouselContent.append(`
                <div class="carousel-item ${activeClass}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${item.title}</h5>
                    </div>
                    <img src="${item.image}" class="d-block w-100" alt="${item.title}">
                    <div class="carousel-caption d-none d-md-block">
                        <p>${item.description}</p>
                    </div>
                </div>
            `);
        });
    });
}

$(document).ready(function() {
    loadProfile();
    loadConteudoSugerido();
});

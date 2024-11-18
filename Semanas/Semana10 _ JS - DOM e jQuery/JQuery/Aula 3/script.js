

$(document).ready(function(){
    $("#mais1").click( () =>{
        let valor = parseInt($("#contador").text())

        $("#contador").text(valor+1);

        if( valor > 0 ) $("#menos1").prop("disabled", false)
    })


    $("#menos1").click( () =>{
        let valor = parseInt($("#contador").text())

        if( valor > 0 )
            $("#contador").text(valor-1);
        else $("#menos1").prop("disabled", true)

    })

    $("#adicionar").click( () => {
        $("#lista").append($("<li>Novo item</li>"));
    })

    $("#remover").click( () => {
        $("#lista li:last-child").remove();
    })

    $("#addFoto").click( () => {
        let img= $("<img />", {
            id: "foto", 
            alt: "Minha foto",
            src: "https://i.ibb.co/nCPb76k/TESTE.png"
        })
        
        if ($("#foto").length > 0) {
            $($("#foto").remove());  // Remove a imagem existente
        } else {
            $("#lista").append(img);  // Adiciona a imagem no contêiner com id #lista
        }
    })


    $("#addConteudo").click( () => {
        let conteudo= $("<p></p>", {
            id: "conteudo", 
            html: "Ola <strong>mundo<strong/>",
        })
        

        $("#conteudo").html(conteudo);  // Adiciona a imagem no contêiner com id #lista
    
    })

    $("#pegarInput").click( () => {
        let input = $("#input").val();

        console.log(input);

    })

})
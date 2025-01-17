$(document).ready(function () {
    const respostaCorreta = "POS Controle";

    $(".product-card").on("click", function () {
        const produtoSelecionado = $(this).data("produto");
        const feedback = $("#feedback");

        if (produtoSelecionado === respostaCorreta) {
            feedback
                .removeClass("error")
                .addClass("success")
                .text("Correto! O POS Controle é a melhor opção.");
        } else {
            feedback
                .removeClass("success")
                .addClass("error")
                .text("Errado! Tente novamente.");
        }

        
        feedback.fadeIn(300);


        setTimeout(() => feedback.fadeOut(300), 3000);
    });
});

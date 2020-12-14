$(document).ready(function () {
    console.log("hello")
    // First thing the users sees
    const elementBox = document.getElementById("box");
    const elementArtifact = document.getElementById("artefact");
    const elementPhilosophy = document.getElementById("philosophy-content");
    elementArtifact.hidden = hideAll
    elementBox.scrollIntoView();


});

function scrollFunction(id) {
    $("body,html").animate(
        {
            scrollTop: $(id).offset().top
        },
        800 //speed
    );
}
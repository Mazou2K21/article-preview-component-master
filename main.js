function showShare() {

    const social = document.querySelector(".share-social");
    const button = document.querySelector(".share-button");
    
    button.addEventListener ("click", function() {

        if (social.style.display === "none" ) {
            social.style.display = "flex";
            button.classList.add("active");

        } else {
            social.style.display = "none";
            button.classList.remove("active");
            
        }

    });

};

showShare();
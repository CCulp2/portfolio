var linkedinHide = document.getElementById('linkedinBtn');

linkedinHide.addEventListener("click", () => {
    var liHidden = document.getElementById('liDiv')
    if (liHidden.classList.contains('linkedin-hidden')) {
        liHidden.classList.remove('linkedin-hidden')
    }
    else {
        liHidden.classList.add('linkedin-hidden')
    }


})
            
function openEmailWindow() {
    var subj = document.getElementById('subjectMail').value;
    var cont = document.getElementById('contentMail');
    window.open("mailto:briansomers.contact@gmail.com?subject=" + subj + "&body=" + cont.innerText)
}
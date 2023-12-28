document.getElementById('submitButton').addEventListener('click', function () {
    let submitButton = this;
    submitButton.innerHTML = "Saving..";

    submitButton.classList.add('btn-loading');
    submitButton.disabled = true;

    document.getElementById('inputName').value = '';
    
    setTimeout(function () {
        submitButton.classList.remove('btn-loading');
        submitButton.disabled = false;
        submitButton.innerHTML = "Save";
    }, 2000);
});
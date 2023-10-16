document.addEventListener('DOMContentLoaded', function() {
    const containers = document.getElementsByClassName('container');

    for (let i = 0; i < containers.length; i++) {
        containers[i].addEventListener('click', function() {
            this.classList.toggle('jaya');
        });
    }

    console.log(containers.length);
});

(function () {

    const controlls = document.querySelectorAll('.color-filter__link');
    const activeClass = 'color-filter__item--activ';

    controlls.forEach(function (control) {

        control.addEventListener('click', function (e) {
            e.preventDefault();

            controlls.forEach(function(link){
                link.closest('.color-filter__item').classList.remove(activeClass);
            })

            control.closest('.color-filter__item').classList.add(activeClass);
        })
    })
}());
(function () {

    const controlls = document.querySelectorAll('.size-filter__link');
    const activeClass = 'size-filter__item--activ';

    controlls.forEach(function (control) {

        control.addEventListener('click', function (e) {
            e.preventDefault();

            controlls.forEach(function(link){
                link.closest('.size-filter__item').classList.remove(activeClass);
            })

            control.closest('.size-filter__item').classList.add(activeClass);
        })
    })

}());
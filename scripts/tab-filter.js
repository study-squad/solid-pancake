(function () {

    const controlls = document.querySelectorAll('.tab-filter__link');
    const activeClass = 'tab-filter__item--active';

    controlls.forEach(function (control) {

        control.addEventListener('click', function (e) {
            e.preventDefault();

            controlls.forEach(function(link){
                link.closest('.tab-filter__item').classList.remove(activeClass);
            })

            control.closest('.tab-filter__item').classList.add(activeClass);
        })
    })

}());
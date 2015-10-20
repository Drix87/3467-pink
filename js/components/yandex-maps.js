ymaps.ready(function () {
    // В функцию поступает пространство имен, которое содержит все запрощенные при инициализации модули.
    var myMap = new ymaps.Map('map', {
            center: [59.938554257894,30.322479499999993],
            zoom: 16,
            // В данном примере карта создается без контролов, так как те не были загружены при инициализации API.
            controls: []
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-marker.svg',
            // Размеры метки.
            iconImageSize: [36, 36],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });
    myMap.geoObjects.add(myPlacemark);

});

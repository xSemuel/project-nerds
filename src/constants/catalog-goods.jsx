import aplusImg from '../components/store/img/img-aplus-1.jpg';
import barberImg from '../components/store/img/img-barbershop-1.jpg';
import kvastImg from '../components/store/img/img-kvast-1.jpg';
import mishkaImg from '../components/store/img/img-mishka-1.jpg';
import pinkImg from '../components/store/img/img-pink-1.jpg';
import sedonaImg from '../components/store/img/img-sedona-1.jpg';

export const CATALOG_GOODS = [
    {
        title: 'Cайт Седона', 
        srcLogo: sedonaImg, 
        alt: 'Изображение главной страницы сайта Седона', 
        descName: 'SEDONA', 
        descInfo: `Информационный сайт <br /> для туристов`, 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону SEDONA', 
        descPrice: 5000, 
        layout: 'Adaptive1', 
        features: ['Slider'], 
    }, 

    {
        title: 'Cайт PINK APP', 
        srcLogo: pinkImg, 
        alt: 'Изображение главной страницы сайта PINK', 
        descName: 'PINK APP', 
        descInfo: `Продуктовый лендинг приложения для iOS и Android`, 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону PINK APP', 
        descPrice: 6000, 
        layout: 'Adaptive1', 
        features: ['blockFeatures', 'Slider'], 
    }, 

    {
        title: 'Cайт Барбершоп «Бородинский»', 
        srcLogo: barberImg, 
        alt: 'Изображение главной страницы сайта Барбершоп «Бородинский»', 
        descName: 'Barbershop', 
        descInfo: `Сайт мужской парикмахерской`, 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Барбершоп «Бородинский»', 
        descPrice: 12000, 
        layout: 'Adaptive1', 
        features: ['blockFeatures'], 
    }, 

    {
        title: 'Cайт MISHKA', 
        srcLogo: mishkaImg, 
        alt: 'Изображение главной страницы сайта MISHKA', 
        descName: 'Mishka', 
        descInfo: `Сайт о товарах ручной работы`, 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону MISHKA', 
        descPrice: 2000, 
        layout: 'Fixed2', 
        features: ['blockFeatures'], 
    }, 

    {
        title: 'Cайт A+', 
        srcLogo: aplusImg, 
        alt: 'Изображение главной страницы сайта A+', 
        descName: 'A+', 
        descInfo: `Сайт учебного заведения`, 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону А+', 
        descPrice: 8000, 
        layout: 'Fixed2', 
        features: ['blockFeatures'], 
    }, 

    {
        title: 'Cайт КВАСТ', 
        srcLogo: kvastImg, 
        alt: 'Изображение главной страницы сайта КВАСТ', 
        descName: 'КВАСТ', 
        descInfo: `Сайт производителя крафтового кваса`, 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону КВАСТ', 
        descPrice: 7000, 
        layout: 'Fixed2', 
        features: ['blockFeatures'], 
    }, 

    {
        title: 'Cайт Рейдона', 
        srcLogo: sedonaImg, 
        alt: 'Изображение главной страницы сайта Рейдона', 
        descName: 'REDONA', 
        descInfo: `Информационный сайт <br /> для туристов`, 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону REDONA', 
        descPrice: 7000, 
        layout: 'Rubber3', 
        features: ['Slider', 'News', 'Gallery'], 
    }, 

    {
        title: 'Cайт SerINK ', 
        srcLogo: pinkImg, 
        alt: 'Изображение главной страницы сайта SerINK', 
        descName: 'SerINK', 
        descInfo: `Продуктовый лендинг приложения для iOS и Android`, 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону SerINK APP', 
        descPrice: 2000, 
        layout: 'Rubber3', 
        features: ['News', 'Gallery', 'Cart'], 
    }, 

    {
        title: 'Cайт beauty «TuffyShop»', 
        srcLogo: barberImg, 
        alt: 'Изображение главной страницы cайта beauty «TuffyShop»', 
        descName: 'TuffyShop', 
        descInfo: `Сайт мужской парикмахерской`, 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Барбершоп «Бородинский»', 
        descPrice: 9000, 
        layout: 'Rubber3', 
        features: ['blockFeatures', 'News', 'Gallery', 'Cart'], 
    }, 

    {
        title: 'Cайт Karatuwka', 
        srcLogo: mishkaImg, 
        alt: 'Изображение главной страницы сайта Karatuwka', 
        descName: 'Karatuwka', 
        descInfo: `Сайт о товарах ручной работы`, 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Karatuwka', 
        descPrice: 5000, 
        layout: 'Fixed2', 
        features: ['blockFeatures', 'News', 'Gallery', 'Cart'],
    }, 

    {
        title: 'Cайт Zenda', 
        srcLogo: aplusImg, 
        alt: 'Изображение главной страницы сайта Zenda', 
        descName: 'Zenda', 
        descInfo: `Сайт учебного заведения`, 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Zenda', 
        descPrice: 10000, 
        layout: 'Rubber3', 
        features: ['Slider', 'News', 'Gallery', 'Cart'], 
    },

    {
        title: 'Cайт Raketa', 
        srcLogo: kvastImg, 
        alt: 'Изображение главной страницы сайта Raketa', 
        descName: 'Raketa', 
        descInfo: `Сайт производителя крафтового Raketa`, 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Raketa', 
        descPrice: 3000, 
        layout: 'Fixed2', 
        features: ['Slider', 'News', 'Gallery', 'Cart'], 
    }, 
]

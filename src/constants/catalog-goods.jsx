import aplusImg from '../components/store/img/img-aplus-1.jpg';
import barberImg from '../components/store/img/img-barbershop-1.jpg';
import kvastImg from '../components/store/img/img-kvast-1.jpg';
import mishkaImg from '../components/store/img/img-mishka-1.jpg';
import pinkImg from '../components/store/img/img-pink-1.jpg';
import sedonaImg from '../components/store/img/img-sedona-1.jpg';


export const CATALOG_GOODS = [
    {
        id: '001',
        title: 'Cайт SEDONA', 
        srcLogo: sedonaImg, 
        alt: 'Изображение главной страницы сайта Седона', 
        descName: 'SEDONA', 
        descInfo: 'Информационный сайт <br /> для туристов', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону SEDONA', 
        descPrice: 5000, 
        layout: 'Adaptive1', 
        features: ['Slider'], 
    },
    {
        id: '002',
        title: 'Cайт PINK APP', 
        srcLogo: pinkImg, 
        alt: 'Изображение главной страницы сайта PINK', 
        descName: 'PINK APP', 
        descInfo: 'Продуктовый лендинг приложения для iOS и Android', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону PINK APP', 
        descPrice: 6000, 
        layout: 'Adaptive1', 
        features: ['blockFeatures', 'Slider'], 
    },
    {
        id: '003',
        title: 'Cайт Барбершоп «Бородинский»', 
        srcLogo: barberImg, 
        alt: 'Изображение главной страницы сайта Барбершоп «Бородинский»', 
        descName: 'Barbershop', 
        descInfo: 'Сайт мужской парикмахерской', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Барбершоп «Бородинский»', 
        descPrice: 12000, 
        layout: 'Adaptive1', 
        features: ['blockFeatures'], 
    },
    {
        id: '004',
        title: 'Cайт MISHKA', 
        srcLogo: mishkaImg, 
        alt: 'Изображение главной страницы сайта MISHKA', 
        descName: 'Mishka', 
        descInfo: 'Сайт о товарах ручной работы', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону MISHKA', 
        descPrice: 2000, 
        layout: 'Fixed2', 
        features: ['blockFeatures', 'Gallery'], 
    },
    {
        id: '005',
        title: 'Cайт A+', 
        srcLogo: aplusImg, 
        alt: 'Изображение главной страницы сайта A+', 
        descName: 'A+', 
        descInfo: 'Сайт учебного заведения', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону А+', 
        descPrice: 8000, 
        layout: 'Fixed2', 
        features: ['Slider', 'blockFeatures'], 
    },
    {
        id: '006',
        title: 'Cайт КВАСТ', 
        srcLogo: kvastImg, 
        alt: 'Изображение главной страницы сайта КВАСТ', 
        descName: 'КВАСТ', 
        descInfo: 'Сайт производителя крафтового кваса', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону КВАСТ', 
        descPrice: 7000, 
        layout: 'Fixed2', 
        features: ['blockFeatures', 'News', 'Gallery'], 
    },
    {
        id: '007',
        title: 'Cайт REDONA', 
        srcLogo: sedonaImg, 
        alt: 'Изображение главной страницы сайта REDONA', 
        descName: 'REDONA', 
        descInfo: 'Информационный сайт для туристов', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону REDONA', 
        descPrice: 7000, 
        layout: 'Rubber3', 
        features: ['Slider', 'News', 'Gallery'], 
    },
    {
        id: '008',
        title: 'Cайт SerINK', 
        srcLogo: pinkImg, 
        alt: 'Изображение главной страницы сайта SerINK', 
        descName: 'SerINK', 
        descInfo: 'Продуктовый лендинг приложения для iOS и Android', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону SerINK APP', 
        descPrice: 2000, 
        layout: 'Rubber3', 
        features: ['News', 'Gallery', 'Cart'], 
    },
    {
        id: '009',
        title: 'Cайт beauty «TuffyShop»', 
        srcLogo: barberImg, 
        alt: 'Изображение главной страницы cайта beauty «TuffyShop»', 
        descName: 'TuffyShop', 
        descInfo: 'Сайт мужской парикмахерской', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Барбершоп «Бородинский»', 
        descPrice: 9000, 
        layout: 'Rubber3', 
        features: ['blockFeatures', 'News', 'Gallery', 'Cart'], 
    },
    {
        id: '010',
        title: 'Cайт Karatuwka', 
        srcLogo: mishkaImg, 
        alt: 'Изображение главной страницы сайта Karatuwka', 
        descName: 'Karatuwka', 
        descInfo: 'Сайт о товарах ручной работы', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Karatuwka', 
        descPrice: 5000, 
        layout: 'Fixed2', 
        features: ['blockFeatures', 'News', 'Gallery', 'Cart'],
    },
    {
        id: '011',
        title: 'Cайт Zenda', 
        srcLogo: aplusImg, 
        alt: 'Изображение главной страницы сайта Zenda', 
        descName: 'Zenda', 
        descInfo: 'Сайт учебного заведения', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Zenda', 
        descPrice: 10000, 
        layout: 'Rubber3', 
        features: ['Slider', 'News', 'Gallery', 'Cart'], 
    },
    {
        id: '012',
        title: 'Cайт Raketa', 
        srcLogo: kvastImg, 
        alt: 'Изображение главной страницы сайта Raketa', 
        descName: 'Raketa', 
        descInfo: 'Сайт производителя крафтового Raketa', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Raketa', 
        descPrice: 3000, 
        layout: 'Fixed2', 
        features: ['Slider', 'News', 'Gallery', 'Cart'], 
    }, 
    {
        id: '013',
        title: 'Cайт TEDONA', 
        srcLogo: sedonaImg, 
        alt: 'Изображение главной страницы сайта TEDONA', 
        descName: 'TEDONA', 
        descInfo: 'Информационный сайт для туристов', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону TEDONA', 
        descPrice: 7800, 
        layout: 'Rubber3', 
        features: ['Slider', 'News', 'Gallery'], 
    },
    {
        id: '014',
        title: 'Cайт SIRINK', 
        srcLogo: pinkImg, 
        alt: 'Изображение главной страницы сайта SIRINK', 
        descName: 'SIRINK', 
        descInfo: 'Продуктовый лендинг приложения для iOS и Android', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону SIRINK', 
        descPrice: 2900, 
        layout: 'Rubber3', 
        features: ['News', 'Gallery', 'Cart'], 
    },
    {
        id: '015',
        title: 'Cайт BurgerShop', 
        srcLogo: barberImg, 
        alt: 'Изображение главной страницы cайта BurgerShop', 
        descName: 'BurgerShop', 
        descInfo: 'Сайт мужской парикмахерской', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону BurgerShop', 
        descPrice: 9500, 
        layout: 'Rubber3', 
        features: ['blockFeatures', 'News', 'Gallery', 'Cart'], 
    },
    {
        id: '016',
        title: 'Cайт Grouk', 
        srcLogo: mishkaImg, 
        alt: 'Изображение главной страницы сайта Grouk', 
        descName: 'Grouk', 
        descInfo: 'Сайт о товарах ручной работы', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Grouk', 
        descPrice: 4400, 
        layout: 'Fixed2', 
        features: ['blockFeatures', 'News', 'Gallery', 'Cart'],
    },
    {
        id: '017',
        title: 'Cайт Leenda', 
        srcLogo: aplusImg, 
        alt: 'Изображение главной страницы сайта Leenda', 
        descName: 'Leenda', 
        descInfo: 'Сайт учебного заведения', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Leenda', 
        descPrice: 10500, 
        layout: 'Rubber3', 
        features: ['Slider', 'News', 'Gallery', 'Cart'], 
    },
    {
        id: '018',
        title: 'Cайт Kareta', 
        srcLogo: kvastImg, 
        alt: 'Изображение главной страницы сайта Kareta', 
        descName: 'Kareta', 
        descInfo: 'Сайт производителя крафтового Kareta', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Kareta', 
        descPrice: 3500, 
        layout: 'Fixed2', 
        features: ['Slider', 'News', 'Gallery', 'Cart'], 
    }, 
    {
        id: '019',
        title: 'Cайт WEYDONA', 
        srcLogo: sedonaImg, 
        alt: 'Изображение главной страницы сайта WEYDONA', 
        descName: 'WEYDONA', 
        descInfo: 'Информационный сайт <br /> для туристов', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону WEYDONA', 
        descPrice: 2790, 
        layout: 'Adaptive1', 
        features: ['Slider'], 
    },
    {
        id: '020',
        title: 'Cайт PANKROK', 
        srcLogo: pinkImg, 
        alt: 'Изображение главной страницы сайта PANKROK', 
        descName: 'PANKROK', 
        descInfo: 'Продуктовый лендинг приложения для iOS и Android', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону PANKROK', 
        descPrice: 4870, 
        layout: 'Adaptive1', 
        features: ['blockFeatures', 'Slider'], 
    },
    {
        id: '021',
        title: 'Cайт зоомагазин GREENJOY', 
        srcLogo: barberImg, 
        alt: 'Изображение главной страницы сайта GREENJOY', 
        descName: 'GREENJOY', 
        descInfo: 'Сайт мужской парикмахерской', 
        descAriaLabel: 'добавить в корзину создание сайта GREENJOY', 
        descPrice: 13000, 
        layout: 'Adaptive1', 
        features: ['blockFeatures'], 
    },
    {
        id: '022',
        title: 'Cайт NISSAN', 
        srcLogo: mishkaImg, 
        alt: 'Изображение главной страницы сайта NISSAN', 
        descName: 'NISSAN', 
        descInfo: 'Сайт о товарах ручной работы', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону NISSAN', 
        descPrice: 4500, 
        layout: 'Fixed2', 
        features: ['blockFeatures', 'Gallery'], 
    },
    {
        id: '023',
        title: 'Cайт Bee', 
        srcLogo: aplusImg, 
        alt: 'Изображение главной страницы сайта Bee', 
        descName: 'Bee', 
        descInfo: 'Сайт учебного заведения', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Bee', 
        descPrice: 6950, 
        layout: 'Fixed2', 
        features: ['Slider', 'blockFeatures'], 
    },
    {
        id: '024',
        title: 'Cайт HUMMER', 
        srcLogo: kvastImg, 
        alt: 'Изображение главной страницы сайта HUMMER', 
        descName: 'HUMMER', 
        descInfo: 'Сайт производителя HUMMER', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону HUMMER', 
        descPrice: 5450, 
        layout: 'Fixed2', 
        features: ['blockFeatures', 'News', 'Gallery'], 
    },
    {
        id: '025',
        title: 'Cайт VEIP', 
        srcLogo: sedonaImg, 
        alt: 'Изображение главной страницы сайта VEIP', 
        descName: 'VEIP', 
        descInfo: 'Информационный сайт для туристов', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону VEIP', 
        descPrice: 8970, 
        layout: 'Rubber3', 
        features: ['Slider', 'News', 'Gallery'], 
    },
    {
        id: '026',
        title: 'Cайт GREENKA', 
        srcLogo: pinkImg, 
        alt: 'Изображение главной страницы сайта GREENKA', 
        descName: 'GREENKA', 
        descInfo: 'Продуктовый лендинг приложения для iOS и Android', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону GREENKA', 
        descPrice: 2980, 
        layout: 'Rubber3', 
        features: ['News', 'Gallery', 'Cart'], 
    },
    {
        id: '027',
        title: 'Cайт Auchan', 
        srcLogo: barberImg, 
        alt: 'Изображение главной страницы cайта Auchan', 
        descName: 'Auchan', 
        descInfo: 'Сайт мужской парикмахерской', 
        descAriaLabel: 'добавить в корзину создание сайта Auchan', 
        descPrice: 7200, 
        layout: 'Rubber3', 
        features: ['blockFeatures', 'News', 'Gallery', 'Cart'], 
    },
    {
        id: '028',
        title: 'Cайт Vilka', 
        srcLogo: mishkaImg, 
        alt: 'Изображение главной страницы сайта Vilka', 
        descName: 'Vilka', 
        descInfo: 'Сайт о товарах ручной работы', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Vilka', 
        descPrice: 3750, 
        layout: 'Fixed2', 
        features: ['blockFeatures', 'News', 'Gallery', 'Cart'],
    },
    {
        id: '029',
        title: 'Cайт Fauna', 
        srcLogo: aplusImg, 
        alt: 'Изображение главной страницы сайта Fauna', 
        descName: 'Fauna', 
        descInfo: 'Сайт учебного заведения', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону Fauna', 
        descPrice: 10500, 
        layout: 'Rubber3', 
        features: ['Slider', 'News', 'Gallery', 'Cart'], 
    },
    {
        id: '030',
        title: 'Cайт BASKET', 
        srcLogo: kvastImg, 
        alt: 'Изображение главной страницы сайта BASKET', 
        descName: 'BASKET', 
        descInfo: 'Сайт производителя крафтового BASKET', 
        descAriaLabel: 'добавить в корзину создание сайта по шаблону BASKET', 
        descPrice: 6500, 
        layout: 'Fixed2', 
        features: ['Slider', 'News', 'Gallery', 'Cart'], 
    }, 
]

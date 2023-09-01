import cartIcon from '../images/cart-icon.svg';
import nerdsLogo from '../images/nerds-logo.svg';


// Navigation menu 

export const Main_link = { text: 'Головна', link: '/', logo: nerdsLogo };
export const Cart_link = { text: 'Корзина', link: '/cart', logo: cartIcon };

export const NAVIGATION_LINKS = [
    { text: 'Cтудія', link: '/studio' },
    { text: 'Клієнти', link: '/clients' },
    { text: 'Магазин', link: '/store' },
    { text: 'Контакти', link: '/contacts' },  
]
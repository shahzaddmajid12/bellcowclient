import React from "react";
import './Header.css';


const Header = () => {
    return (
        <>
            <header role="banner">
                <div className="container">
                    <a href="index.html#work" title="work" className="branding" aria-label="work"
                        style={{ scrollMargin: '50px', scrollY: '-50 %' }}
                    // style="--logo-scroll-color:rgb(235,63,67); --logo-scroll-position:-50%; --logo-scroll-margin:50px; "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 273.7" className="branding__logo"
                        >
                            <path
                                d="M99.1 8.8C45.5 8.8 0 47.1 0 106c0 53 40.5 95 98.5 95 53.5 0 99.1-38.3 99.1-97.2 0-52.9-40.5-95-98.5-95zm0 180.8c-34.9 0-59.9-35.7-59.9-84.9 0-47.1 23.7-84.4 59.4-84.4 34.9 0 59.9 35.7 59.9 84.9-.1 47.1-23.8 84.4-59.4 84.4zM654.5 81.7v8l10.7 2.1c3.7.8 4.8 3.7 2.4 9.6L643 160.6c-1.1 2.4-2.4 2.4-3.2 0l-22.9-59.1c-2.4-6.1-1.1-8.8 2.7-9.6l10.6-2.1v-8h-94.8v8l10.7 2.1c3.7.8 5.1 3.7 2.7 9.6l-23.7 62.3c-1.1 2.4-2.4 2.4-3.2 0l-24-62.3c-2.1-6.1-1.1-8.8 2.7-9.6l10.6-2.1v-8H451V90l5.9 1.3c4 .8 6.4 2.9 8 6.7l40.7 100.1H524L564.7 98c2.1-5.3 4.5-7.5 8.8-7.5h1.6c3.5 0 6.1 1.3 8.3 6.4L626 200.8 614.6 228c-7.5 18.1-13 21.3-20 21.3-2.9 0-6.1-.5-9.3-.5-8.3 0-13.3 5.9-13.3 12.2 0 7.2 5.9 12.3 15.2 12.3 13.3 0 26.4-10.7 37.3-36.2l58-136.1c2.7-6.1 6.1-8.8 11.7-9.9L700 90v-8.3h-45.5zm-373.3 106l-44.5 5.6c-14.6 1.9-19.2-2.9-19.2-10.4 0-8.8 9.6-15.7 42.9-15.7h.5c24.2 0 52.7-14.6 52.7-46.3 0-10.1-3.7-19.4-10.7-26.9a34.5 34.5 0 0 1-3.2-16.5c0-23.4 16-36.7 32.5-36.7 6.9 0 9.1 1.1 9.1 5.9 0 1.3-.3 2.4-.3 4 0 8.3 6.9 16 16.8 16 10.1 0 16.5-8 16.5-16.8 0-13.3-12-23.2-34.1-23.2-30.4 0-53.8 19.7-53.8 49.8 0 2.4.3 4.3.3 6.1a64.4 64.4 0 0 0-24.8-4.8c-24 0-52.7 14.6-52.7 46.3 0 14.6 8.3 28.2 22.6 36.2-21.3 2.9-33.5 14.4-33.5 32.2 0 18.1 14.4 31.2 41.3 28l38.9-4.8c19.4-2.4 25.8 4.5 25.8 14.6 0 17.6-16.5 31.7-42.9 31.7-21 0-28.8-7.5-28.8-18.1l.3-5.3c0-6.4-4-10.9-10.4-11.2-7.5 0-12 5.3-12 13 0 17.6 16.8 33.3 51.1 33.3 38.6 0 63.1-25 63.1-53.8.1-22.9-18.2-35.4-43.5-32.2zm-20-100.4c12.5 0 22.6 14.1 22.6 35.7 0 18.6-8.5 34.6-21.8 34.6-12.8 0-22.9-14.1-22.9-35.7 0-18.3 8.5-34.6 22.1-34.6z">
                            </path>
                            <path
                                d="M440.7 184.3V0l-46.9 12v5.6l13.3 4.3c2.1.8 2.9 2.4 2.9 4.5v157.1c0 2.9-2.4 5.1-5.9 5.1l-11.9.2-12.6-.2c-3.5 0-5.9-2.1-5.9-5.1V77.2l-46.9 12v5.6l13.3 4.3c2.1.8 2.9 2.4 2.9 4.5v80.7c0 2.4-1.3 3.7-3.2 4l-10.9 1.3v8.5h127.8v-8.5l-13-1.3c-1.7-.3-3-1.6-3-4z">
                            </path>
                        </svg>
                        <h1 className="branding__wordmark is-visually-hidden">Ogilvyssss</h1>
                    </a>
                    <input type="checkbox" id="menu-toggle" className="checkbox-toggle js-checkbox-toggle" tabindex="0"
                        data-html-toggle="menu-active" />
                    <label for="menu-toggle" className="site-nav__btn burger">
                        <span className="burger__inner"><i className="sr-only">Menu Toggle</i></span>
                    </label>
                    <nav role="navigation" class="site-nav js-site-nav">
                        <h2 className="visually-hidden" id="block-mainnavigation-2-menu">Main navigation</h2>
                        <ul className="site-nav__list">
                            <li className="site-nav__item--work site-nav__item">
                                <a href="work.html" data-drupal-link-system-path="work">work</a>
                            </li>
                            <li className="site-nav__item">
                                <a href="about.html" data-drupal-link-system-path="about">About</a>
                            </li>
                            <li className="site-nav__item--work site-nav__item">
                                <a href="careers.html" data-drupal-link-system-path="careers">Careers</a>
                            </li>
                            <li className="site-nav__item">
                                <a href="contact.html" data-drupal-link-system-path="contact">Contact</a>
                            </li>
                        </ul>
                        <ul className="site-nav__contact">
                            <li>
                                New Business
                                <a href="mailto:lucy.simmons@ogilvy.com">lucy.simmons@ogilvy.com</a>
                            </li>
                            <li>
                                Media Inquiries
                                <a href="mailto:david.ford@ogilvy.com">david.ford@ogilvy.com</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
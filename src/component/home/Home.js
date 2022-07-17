import React from "react";
import './Home.css';
import img1 from '../assets/img1.jpeg'
import Header from "../header/Header";



const Home = () => {
    return (<>

        <Header />
        <main id="main" class="site-main">
            <div data-drupal-messages-fallback class="hidden"></div>
            <div class="block-region-content">
                <section class="splash__wrapper section--red">
                    <div class="splash__scroll dragscroll">
                        <div class="splash">
                            <div class="splash__projects splash__projects--orig">
                                <div class="splash__project ">
                                    <a href="work/breaking-sirens.html" class="splash__img " tabindex="-1">
                                        <img
                                            sizes="50vw"
                                            src={img1}
                                            alt="Breaking Sirens - Amnesty International | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Amnesty International
                                        <span>Breaking Sirens
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/lu-magalu.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Magazine-Luiza---Lu-from-Magalu.jpg?itok=8iww52jA 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Magazine-Luiza---Lu-from-Magalu.jpg?itok=-mbFxkuZ 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Magazine-Luiza---Lu-from-Magalu518d.jpg?itok=mTyFyKzF"
                                            alt="Lu from Magalu - Magazine Luiza | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Magazine Luiza
                                        <span>Lu from Magalu
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/impossible-combo.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_Burger-King-%E2%80%93-The-Impossible-Combo.jpg?itok=dlhk8pQl 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_Burger-King-%E2%80%93-The-Impossible-Combo.jpg?itok=bHNJy0un 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_Burger-King-%e2%80%93-The-Impossible-Comboc216.jpg?itok=rMdZTNSy"
                                            alt="Impossible Combo - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Impossible Combo
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/life-scripted.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_CIFF_OOH_In-Situation_Craft_Writing_Board.jpg?itok=bZmt2JO4 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_CIFF_OOH_In-Situation_Craft_Writing_Board.jpg?itok=3rYbS9BB 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_CIFF_OOH_In-Situation_Craft_Writing_Board69d1.jpg?itok=PnliB46v"
                                            alt="Life, Scripted - The Chicago International Film Festival | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        The Chicago International Film Festival
                                        <span>Life, Scripted
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/duet-delivery.html" class="splash__img " tabindex="-1">
                                        <img
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-duet-delivery481f.jpg?itok=6STRYFdi"
                                            alt="Duet Delivery - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Duet Delivery
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/911-calls.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_BK911-callsPR-Image.jpg?itok=FINBZcjj 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_BK911-callsPR-Image.jpg?itok=PaxGvMB9 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_BK911-callsPR-Image40c3.jpg?itok=m1gQjjhG"
                                            alt="911 Calls - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>911 Calls
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/dollar-catalogue.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-ROW-01-IKEA_Dollar-Catalogue.jpg?itok=Ep-9LmYO 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-ROW-01-IKEA_Dollar-Catalogue.jpg?itok=QmMOP4ON 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-ROW-01-IKEA_Dollar-Catalogue5527.jpg?itok=I03fBDik"
                                            alt="Dollar Catalogue - IKEA | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        IKEA
                                        <span>Dollar Catalogue
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/sound-tour.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-Spotify-Sound-Tour.jpg?itok=qPzvWSR3 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-Spotify-Sound-Tour.jpg?itok=gmSNXe0M 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-Spotify-Sound-Tour7afc.jpg?itok=hfDx-7y7"
                                            alt="Sound Tour - Spotify | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Spotify
                                        <span>Sound Tour
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/home-sweet-home.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH_Amazing-Thailand_Amazing-Deep-culture.jpg?itok=zbGJLeLX 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH_Amazing-Thailand_Amazing-Deep-culture.jpg?itok=vAJt9Ezn 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH_Amazing-Thailand_Amazing-Deep-culture8d7c.jpg?itok=r9YRJGNG"
                                            alt="Home Sweet Home - Tourism Authority of Thailand | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Tourism Authority of Thailand
                                        <span>Home Sweet Home
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/fresh-system.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Carulla---Fresh-System.jpg?itok=7jWKfARj 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Carulla---Fresh-System.jpg?itok=BVH_H5au 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Carulla---Fresh-System82ff.jpg?itok=8Zt5Z7JW"
                                            alt="Fresh System - Carulla | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Carulla
                                        <span>Fresh System
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/eye-tracker.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-PORTRAIT-the-eye-tracker.jpg?itok=HWtuGb9F 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-PORTRAIT-the-eye-tracker.jpg?itok=rC0cibCq 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-PORTRAIT-the-eye-tracker892e.jpg?itok=c3lpX0qP"
                                            alt="The Eye Tracker - Supermax | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Supermax
                                        <span>The Eye Tracker
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/spotify-charthack.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-chart-hack.jpg?itok=qPHfvPMr 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-chart-hack.jpg?itok=dCdYM5dH 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-chart-hack5fdd.jpg?itok=TPUdgRx6"
                                            alt="The Spotify Charthack - Universal Music | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Universal Music
                                        <span>The Spotify Charthack
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/rest-towns.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-AAMI---Rest-Towns.jpg?itok=EOO2bjcb 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-AAMI---Rest-Towns.jpg?itok=_5CGdbUs 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-AAMI---Rest-Townsa97d.jpg?itok=0n7urnX2"
                                            alt="Rest Towns - AAMI| Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        AAMI
                                        <span>Rest Towns
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/burger-glitch.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Burger-King-%E2%80%93-Burger-Glitch.jpg?itok=zwpcri_Y 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Burger-King-%E2%80%93-Burger-Glitch.jpg?itok=zZUcG-lH 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Burger-King-%e2%80%93-Burger-Glitch16e5.jpg?itok=yYPDpMde"
                                            alt="Burger Glitch - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Burger Glitch
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/bride-armour.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Bride-Armour.jpg?itok=e50aR_lo 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Bride-Armour.jpg?itok=tqKxziNF 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Bride-Armour56a4.jpg?itok=-IWBkIPi"
                                            alt="Bride Armour - Carling Black Label | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Carling Black Label
                                        <span>Bride Armour
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/morning-after-island.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-GePae-%E2%80%93-The-Morning-After-Island.jpg?itok=r-1QctQE 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-GePae-%E2%80%93-The-Morning-After-Island.jpg?itok=Yaf7f5Np 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-GePae-%e2%80%93-The-Morning-After-Island7078.jpg?itok=kRSWWwc2"
                                            alt="Morning After Island - Grupo Estratégico PAE | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Grupo Estratégico PAE
                                        <span>Morning After Island
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/flags-generosity.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_Cadbury-FLAG.jpg?itok=Psyu1Hf8 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_Cadbury-FLAG.jpg?itok=BWf2LZ42 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_Cadbury-FLAGb35a.jpg?itok=b2u_oop6"
                                            alt="Flags of Generosity - Cadbury | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cadbury
                                        <span>Flags of Generosity
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/world-absolut-cocktails.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-PRDABS22011_BTM_Madras_.jpg?itok=gIVhRYLW 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-PRDABS22011_BTM_Madras_.jpg?itok=qmtDPgSb 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-PRDABS22011_BTM_Madras_ba07.jpg?itok=-4eIb76d"
                                            alt="The World of Absolut Cocktails - Absolut | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Absolut
                                        <span>The World of Absolut Cocktails
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/all-about-whopper.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-ALL-about-the-whopper.jpg?itok=IcQjtfnP 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-ALL-about-the-whopper.jpg?itok=QEfeZNUV 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-ALL-about-the-whopper53ec.jpg?itok=5mSs1bUA"
                                            alt="All About the Whopper - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>All About the Whopper
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/hornicultural-society.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_Relate_DOOH_CHISWICK_768x1008px_ARTICHOKE.jpg?itok=FJwWw6SF 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_Relate_DOOH_CHISWICK_768x1008px_ARTICHOKE.jpg?itok=dAvTbpJd 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_Relate_DOOH_CHISWICK_768x1008px_ARTICHOKE7f98.jpg?itok=ut2TNMmX"
                                            alt="Hornicultural Society - Relate | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Relate
                                        <span>Hornicultural Society
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/art-self-examination.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-001-MACMA.jpg?itok=xEmy2zcn 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-001-MACMA.jpg?itok=y2JDp8I6 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-001-MACMAca77.jpg?itok=ZgWin6lb"
                                            alt="The Art of Self Examination - MACMA | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        MACMA
                                        <span>The Art of Self Examination
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/veggies-kids-love-them.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_herta-veggie.jpg?itok=DSNUd6MZ 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_herta-veggie.jpg?itok=4zc5PWuJ 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_herta-veggiec3c3.jpg?itok=GUr6iY_R"
                                            alt="Veggies, Like Kids Love Them - Herta | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Herta
                                        <span>Veggies, Like Kids Love Them
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/shed-skin.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-AB-inBev---Shed-Skin.jpg?itok=ajtq-ga- 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-AB-inBev---Shed-Skin.jpg?itok=06g4mepA 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-AB-inBev---Shed-Skinec0c.jpg?itok=FJy3kVXp"
                                            alt="Shed Skin - AB inBev | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        AB inBev
                                        <span>Shed Skin
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/staraoke.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Amazon-Prime---Staraoke.jpg?itok=zCBAfXr0 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Amazon-Prime---Staraoke.jpg?itok=LTXxranS 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Amazon-Prime---Staraoke1f47.jpg?itok=nlYUq_7o"
                                            alt="Staraoke - Amazon Prime | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Prime Video
                                        <span>Staraoke
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/country-crock-whiskey.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-VERTICAL-Country-Crock---Country-Crock-Whiskey.jpg?itok=Tg_aXB4E 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-VERTICAL-Country-Crock---Country-Crock-Whiskey.jpg?itok=rNYp7ZAR 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-VERTICAL-Country-Crock---Country-Crock-Whiskeyf05c.jpg?itok=AdQJdw5V"
                                            alt="Country Crock Whiskey - Country Crock | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Country Crock
                                        <span>Country Crock Whiskey
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/toxic-influence.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Dove-Deepfake-Moms-Still-5.jpg?itok=2ECNQuWM 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Dove-Deepfake-Moms-Still-5.jpg?itok=TM2hE99Z 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Dove-Deepfake-Moms-Still-55a5a.jpg?itok=pTINkuPi"
                                            alt="Deepfake - Dove | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Dove
                                        <span>Toxic Influence
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/vertical-bike.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Honda---Vertical-Bike.jpg?itok=5yTFJ9xy 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Honda---Vertical-Bike.jpg?itok=NN9Ea2kF 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Honda---Vertical-Bike165a.jpg?itok=qZO9ntuA"
                                            alt="Vertical Bike - Honda | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Honda
                                        <span>Vertical Bike
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/natural-bar.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Corona---Natural-Bar.jpg?itok=1UVEG35x 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Corona---Natural-Bar.jpg?itok=Z2kR8owx 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Corona---Natural-Bar80ac.jpg?itok=_VLT3A7V"
                                            alt="Natural Bar - Corona | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Corona
                                        <span>Natural Bar
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/even-more-confusing-times.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-Image-BK-3.jpg?itok=12nBvdxD 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-Image-BK-3.jpg?itok=6eLCCcNK 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-Image-BK-3022f.jpg?itok=hU8SA7Br"
                                            alt="Even More Confusing Times - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Even More Confusing Times
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/long-live.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Clos-du-Bois---Long-Live.jpg?itok=y50Ni7nf 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Clos-du-Bois---Long-Live.jpg?itok=gEger_uo 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Clos-du-Bois---Long-Live7df4.jpg?itok=pRbITc1a"
                                            alt="Long Live - Clos du Bois | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Clos du Bois
                                        <span>Long Live
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/catch-day-2050.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-CatchoftheDay_KV3.jpg?itok=Ym-3uQok 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-CatchoftheDay_KV3.jpg?itok=yKxu6gn9 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-CatchoftheDay_KV31037.jpg?itok=xSgBVXxI"
                                            alt="Sea Shepherd - Catch of the Day | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Sea Shepherd
                                        <span>Catch of the Day 2050
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/vote-me.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-Vote-For-Me_1.jpg?itok=NbZ5gkif 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-Vote-For-Me_1.jpg?itok=2IG7Yl2o 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-Vote-For-Me_180e8.jpg?itok=XS9v5r_1"
                                            alt="Vote For Me - Société de Saint-Vincent-de-Paul | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Société de Saint-Vincent-de-Paul
                                        <span>Vote For Me
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/care-codes.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Shanghai-Municipal-Government-and-Ogilvy-Shanghai-Create-the-Care-Codes.jpg?itok=msCPZL4A 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Shanghai-Municipal-Government-and-Ogilvy-Shanghai-Create-the-Care-Codes.jpg?itok=ND6Hj4_a 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Shanghai-Municipal-Government-and-Ogilvy-Shanghai-Create-the-Care-Codes2976.jpg?itok=qKK7b_xD"
                                            alt="Care Codes - Shanghai Municipal Government | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Shanghai Municipal Government
                                        <span>Care Codes
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/invisible-films.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Victoria---Invisible-Films.jpg?itok=oNt7wnTt 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Victoria---Invisible-Films.jpg?itok=UvDkvV_r 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Victoria---Invisible-Filmsad43.jpg?itok=bs3nOioj"
                                            alt="Invisible Films - Cerveza Victoria | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cerveza Victoria
                                        <span>Invisible Films
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/poop-emoji-ice-cream.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-VERT-Poop-Emoji-Ice-Cream_HI-RES.jpg?itok=CYI0q890 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-VERT-Poop-Emoji-Ice-Cream_HI-RES.jpg?itok=gWK8r_Cx 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-VERT-Poop-Emoji-Ice-Cream_HI-RESaa40.jpg?itok=jQeI4aUN"
                                            alt="Poop Emoji Ice Cream - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Poop Emoji Ice Cream
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/ketchup-rescue.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE%20Curtice-Brothers---Ketchup-to-the-Rescue.jpg?itok=7B58asjf 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE%20Curtice-Brothers---Ketchup-to-the-Rescue.jpg?itok=hj7VTPX3 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE%20Curtice-Brothers---Ketchup-to-the-Rescuecb44.jpg?itok=obLkM4Pt"
                                            alt="Ketchup to the Rescue - Curtice Brothers| Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Curtice Brothers
                                        <span>Ketchup to the Rescue
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/nyphil.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_NYPHIL.jpg?itok=omJaP5ui 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_NYPHIL.jpg?itok=nmzW9dkb 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_NYPHIL6e61.jpg?itok=Y4Zlz-b_"
                                            alt="Visual Identity - New York Philharmonic | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        New York Philharmonic
                                        <span>NYPhil
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/scratch-boards.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-VERT-TonyHawks-ScratchBoards.jpg?itok=lEWUXpHa 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-VERT-TonyHawks-ScratchBoards.jpg?itok=KgQeyMYN 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-VERT-TonyHawks-ScratchBoards5472.jpg?itok=AEJDcYJ2"
                                            alt="Scratch Boards - Tony Hawk&#039;s Pro Skater | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Tony Hawk&#039;s Pro Skater
                                        <span>Scratch Boards
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/tale-two-lajjos.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-Project-Nanhi-Kali---The-Tale-of-Two-Lajjos.jpg?itok=gr_ki2Wn 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-Project-Nanhi-Kali---The-Tale-of-Two-Lajjos.jpg?itok=OXRDI0YP 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-Project-Nanhi-Kali---The-Tale-of-Two-Lajjose838.jpg?itok=Edc7qNHQ"
                                            alt="The Tale of Two Lajjos - Nanhi Kali | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Nanhi Kali
                                        <span>The Tale of Two Lajjos
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/have-word-yourself-then-your-mates.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Have-a-word-with-yourself-then-your-mates_0.jpg?itok=SK-KaHeg 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Have-a-word-with-yourself-then-your-mates_0.jpg?itok=Dfy07vjC 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Have-a-word-with-yourself-then-your-mates_0fefd.jpg?itok=30NGUEB0"
                                            alt="Have A Word With Yourself Then Your Mates | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Mayor of London
                                        <span>Have A Word With Yourself Then Your Mates
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/lesso-lessons.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILEBabies.jpg?itok=25Y2aSUn 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILEBabies.jpg?itok=9GQqmfwM 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILEBabies8a52.jpg?itok=7xIUQVV8"
                                            alt="Lesso Lessons - Roto Tanks | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Roto Tanks / The Ministry of Health Kenya
                                        <span>Lesso Lessons
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/bin-boy.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/HOME-SPLASH-MOBILE-Hindustan-Unilever---The-Bin-Boy.jpg?itok=gYt9Dqoe 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/HOME-SPLASH-MOBILE-Hindustan-Unilever---The-Bin-Boy.jpg?itok=Rkhs-TlR 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/HOME-SPLASH-MOBILE-Hindustan-Unilever---The-Bin-Boye0a3.jpg?itok=nNMYin52"
                                            alt="The Bin Boy - Hindustan Unilever | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Hindustan Unilever
                                        <span>The Bin Boy
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/spain-we-call-it-equality.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH_HOME_MOBILE-Ministerio-de-Igualdad---In-Spain-we-call-it-igualdad.jpg?itok=PQ6Vyun3 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH_HOME_MOBILE-Ministerio-de-Igualdad---In-Spain-we-call-it-igualdad.jpg?itok=D4rApHtX 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH_HOME_MOBILE-Ministerio-de-Igualdad---In-Spain-we-call-it-igualdad353a.jpg?itok=PXjTxlRg"
                                            alt="In Spain We Call it Equality - Ministry of Equality | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Ministry of Equality
                                        <span>In Spain We Call it Equality
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/every-tender-moment-gift.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-Every-Tender-Moment-is-a-Gift--SIWM.jpg?itok=2r-60cib 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-Every-Tender-Moment-is-a-Gift--SIWM.jpg?itok=dXQYHHMo 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-Every-Tender-Moment-is-a-Gift--SIWMc1c2.jpg?itok=5bhC9Q3b"
                                            alt="Every Tender Moment Is A Gift - Milka | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Milka
                                        <span>Every Tender Moment Is A Gift
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/naturally-flavored.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-La-Vosgienne.jpg?itok=MQNGp_KE 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-La-Vosgienne.jpg?itok=jWh3Z1nD 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-La-Vosgiennebf74.jpg?itok=oe4ZbMGh"
                                            alt="Naturally Flavored - La Vosgienne | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        La Vosgienne
                                        <span>Naturally Flavored
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/greekend.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Greek-National-Tourism-Organization---Greekend.jpg?itok=NfchL0yp 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Greek-National-Tourism-Organization---Greekend.jpg?itok=YqQkrBWk 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Greek-National-Tourism-Organization---Greekend63e5.jpg?itok=Tb40bRRo"
                                            alt="Greekend - National Greek Tourism Organization | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        National Greek Tourism Organization
                                        <span>Greekend
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/stanley-tucci.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-San-Pellegrino---Stanley-Tucci.jpg?itok=rWKitCfe 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-San-Pellegrino---Stanley-Tucci.jpg?itok=vb4GsRqv 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-San-Pellegrino---Stanley-Tucci4073.jpg?itok=C-d0IEZ4"
                                            alt="San Pellegrino - Stanley Tucci | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        San Pellegrino
                                        <span>Stanley Tucci
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/starlight.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-VERTICAL-294A1318_V3F_SMALL-9x16.jpg?itok=7kJsZQAP 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-VERTICAL-294A1318_V3F_SMALL-9x16.jpg?itok=7Dd8GH2V 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-VERTICAL-294A1318_V3F_SMALL-9x16f293.jpg?itok=Qv5urkU3"
                                            alt="Starlight - Coca-Cola | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Coca-Cola
                                        <span>Starlight
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/taste-future.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_IKEA_kottbulle_16.9_ny.jpg?itok=T6QXBuQY 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_IKEA_kottbulle_16.9_ny.jpg?itok=s3zUbLD2 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_IKEA_kottbulle_16.9_nyd364.jpg?itok=39qKoYN6"
                                            alt="Taste the Future - IKEA | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        IKEA
                                        <span>Taste the Future
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/early-five.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Dove---As-early-as-five.jpg?itok=swS31U18 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Dove---As-early-as-five.jpg?itok=soKVyHBs 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Dove---As-early-as-fivebb71.jpg?itok=M_LuaM-c"
                                            alt="As Early as Five - Dove | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Dove
                                        <span>As Early as Five
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/lightning-strike.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-Wallbox---Super-Bowlb.jpg?itok=1TmXceVp 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-Wallbox---Super-Bowlb.jpg?itok=2bCxTEzH 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-Wallbox---Super-Bowlbd2c9.jpg?itok=EyBhjfAG"
                                            alt="" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Wallbox
                                        <span>Lightning Strike
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/real-magic-lunar-new-year.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE_from-Animated-Film.jpg?itok=WO2RDEed 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE_from-Animated-Film.jpg?itok=BznWem2c 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE_from-Animated-Film74a3.jpg?itok=yv6gmXSU"
                                            alt="Real Magic Lunar New Year - Coca-Cola | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Coca-Cola
                                        <span>Real Magic Lunar New Year
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/monsters-insurance.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-000_SCARIEST.jpg?itok=g88OK6K8 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-000_SCARIEST.jpg?itok=mhp_rU5A 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-000_SCARIEST4aad.jpg?itok=xGEd9ZJT"
                                            alt="Monsters of Insurance - Acko | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Acko
                                        <span>Monsters of Insurance
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/sunshine-anytime.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Corona---Carona-Sunbrew.jpg?itok=WHgq6m7I 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Corona---Carona-Sunbrew.jpg?itok=g5GFSXnx 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Corona---Carona-Sunbrewcc1e.jpg?itok=qYK6uQhF"
                                            alt="Sunshine, Anytime - Corona Sunbrew | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Corona Sunbrew
                                        <span>Sunshine, Anytime
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/everyone-deserves-future.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_002-Emergency---Everyone-deserves-a-future.jpg?itok=x39rqbWr 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_002-Emergency---Everyone-deserves-a-future.jpg?itok=bQ458hZO 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_002-Emergency---Everyone-deserves-a-future7838.jpg?itok=GobjBAZi"
                                            alt="Everyone Deserves a Future - Emergency | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Emergency
                                        <span>Everyone Deserves a Future
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/proud-mistletoe.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Stonewall---Proud-Mistletoe.jpg?itok=wUEZi_Wu 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Stonewall---Proud-Mistletoe.jpg?itok=NNiJ686s 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Stonewall---Proud-Mistletoe91b8.jpg?itok=-RpQQtcq"
                                            alt="Proud Mistletoe - Stonewall | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Stonewall
                                        <span>Proud Mistletoe
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/willpower.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Corteva---Heart-of-the-Farm---Willpower_001.jpg?itok=k1tigWLx 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Corteva---Heart-of-the-Farm---Willpower_001.jpg?itok=sbvNNqp6 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Corteva---Heart-of-the-Farm---Willpower_001e0c2.jpg?itok=XuSZ91Xl"
                                            alt="Willpower - Corteva | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Corteva
                                        <span>Willpower
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/dont-ever-leave-me.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_Lacta---Dont-ever-leave-me.jpg?itok=BDsbSULA 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_Lacta---Dont-ever-leave-me.jpg?itok=kzy0J0PN 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_Lacta---Dont-ever-leave-me347f.jpg?itok=dN0IY-pF"
                                            alt="Don&#039;t Ever Leave Me - Lacta | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Lacta
                                        <span>Don&#039;t Ever Leave Me
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/peace-sauce.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_02-Interbev---the-Peace-Sauce.jpg?itok=E4IShp66 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_02-Interbev---the-Peace-Sauce.jpg?itok=odF_Zyh4 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_02-Interbev---the-Peace-Sauceb6f0.jpg?itok=7SGvRFD5"
                                            alt="The Peace Sauce - INTERBEV | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        INTERBEV
                                        <span>The Peace Sauce
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/sweetest-graffitis.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-PORTRAIT-Mikes---The-Sweetest-Graffits.jpg?itok=rN561_PY 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-PORTRAIT-Mikes---The-Sweetest-Graffits.jpg?itok=3gbTPisN 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-PORTRAIT-Mikes---The-Sweetest-Graffits1ae9.jpg?itok=U7iVMBuA"
                                            alt="The Sweetest Graffits - Mike&#039;s Hard Lemonade | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Mike&#039;s Hard Lemonade
                                        <span>The Sweetest Graffitis
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/street-it-all.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-PORTRAIT_Zalando-002.jpg?itok=jQerL6Sb 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-PORTRAIT_Zalando-002.jpg?itok=uRayxp8M 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-PORTRAIT_Zalando-002e5b3.jpg?itok=98jwqnLH"
                                            alt="Street It All - Zalando | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Zalando
                                        <span>Street It All
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/neighbors-life.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-City-of-Chicago---Neighbors-for-Life.jpg?itok=-6HAOLX9 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-City-of-Chicago---Neighbors-for-Life.jpg?itok=K1M_lXIH 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-City-of-Chicago---Neighbors-for-Lifea126.jpg?itok=hO1KUkjC"
                                            alt="Neighbors for Life - City of Chicago | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        City of Chicago
                                        <span>Neighbors for Life
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/crypto-ad.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-001_Burger-King-and-Robinhood---Crypto-Ad.jpg?itok=XD9EoU_P 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-001_Burger-King-and-Robinhood---Crypto-Ad.jpg?itok=J-Av_IyI 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-001_Burger-King-and-Robinhood---Crypto-Adcfa7.jpg?itok=J5IYaXUW"
                                            alt="Crypto Ad - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Crypto Ad
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/life-service.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-Corteva---A-Life-Of-Service.jpg?itok=rQQBAs83 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-Corteva---A-Life-Of-Service.jpg?itok=PDj9jR-q 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-Corteva---A-Life-Of-Servicebcf9.jpg?itok=uWe5tAN_"
                                            alt="A Life of Service - Corteva | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Corteva
                                        <span>A Life of Service
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/taste-reunion.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-El-Sabor-del-Reencuentro-The-Taste-of-Reunion.jpg?itok=EiLmISQq 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-El-Sabor-del-Reencuentro-The-Taste-of-Reunion.jpg?itok=TUhU3PYR 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-El-Sabor-del-Reencuentro-The-Taste-of-Reunion16a2.jpg?itok=YiqdVYn_"
                                            alt="The Taste of Reunion - Cerveza Victoria | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cerveza Victoria
                                        <span>The Taste of Reunion
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/gift-connection.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-001-The-Gift-of-Connection.jpg?itok=xq0D_6sz 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-001-The-Gift-of-Connection.jpg?itok=qmkfIGpX 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-001-The-Gift-of-Connection8c52.jpg?itok=AVbd5Ncj"
                                            alt="The Gift of Connection - Vodafone | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Vodafone
                                        <span>The Gift of Connection
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/canadas-most-popular-food-truck.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-Canadas-Most-Popular-Food-Truck001.jpg?itok=JFFPOvg3 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-Canadas-Most-Popular-Food-Truck001.jpg?itok=IlfB7uwf 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-Canadas-Most-Popular-Food-Truck0016c88.jpg?itok=aE5ue3sR"
                                            alt="Canada&#039;s Most Popular Food Truck - Hellmann&#039;s | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Hellmann&#039;s
                                        <span>Canada&#039;s Most Popular Food Truck
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/no-home-address.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILEWhitelion---No-Home-Address001.jpg?itok=QVmOvmMX 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILEWhitelion---No-Home-Address001.jpg?itok=2sUqM5U4 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILEWhitelion---No-Home-Address001ce3c.jpg?itok=YzYqc5o6"
                                            alt="No Home Address - Whitelion | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Whitelion
                                        <span>No Home Address
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/best-gift.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-British-Airways---The-Best-Gift_001.jpg?itok=nfgxEPSl 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-British-Airways---The-Best-Gift_001.jpg?itok=q30D40Bo 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-British-Airways---The-Best-Gift_001e00d.jpg?itok=kmFzB0d0"
                                            alt="The Best Gift - British Airways | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        British Airways
                                        <span>The Best Gift
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/shah-rukh-khan-my-ad.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-002-Not-Just-A-Cadbury-Ad-2021.jpg?itok=08PwGVam 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-002-Not-Just-A-Cadbury-Ad-2021.jpg?itok=w9jqKooD 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-002-Not-Just-A-Cadbury-Ad-20217262.jpg?itok=1Swrf_kV"
                                            alt="Shah Rukh Khan My Ad - Cadbury | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cadbury
                                        <span>Shah Rukh Khan My Ad
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/no-need-fly.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH_DESUCHE-BAHN_THUMB_103.jpg?itok=5jBEEU19 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH_DESUCHE-BAHN_THUMB_103.jpg?itok=UgwihMz7 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH_DESUCHE-BAHN_THUMB_1034ee6.jpg?itok=sQqYfQd-"
                                            alt="Summer Ticket - Deutsche Bahn" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        German Rail
                                        <span>No Need to Fly
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/growing-pride.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Corteva-Agriscience---The-Heart-of-the-Farm_001.jpg?itok=hjX7l0tc 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Corteva-Agriscience---The-Heart-of-the-Farm_001.jpg?itok=5IEvu2Ot 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Corteva-Agriscience---The-Heart-of-the-Farm_0013c18.jpg?itok=yYIAo-9K"
                                            alt="The Heart of the Farm - Corteva | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Corteva
                                        <span>Growing with Pride
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/nomo-fomo.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLAH%20MOBILE-Samsung_NOMO-FOMO-6.jpg?itok=Cx_wwEeP 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLAH%20MOBILE-Samsung_NOMO-FOMO-6.jpg?itok=JNSkcQgW 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLAH%20MOBILE-Samsung_NOMO-FOMO-64879.jpg?itok=CTR_rO_o"
                                            alt="NOMO FOMO - Samsung | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Samsung
                                        <span>NOMO FOMO
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/naming-invisible-digital-birth-registration.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-VERTICAL-Telenor-digital-birth-registration_002.jpg?itok=UgNh46DX 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-VERTICAL-Telenor-digital-birth-registration_002.jpg?itok=6COykUfg 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-VERTICAL-Telenor-digital-birth-registration_0021e82.jpg?itok=RGrxypF1"
                                            alt="Digital Birth Registration - Telenor Pakistan | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Telenor Pakistan
                                        <span>Naming the Invisible by Digital Birth Registration
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/animal-crossing-catalog.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_Ikea-animal-crossing_002.jpg?itok=2qaaEK7o 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_Ikea-animal-crossing_002.jpg?itok=LY_BEOFF 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_Ikea-animal-crossing_002e745.jpg?itok=dZ_rt2ET"
                                            alt="Animal Crossing Catalog - IKEA | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        IKEA
                                        <span>Animal Crossing Catalog
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/second-life.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH%20HOME%20MOBILE-IBM-%E2%80%93-Second-Life_001.jpg?itok=J25944t4 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH%20HOME%20MOBILE-IBM-%E2%80%93-Second-Life_001.jpg?itok=lMueKt2c 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH%20HOME%20MOBILE-IBM-%e2%80%93-Second-Life_00170b1.jpg?itok=uBWIXkKg"
                                            alt="Second Life - IBM | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        IBM
                                        <span>Second Life
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/fire-escape.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Chicago-Fire-Department-foundation-%E2%80%93-The-Fire-Escape_001.jpg?itok=Ol_FUbTf 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Chicago-Fire-Department-foundation-%E2%80%93-The-Fire-Escape_001.jpg?itok=cgDTIP4p 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Chicago-Fire-Department-foundation-%e2%80%93-The-Fire-Escape_0012f57.jpg?itok=rSV4D-Sv"
                                            alt="The Fire Escape - Chicago Fire Department Foundation | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Chicago Fire Department Foundation
                                        <span>The Fire Escape
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/same-sex-marriage.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_Google-Same-Sex-Marriage_001.jpg?itok=yIz4SU_z 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_Google-Same-Sex-Marriage_001.jpg?itok=YKFWMqNv 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_Google-Same-Sex-Marriage_0016ecc.jpg?itok=a8gPAd5t"
                                            alt="Same Sex Marriage - Google | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Google
                                        <span>Same Sex Marriage
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/spot-station.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH_VERTICAL_Adidas-Do-Brasil-%E2%80%93-Spot-The-Station_002.jpg?itok=I_PpGC5J 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH_VERTICAL_Adidas-Do-Brasil-%E2%80%93-Spot-The-Station_002.jpg?itok=opNgJ42E 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH_VERTICAL_Adidas-Do-Brasil-%e2%80%93-Spot-The-Station_0025706.jpg?itok=65UHV4id"
                                            alt="Spot The Station - Adidas Do Brasil | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Adidas Do Brasil
                                        <span>Spot The Station
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/buy-your-time.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/HOME-SPLASH-REGULAR_IKEA---Buy-With-Your-Time_01.jpg?itok=ly0Fj2s7 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/HOME-SPLASH-REGULAR_IKEA---Buy-With-Your-Time_01.jpg?itok=0YGUz33S 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/HOME-SPLASH-REGULAR_IKEA---Buy-With-Your-Time_011df0.jpg?itok=C5uiahxz"
                                            alt="Buy With Your Time  - IKEA | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        IKEA
                                        <span>Buy With Your Time
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/secret-menu.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-KFC--Secret-Menu_001.jpg?itok=WML1Euze 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-KFC--Secret-Menu_001.jpg?itok=RXS7JttY 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-KFC--Secret-Menu_0011051.jpg?itok=Hau-qPVz"
                                            alt="Secret Menu - KFC | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        KFC
                                        <span>Secret Menu
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/audio-catalog.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-Audio-IKEA-Catalog.jpg?itok=10F8usl6 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-Audio-IKEA-Catalog.jpg?itok=WycX1gJg 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-Audio-IKEA-Cataloge6eb.jpg?itok=ZGecnXtv"
                                            alt="The Audio Catalog - IKEA" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        IKEA
                                        <span>The Audio Catalog
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/bums-bees.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-CDC-SFL-Still-3.jpg?itok=OGCOB21H 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-CDC-SFL-Still-3.jpg?itok=pBR__cjT 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-CDC-SFL-Still-3b234.jpg?itok=cAQj6XSq"
                                            alt="Bums and the Bees - CDC | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        CDC
                                        <span>Bums and the Bees
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/kingo.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/KINGO%20SPLASH%20REGULAR.png?itok=_9kz6VjR 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/KINGO%20SPLASH%20REGULAR.png?itok=niqCGd6M 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/KINGO%20SPLASH%20REGULARcee6.png?itok=5Zy5umOK"
                                            alt="Kingo" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Kingo
                                        <span>Kingo
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/snapchat-closet.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_OOGACHAGA---Snapchat-from-the-Closet.jpg?itok=LDEbmCcO 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_OOGACHAGA---Snapchat-from-the-Closet.jpg?itok=SKMOhav3 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_OOGACHAGA---Snapchat-from-the-Closet0380.jpg?itok=Wp72Wkl2"
                                            alt="Snapchat from the Closet - OOGACHAGA | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        OOGACHAGA
                                        <span>Snapchat from the Closet
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/proud-whopper.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-Burger.jpg?itok=Xy9wTizB 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-Burger.jpg?itok=TWonaquU 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-Burgere6f5.jpg?itok=Dg-G0SjG"
                                            alt="Proud Whopper - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Proud Whopper
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/lgbt-avatars.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH%20MOBILE-Prague-LGBTQ-Pride-Avatars-001.jpg?itok=Cjjw_eTJ 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH%20MOBILE-Prague-LGBTQ-Pride-Avatars-001.jpg?itok=CEKu1wYM 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH%20MOBILE-Prague-LGBTQ-Pride-Avatars-0014ab3.jpg?itok=DMt0FwtP"
                                            alt="LGBT Avatars - Prague Pride | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Prague Pride
                                        <span>LGBT Avatars
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/love-cans.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-HiRes_LoveCans_Coke_.jpg?itok=cMH_6MLB 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-HiRes_LoveCans_Coke_.jpg?itok=ylQBeOSk 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-HiRes_LoveCans_Coke_f6fb.jpg?itok=sOyqr7nu"
                                            alt="Love Cans - Coca-Cola | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Coca-Cola
                                        <span>Love Cans
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/youngest-donor.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-The_Youngest_Donor.jpg?itok=dGvYgIGj 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-The_Youngest_Donor.jpg?itok=0LYhkR7C 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-The_Youngest_Donorf4c7.jpg?itok=Ogn4nSqb"
                                            alt="The Youngest Donor - Parent’s Guide to Cord Blood | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Parent’s Guide to Cord Blood
                                        <span>The Youngest Donor
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/ball-god.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-Panenka-Ball-of-God-003-.jpg?itok=Sh5lI6xK 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-Panenka-Ball-of-God-003-.jpg?itok=678L4Jo1 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-Panenka-Ball-of-God-003-9b83.jpg?itok=4gRf5dwu"
                                            alt="The Ball Of God - Panenka Football Magazine  | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Panenka Football Magazine
                                        <span>The Ball Of God
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/mother-blanket.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-MOTHER-BLANKET_001.jpg?itok=SqrwEB_k 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-MOTHER-BLANKET_001.jpg?itok=yXu67y6B 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-MOTHER-BLANKET_001110b.jpg?itok=tv_6uo-A"
                                            alt="Mother Blanket | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Fundación Vivir &amp; CCPDA
                                        <span>Mother Blanket
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/traffic-jam.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH_Brooke-Bond-Red-Label-tea_001.jpg?itok=EgUgVCjf 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH_Brooke-Bond-Red-Label-tea_001.jpg?itok=_XE7clIK 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH_Brooke-Bond-Red-Label-tea_0012192.jpg?itok=wWCRofxy"
                                            alt="Traffic Jam - Hindustan Unilever | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Hindustan Unilever
                                        <span>Traffic Jam
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/teodor.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-PORTRAIT-Ogilvy-Brazil---NESCAU---Teodoro_002.jpg?itok=JAiN7sKp 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-PORTRAIT-Ogilvy-Brazil---NESCAU---Teodoro_002.jpg?itok=l0HfdutX 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-PORTRAIT-Ogilvy-Brazil---NESCAU---Teodoro_0027e73.jpg?itok=GWJSZW10"
                                            alt="Teodor - NESCAU | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        NESCAU
                                        <span>Teodor
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/coke-fanta.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-This-Coke-is-a-Fanta.jpg?itok=2IWYT8_A 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-This-Coke-is-a-Fanta.jpg?itok=HJ4AlJbh 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-This-Coke-is-a-Fantafc32.jpg?itok=h-OeaKX1"
                                            alt="This Coke is a Fanta - Fanta | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Coca-Cola
                                        <span>This Coke is a Fanta
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/mayo-island.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE_Hellmans-Island_003.jpg?itok=_JQn8MXH 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE_Hellmans-Island_003.jpg?itok=RksVJl4o 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE_Hellmans-Island_0035b24.jpg?itok=GaMne3iH"
                                            alt="Hellmann&#039;s Island - Hellmann&#039;s | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Hellmann&#039;s
                                        <span>Mayo Island
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/michelin-impossible.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_KFC_Michelin_Impossible.jpg?itok=Y04zaWrl 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_KFC_Michelin_Impossible.jpg?itok=0VndMX_F 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_KFC_Michelin_Impossible5ba0.jpg?itok=hAaRI8sT"
                                            alt="Michelin Impossible - KFC" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        KFC
                                        <span>Michelin Impossible
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/courage-beautiful.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH_MOBILE_Dove_Canada_004.jpg?itok=7KZZ6A5r 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH_MOBILE_Dove_Canada_004.jpg?itok=PTnyYEr1 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH_MOBILE_Dove_Canada_004cc6b.jpg?itok=mJoKiRy-"
                                            alt="Courage Is Beautiful - Dove | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Dove
                                        <span>Courage Is Beautiful
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/ball-good.html" class="splash__img " tabindex="-1">
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        <span>the ball of good
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/journey-dream.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-The-Journey-Of-A-Dream.jpg?itok=_6zOFkG9 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-The-Journey-Of-A-Dream.jpg?itok=p8pvbPea 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-The-Journey-Of-A-Dreame08a.jpg?itok=XFkjptyv"
                                            alt="The Journey Of A Dream - Corteva | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Corteva
                                        <span>The Journey Of A Dream
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/ageless-care.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Baby-Alive---Ageless-Care_001.jpg?itok=L2NkQ8si 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Baby-Alive---Ageless-Care_001.jpg?itok=3OtBG2cn 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Baby-Alive---Ageless-Care_001542e.jpg?itok=vPJjX3Tm"
                                            alt="Ageless Care - Baby Alive | Hasbro" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Hasbro
                                        <span>Ageless Care
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/real-food-rescue.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/Hellmann_Real_Food_Splash%20copy.png?itok=EfcyD3ZL 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/Hellmann_Real_Food_Splash%20copy.png?itok=Wydof1WP 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/Hellmann_Real_Food_Splash%20copy8a4e.png?itok=YjRRVnr5"
                                            alt="Real Food Rescue - Hellmann&#039;s" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Hellmann&#039;s
                                        <span>Real Food Rescue
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/shah-rukh-khan-my-ad-rest-towns-breaking-sirens.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY10.jpg?itok=zKtzGi7r 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY10.jpg?itok=ddHBctov 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY102569.jpg?itok=w1R8yLIX"
                                            alt="Ogilvy Cannes Winners 2022 - 1" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cannes Winners
                                        <span>Shah Rukh Khan My Ad, Rest Towns, Breaking Sirens
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/bride-armour-burger-glitch-dont-ever-leave-me.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=ZETraXc- 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=e3cxx_eg 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY110f8e.jpg?itok=lWLmDdA0"
                                            alt="Ogilvy Cannes Winners 2022 - 2" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cannes Winners
                                        <span>Bride Armour, Burger Glitch, Don&#039;t Ever Leave Me
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/flags-generosity-lesso-lessons-lu-magalu.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY12.jpg?itok=0jorEH2u 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY12.jpg?itok=zTakrSLo 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY1249c8.jpg?itok=otAYN1O5"
                                            alt="Ogilvy Cannes Winners 2022 - 3" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cannes Winners
                                        <span>Flags of Generosity, Lesso Lessons, Lu From Magalu
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/moldy-whopper-morning-after-island-reverse-selfie.html" class="splash__img "
                                        tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY13.jpg?itok=YoYKxEuX 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY13.jpg?itok=3AwB1_Hc 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY13c205.jpg?itok=tRDD-0AZ"
                                            alt="Ogilvy Cannes Winners 2022 - 4" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cannes Winners
                                        <span>The Moldy Whopper, Morning After Island, Reverse Selfie
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/courage-beautiful-toxic-influence-taste-reunion.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY15.jpg?itok=bQyT-Fyg 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY15.jpg?itok=rgdRCkTo 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY154014.jpg?itok=vQv_pXzf"
                                            alt="Ogilvy Cannes Winners 2022 - 6" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cannes Winners
                                        <span>Courage Is Beautiful, Toxic Influence, The Taste Of Reunion
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/scratch-boards-art-self-examination-eye-tracker.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY14.jpg?itok=iQ9mp2M4 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY14.jpg?itok=4sawV6d3 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY144d79.jpg?itok=9Bz0OQ7y"
                                            alt="Ogilvy Cannes Winners 2022 - 5" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cannes Winners
                                        <span>Scratch Boards, The Art of Self Examination, The Eye Tracker
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/ketchup-rescue-bring-back-lockdown-sunshine-anytime.html" class="splash__img "
                                        tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY16.jpg?itok=2O29lcNE 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY16.jpg?itok=m-S_2gWX 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY16d083.jpg?itok=CMADQr9u"
                                            alt="Ogilvy Cannes Winners 2022 - 7" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cannes Contenders
                                        <span>Ketchup to the Rescue, Bring Back Lockdown, Sunshine, Anytime
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="splash__projects splash__projects--clone">
                                <div class="splash__project ">
                                    <a href="work/breaking-sirens.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/Splash-Home-Mobile-Amnesty-International---Breaking-Sirens.jpg?itok=XoFj00nn 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/Splash-Home-Mobile-Amnesty-International---Breaking-Sirens.jpg?itok=e9Jjul2b 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/Splash-Home-Mobile-Amnesty-International---Breaking-Sirens347b.jpg?itok=QxkJ6DDt"
                                            alt="Breaking Sirens - Amnesty International | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Amnesty International
                                        <span>Breaking Sirens
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/lu-magalu.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Magazine-Luiza---Lu-from-Magalu.jpg?itok=8iww52jA 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Magazine-Luiza---Lu-from-Magalu.jpg?itok=-mbFxkuZ 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Magazine-Luiza---Lu-from-Magalu518d.jpg?itok=mTyFyKzF"
                                            alt="Lu from Magalu - Magazine Luiza | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Magazine Luiza
                                        <span>Lu from Magalu
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/impossible-combo.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_Burger-King-%E2%80%93-The-Impossible-Combo.jpg?itok=dlhk8pQl 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_Burger-King-%E2%80%93-The-Impossible-Combo.jpg?itok=bHNJy0un 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_Burger-King-%e2%80%93-The-Impossible-Comboc216.jpg?itok=rMdZTNSy"
                                            alt="Impossible Combo - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Impossible Combo
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/life-scripted.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_CIFF_OOH_In-Situation_Craft_Writing_Board.jpg?itok=bZmt2JO4 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_CIFF_OOH_In-Situation_Craft_Writing_Board.jpg?itok=3rYbS9BB 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_CIFF_OOH_In-Situation_Craft_Writing_Board69d1.jpg?itok=PnliB46v"
                                            alt="Life, Scripted - The Chicago International Film Festival | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        The Chicago International Film Festival
                                        <span>Life, Scripted
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/duet-delivery.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-duet-delivery.jpg?itok=xQZqbEcJ 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-duet-delivery.jpg?itok=MBSwjI6s 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-duet-delivery481f.jpg?itok=6STRYFdi"
                                            alt="Duet Delivery - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Duet Delivery
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/911-calls.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_BK911-callsPR-Image.jpg?itok=FINBZcjj 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_BK911-callsPR-Image.jpg?itok=PaxGvMB9 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_BK911-callsPR-Image40c3.jpg?itok=m1gQjjhG"
                                            alt="911 Calls - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>911 Calls
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/dollar-catalogue.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-ROW-01-IKEA_Dollar-Catalogue.jpg?itok=Ep-9LmYO 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-ROW-01-IKEA_Dollar-Catalogue.jpg?itok=QmMOP4ON 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-ROW-01-IKEA_Dollar-Catalogue5527.jpg?itok=I03fBDik"
                                            alt="Dollar Catalogue - IKEA | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        IKEA
                                        <span>Dollar Catalogue
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/sound-tour.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-Spotify-Sound-Tour.jpg?itok=qPzvWSR3 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-Spotify-Sound-Tour.jpg?itok=gmSNXe0M 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-Spotify-Sound-Tour7afc.jpg?itok=hfDx-7y7"
                                            alt="Sound Tour - Spotify | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Spotify
                                        <span>Sound Tour
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/home-sweet-home.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH_Amazing-Thailand_Amazing-Deep-culture.jpg?itok=zbGJLeLX 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH_Amazing-Thailand_Amazing-Deep-culture.jpg?itok=vAJt9Ezn 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH_Amazing-Thailand_Amazing-Deep-culture8d7c.jpg?itok=r9YRJGNG"
                                            alt="Home Sweet Home - Tourism Authority of Thailand | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Tourism Authority of Thailand
                                        <span>Home Sweet Home
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/fresh-system.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Carulla---Fresh-System.jpg?itok=7jWKfARj 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Carulla---Fresh-System.jpg?itok=BVH_H5au 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Carulla---Fresh-System82ff.jpg?itok=8Zt5Z7JW"
                                            alt="Fresh System - Carulla | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Carulla
                                        <span>Fresh System
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/eye-tracker.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-PORTRAIT-the-eye-tracker.jpg?itok=HWtuGb9F 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-PORTRAIT-the-eye-tracker.jpg?itok=rC0cibCq 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-PORTRAIT-the-eye-tracker892e.jpg?itok=c3lpX0qP"
                                            alt="The Eye Tracker - Supermax | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Supermax
                                        <span>The Eye Tracker
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/spotify-charthack.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-chart-hack.jpg?itok=qPHfvPMr 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-chart-hack.jpg?itok=dCdYM5dH 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-chart-hack5fdd.jpg?itok=TPUdgRx6"
                                            alt="The Spotify Charthack - Universal Music | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Universal Music
                                        <span>The Spotify Charthack
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/rest-towns.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-AAMI---Rest-Towns.jpg?itok=EOO2bjcb 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-AAMI---Rest-Towns.jpg?itok=_5CGdbUs 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-AAMI---Rest-Townsa97d.jpg?itok=0n7urnX2"
                                            alt="Rest Towns - AAMI| Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        AAMI
                                        <span>Rest Towns
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/burger-glitch.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Burger-King-%E2%80%93-Burger-Glitch.jpg?itok=zwpcri_Y 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Burger-King-%E2%80%93-Burger-Glitch.jpg?itok=zZUcG-lH 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Burger-King-%e2%80%93-Burger-Glitch16e5.jpg?itok=yYPDpMde"
                                            alt="Burger Glitch - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Burger Glitch
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/bride-armour.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Bride-Armour.jpg?itok=e50aR_lo 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Bride-Armour.jpg?itok=tqKxziNF 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Bride-Armour56a4.jpg?itok=-IWBkIPi"
                                            alt="Bride Armour - Carling Black Label | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Carling Black Label
                                        <span>Bride Armour
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/morning-after-island.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-GePae-%E2%80%93-The-Morning-After-Island.jpg?itok=r-1QctQE 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-GePae-%E2%80%93-The-Morning-After-Island.jpg?itok=Yaf7f5Np 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-GePae-%e2%80%93-The-Morning-After-Island7078.jpg?itok=kRSWWwc2"
                                            alt="Morning After Island - Grupo Estratégico PAE | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Grupo Estratégico PAE
                                        <span>Morning After Island
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/flags-generosity.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_Cadbury-FLAG.jpg?itok=Psyu1Hf8 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_Cadbury-FLAG.jpg?itok=BWf2LZ42 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_Cadbury-FLAGb35a.jpg?itok=b2u_oop6"
                                            alt="Flags of Generosity - Cadbury | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cadbury
                                        <span>Flags of Generosity
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/world-absolut-cocktails.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-PRDABS22011_BTM_Madras_.jpg?itok=gIVhRYLW 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-PRDABS22011_BTM_Madras_.jpg?itok=qmtDPgSb 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-PRDABS22011_BTM_Madras_ba07.jpg?itok=-4eIb76d"
                                            alt="The World of Absolut Cocktails - Absolut | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Absolut
                                        <span>The World of Absolut Cocktails
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/all-about-whopper.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-ALL-about-the-whopper.jpg?itok=IcQjtfnP 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-ALL-about-the-whopper.jpg?itok=QEfeZNUV 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-ALL-about-the-whopper53ec.jpg?itok=5mSs1bUA"
                                            alt="All About the Whopper - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>All About the Whopper
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/hornicultural-society.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_Relate_DOOH_CHISWICK_768x1008px_ARTICHOKE.jpg?itok=FJwWw6SF 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_Relate_DOOH_CHISWICK_768x1008px_ARTICHOKE.jpg?itok=dAvTbpJd 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_Relate_DOOH_CHISWICK_768x1008px_ARTICHOKE7f98.jpg?itok=ut2TNMmX"
                                            alt="Hornicultural Society - Relate | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Relate
                                        <span>Hornicultural Society
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/art-self-examination.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-001-MACMA.jpg?itok=xEmy2zcn 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-001-MACMA.jpg?itok=y2JDp8I6 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-001-MACMAca77.jpg?itok=ZgWin6lb"
                                            alt="The Art of Self Examination - MACMA | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        MACMA
                                        <span>The Art of Self Examination
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/veggies-kids-love-them.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_herta-veggie.jpg?itok=DSNUd6MZ 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_herta-veggie.jpg?itok=4zc5PWuJ 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_herta-veggiec3c3.jpg?itok=GUr6iY_R"
                                            alt="Veggies, Like Kids Love Them - Herta | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Herta
                                        <span>Veggies, Like Kids Love Them
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/shed-skin.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-AB-inBev---Shed-Skin.jpg?itok=ajtq-ga- 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-AB-inBev---Shed-Skin.jpg?itok=06g4mepA 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-AB-inBev---Shed-Skinec0c.jpg?itok=FJy3kVXp"
                                            alt="Shed Skin - AB inBev | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        AB inBev
                                        <span>Shed Skin
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/staraoke.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Amazon-Prime---Staraoke.jpg?itok=zCBAfXr0 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Amazon-Prime---Staraoke.jpg?itok=LTXxranS 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Amazon-Prime---Staraoke1f47.jpg?itok=nlYUq_7o"
                                            alt="Staraoke - Amazon Prime | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Prime Video
                                        <span>Staraoke
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/country-crock-whiskey.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-VERTICAL-Country-Crock---Country-Crock-Whiskey.jpg?itok=Tg_aXB4E 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-VERTICAL-Country-Crock---Country-Crock-Whiskey.jpg?itok=rNYp7ZAR 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-VERTICAL-Country-Crock---Country-Crock-Whiskeyf05c.jpg?itok=AdQJdw5V"
                                            alt="Country Crock Whiskey - Country Crock | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Country Crock
                                        <span>Country Crock Whiskey
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/toxic-influence.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Dove-Deepfake-Moms-Still-5.jpg?itok=2ECNQuWM 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Dove-Deepfake-Moms-Still-5.jpg?itok=TM2hE99Z 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Dove-Deepfake-Moms-Still-55a5a.jpg?itok=pTINkuPi"
                                            alt="Deepfake - Dove | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Dove
                                        <span>Toxic Influence
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/vertical-bike.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Honda---Vertical-Bike.jpg?itok=5yTFJ9xy 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Honda---Vertical-Bike.jpg?itok=NN9Ea2kF 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Honda---Vertical-Bike165a.jpg?itok=qZO9ntuA"
                                            alt="Vertical Bike - Honda | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Honda
                                        <span>Vertical Bike
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/natural-bar.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Corona---Natural-Bar.jpg?itok=1UVEG35x 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Corona---Natural-Bar.jpg?itok=Z2kR8owx 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Corona---Natural-Bar80ac.jpg?itok=_VLT3A7V"
                                            alt="Natural Bar - Corona | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Corona
                                        <span>Natural Bar
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/even-more-confusing-times.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-Image-BK-3.jpg?itok=12nBvdxD 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-Image-BK-3.jpg?itok=6eLCCcNK 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-Image-BK-3022f.jpg?itok=hU8SA7Br"
                                            alt="Even More Confusing Times - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Even More Confusing Times
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/long-live.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Clos-du-Bois---Long-Live.jpg?itok=y50Ni7nf 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Clos-du-Bois---Long-Live.jpg?itok=gEger_uo 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Clos-du-Bois---Long-Live7df4.jpg?itok=pRbITc1a"
                                            alt="Long Live - Clos du Bois | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Clos du Bois
                                        <span>Long Live
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/catch-day-2050.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-CatchoftheDay_KV3.jpg?itok=Ym-3uQok 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-CatchoftheDay_KV3.jpg?itok=yKxu6gn9 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-CatchoftheDay_KV31037.jpg?itok=xSgBVXxI"
                                            alt="Sea Shepherd - Catch of the Day | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Sea Shepherd
                                        <span>Catch of the Day 2050
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/vote-me.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-Vote-For-Me_1.jpg?itok=NbZ5gkif 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-Vote-For-Me_1.jpg?itok=2IG7Yl2o 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-Vote-For-Me_180e8.jpg?itok=XS9v5r_1"
                                            alt="Vote For Me - Société de Saint-Vincent-de-Paul | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Société de Saint-Vincent-de-Paul
                                        <span>Vote For Me
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/care-codes.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Shanghai-Municipal-Government-and-Ogilvy-Shanghai-Create-the-Care-Codes.jpg?itok=msCPZL4A 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Shanghai-Municipal-Government-and-Ogilvy-Shanghai-Create-the-Care-Codes.jpg?itok=ND6Hj4_a 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Shanghai-Municipal-Government-and-Ogilvy-Shanghai-Create-the-Care-Codes2976.jpg?itok=qKK7b_xD"
                                            alt="Care Codes - Shanghai Municipal Government | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Shanghai Municipal Government
                                        <span>Care Codes
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/invisible-films.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Victoria---Invisible-Films.jpg?itok=oNt7wnTt 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Victoria---Invisible-Films.jpg?itok=UvDkvV_r 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Victoria---Invisible-Filmsad43.jpg?itok=bs3nOioj"
                                            alt="Invisible Films - Cerveza Victoria | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cerveza Victoria
                                        <span>Invisible Films
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/poop-emoji-ice-cream.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-VERT-Poop-Emoji-Ice-Cream_HI-RES.jpg?itok=CYI0q890 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-VERT-Poop-Emoji-Ice-Cream_HI-RES.jpg?itok=gWK8r_Cx 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-VERT-Poop-Emoji-Ice-Cream_HI-RESaa40.jpg?itok=jQeI4aUN"
                                            alt="Poop Emoji Ice Cream - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Poop Emoji Ice Cream
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/ketchup-rescue.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE%20Curtice-Brothers---Ketchup-to-the-Rescue.jpg?itok=7B58asjf 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE%20Curtice-Brothers---Ketchup-to-the-Rescue.jpg?itok=hj7VTPX3 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE%20Curtice-Brothers---Ketchup-to-the-Rescuecb44.jpg?itok=obLkM4Pt"
                                            alt="Ketchup to the Rescue - Curtice Brothers| Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Curtice Brothers
                                        <span>Ketchup to the Rescue
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/nyphil.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_NYPHIL.jpg?itok=omJaP5ui 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_NYPHIL.jpg?itok=nmzW9dkb 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_NYPHIL6e61.jpg?itok=Y4Zlz-b_"
                                            alt="Visual Identity - New York Philharmonic | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        New York Philharmonic
                                        <span>NYPhil
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/scratch-boards.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-VERT-TonyHawks-ScratchBoards.jpg?itok=lEWUXpHa 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-VERT-TonyHawks-ScratchBoards.jpg?itok=KgQeyMYN 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-VERT-TonyHawks-ScratchBoards5472.jpg?itok=AEJDcYJ2"
                                            alt="Scratch Boards - Tony Hawk&#039;s Pro Skater | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Tony Hawk&#039;s Pro Skater
                                        <span>Scratch Boards
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/tale-two-lajjos.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-Project-Nanhi-Kali---The-Tale-of-Two-Lajjos.jpg?itok=gr_ki2Wn 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-Project-Nanhi-Kali---The-Tale-of-Two-Lajjos.jpg?itok=OXRDI0YP 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-Project-Nanhi-Kali---The-Tale-of-Two-Lajjose838.jpg?itok=Edc7qNHQ"
                                            alt="The Tale of Two Lajjos - Nanhi Kali | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Nanhi Kali
                                        <span>The Tale of Two Lajjos
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/have-word-yourself-then-your-mates.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Have-a-word-with-yourself-then-your-mates_0.jpg?itok=SK-KaHeg 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Have-a-word-with-yourself-then-your-mates_0.jpg?itok=Dfy07vjC 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Have-a-word-with-yourself-then-your-mates_0fefd.jpg?itok=30NGUEB0"
                                            alt="Have A Word With Yourself Then Your Mates | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Mayor of London
                                        <span>Have A Word With Yourself Then Your Mates
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/lesso-lessons.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILEBabies.jpg?itok=25Y2aSUn 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILEBabies.jpg?itok=9GQqmfwM 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILEBabies8a52.jpg?itok=7xIUQVV8"
                                            alt="Lesso Lessons - Roto Tanks | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Roto Tanks / The Ministry of Health Kenya
                                        <span>Lesso Lessons
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/bin-boy.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/HOME-SPLASH-MOBILE-Hindustan-Unilever---The-Bin-Boy.jpg?itok=gYt9Dqoe 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/HOME-SPLASH-MOBILE-Hindustan-Unilever---The-Bin-Boy.jpg?itok=Rkhs-TlR 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/HOME-SPLASH-MOBILE-Hindustan-Unilever---The-Bin-Boye0a3.jpg?itok=nNMYin52"
                                            alt="The Bin Boy - Hindustan Unilever | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Hindustan Unilever
                                        <span>The Bin Boy
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/spain-we-call-it-equality.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH_HOME_MOBILE-Ministerio-de-Igualdad---In-Spain-we-call-it-igualdad.jpg?itok=PQ6Vyun3 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH_HOME_MOBILE-Ministerio-de-Igualdad---In-Spain-we-call-it-igualdad.jpg?itok=D4rApHtX 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH_HOME_MOBILE-Ministerio-de-Igualdad---In-Spain-we-call-it-igualdad353a.jpg?itok=PXjTxlRg"
                                            alt="In Spain We Call it Equality - Ministry of Equality | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Ministry of Equality
                                        <span>In Spain We Call it Equality
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/every-tender-moment-gift.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-Every-Tender-Moment-is-a-Gift--SIWM.jpg?itok=2r-60cib 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-Every-Tender-Moment-is-a-Gift--SIWM.jpg?itok=dXQYHHMo 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-Every-Tender-Moment-is-a-Gift--SIWMc1c2.jpg?itok=5bhC9Q3b"
                                            alt="Every Tender Moment Is A Gift - Milka | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Milka
                                        <span>Every Tender Moment Is A Gift
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/naturally-flavored.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-La-Vosgienne.jpg?itok=MQNGp_KE 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-La-Vosgienne.jpg?itok=jWh3Z1nD 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-La-Vosgiennebf74.jpg?itok=oe4ZbMGh"
                                            alt="Naturally Flavored - La Vosgienne | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        La Vosgienne
                                        <span>Naturally Flavored
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/greekend.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Greek-National-Tourism-Organization---Greekend.jpg?itok=NfchL0yp 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Greek-National-Tourism-Organization---Greekend.jpg?itok=YqQkrBWk 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Greek-National-Tourism-Organization---Greekend63e5.jpg?itok=Tb40bRRo"
                                            alt="Greekend - National Greek Tourism Organization | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        National Greek Tourism Organization
                                        <span>Greekend
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/stanley-tucci.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-San-Pellegrino---Stanley-Tucci.jpg?itok=rWKitCfe 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-San-Pellegrino---Stanley-Tucci.jpg?itok=vb4GsRqv 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-San-Pellegrino---Stanley-Tucci4073.jpg?itok=C-d0IEZ4"
                                            alt="San Pellegrino - Stanley Tucci | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        San Pellegrino
                                        <span>Stanley Tucci
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/starlight.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-VERTICAL-294A1318_V3F_SMALL-9x16.jpg?itok=7kJsZQAP 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-VERTICAL-294A1318_V3F_SMALL-9x16.jpg?itok=7Dd8GH2V 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-VERTICAL-294A1318_V3F_SMALL-9x16f293.jpg?itok=Qv5urkU3"
                                            alt="Starlight - Coca-Cola | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Coca-Cola
                                        <span>Starlight
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/taste-future.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_IKEA_kottbulle_16.9_ny.jpg?itok=T6QXBuQY 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_IKEA_kottbulle_16.9_ny.jpg?itok=s3zUbLD2 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_IKEA_kottbulle_16.9_nyd364.jpg?itok=39qKoYN6"
                                            alt="Taste the Future - IKEA | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        IKEA
                                        <span>Taste the Future
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/early-five.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Dove---As-early-as-five.jpg?itok=swS31U18 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Dove---As-early-as-five.jpg?itok=soKVyHBs 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Dove---As-early-as-fivebb71.jpg?itok=M_LuaM-c"
                                            alt="As Early as Five - Dove | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Dove
                                        <span>As Early as Five
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/lightning-strike.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-Wallbox---Super-Bowlb.jpg?itok=1TmXceVp 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-Wallbox---Super-Bowlb.jpg?itok=2bCxTEzH 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-Wallbox---Super-Bowlbd2c9.jpg?itok=EyBhjfAG"
                                            alt="" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Wallbox
                                        <span>Lightning Strike
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/real-magic-lunar-new-year.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE_from-Animated-Film.jpg?itok=WO2RDEed 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE_from-Animated-Film.jpg?itok=BznWem2c 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE_from-Animated-Film74a3.jpg?itok=yv6gmXSU"
                                            alt="Real Magic Lunar New Year - Coca-Cola | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Coca-Cola
                                        <span>Real Magic Lunar New Year
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/monsters-insurance.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-000_SCARIEST.jpg?itok=g88OK6K8 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-000_SCARIEST.jpg?itok=mhp_rU5A 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-000_SCARIEST4aad.jpg?itok=xGEd9ZJT"
                                            alt="Monsters of Insurance - Acko | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Acko
                                        <span>Monsters of Insurance
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/sunshine-anytime.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Corona---Carona-Sunbrew.jpg?itok=WHgq6m7I 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Corona---Carona-Sunbrew.jpg?itok=g5GFSXnx 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Corona---Carona-Sunbrewcc1e.jpg?itok=qYK6uQhF"
                                            alt="Sunshine, Anytime - Corona Sunbrew | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Corona Sunbrew
                                        <span>Sunshine, Anytime
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/everyone-deserves-future.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_002-Emergency---Everyone-deserves-a-future.jpg?itok=x39rqbWr 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_002-Emergency---Everyone-deserves-a-future.jpg?itok=bQ458hZO 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_002-Emergency---Everyone-deserves-a-future7838.jpg?itok=GobjBAZi"
                                            alt="Everyone Deserves a Future - Emergency | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Emergency
                                        <span>Everyone Deserves a Future
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/proud-mistletoe.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Stonewall---Proud-Mistletoe.jpg?itok=wUEZi_Wu 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Stonewall---Proud-Mistletoe.jpg?itok=NNiJ686s 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Stonewall---Proud-Mistletoe91b8.jpg?itok=-RpQQtcq"
                                            alt="Proud Mistletoe - Stonewall | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Stonewall
                                        <span>Proud Mistletoe
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/willpower.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Corteva---Heart-of-the-Farm---Willpower_001.jpg?itok=k1tigWLx 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Corteva---Heart-of-the-Farm---Willpower_001.jpg?itok=sbvNNqp6 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Corteva---Heart-of-the-Farm---Willpower_001e0c2.jpg?itok=XuSZ91Xl"
                                            alt="Willpower - Corteva | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Corteva
                                        <span>Willpower
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/dont-ever-leave-me.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_Lacta---Dont-ever-leave-me.jpg?itok=BDsbSULA 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_Lacta---Dont-ever-leave-me.jpg?itok=kzy0J0PN 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_Lacta---Dont-ever-leave-me347f.jpg?itok=dN0IY-pF"
                                            alt="Don&#039;t Ever Leave Me - Lacta | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Lacta
                                        <span>Don&#039;t Ever Leave Me
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/peace-sauce.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_02-Interbev---the-Peace-Sauce.jpg?itok=E4IShp66 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_02-Interbev---the-Peace-Sauce.jpg?itok=odF_Zyh4 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_02-Interbev---the-Peace-Sauceb6f0.jpg?itok=7SGvRFD5"
                                            alt="The Peace Sauce - INTERBEV | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        INTERBEV
                                        <span>The Peace Sauce
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/sweetest-graffitis.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-PORTRAIT-Mikes---The-Sweetest-Graffits.jpg?itok=rN561_PY 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-PORTRAIT-Mikes---The-Sweetest-Graffits.jpg?itok=3gbTPisN 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-PORTRAIT-Mikes---The-Sweetest-Graffits1ae9.jpg?itok=U7iVMBuA"
                                            alt="The Sweetest Graffits - Mike&#039;s Hard Lemonade | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Mike&#039;s Hard Lemonade
                                        <span>The Sweetest Graffitis
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/street-it-all.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-PORTRAIT_Zalando-002.jpg?itok=jQerL6Sb 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-PORTRAIT_Zalando-002.jpg?itok=uRayxp8M 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-PORTRAIT_Zalando-002e5b3.jpg?itok=98jwqnLH"
                                            alt="Street It All - Zalando | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Zalando
                                        <span>Street It All
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/neighbors-life.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-City-of-Chicago---Neighbors-for-Life.jpg?itok=-6HAOLX9 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-City-of-Chicago---Neighbors-for-Life.jpg?itok=K1M_lXIH 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-City-of-Chicago---Neighbors-for-Lifea126.jpg?itok=hO1KUkjC"
                                            alt="Neighbors for Life - City of Chicago | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        City of Chicago
                                        <span>Neighbors for Life
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/crypto-ad.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-001_Burger-King-and-Robinhood---Crypto-Ad.jpg?itok=XD9EoU_P 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-001_Burger-King-and-Robinhood---Crypto-Ad.jpg?itok=J-Av_IyI 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-001_Burger-King-and-Robinhood---Crypto-Adcfa7.jpg?itok=J5IYaXUW"
                                            alt="Crypto Ad - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Crypto Ad
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/life-service.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-Corteva---A-Life-Of-Service.jpg?itok=rQQBAs83 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-Corteva---A-Life-Of-Service.jpg?itok=PDj9jR-q 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-Corteva---A-Life-Of-Servicebcf9.jpg?itok=uWe5tAN_"
                                            alt="A Life of Service - Corteva | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Corteva
                                        <span>A Life of Service
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/taste-reunion.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-El-Sabor-del-Reencuentro-The-Taste-of-Reunion.jpg?itok=EiLmISQq 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-El-Sabor-del-Reencuentro-The-Taste-of-Reunion.jpg?itok=TUhU3PYR 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-El-Sabor-del-Reencuentro-The-Taste-of-Reunion16a2.jpg?itok=YiqdVYn_"
                                            alt="The Taste of Reunion - Cerveza Victoria | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cerveza Victoria
                                        <span>The Taste of Reunion
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/gift-connection.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-001-The-Gift-of-Connection.jpg?itok=xq0D_6sz 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-001-The-Gift-of-Connection.jpg?itok=qmkfIGpX 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-001-The-Gift-of-Connection8c52.jpg?itok=AVbd5Ncj"
                                            alt="The Gift of Connection - Vodafone | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Vodafone
                                        <span>The Gift of Connection
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/canadas-most-popular-food-truck.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-Canadas-Most-Popular-Food-Truck001.jpg?itok=JFFPOvg3 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-Canadas-Most-Popular-Food-Truck001.jpg?itok=IlfB7uwf 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-Canadas-Most-Popular-Food-Truck0016c88.jpg?itok=aE5ue3sR"
                                            alt="Canada&#039;s Most Popular Food Truck - Hellmann&#039;s | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Hellmann&#039;s
                                        <span>Canada&#039;s Most Popular Food Truck
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/no-home-address.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILEWhitelion---No-Home-Address001.jpg?itok=QVmOvmMX 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILEWhitelion---No-Home-Address001.jpg?itok=2sUqM5U4 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILEWhitelion---No-Home-Address001ce3c.jpg?itok=YzYqc5o6"
                                            alt="No Home Address - Whitelion | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Whitelion
                                        <span>No Home Address
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/best-gift.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-British-Airways---The-Best-Gift_001.jpg?itok=nfgxEPSl 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-British-Airways---The-Best-Gift_001.jpg?itok=q30D40Bo 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-British-Airways---The-Best-Gift_001e00d.jpg?itok=kmFzB0d0"
                                            alt="The Best Gift - British Airways | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        British Airways
                                        <span>The Best Gift
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/shah-rukh-khan-my-ad.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-002-Not-Just-A-Cadbury-Ad-2021.jpg?itok=08PwGVam 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-002-Not-Just-A-Cadbury-Ad-2021.jpg?itok=w9jqKooD 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-002-Not-Just-A-Cadbury-Ad-20217262.jpg?itok=1Swrf_kV"
                                            alt="Shah Rukh Khan My Ad - Cadbury | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cadbury
                                        <span>Shah Rukh Khan My Ad
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/no-need-fly.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH_DESUCHE-BAHN_THUMB_103.jpg?itok=5jBEEU19 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH_DESUCHE-BAHN_THUMB_103.jpg?itok=UgwihMz7 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH_DESUCHE-BAHN_THUMB_1034ee6.jpg?itok=sQqYfQd-"
                                            alt="Summer Ticket - Deutsche Bahn" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        German Rail
                                        <span>No Need to Fly
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/growing-pride.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Corteva-Agriscience---The-Heart-of-the-Farm_001.jpg?itok=hjX7l0tc 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Corteva-Agriscience---The-Heart-of-the-Farm_001.jpg?itok=5IEvu2Ot 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Corteva-Agriscience---The-Heart-of-the-Farm_0013c18.jpg?itok=yYIAo-9K"
                                            alt="The Heart of the Farm - Corteva | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Corteva
                                        <span>Growing with Pride
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/nomo-fomo.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLAH%20MOBILE-Samsung_NOMO-FOMO-6.jpg?itok=Cx_wwEeP 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLAH%20MOBILE-Samsung_NOMO-FOMO-6.jpg?itok=JNSkcQgW 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLAH%20MOBILE-Samsung_NOMO-FOMO-64879.jpg?itok=CTR_rO_o"
                                            alt="NOMO FOMO - Samsung | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Samsung
                                        <span>NOMO FOMO
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/naming-invisible-digital-birth-registration.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-VERTICAL-Telenor-digital-birth-registration_002.jpg?itok=UgNh46DX 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-VERTICAL-Telenor-digital-birth-registration_002.jpg?itok=6COykUfg 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-VERTICAL-Telenor-digital-birth-registration_0021e82.jpg?itok=RGrxypF1"
                                            alt="Digital Birth Registration - Telenor Pakistan | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Telenor Pakistan
                                        <span>Naming the Invisible by Digital Birth Registration
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/animal-crossing-catalog.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_Ikea-animal-crossing_002.jpg?itok=2qaaEK7o 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_Ikea-animal-crossing_002.jpg?itok=LY_BEOFF 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_Ikea-animal-crossing_002e745.jpg?itok=dZ_rt2ET"
                                            alt="Animal Crossing Catalog - IKEA | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        IKEA
                                        <span>Animal Crossing Catalog
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/second-life.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH%20HOME%20MOBILE-IBM-%E2%80%93-Second-Life_001.jpg?itok=J25944t4 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH%20HOME%20MOBILE-IBM-%E2%80%93-Second-Life_001.jpg?itok=lMueKt2c 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH%20HOME%20MOBILE-IBM-%e2%80%93-Second-Life_00170b1.jpg?itok=uBWIXkKg"
                                            alt="Second Life - IBM | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        IBM
                                        <span>Second Life
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/fire-escape.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-Chicago-Fire-Department-foundation-%E2%80%93-The-Fire-Escape_001.jpg?itok=Ol_FUbTf 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-Chicago-Fire-Department-foundation-%E2%80%93-The-Fire-Escape_001.jpg?itok=cgDTIP4p 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-Chicago-Fire-Department-foundation-%e2%80%93-The-Fire-Escape_0012f57.jpg?itok=rSV4D-Sv"
                                            alt="The Fire Escape - Chicago Fire Department Foundation | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Chicago Fire Department Foundation
                                        <span>The Fire Escape
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/same-sex-marriage.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_Google-Same-Sex-Marriage_001.jpg?itok=yIz4SU_z 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_Google-Same-Sex-Marriage_001.jpg?itok=YKFWMqNv 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_Google-Same-Sex-Marriage_0016ecc.jpg?itok=a8gPAd5t"
                                            alt="Same Sex Marriage - Google | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Google
                                        <span>Same Sex Marriage
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/spot-station.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH_VERTICAL_Adidas-Do-Brasil-%E2%80%93-Spot-The-Station_002.jpg?itok=I_PpGC5J 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH_VERTICAL_Adidas-Do-Brasil-%E2%80%93-Spot-The-Station_002.jpg?itok=opNgJ42E 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH_VERTICAL_Adidas-Do-Brasil-%e2%80%93-Spot-The-Station_0025706.jpg?itok=65UHV4id"
                                            alt="Spot The Station - Adidas Do Brasil | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Adidas Do Brasil
                                        <span>Spot The Station
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/buy-your-time.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/HOME-SPLASH-REGULAR_IKEA---Buy-With-Your-Time_01.jpg?itok=ly0Fj2s7 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/HOME-SPLASH-REGULAR_IKEA---Buy-With-Your-Time_01.jpg?itok=0YGUz33S 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/HOME-SPLASH-REGULAR_IKEA---Buy-With-Your-Time_011df0.jpg?itok=C5uiahxz"
                                            alt="Buy With Your Time  - IKEA | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        IKEA
                                        <span>Buy With Your Time
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/secret-menu.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-KFC--Secret-Menu_001.jpg?itok=WML1Euze 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-KFC--Secret-Menu_001.jpg?itok=RXS7JttY 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-KFC--Secret-Menu_0011051.jpg?itok=Hau-qPVz"
                                            alt="Secret Menu - KFC | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        KFC
                                        <span>Secret Menu
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/audio-catalog.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-Audio-IKEA-Catalog.jpg?itok=10F8usl6 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-Audio-IKEA-Catalog.jpg?itok=WycX1gJg 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-Audio-IKEA-Cataloge6eb.jpg?itok=ZGecnXtv"
                                            alt="The Audio Catalog - IKEA" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        IKEA
                                        <span>The Audio Catalog
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/bums-bees.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-CDC-SFL-Still-3.jpg?itok=OGCOB21H 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-CDC-SFL-Still-3.jpg?itok=pBR__cjT 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-CDC-SFL-Still-3b234.jpg?itok=cAQj6XSq"
                                            alt="Bums and the Bees - CDC | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        CDC
                                        <span>Bums and the Bees
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/kingo.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/KINGO%20SPLASH%20REGULAR.png?itok=_9kz6VjR 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/KINGO%20SPLASH%20REGULAR.png?itok=niqCGd6M 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/KINGO%20SPLASH%20REGULARcee6.png?itok=5Zy5umOK"
                                            alt="Kingo" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Kingo
                                        <span>Kingo
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/snapchat-closet.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE_OOGACHAGA---Snapchat-from-the-Closet.jpg?itok=LDEbmCcO 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE_OOGACHAGA---Snapchat-from-the-Closet.jpg?itok=SKMOhav3 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE_OOGACHAGA---Snapchat-from-the-Closet0380.jpg?itok=Wp72Wkl2"
                                            alt="Snapchat from the Closet - OOGACHAGA | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        OOGACHAGA
                                        <span>Snapchat from the Closet
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/proud-whopper.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-Burger.jpg?itok=Xy9wTizB 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-Burger.jpg?itok=TWonaquU 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-Burgere6f5.jpg?itok=Dg-G0SjG"
                                            alt="Proud Whopper - Burger King | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Burger King
                                        <span>Proud Whopper
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/lgbt-avatars.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH%20MOBILE-Prague-LGBTQ-Pride-Avatars-001.jpg?itok=Cjjw_eTJ 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH%20MOBILE-Prague-LGBTQ-Pride-Avatars-001.jpg?itok=CEKu1wYM 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH%20MOBILE-Prague-LGBTQ-Pride-Avatars-0014ab3.jpg?itok=DMt0FwtP"
                                            alt="LGBT Avatars - Prague Pride | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Prague Pride
                                        <span>LGBT Avatars
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/love-cans.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-HiRes_LoveCans_Coke_.jpg?itok=cMH_6MLB 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-HiRes_LoveCans_Coke_.jpg?itok=ylQBeOSk 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-HiRes_LoveCans_Coke_f6fb.jpg?itok=sOyqr7nu"
                                            alt="Love Cans - Coca-Cola | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Coca-Cola
                                        <span>Love Cans
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/youngest-donor.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-The_Youngest_Donor.jpg?itok=dGvYgIGj 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-The_Youngest_Donor.jpg?itok=0LYhkR7C 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-The_Youngest_Donorf4c7.jpg?itok=Ogn4nSqb"
                                            alt="The Youngest Donor - Parent’s Guide to Cord Blood | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Parent’s Guide to Cord Blood
                                        <span>The Youngest Donor
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/ball-god.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE-Panenka-Ball-of-God-003-.jpg?itok=Sh5lI6xK 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE-Panenka-Ball-of-God-003-.jpg?itok=678L4Jo1 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE-Panenka-Ball-of-God-003-9b83.jpg?itok=4gRf5dwu"
                                            alt="The Ball Of God - Panenka Football Magazine  | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Panenka Football Magazine
                                        <span>The Ball Of God
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/mother-blanket.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-MOTHER-BLANKET_001.jpg?itok=SqrwEB_k 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-MOTHER-BLANKET_001.jpg?itok=yXu67y6B 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-MOTHER-BLANKET_001110b.jpg?itok=tv_6uo-A"
                                            alt="Mother Blanket | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Fundación Vivir &amp; CCPDA
                                        <span>Mother Blanket
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/traffic-jam.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH_Brooke-Bond-Red-Label-tea_001.jpg?itok=EgUgVCjf 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH_Brooke-Bond-Red-Label-tea_001.jpg?itok=_XE7clIK 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH_Brooke-Bond-Red-Label-tea_0012192.jpg?itok=wWCRofxy"
                                            alt="Traffic Jam - Hindustan Unilever | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Hindustan Unilever
                                        <span>Traffic Jam
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project splash__project--vertical">
                                    <a href="work/teodor.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_portrait_images_small/public/work/splash/portrait/SPLASH-PORTRAIT-Ogilvy-Brazil---NESCAU---Teodoro_002.jpg?itok=JAiN7sKp 200w, /sites/g/files/dhpsjz106/files/styles/splash_portrait_image_480x720/public/work/splash/portrait/SPLASH-PORTRAIT-Ogilvy-Brazil---NESCAU---Teodoro_002.jpg?itok=l0HfdutX 480w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_small_image/public/work/splash/portrait/SPLASH-PORTRAIT-Ogilvy-Brazil---NESCAU---Teodoro_0027e73.jpg?itok=GWJSZW10"
                                            alt="Teodor - NESCAU | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        NESCAU
                                        <span>Teodor
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/coke-fanta.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-HOME-MOBILE-This-Coke-is-a-Fanta.jpg?itok=2IWYT8_A 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-HOME-MOBILE-This-Coke-is-a-Fanta.jpg?itok=HJ4AlJbh 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-HOME-MOBILE-This-Coke-is-a-Fantafc32.jpg?itok=h-OeaKX1"
                                            alt="This Coke is a Fanta - Fanta | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Coca-Cola
                                        <span>This Coke is a Fanta
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/mayo-island.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/SPLASH-MOBILE_Hellmans-Island_003.jpg?itok=_JQn8MXH 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/SPLASH-MOBILE_Hellmans-Island_003.jpg?itok=RksVJl4o 720w"
                                            sizes="50vw"
                                            src="sites/g/files/dhpsjz106/files/styles/splash_image_medium/public/work/splash/regular/SPLASH-MOBILE_Hellmans-Island_0035b24.jpg?itok=GaMne3iH"
                                            alt="Hellmann&#039;s Island - Hellmann&#039;s | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Hellmann&#039;s
                                        <span>Mayo Island
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/michelin-impossible.html" class="splash__img " tabindex="-1">
                                        <img
                                            sizes="50vw"
                                            src={img1}

                                            alt="Michelin Impossible - KFC" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        KFC
                                        <span>Michelin Impossible
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/courage-beautiful.html" class="splash__img " tabindex="-1">
                                        <img
                                            sizes="50vw"
                                            src={img1}

                                            alt="Courage Is Beautiful - Dove | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Dove
                                        <span>Courage Is Beautiful
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/ball-good.html" class="splash__img " tabindex="-1">
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        <span>the ball of good
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/journey-dream.html" class="splash__img " tabindex="-1">
                                        <img
                                            sizes="50vw"
                                            src={img1}

                                            alt="The Journey Of A Dream - Corteva | Ogilvy" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Corteva
                                        <span>The Journey Of A Dream
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/ageless-care.html" class="splash__img " tabindex="-1">
                                        <img
                                            src={img1}

                                            sizes="50vw"
                                            alt="Ageless Care - Baby Alive | Hasbro" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Hasbro
                                        <span>Ageless Care
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/real-food-rescue.html" class="splash__img " tabindex="-1">
                                        <img
                                            sizes="50vw"
                                            src={img1}

                                            alt="Real Food Rescue - Hellmann&#039;s" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Hellmann&#039;s
                                        <span>Real Food Rescue
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/shah-rukh-khan-my-ad-rest-towns-breaking-sirens.html" class="splash__img " tabindex="-1">
                                        <img
                                            sizes="50vw"
                                            src={img1}
                                            alt="Ogilvy Cannes Winners 2022 - 1" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cannes Winners
                                        <span>Shah Rukh Khan My Ad, Rest Towns, Breaking Sirens
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/bride-armour-burger-glitch-dont-ever-leave-me.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=ZETraXc- 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=e3cxx_eg 720w"
                                            sizes="50vw"
                                            src={img1}

                                            alt="Ogilvy Cannes Winners 2022 - 2" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cannes Winners
                                        <span>Bride Armour, Burger Glitch, Don&#039;t Ever Leave Me
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/flags-generosity-lesso-lessons-lu-magalu.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY12.jpg?itok=0jorEH2u 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY12.jpg?itok=zTakrSLo 720w"
                                            sizes="50vw"
                                            src={img1}

                                            alt="Ogilvy Cannes Winners 2022 - 3" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cannes Winners
                                        <span>Flags of Generosity, Lesso Lessons, Lu From Magalu
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/moldy-whopper-morning-after-island-reverse-selfie.html" class="splash__img "
                                        tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY13.jpg?itok=YoYKxEuX 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY13.jpg?itok=3AwB1_Hc 720w"
                                            sizes="50vw"
                                            src={img1}

                                            alt="Ogilvy Cannes Winners 2022 - 4" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cannes Winners
                                        <span>The Moldy Whopper, Morning After Island, Reverse Selfie
                                        </span>
                                    </p>
                                </div>
                                <div class="splash__project ">
                                    <a href="work/courage-beautiful-toxic-influence-taste-reunion.html" class="splash__img " tabindex="-1">
                                        <img
                                            srcset="/sites/g/files/dhpsjz106/files/styles/splash_regular_images_small/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY15.jpg?itok=bQyT-Fyg 300w, /sites/g/files/dhpsjz106/files/styles/splash_image_thumbnail/public/work/splash/regular/O22_CANNES_HOME%20SITE%20TILES_NOTY15.jpg?itok=rgdRCkTo 720w"
                                            sizes="50vw"
                                            src={img1}

                                            alt="Ogilvy Cannes Winners 2022 - 6" typeof="foaf:Image" />
                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cannes Winners
                                        <span>Courage Is Beautiful, Toxic Influence, The Taste Of Reunion
                                        </span>
                                    </p>
                                </div>
                                <div className="splash__project ">
                                    <a href="work/scratch-boards-art-self-examination-eye-tracker.html" class="splash__img " tabindex="-1">
                                        <img src={img1} alt="nabeel" />

                                    </a>
                                    <div class="splash__overlay"></div>
                                    <p class="splash__description">
                                        Cannes Winners
                                        <span>Scratch Boards, The Art of Self Examination, The Eye Tracker
                                        </span>
                                    </p>
                                </div>
                                <div className="splash__project ">
                                    <a href="work/ketchup-rescue-bring-back-lockdown-sunshine-anytime.html" class="splash__img "
                                        tabindex="-1">
                                        <img
                                            sizes="50vw"
                                            src={img1}

                                            alt="Ogilvy Cannes Winners Cannes Winners 202222 - 7" typeof="foaf:Image" />
                                    </a>
                                    <div className="splash__overlay"></div>
                                    <p className="splash__description">
                                        Cannes Contenders
                                        <span>Ketchup to the Rescue, Bring Back Lockdown, Sunshine, Anytime
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider__wrapper slider__wrapper--splash">
                        <svg className="slider__in--splash" width="30" height="20" viewbox="0 0 31 20"

                            xmlns={img1}
                            // xmlns="http://www.w3.org/2000/svg"
                            alt="zoom-in">
                            <path d="M1 1h29v19H1z" fill="none" fill-rule="evenodd" />
                        </svg>
                        <label for="slider">Change Zoom</label>
                        <span className="slider__left">|</span>
                        <input type="range" min="1" max="64" value="1" class="slider" id="slider" autocomplete="off" />
                        <span className="slider__right">|</span>


                        <svg className="slider__out--splash" width="30" height="20" viewbox="0 0 29 20"
                            //  xmlns="http://www.w3.org/2000/svg"
                            xmlns={img1}
                        >
                            <g fill="none" fill-rule="evenodd" alt="zoom-out">
                                <path d="M1 1h12v7H1zM1 12h12v7H1zM16 1h12v7H16zM16 12h12v7H16z" />
                            </g>
                        </svg>
                    </div>


                </section>












                <div class="section--locker js-locker section--red">
                    <section class="section section--v-center hero hero--red section--lockee js-lockee ">
                        <div class="section__mask"></div>
                        <div class="container">
                            <div className="hero--con">
                                <p>People expect more of brands than ever before. They expect brands to go beyond. We innovate and create
                                    at the intersections to bring forth the best possible growth solutions for our clients. Ogilvy inspires
                                    brands and people to impact the world.</p>
                            </div>
                        </div>
                    </section>
                </div>


                <div className="has-sticky section--default">
                    <section id="work"
                        class="global-market section section--sticky work js-home2 js-view-dom-id-8a0170c5c970f7bbbac875bc5ff8a241a030590e93f7be3975c6c1ec2fd0c0a3">
                        <div className="section__mask"></div>
                        <div class="container">
                            <form className="views-exposed-form bef-exposed-form" data-bef-auto-submit-full-form="" data-bef-auto-submit=""
                                data-bef-auto-submit-delay="500" data-drupal-selector="views-exposed-form-our-work-grid-our-work-grid"
                                action="https://www.ogilvy.com/home" method="get" id="views-exposed-form-our-work-grid-our-work-grid"
                                accept-charset="UTF-8">

                                <ul id="edit-field-category-target-id" class="section__grid-filters work__categories">
                                    <li> <label
                                        class="js-form-item form-item js-work-cat-toggles js-form-type-radio form-item-field-category-target-id js-form-item-field-category-target-id">
                                        <input data-drupal-selector="edit-field-category-target-id-all" type="radio"
                                            id="edit-field-category-target-id-all" name="field_category_target_id" value="All"
                                            checked="checked" class="form-radio" />
                                        <span for="edit-field-category-target-id-all" class="option">- Any -</span><span>&nbsp;</span>
                                    </label>
                                        <label
                                            className="js-form-item form-item js-work-cat-toggles js-form-type-radio form-item-field-category-target-id js-form-item-field-category-target-id">
                                            {/* <a href="work/advertising.html" title="advertising">advertising</a> */}
                                            <input data-drupal-selector="edit-field-category-target-id-1" type="radio"
                                                id="edit-field-category-target-id-1" name="field_category_target_id" value="1" class="form-radio"
                                            />
                                            <span for="edit-field-category-target-id-1" class="option">Advertising</span><span>&nbsp;</span>
                                        </label>
                                        <label
                                            className="js-form-item form-item js-work-cat-toggles js-form-type-radio form-item-field-category-target-id js-form-item-field-category-target-id">
                                            {/* <a href="work/pr.html" title="pr">pr</a> */}
                                            <input data-drupal-selector="edit-field-category-target-id-11" type="radio"
                                                id="edit-field-category-target-id-11" name="field_category_target_id" value="11"
                                                class="form-radio" />
                                            <span for="edit-field-category-target-id-11" class="option">PR</span><span>&nbsp;</span>
                                        </label>
                                        <label
                                            className="js-form-item form-item js-work-cat-toggles js-form-type-radio form-item-field-category-target-id js-form-item-field-category-target-id">
                                            {/* <a href="work/experience.html" title="experience">experience</a> */}
                                            <input data-drupal-selector="edit-field-category-target-id-31" type="radio"
                                                id="edit-field-category-target-id-31" name="field_category_target_id" value="31"
                                                class="form-radio" />
                                            <span for="edit-field-category-target-id-31" class="option">Experience</span><span>&nbsp;</span>
                                        </label>
                                        <label
                                            className="js-form-item form-item js-work-cat-toggles js-form-type-radio form-item-field-category-target-id js-form-item-field-category-target-id">
                                            {/* <noscript><a href="work/health.html" title="health">health</a></noscript> */}
                                            <input data-drupal-selector="edit-field-category-target-id-36" type="radio"
                                                id="edit-field-category-target-id-36" name="field_category_target_id" value="36"
                                                class="form-radio" />
                                            <span for="edit-field-category-target-id-36" class="option">Health</span><span>&nbsp;</span>
                                        </label>
                                        <label
                                            className="js-form-item form-item js-work-cat-toggles js-form-type-radio form-item-field-category-target-id js-form-item-field-category-target-id">
                                            {/* <a href="work/consulting.html" title="consulting">consulting</a> */}
                                            <input data-drupal-selector="edit-field-category-target-id-21" type="radio"
                                                id="edit-field-category-target-id-21" name="field_category_target_id" value="21"
                                                className="form-radio" />
                                            <span for="edit-field-category-target-id-21" class="option">Consulting</span><span>&nbsp;</span>
                                        </label>
                                    </li>
                                </ul>


                                <div className="section__grid-work-search" >
                                    <ul className="section__grid-utilities section__grid-utilities--mobile" style={{ opacity: 1 }} >
                                        <li className="search-form-wrap">
                                            <div className="section__search-form js-work-search" data-search-category="Work">
                                                <div className="input">
                                                    <input data-bef-auto-submit-exclude="" data-drupal-selector="edit-combine" type="text"
                                                        id="edit-combine" name="combine" value="" size="30" maxlength="128" class="form-text"
                                                        aria-label="Search work" />
                                                </div>
                                                <button className="section__grid-utility">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" role="img"
                                                        aria-labelledby="worksearch">
                                                        <title id="worksearch">Search</title>
                                                        <path fill="none" stroke="currentColor" stroke-width=".75"
                                                            d="M10.93 5.57a4.95 4.95 0 0 1-4.97 4.94A4.95 4.95 0 0 1 1 5.57 4.95 4.95 0 0 1 5.96.64a4.96 4.96 0 0 1 4.97 4.93zM9.37 9.35L13.04 13 9.37 9.35z" />
                                                    </svg>
                                                </button>
                                                <button className="section__grid-utility" type="reset">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" role="img"
                                                        aria-labelledby="workreset">
                                                        <title id="workreset">Reset</title>
                                                        <path fill="none" stroke="currentColor" d="M15.64.8L1.43 15m14.14 0L1.36.8" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div
                                                className="search-form-showing section__grid-right section__grid-page js-section-page-view search-icons is-home">
                                                <p><span className="show">Showing:</span>
                                                    <span
                                                        className="js-section-page-view-text"><i class="sr-only">Search</i></span> <svg
                                                            viewBox="0 0 20.1 20.1">
                                                        <path fill="none" d="M10.1 0v20.1m10-10H0" />
                                                    </svg></p>
                                            </div>
                                            <div
                                                class="search-form-showing section__grid-right section__grid-page js-section-page-view is-home">
                                                <p>Showing: <a href="index.html#work" class="section__page-view-link js-section-page-link"
                                                    target="_blank" rel="nofollow noreferrer"><span class="js-section-page-view-text">All</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20.1 20.1">
                                                        <path fill="none" d="M10.1 0v20.1m10-10H0"></path>
                                                    </svg></a></p>
                                            </div>
                                            <ul className="adv-search-list" >
                                                <li className="adv-search-mob-icon">
                                                    <svg style={{ display: "none" }}
                                                        xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                        viewBox="0 0 14 14" role="img" aria-labelledby="worksearch">
                                                        <title id="worksearch">Search</title>
                                                        <path fill="none" stroke="currentColor" stroke-width=".75"
                                                            d="M10.93 5.57a4.95 4.95 0 0 1-4.97 4.94A4.95 4.95 0 0 1 1 5.57 4.95 4.95 0 0 1 5.96.64a4.96 4.96 0 0 1 4.97 4.93zM9.37 9.35L13.04 13 9.37 9.35z">
                                                        </path>
                                                    </svg>
                                                </li>
                                            </ul>
                                            <span className="adv-search-wrk-icon adv-search-icon">
                                                <svg id="plus-icon" viewBox="0 0 20.1 20.1" width="100%" height="100%">
                                                    <path fill="none" stroke="currentColor" d="M10.1 0v20.1m10-10H0"></path>
                                                </svg>
                                            </span>
                                            <div id="search-capabilities" className="adv-search-list-con" style={{ display: "none" }} >
                                            </div>
                                            <div id="search-industries" className="adv-search-list-con" style={{ display: "none" }}>
                                            </div>
                                            <div id="search-clients" className="adv-search-list-con" style={{ display: "none" }}>
                                            </div>
                                        </li>
                                    </ul>
                                </div>



                                <input data-drupal-selector="edit-open" type="hidden" name="open" value="" />
                                <div data-drupal-selector="edit-actions" className="form-actions js-form-wrapper form-wrapper"
                                    id="edit-actions"><input data-bef-auto-submit-click="" className="js-hide button js-form-submit form-submit"
                                        data-drupal-selector="edit-submit-our-work-grid" type="submit" id="edit-submit-our-work-grid"
                                        value="Apply" />
                                </div>
                            </form>



                            <ul className="work__grid js-work-grid">
                                <li className="work__item js-work-item cat-"><a
                                    href="work/shah-rukh-khan-my-ad-rest-towns-breaking-sirens.html" data-category-title="">
                                    <img
                                        sizes="(min-width:720px) 30vw, 100vw"
                                        src={img1}
                                        alt="Ogilvy Cannes Winners 2022 - 1" title="Ogilvy Cannes Winners 2022 - 1" typeof="foaf:Image" />
                                    <h3 class="work__item-title">
                                        <span>Shah Rukh Khan My Ad, Rest Towns, Breaking Sirens
                                            <span class="work__item-client">Cannes Winners
                                            </span>
                                        </span>
                                    </h3>
                                </a>
                                </li>
                                <li class="work__item js-work-item cat-"><a href="work/bride-armour-burger-glitch-dont-ever-leave-me.html"
                                    data-category-title="">
                                    <img
                                        sizes="(min-width:720px) 30vw, 100vw"
                                        alt="Ogilvy Cannes Winners 2022 - 2" title="Ogilvy Cannes Winners 2022 - 2" typeof="foaf:Image"
                                        src={img1}
                                    />
                                    <h3 class="work__item-title">
                                        <span>Bride Armour, Burger Glitch, Don&#039;t Ever Leave Me
                                            <span class="work__item-client">Cannes Winners
                                            </span>
                                        </span>
                                    </h3>
                                </a>
                                </li>

                                <li class="work__item js-work-item cat-"><a href="work/bride-armour-burger-glitch-dont-ever-leave-me.html"
                                    data-category-title="">
                                    {/* <picture>
                                            <source
                                                srcset="/sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_600x400/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=nhM2KiqP 600w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_900x600/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=hF2YhTTx 900w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_1200x800/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=kEopWUV2 1200w"
                                                media="(min-width: 720px)" sizes="30vw" /> */}
                                    <img
                                        sizes="(min-width:720px) 30vw, 100vw"
                                        alt="Ogilvy Cannes Winners 2022 - 2" title="Ogilvy Cannes Winners 2022 - 2" typeof="foaf:Image"
                                        src={img1}
                                    />
                                    <h3 class="work__item-title">
                                        <span>Bride Armour, Burger Glitch, Don&#039;t Ever Leave Me
                                            <span class="work__item-client">Cannes Winners
                                            </span>
                                        </span>
                                    </h3>
                                </a>
                                </li>

                                <li class="work__item js-work-item cat-"><a href="work/bride-armour-burger-glitch-dont-ever-leave-me.html"
                                    data-category-title="">
                                    {/* <picture>
                                            <source
                                                srcset="/sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_600x400/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=nhM2KiqP 600w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_900x600/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=hF2YhTTx 900w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_1200x800/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=kEopWUV2 1200w"
                                                media="(min-width: 720px)" sizes="30vw" /> */}
                                    <img
                                        sizes="(min-width:720px) 30vw, 100vw"
                                        alt="Ogilvy Cannes Winners 2022 - 2" title="Ogilvy Cannes Winners 2022 - 2" typeof="foaf:Image"
                                        src={img1}
                                    />
                                    <h3 class="work__item-title">
                                        <span>Bride Armour, Burger Glitch, Don&#039;t Ever Leave Me
                                            <span class="work__item-client">Cannes Winners
                                            </span>
                                        </span>
                                    </h3>
                                </a>
                                </li>
                                <li class="work__item js-work-item cat-"><a href="work/bride-armour-burger-glitch-dont-ever-leave-me.html"
                                    data-category-title="">
                                    {/* <picture>
                                            <source
                                                srcset="/sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_600x400/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=nhM2KiqP 600w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_900x600/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=hF2YhTTx 900w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_1200x800/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=kEopWUV2 1200w"
                                                media="(min-width: 720px)" sizes="30vw" /> */}
                                    <img
                                        sizes="(min-width:720px) 30vw, 100vw"
                                        alt="Ogilvy Cannes Winners 2022 - 2" title="Ogilvy Cannes Winners 2022 - 2" typeof="foaf:Image"
                                        src={img1}
                                    />
                                    <h3 class="work__item-title">
                                        <span>Bride Armour, Burger Glitch, Don&#039;t Ever Leave Me
                                            <span class="work__item-client">Cannes Winners
                                            </span>
                                        </span>
                                    </h3>
                                </a>
                                </li>
                                <li class="work__item js-work-item cat-"><a href="work/bride-armour-burger-glitch-dont-ever-leave-me.html"
                                    data-category-title="">
                                    {/* <picture>
                                            <source
                                                srcset="/sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_600x400/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=nhM2KiqP 600w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_900x600/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=hF2YhTTx 900w, /sites/g/files/dhpsjz106/files/styles/our_work_grid_medium_1200x800/public/work/grid/medium/O22_CANNES_HOME%20SITE%20TILES_NOTY11.jpg?itok=kEopWUV2 1200w"
                                                media="(min-width: 720px)" sizes="30vw" /> */}
                                    <img
                                        sizes="(min-width:720px) 30vw, 100vw"
                                        alt="Ogilvy Cannes Winners 2022 - 2" title="Ogilvy Cannes Winners 2022 - 2" typeof="foaf:Image"
                                        src={img1}
                                    />
                                    <h3 class="work__item-title">
                                        <span>Bride Armour, Burger Glitch, Don&#039;t Ever Leave Me
                                            <span class="work__item-client">Cannes Winners
                                            </span>
                                        </span>
                                    </h3>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </main >
    </>)
}


export default Home;
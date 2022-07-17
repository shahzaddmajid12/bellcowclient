import React from "react";
import img1 from '../assets/img1.jpeg';
import Header from "../header/Header";

const About = () => {
    return (
        <>
            <Header />
            <main id="main" class="site-main">
                <div class="svg-sprite">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <symbol id="close-icon" viewBox="0 0 14.6 14.6">
                            <path fill="none" stroke="currentColor" stroke-width=".8" d="M.3.3l14 14m0-14l-14 14" />
                        </symbol>
                        <symbol id="plus-icon" viewBox="0 0 20.1 20.1">
                            <path fill="none" stroke="currentColor" d="M10.1 0v20.1m10-10H0" />
                        </symbol>
                    </svg>
                </div>
                <div class="hidden"></div>
                <div className="block-region-top">
                    <div className="has-sticky section--dark">
                        <section className="section section--sticky section--v-center hero hero--black">
                            <div className="section__mask"></div>
                            <div className="container">
                                <div class="hero--con">
                                    <p>Ogilvy has been growing brands and businesses since 1948. We continue that rich legacy through
                                        borderless creativity—operating, innovating, and creating at the intersection of talent and
                                        capabilities. Our experts in Public Relations, Consulting, Advertising, Health, and Experience work
                                        fluidly across 131 offices in 93 countries.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="team has-sticky js-team">
                    <section className="section section--sticky section--flush-bottom scrollSection noscriptCSS" id="team">
                        <div className="section__mask"></div>
                        <div className="container">
                            <h2 className="section__title">Our Team</h2>
                            <div
                                class="view view-our-team view-id-our_team view-display-id-our_team_about js-view-dom-id-5be8604e78d4da081dc839a0a8c23fce863909c99dfafca59c3ce7aa1980d598">
                                <div class="team__grid team__size--small">
                                    <div class="team__grid-item">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait">
                                                    <img
                                                        src={img1}
                                                        alt="Tope" title="Ajala" />
                                                    <div className="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Tope <span class="block">
                                                                Ajala </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Global Head of Diversity, Equity &amp; Inclusion
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Tope Global Head of Diversity, Equity &amp;
                                                                Inclusion
                                                                bio</title>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Tope <span class="block">
                                                                        Ajala </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Global Head of Diversity, Equity &amp; Inclusion
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p>As Global Head of Diversity, Equity &amp;
                                                                        Inclusion, Tope partners with leaders
                                                                        across Ogilvy’s global network to develop and implement
                                                                        practices, policies, and
                                                                        programs that will ensure Ogilvy has a strong culture of
                                                                        belonging—one that fosters an
                                                                        open, equitable environment where everyone can thrive.
                                                                    </p>
                                                                    <p>Tope joined Ogilvy from WPP where she was DE&amp;I Lead
                                                                        responsible for driving
                                                                        inclusion strategy, partnerships, narrative, and
                                                                        insights. In this role, she developed
                                                                        programs that accelerated the progress and integration
                                                                        of diversity and inclusion across
                                                                        the organization which improved employee experience
                                                                        while driving
                                                                        business results—including WPPs first-ever Belonging
                                                                        Training, Safe Room Conversations,
                                                                        and Leadership Program for underrepresented
                                                                        groups. While at WPP Tope also served in a
                                                                        variety of project management and operations marketing
                                                                        roles supporting clients like
                                                                        T-Mobile and Google as well as WPP’s new business
                                                                        efforts. Prior to WPP, Tope spent the
                                                                        early years of her career at an investment bank
                                                                        developing people analytics capabilities
                                                                        across the business.  </p>
                                                                    <p>Born in Nigeria and raised in the UK, Tope is an
                                                                        award-winning DE&amp;I advocate who
                                                                        has lived and worked in London, Germany, Singapore,
                                                                        Japan, and San Francisco—experience
                                                                        which has deepened her appreciation and championing for
                                                                        multiculturalism and inclusion.
                                                                        In 2018 she cofounded <a
                                                                            href="https://www.levelset.group/"
                                                                            rel="noopener noreferrer"
                                                                            target="_blank">LevelSet</a>—a global nonprofit
                                                                        connecting high potential individuals
                                                                        in Tech &amp; STEM from underserved communities with
                                                                        mentors from similar fields with
                                                                        the aim to advance and empower the Black community with
                                                                        resources.  </p>
                                                                    <p>In her spare time, Tope enjoys curated travel, reading,
                                                                        tennis and yoga.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__press">
                                                                    <h5 class="employee__column-header">Recent Press</h5>
                                                                    <ul>
                                                                        <li> <a href=""
                                                                            target="_blank">Ogilvy names Tope Ajala global
                                                                            head of diversity, equity and
                                                                            inclusion</a></li>
                                                                        <li> <a href=""
                                                                            target="_blank">Ogilvy Promotes Tope Ajala to
                                                                            Global Head of Diversity, Equity &amp;
                                                                            Inclusion</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:tope.ajala@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="baudechon">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="Yves Baudechon | Ogilvy" title="Yves Baudechon | Ogilvy"
                                                        typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Yves <span class="block">
                                                                Baudechon </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            President and Co-Founder, Social.Lab Worldwide &amp; Global Lead,
                                                            Social &amp; Performance
                                                            Expert Group
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Yves President and Co-Founder, Social.Lab
                                                                Worldwide &amp; Global Lead,
                                                                Social &amp; Performance Expert Group
                                                                bio</title>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Yves <span class="block">
                                                                        Baudechon </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    President and Co-Founder, Social.Lab Worldwide &amp; Global
                                                                    Lead, Social &amp; Performance
                                                                    Expert Group
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p><span><span><span><span><span>Yves is
                                                                    </span></span></span><span><span><span>President
                                                                        and Co-Founder of Social.Lab
                                                                        Worldwide</span></span></span><span><span><span>
                                                                            and the
                                                                        </span></span></span><span><span><span>Global
                                                                            Lead of Ogilvy’s Social
                                                                            &amp; Performance Expert Group.
                                                                            Social.Lab is a strategy, content
                                                                            and media
                                                                            social specialist agency and part of
                                                                            the global Ogilvy network.
                                                                            Social.Lab
                                                                            combines audience-centric creativity
                                                                            with data-driven distribution to
                                                                            deliver
                                                                            effective results for modern
                                                                            marketers.
                                                                        </span></span></span></span></span>
                                                                    </p>
                                                                    <p><span><span><span><span><span>Yves is a serial
                                                                        entrepreneur with a 35-year career
                                                                        in
                                                                        creating and developing start-ups in
                                                                        the communications sector. His
                                                                        career
                                                                        began with the creation of Marketing
                                                                        Power in the 1990s, a direct
                                                                        marketing
                                                                        agency that he sold to DDB Belgium
                                                                        to which he served as CEO until
                                                                        2007. In
                                                                        2000, Yves co-created JustForYou,
                                                                        the largest e-mail marketing program
                                                                        in
                                                                        Belgium which was sold to Belgium’s
                                                                        leading telco two years later. He
                                                                        went on
                                                                        to  co-found Radionomy in 2008, a
                                                                        worldwide platform that provides
                                                                        people with
                                                                        the tools and infrastructure to
                                                                        create, broadcast, promote and
                                                                        monetize their
                                                                        own online radio stations, which
                                                                        sold to Vivendi in 2015.
                                                                    </span></span></span></span></span></p>
                                                                    <p><span><span><span><span><span>When Yves created
                                                                        Social.Lab with co-founder Gilles
                                                                        Bindels, they had the ambition to
                                                                        build a different type of social
                                                                        agency,
                                                                        combining hard working content ideas
                                                                        with smart targeting to bridge the
                                                                        traditional media and creative
                                                                        agency divide. Social.Lab was
                                                                        acquired by
                                                                        WPP/Ogilvy in 2013 and now has 13
                                                                        offices on 4
                                                                        continents</span></span></span><span><span>—</span></span><span><span><span>a
                                                                            dynamic community of 645
                                                                            multidisciplinary specialists that
                                                                            combine content,
                                                                            creativity and paid strategy with a
                                                                            performance focus.
                                                                        </span></span></span></span></span></p>
                                                                    <p><span><span><span><span><span>Yves is a board member of
                                                                        several Ogilvy agencies
                                                                        including France, Germany, The
                                                                        Netherlands, Belgium, Poland and
                                                                        Switzerland.</span></span></span></span></span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__press">
                                                                    <h5 class="employee__column-header">Recent Press</h5>
                                                                    <ul>
                                                                        <li> <a href=""
                                                                            target="_blank">November Lunch with Yves
                                                                            Baudechon, President &amp; Co-Founder,
                                                                            Social.Lab Worldwide</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:yves.baudechon@social-lab.eu">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href=""
                                                                            target="_blank">LinkedIn</a></li>
                                                                        <li> <a href=""
                                                                            target="_blank">Twitter</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="beresford-hill">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Chris Beresford-Hill | Ogilvy"
                                                        title="Chris Beresford-Hill | Ogilvy" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Chris <span class="block">
                                                                Beresford-Hill </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            President of Advertising, North America
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Chris President of Advertising, North America
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Chris <span class="block">
                                                                        Beresford-Hill </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    President of Advertising, North America
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p>Chris leads Ogilvy Advertising in North America, while
                                                                        also overseeing the creative
                                                                        product across the region.  </p>
                                                                    <p>He most recently spent 4 years as Chief Creative Officer
                                                                        at TBWA\Chiat\Day NY, where he
                                                                        helped lead a turnaround resulting in the most creative
                                                                        awards in the agency’s history,
                                                                        180% business growth, and a return to the AdAge Agency
                                                                        A-List, where after a decade-long
                                                                        absence, "seemingly out of nowhere New York became
                                                                        TBWA's most surprising innovation
                                                                        machine.” </p>
                                                                    <p>Prior to his time at TBWA, Chris spent 8 years as ECD at
                                                                        BBDO New York, along with
                                                                        partner Dan Lucey, steering some of the agency’s most
                                                                        iconic work and helping the office
                                                                        earn multiple AdAge A-List, Creativity Agency of the
                                                                        Year, and ADWEEK Agency of the Year
                                                                        accolades. Their breakthrough work also helped Guinness
                                                                        become Clio Advertiser of the
                                                                        Year and brought Foot Locker to the forefront of pop
                                                                        culture, while reaching its highest
                                                                        share price in history. </p>
                                                                    <p>Chris believes strongly that when creativity is hardwired
                                                                        to business problems or
                                                                        opportunities, no idea is too bold or brave. He preaches
                                                                        that you can be hard on the
                                                                        work and kind to each other, and that when teams take
                                                                        care of each other, everything
                                                                        else takes care of itself. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__press">
                                                                    <h5 class="employee__column-header">Recent Press</h5>
                                                                    <ul>
                                                                        <li> <a
                                                                            href="https://www.adweek.com/agencies/ogilvy-names-tbwa-new-yorks-chris-beresford-hill-president-of-advertising-north-america/">Ogilvy
                                                                            Names TBWA New York&#039;s Chris Beresford-Hill
                                                                            President of Advertising Nort…</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:chris.beresford-hill@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a
                                                                            href="https://www.linkedin.com/in/chrisberesfordhill">LinkedIn</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="bulchandani">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="Devika Bulchandani | Ogilvy" title="Devika Bulchandani | Ogilvy"
                                                        typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Devika <span class="block">
                                                                Bulchandani </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Global President &amp; Chief Executive Officer, North America
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Devika Global President &amp; Chief Executive
                                                                Officer, North America
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Devika <span class="block">
                                                                        Bulchandani </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Global President &amp; Chief Executive Officer, North
                                                                    America
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p>Devika is Global President and North America CEO of
                                                                        Ogilvy. In her global role, Devika
                                                                        is responsible for driving growth across the agency's
                                                                        five business units: Advertising,
                                                                        PR, Experience, Health, and Growth &amp; Innovation. As
                                                                        CEO of North America, she
                                                                        oversees all aspects of the agency's business across the
                                                                        United States and Canada. In
                                                                        both roles Devika ensures the agency's borderless
                                                                        creativity is deployed to deliver
                                                                        ideas that create impact for clients.</p>
                                                                    <p><span><span><span><span><span>Devika previously served
                                                                        as President of North America
                                                                        for McCann Worldgroup. Prior to that
                                                                        role, Devika was President of McCann
                                                                        New
                                                                        York, the company’s lead
                                                                        office. Under her leadership that
                                                                        office experienced
                                                                        a period of significant growth and
                                                                        industry recognition that
                                                                        encompassed
                                                                        numerous creative, effectiveness and
                                                                        innovation awards. In 2019 she was
                                                                        recognized by Campaign Magazine as
                                                                        U.S. Advertising Agency Head of the
                                                                        Year.
                                                                        Over the past four years McCann New
                                                                        York won a total of 100 Cannes Lions
                                                                        and
                                                                        was the 2nd most awarded agency in
                                                                        2019 in the world. Under her
                                                                        leadership,
                                                                        McCann was named the Most Creatively
                                                                        Effective Agency Network in the U.S.
                                                                        by
                                                                        the Effie Awards last
                                                                        year.</span></span></span></span></span>
                                                                    </p>
                                                                    <p><span><span><span><span><span>Devika is deeply devoted to
                                                                        social causes that promote
                                                                        equality, diversity and
                                                                        inclusiveness. She is a founding
                                                                        member of Times Up
                                                                        Advertising, where she has
                                                                        tirelessly championed equality for
                                                                        women in
                                                                        advertising, particularly for women
                                                                        of color. In 2017, she was named
                                                                        "Working
                                                                        Mother of the Year" by She Runs It
                                                                        and is also a previous recipient of
                                                                        the
                                                                        AdColor Innovator Award. She has
                                                                        volunteered her time for numerous
                                                                        industry
                                                                        and community projects, including
                                                                        work with the Ad Council and is an
                                                                        active
                                                                        board member of the Ad Club in New
                                                                        York.  </span></span></span></span></span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__press">
                                                                    <h5 class="employee__column-header">Recent Press</h5>
                                                                    <ul>
                                                                        <li> <a href="https://adage.com/article/agency-news/devika-bulchandani-named-global-president-ogilvy/2395076"
                                                                            target="_blank">Devika Bulchandani Named Global
                                                                            President of Ogilvy</a></li>
                                                                        <li> <a href="https://adage.com/article/agency-news/devika-bulchandani-looks-ogilvys-future-she-prepares-exit-mccann-after-2-decades/2299596"
                                                                            target="_blank">Devika Bulchandani Looks to
                                                                            Ogilvy&#039;s Future </a></li>
                                                                        <li> <a href="https://www.youtube.com/watch?v=tjz5lfSjIWs"
                                                                            target="_blank">Devika
                                                                            Bulchandani, President, North America, Mccann
                                                                            Worldgroup On NewsX India …</a></li>
                                                                        <li> <a href="https://aef.com/building-talent/industry-conversations/industry-conversations-devika-bulchandani/"
                                                                            target="_blank">Industry Conversation with
                                                                            Devika Bulchandani</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:devika.bulchandani@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/devika-bulchandani-84239956/"
                                                                            target="_blank">LinkedIn</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="clementson">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="Ralph Clementson" title="Ralph Clementson" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Ralph <span class="block">
                                                                Clementson </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Chief Operating Officer, EMEA
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Ralph Chief Operating Officer, EMEA
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Ralph <span class="block">
                                                                        Clementson </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Chief Operating Officer, EMEA
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p>Ralph is the Executive Partner, Chief Operating Officer,
                                                                        Europe, Middle East and
                                                                        Africa, looking after finance and M&amp;A, and driving
                                                                        the performance of the regional
                                                                        business both in terms of good internal management and
                                                                        in how we can work more
                                                                        efficiently with clients.  <br />
                                                                        <br />
                                                                        His particular interests include all types of
                                                                        implementation activity in marketing,
                                                                        helping build a close and professional leadership team
                                                                        in the region, and building and
                                                                        learning from tools developed for the management of
                                                                        agencies, focused around data
                                                                        management and continual learning. He believes strongly
                                                                        the best way to produce great
                                                                        integrated work for clients is to have a tightly
                                                                        integrated team and operations, and has
                                                                        spent years working to break down barriers to help
                                                                        agencies perform more nimbly and
                                                                        better.<br />
                                                                        <br />
                                                                        Having spent eight years with Price Waterhouse London,
                                                                        he joined WPP in 1991 while the
                                                                        Group was in the middle of a cashflow crisis, looking
                                                                        after the finance relationship
                                                                        with the banks and reporting to the market. He moved to
                                                                        Ogilvy France in 1996 as Finance
                                                                        Director, helping set up MindShare and also acting as
                                                                        their FD, while representing the
                                                                        group as FD for the region on various clients including
                                                                        IBM. In 2001 he took over as
                                                                        Finance Director for the EMEA region, becoming General
                                                                        Manager in 2006. In the
                                                                        intervening years, he has helped complete more than
                                                                        twenty acquisitions, pulled the
                                                                        group in Europe into coherent country managed
                                                                        businesses, and created a finance and
                                                                        operational team that he is very proud of. He is based
                                                                        in London and Paris.<br />
                                                                        <br />
                                                                        Ralph is always rebuilding houses wherever he happens to
                                                                        be living, whether from having
                                                                        bought an endangered house or due to fire. He calms
                                                                        himself over the builders' lack of
                                                                        progress and additional charges through karate, which he
                                                                        has practiced since university.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:ralph.clementson@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="cocks">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Paul Cocks" title="Paul Cocks" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Paul <span class="block">
                                                                Cocks </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Chief Financial Officer, Asia
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Paul Chief Financial Officer, Asia
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Paul <span class="block">
                                                                        Cocks </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Chief Financial Officer, Asia
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p>Paul is Executive Partner, Chief Financial Officer, Asia.
                                                                        Paul was born in the U.K. and
                                                                        was educated at London University, where in 1979 he
                                                                        obtained a BA in Accountancy. He
                                                                        qualified as a Chartered Accountant in 1982, after
                                                                        training with Ernst &amp;
                                                                        Young.<br />
                                                                        <br />
                                                                        After three years with McCann and five years as a
                                                                        shareholder in the No. 5 U.K. direct
                                                                        marketing agency, Paul joined O&amp;M in 1992.<br />
                                                                        <br />
                                                                        Paul started as Finance Director of O&amp;M Direct in
                                                                        London and moved to be Group
                                                                        Managing Director in 1995.<br />
                                                                        <br />
                                                                        In 1997, he moved to Sydney to join O&amp;M as Chief
                                                                        Operating Officer of Australia and
                                                                        New Zealand where he led the Ogilvy team in the merger
                                                                        between Ogilvy and John Singleton
                                                                        Advertising to form SOM.<br />
                                                                        <br />
                                                                        In January 2000, Paul assumed the role of Business
                                                                        Development Director of Ogilvy Asia
                                                                        Pacific. In this role he was responsible for mergers,
                                                                        acquisitions and the financial
                                                                        support for Ogilvy PR, Ogilvy One, and Enterprise IG in
                                                                        Asia Pacific.<br />
                                                                        <br />
                                                                        In 2006, he took on the role of Regional Commercial
                                                                        Director concentrating on growth
                                                                        initiatives in North East Asia and providing commercial
                                                                        support to the Bates Asia and
                                                                        OgilvyAction networks.<br />
                                                                        <br />
                                                                        Paul was appointed Regional Chief Financial Officer of
                                                                        Asia Pacific with effect from
                                                                        April 2008.<br />
                                                                        <br />
                                                                        Paul’s outside interests have included appointment to
                                                                        the U.K. Committee of the Hubert
                                                                        Humphrey Institute of Public Affairs. He enjoys many
                                                                        sports including golf and tennis.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:paul.cocks@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="cornwell">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="John Cornwell" title="John Cornwell" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            John <span class="block">
                                                                Cornwell </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Chief Operating Officer, UK &amp; Global Commercial Director
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open John Chief Operating Officer, UK &amp; Global
                                                                Commercial Director
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    John <span class="block">
                                                                        Cornwell </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Chief Operating Officer, UK &amp; Global Commercial Director
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p>John is Executive Partner, Chief Operating Officer, UK
                                                                        &amp; Global Commercial
                                                                        Director. He is hugely passionate about the creative
                                                                        output of the agency and ensuring
                                                                        that the ideas Ogilvy produces for brands which drive
                                                                        their businesses are valued
                                                                        accordingly. To ensure Ogilvy continues to service
                                                                        clients in the most effective way
                                                                        possible, John is spearheading the commercial efforts to
                                                                        move towards a truly integrated
                                                                        Ogilvy.<br />
                                                                        <br />
                                                                        In an ever-changing industry, he relishes the challenges
                                                                        ahead and is highly skilled in
                                                                        negotiating with procurement and securing terms that
                                                                        work for all parties. John has
                                                                        personally managed many key global client relationships
                                                                        (commercially) throughout his
                                                                        career including Kimberly-Clark, Ford, IAG and American
                                                                        Express.<br />
                                                                        <br />
                                                                        John’s career at Ogilvy began when he joined in London
                                                                        as a Management Accountant – more
                                                                        than a few years ago! Since then, he ascended to a
                                                                        variety of different roles across the
                                                                        network in both London and New York, with his remit
                                                                        including regional and global
                                                                        responsibilities.<br />
                                                                        <br />
                                                                        After his time as Finance Director for OgilvyOne and
                                                                        Director of Commercial Strategy and
                                                                        Operations for EMEA, John became Worldwide Commercial
                                                                        Director. Managing a team of
                                                                        Commercial Directors based throughout the world and
                                                                        responsible for managing global
                                                                        client relationships commercially, he has been integral
                                                                        to driving the adoption of
                                                                        commercial best practice across the globe, including
                                                                        pricing, negotiation, procurement
                                                                        strategy, new business and commercial training.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:john.cornwell@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/john-cornwell-17684822/"
                                                                            target="_blank">LinkedIn</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="ryan-cornelius">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="Stacey Ryan-Cornelius | Ogilvy"
                                                        title="Stacey Ryan-Cornelius | Ogilvy" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Stacey <span class="block">
                                                                Ryan-Cornelius </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Global Chief Financial Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Stacey Global Chief Financial Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Stacey <span class="block">
                                                                        Ryan-Cornelius </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Global Chief Financial Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p><span><span><span><span><span>Stacey is Ogilvy’s Global
                                                                        Chief Financial Officer and
                                                                        oversees all financial operations of
                                                                        the Ogilvy global network. She is
                                                                        also a
                                                                        member of the WPP Finance leadership
                                                                        team.
                                                                    </span></span></span></span></span>
                                                                    </p>
                                                                    <p><span><span><span><span><span>Stacey<strong>
                                                                    </strong>most recently served as
                                                                        Global
                                                                        Chief Financial Officer and Chief
                                                                        Operating Officer of Geometry
                                                                        Global,  where
                                                                        she was a driving force behind the
                                                                        agency’s transformation. Stacey
                                                                        played an
                                                                        important role in the deployment
                                                                        of a distinct and advanced
                                                                        technology
                                                                        platform, Living CommerceTM, to
                                                                        establish a new way of working that
                                                                        is agile,
                                                                        collaborative and reflects the needs
                                                                        of today’s modern marketers. Prior
                                                                        to
                                                                        that, Stacey was Global Chief
                                                                        Financial Officer of WPP Health
                                                                        &amp; Wellness.
                                                                        Stacey originally joined Ogilvy in
                                                                        1999 and held various regional and
                                                                        global
                                                                        leadership roles, including serving
                                                                        as the company’s Worldwide
                                                                        Controller
                                                                        until 2018. She began her career at
                                                                        PricewaterhouseCoopers where she
                                                                        consulted
                                                                        on financial statement audits,
                                                                        mergers and acquisitions and
                                                                        IPOs for  major
                                                                        multinational advertising and
                                                                        publishing clients from Simon &amp;
                                                                        Schuster to
                                                                        Viacom’s MTV
                                                                        Network.</span></span></span></span></span>
                                                                    </p>
                                                                    <p><span><span><span><span><span>Stacey has been
                                                                        featured by Black Enterprise
                                                                        Magazine as
                                                                        one of the 75 Most Powerful Women in
                                                                        Business and is often called upon to
                                                                        speak about diversity and inclusion,
                                                                        and the importance of increased
                                                                        representation across all levels of
                                                                        the marketing and communications
                                                                        industry.</span></span></span></span></span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__press">
                                                                    <h5 class="employee__column-header">Recent Press</h5>
                                                                    <ul>
                                                                        <li> <a href="https://marcomweekly.com/2020/12/14/ogilvy-promotes-stacey-ryan-cornelius-and-jag-dhanji-to-replace-global-cfo-and-people-officer/"
                                                                            target="_blank">Ogilvy promotes Stacey
                                                                            Ryan-Cornelius and Jag Dhanji to replace
                                                                            global CFO and …</a></li>
                                                                        <li> <a href="https://www.youtube.com/watch?v=eC8cnTng_0c"
                                                                            target="_blank">The Diversity
                                                                            Imperative with UWG&#039;s Greg Edwards &amp;
                                                                            Stacey Ryan-Cornelius </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:stacey.ryan-cornelius@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/stacey-ryan-cornelius-94569b10/"
                                                                            target="_blank">LinkedIn</a></li>
                                                                        <li> <a href="https://twitter.com/staceyrchealth?lang=en"
                                                                            target="_blank">Twitter</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="de blois">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img

                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="Carina De Blois" title="Carina De Blois" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Carina <span class="block">
                                                                De Blois </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            President, New York
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Carina President, New York
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Carina <span class="block">
                                                                        De Blois </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    President, New York
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p>Over the past 20 years Carina has partnered with some of
                                                                        the most seasoned and iconic
                                                                        clients to the newer up and comers helping them build
                                                                        their brands and engage customers
                                                                        while driving business growth.</p>
                                                                    <p>Carina believes brands need to move from treating revenue
                                                                        problems with tactics to
                                                                        solving business challenges with brand experiences that
                                                                        change the way customers think,
                                                                        act and feel.</p>
                                                                    <p>She has a diverse background leading both Global B2B tech
                                                                        brands such as IBM and
                                                                        Facebook and B2C brands such as Samsung and J&amp;J.</p>
                                                                    <p>During her 7 years at Ogilvy she’s partnered with IBM to
                                                                        modernize their brand with
                                                                        first of its kind marketing with Watson and AI. She’s
                                                                        also created The Performance
                                                                        Accelerator, a new capability that brings together data
                                                                        and creativity to drive business
                                                                        impact. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:carina.deblois@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="dunleavy">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="John Dunleavy" title="John Dunleavy" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            John <span class="block">
                                                                Dunleavy </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Global Chief Client Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open John Global Chief Client Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    John <span class="block">
                                                                        Dunleavy </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Global Chief Client Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p>Based in New York, John is a seasoned executive who
                                                                        believes in the unreasonable power
                                                                        of creativity. He has made good use of his passport,
                                                                        working across geographies and
                                                                        cultures to deliver ideas that make a difference to
                                                                        people, brands and the bottom line.
                                                                        He is a passionate and commercially aware leader, who is
                                                                        able to connect brands to
                                                                        consumers and make things happen. <br />
                                                                        <br />
                                                                        IBM has been the cornerstone of the Ogilvy network for
                                                                        the past 25 years and John leads
                                                                        the relationship across Ogilvy and the broader WPP
                                                                        community. Tasked to steward this
                                                                        107-year-old tech brand, John leads a truly integrated
                                                                        team, operating a unique model
                                                                        that includes strategy, creative and media with data and
                                                                        analytics at its core. He is
                                                                        focused on creative excellence, driving transformation,
                                                                        deep collaboration and most
                                                                        importantly keeping IBM in the cultural
                                                                        conversation.<br />
                                                                        <br />
                                                                        John joined Ogilvy from IPG where he was Global
                                                                        President, m:united//McCann, Microsoft’s
                                                                        fully integrated global advertising agency. During his
                                                                        tenure, their work made a
                                                                        significant contribution to Microsoft’s turn
                                                                        around. <br />
                                                                        <br />
                                                                        Prior to IPG, John held senior roles At Saatchi &amp;
                                                                        Saatchi, Grey and Publicis working
                                                                        with some of the world’s most famous marketers, such as
                                                                        Lenovo, Microsoft, Diageo,
                                                                        Coca-Cola, Sony Playstation, Pernod-Ricard, Heineken and
                                                                        SAB Miller. His work has been
                                                                        recognized by the industry and his teams have won over
                                                                        300 international awards,
                                                                        including a coveted Cannes Lions Grand Prix and the Clio
                                                                        for advertiser of the
                                                                        year.<br />
                                                                        <br />
                                                                        John lives in Connecticut with his wife, two boys and
                                                                        Sid the pug. He is an ex-boxer and
                                                                        often appears ring side at major title fights.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:john.dunleavy@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="ford">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="David Ford | Ogilvy" title="David Ford | Ogilvy"
                                                        typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            David <span class="block">
                                                                Ford </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Global Chief Communications Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open David Global Chief Communications Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    David <span class="block">
                                                                        Ford </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Global Chief Communications Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p>David has been Ogilvy’s Global Chief Communications
                                                                        Officer since 2020.</p>
                                                                    <p>As one of Ogilvy’s chief brand champions David manages
                                                                        the reputation of one of the
                                                                        world’s most recognized brands and award-winning
                                                                        creative companies. His
                                                                        responsibilities as Global Chief Communications Officer
                                                                        include driving all global
                                                                        external and internal communications, evangelizing the
                                                                        strength of the company’s global
                                                                        creative network, and promoting the diverse range of
                                                                        offerings that make Ogilvy the best
                                                                        partner for growth in the market.</p>
                                                                    <p>David is an inclusive, strategic communications leader
                                                                        who has leveraged the power of
                                                                        storytelling and creativity to drive cultural impact
                                                                        throughout his career. He has
                                                                        extensive experience leading communications teams
                                                                        spanning the advertising and media
                                                                        industries. Prior to joining Ogilvy in 2019, David
                                                                        worked for first class organizations
                                                                        including ABC News, where he drove media relations
                                                                        strategy and served as a spokesman
                                                                        for a range of ABC News talent and broadcasts including
                                                                        ‘World News with Diane Sawyer’
                                                                        as well as the news division’s breaking news, political,
                                                                        international, and
                                                                        investigative units. In 2013 he oversaw communications
                                                                        strategy for the launch of Fusion
                                                                        TV, a cable network formed as a joint venture of
                                                                        Disney/ABC and Univision; he added
                                                                        oversight of the network’s marketing efforts in 2015. He
                                                                        later played a critical role as
                                                                        Fusion grew from a Miami-based cable network to a
                                                                        national media company that grew to
                                                                        include recognizable digital brands such as Gizmodo,
                                                                        Jezebel, Deadspin, and The Onion.
                                                                        David began his career as a publicist at The Karpel
                                                                        Group, the entertainment industry's
                                                                        gold standard for LGBTQ market outreach.</p>
                                                                    <p>David is currently the co-chair of the 4A’s Agency
                                                                        Communications Committee, and is
                                                                        serving on the 2021 Public Relations Jury for The One
                                                                        Show. He has a B.A. in Music
                                                                        Industry from the SUNY College at Oneonta and currently
                                                                        lives in New York with his
                                                                        partner and their golden retriever Maddie.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__press">
                                                                    <h5 class="employee__column-header">Recent Press</h5>
                                                                    <ul>
                                                                        <li> <a href="https://www.adweek.com/agencies/ogilvy-unveils-usa-2-0-restructuring-plan-promises-to-close-gender-pay-gap/"
                                                                            target="_blank">Ogilvy Unveils ‘USA 2.0’
                                                                            Restructuring Plan, Promises to Close
                                                                            Gender Pay Gap</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:david.ford@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="fox">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        src={img1}
                                                        alt="David Fox | Ogilvy" title="David Fox | Ogilvy"
                                                        typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            David <span class="block">
                                                                Fox </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Chief Executive Officer, MENA
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open David Chief Executive Officer, MENA
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    David <span class="block">
                                                                        Fox </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Chief Executive Officer, MENA
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p>David holds the role of <span>Chief Executive Officer,
                                                                        Middle East &amp; North
                                                                        Africa</span>. Previous to this role David was
                                                                        Executive Partner and Chief Executive
                                                                        in Australia and New Zealand, a post he has held since
                                                                        returning to his home country in
                                                                        2014.<br />
                                                                        <br />
                                                                        Additionally, in 2018 he took on the role of Chief
                                                                        Transformation Officer, Creative
                                                                        Agencies, WPP AU NZ, driving WPP’s AU NZ creative
                                                                        agencies to be primed for the
                                                                        future.<br />
                                                                        <br />
                                                                        David began his career in Sydney with Batey Ads before
                                                                        joining Ogilvy in 1999 in
                                                                        Australia, working on Nestlé and Unilever among other
                                                                        major brands. Four years later he
                                                                        was promoted to Executive Director of the Sydney office,
                                                                        managing new business and
                                                                        client relationships throughout the agency. In 2005,
                                                                        David moved to London to head up
                                                                        Ogilvy’s Global Trade Marketing operation in Ogilvy’s
                                                                        global shopper marketing agency.
                                                                        In 2006 David was promoted to Global Client Services
                                                                        Director and in 2009 took over as
                                                                        Worldwide Managing Director across all global
                                                                        clients.<br />
                                                                        <br />
                                                                        David has been a judge at both Cannes Lions and Spikes
                                                                        Asia in the areas of Advertising
                                                                        Effectiveness.<br />
                                                                        <br />
                                                                        He has a diploma in Advertising and Communications and
                                                                        is a graduate of Australia's
                                                                        Award School.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:david.fox@ogilvy.com.au">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/david-fox-ba531311/"
                                                                            target="_blank">LinkedIn</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="genolet">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Horacio Genolet" title="Horacio Genolet" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Horacio <span class="block">
                                                                Genolet </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Chief Executive Officer, Latin America
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Horacio Chief Executive Officer, Latin America
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Horacio <span class="block">
                                                                        Genolet </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Chief Executive Officer, Latin America
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p>Horacio is Executive Partner, Chief Executive, Latin
                                                                        America and has led Ogilvy’s Latin
                                                                        American operations since January 2017.<br />
                                                                        <br />
                                                                        Horacio joined Ogilvy in 1993 in Argentina as an Account
                                                                        Supervisor. He was soon
                                                                        promoted to Account Group Director where he oversaw
                                                                        clients such as Duracell, IBM,
                                                                        SmithKline-Beecham and Mercedes Benz. After a three-year
                                                                        stint as Advertising Manager at
                                                                        Telecom Group, the largest cellular telephone company in
                                                                        Argentina, Horacio moved to
                                                                        media agency Carat as Regional Director for Latin
                                                                        America.<br />
                                                                        <br />
                                                                        In 2004 Horacio returned to Ogilvy in Mexico as VP of
                                                                        Client Services in charge of
                                                                        accounts such as American Express, Volvo, Coca-Cola and
                                                                        Gillette.<br />
                                                                        <br />
                                                                        In 2006, he was appointed as Managing Director of the
                                                                        Ogilvy Miami, while also taking
                                                                        over duties as Regional Account Director for American
                                                                        Express, Motorola, Kraft and
                                                                        Lenovo. Horacio returned to Ogilvy Mexico in 2008 as
                                                                        Executive VP and in August of 2011
                                                                        he was appointed CEO.<br />
                                                                        <br />
                                                                        Under Horacio’s leadership, Ogilvy has been ranked the
                                                                        number one agency in Mexico by
                                                                        Merca2.0 for three consecutive years (2014, 2015,
                                                                        2016).<br />
                                                                        <br />
                                                                        Horacio has been recognized for five consecutive years
                                                                        (2012-2017) as one of the 300
                                                                        Most Influential Leaders of Mexico by Líderes Mexicanos
                                                                        magazine, and he was also named
                                                                        one of the Top 100 Marketing and Advertising Leaders by
                                                                        Merca2.0.<br />
                                                                        <br />
                                                                        In 2015, Horacio became President of the Executive Board
                                                                        of the Mexican Association of
                                                                        Advertising Agencies. In 2016, he acted as President of
                                                                        the EFFIE Awards Council.<br />
                                                                        <br />
                                                                        Horacio has a degree in Advertising from the Universidad
                                                                        del Salvador in Buenos Aires
                                                                        and a Master's Degree in Integrated Communications from
                                                                        Bonn University in Germany.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:horacio.genolet@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="heimann">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Philip Heimann" title="Philip Heimann" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Philip <span class="block">
                                                                Heimann </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Global Chief Marketing &amp; Growth Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Philip Global Chief Marketing &amp; Growth
                                                                Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Philip <span class="block">
                                                                        Heimann </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Global Chief Marketing &amp; Growth Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p><span>Philip is Executive Partner, Global Chief Marketing
                                                                        &amp; Growth Officer. Philip
                                                                        is responsible for the business development and
                                                                        marketing efforts of one of the
                                                                        world’s most recognized brands and award-winning
                                                                        creative agencies.<span>
                                                                        </span></span><br /><br /><span>Over the past 20
                                                                            years, Philip has successfully
                                                                            fostered cultures on the client and agency side
                                                                            where creativity flourishes and is
                                                                            directed to drive demonstrably better business
                                                                            results. He has led global teams
                                                                            working on some of the most iconic brands including
                                                                            S.C. Johnson, Coca Cola, Netflix,
                                                                            Volkswagen, Dove and Harvey Nichols among
                                                                            others.<span>
                                                                            </span></span><br /><br /><span>Having worked across
                                                                                every continent, Philip brings a
                                                                                unique global perspective to brand building and what
                                                                                it takes to authentically connect
                                                                                brands to culture around the world. Since joining
                                                                                Ogilvy in 2008 Philip has served in
                                                                                a diverse range of leadership roles across markets.
                                                                                From 2013 to 2016 he led Ogilvy
                                                                                Paris, the company’s third-largest global client hub
                                                                                and the network’s second
                                                                                most-awarded creative office at the time. Prior to
                                                                                that, he led new business and
                                                                                marketing for EMEA. Most recently he served as a WPP
                                                                                and Ogilvy Global Client
                                                                                Leader.</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:philip.heimann@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/philip-heimann-a1639372/"
                                                                            target="_blank">LinkedIn</a></li>
                                                                        <li> <a href="https://twitter.com/HeimannP"
                                                                            target="_blank">Twitter</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="heimann">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Philip Heimann" title="Philip Heimann" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Philip <span class="block">
                                                                Heimann </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Global Chief Marketing &amp; Growth Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Philip Global Chief Marketing &amp; Growth
                                                                Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Philip <span class="block">
                                                                        Heimann </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Global Chief Marketing &amp; Growth Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p><span>Philip is Executive Partner, Global Chief Marketing
                                                                        &amp; Growth Officer. Philip
                                                                        is responsible for the business development and
                                                                        marketing efforts of one of the
                                                                        world’s most recognized brands and award-winning
                                                                        creative agencies.<span>
                                                                        </span></span><br /><br /><span>Over the past 20
                                                                            years, Philip has successfully
                                                                            fostered cultures on the client and agency side
                                                                            where creativity flourishes and is
                                                                            directed to drive demonstrably better business
                                                                            results. He has led global teams
                                                                            working on some of the most iconic brands including
                                                                            S.C. Johnson, Coca Cola, Netflix,
                                                                            Volkswagen, Dove and Harvey Nichols among
                                                                            others.<span>
                                                                            </span></span><br /><br /><span>Having worked across
                                                                                every continent, Philip brings a
                                                                                unique global perspective to brand building and what
                                                                                it takes to authentically connect
                                                                                brands to culture around the world. Since joining
                                                                                Ogilvy in 2008 Philip has served in
                                                                                a diverse range of leadership roles across markets.
                                                                                From 2013 to 2016 he led Ogilvy
                                                                                Paris, the company’s third-largest global client hub
                                                                                and the network’s second
                                                                                most-awarded creative office at the time. Prior to
                                                                                that, he led new business and
                                                                                marketing for EMEA. Most recently he served as a WPP
                                                                                and Ogilvy Global Client
                                                                                Leader.</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:philip.heimann@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/philip-heimann-a1639372/"
                                                                            target="_blank">LinkedIn</a></li>
                                                                        <li> <a href="https://twitter.com/HeimannP"
                                                                            target="_blank">Twitter</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>   <div class="team__grid-item" data-name="heimann">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Philip Heimann" title="Philip Heimann" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Philip <span class="block">
                                                                Heimann </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Global Chief Marketing &amp; Growth Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Philip Global Chief Marketing &amp; Growth
                                                                Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Philip <span class="block">
                                                                        Heimann </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Global Chief Marketing &amp; Growth Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p><span>Philip is Executive Partner, Global Chief Marketing
                                                                        &amp; Growth Officer. Philip
                                                                        is responsible for the business development and
                                                                        marketing efforts of one of the
                                                                        world’s most recognized brands and award-winning
                                                                        creative agencies.<span>
                                                                        </span></span><br /><br /><span>Over the past 20
                                                                            years, Philip has successfully
                                                                            fostered cultures on the client and agency side
                                                                            where creativity flourishes and is
                                                                            directed to drive demonstrably better business
                                                                            results. He has led global teams
                                                                            working on some of the most iconic brands including
                                                                            S.C. Johnson, Coca Cola, Netflix,
                                                                            Volkswagen, Dove and Harvey Nichols among
                                                                            others.<span>
                                                                            </span></span><br /><br /><span>Having worked across
                                                                                every continent, Philip brings a
                                                                                unique global perspective to brand building and what
                                                                                it takes to authentically connect
                                                                                brands to culture around the world. Since joining
                                                                                Ogilvy in 2008 Philip has served in
                                                                                a diverse range of leadership roles across markets.
                                                                                From 2013 to 2016 he led Ogilvy
                                                                                Paris, the company’s third-largest global client hub
                                                                                and the network’s second
                                                                                most-awarded creative office at the time. Prior to
                                                                                that, he led new business and
                                                                                marketing for EMEA. Most recently he served as a WPP
                                                                                and Ogilvy Global Client
                                                                                Leader.</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:philip.heimann@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/philip-heimann-a1639372/"
                                                                            target="_blank">LinkedIn</a></li>
                                                                        <li> <a href="https://twitter.com/HeimannP"
                                                                            target="_blank">Twitter</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>   <div class="team__grid-item" data-name="heimann">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Philip Heimann" title="Philip Heimann" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Philip <span class="block">
                                                                Heimann </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Global Chief Marketing &amp; Growth Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Philip Global Chief Marketing &amp; Growth
                                                                Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Philip <span class="block">
                                                                        Heimann </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Global Chief Marketing &amp; Growth Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p><span>Philip is Executive Partner, Global Chief Marketing
                                                                        &amp; Growth Officer. Philip
                                                                        is responsible for the business development and
                                                                        marketing efforts of one of the
                                                                        world’s most recognized brands and award-winning
                                                                        creative agencies.<span>
                                                                        </span></span><br /><br /><span>Over the past 20
                                                                            years, Philip has successfully
                                                                            fostered cultures on the client and agency side
                                                                            where creativity flourishes and is
                                                                            directed to drive demonstrably better business
                                                                            results. He has led global teams
                                                                            working on some of the most iconic brands including
                                                                            S.C. Johnson, Coca Cola, Netflix,
                                                                            Volkswagen, Dove and Harvey Nichols among
                                                                            others.<span>
                                                                            </span></span><br /><br /><span>Having worked across
                                                                                every continent, Philip brings a
                                                                                unique global perspective to brand building and what
                                                                                it takes to authentically connect
                                                                                brands to culture around the world. Since joining
                                                                                Ogilvy in 2008 Philip has served in
                                                                                a diverse range of leadership roles across markets.
                                                                                From 2013 to 2016 he led Ogilvy
                                                                                Paris, the company’s third-largest global client hub
                                                                                and the network’s second
                                                                                most-awarded creative office at the time. Prior to
                                                                                that, he led new business and
                                                                                marketing for EMEA. Most recently he served as a WPP
                                                                                and Ogilvy Global Client
                                                                                Leader.</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:philip.heimann@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/philip-heimann-a1639372/"
                                                                            target="_blank">LinkedIn</a></li>
                                                                        <li> <a href="https://twitter.com/HeimannP"
                                                                            target="_blank">Twitter</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>   <div class="team__grid-item" data-name="heimann">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Philip Heimann" title="Philip Heimann" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Philip <span class="block">
                                                                Heimann </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Global Chief Marketing &amp; Growth Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Philip Global Chief Marketing &amp; Growth
                                                                Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Philip <span class="block">
                                                                        Heimann </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Global Chief Marketing &amp; Growth Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p><span>Philip is Executive Partner, Global Chief Marketing
                                                                        &amp; Growth Officer. Philip
                                                                        is responsible for the business development and
                                                                        marketing efforts of one of the
                                                                        world’s most recognized brands and award-winning
                                                                        creative agencies.<span>
                                                                        </span></span><br /><br /><span>Over the past 20
                                                                            years, Philip has successfully
                                                                            fostered cultures on the client and agency side
                                                                            where creativity flourishes and is
                                                                            directed to drive demonstrably better business
                                                                            results. He has led global teams
                                                                            working on some of the most iconic brands including
                                                                            S.C. Johnson, Coca Cola, Netflix,
                                                                            Volkswagen, Dove and Harvey Nichols among
                                                                            others.<span>
                                                                            </span></span><br /><br /><span>Having worked across
                                                                                every continent, Philip brings a
                                                                                unique global perspective to brand building and what
                                                                                it takes to authentically connect
                                                                                brands to culture around the world. Since joining
                                                                                Ogilvy in 2008 Philip has served in
                                                                                a diverse range of leadership roles across markets.
                                                                                From 2013 to 2016 he led Ogilvy
                                                                                Paris, the company’s third-largest global client hub
                                                                                and the network’s second
                                                                                most-awarded creative office at the time. Prior to
                                                                                that, he led new business and
                                                                                marketing for EMEA. Most recently he served as a WPP
                                                                                and Ogilvy Global Client
                                                                                Leader.</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:philip.heimann@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/philip-heimann-a1639372/"
                                                                            target="_blank">LinkedIn</a></li>
                                                                        <li> <a href="https://twitter.com/HeimannP"
                                                                            target="_blank">Twitter</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="heimann">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Philip Heimann" title="Philip Heimann" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Philip <span class="block">
                                                                Heimann </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Global Chief Marketing &amp; Growth Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Philip Global Chief Marketing &amp; Growth
                                                                Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Philip <span class="block">
                                                                        Heimann </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Global Chief Marketing &amp; Growth Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p><span>Philip is Executive Partner, Global Chief Marketing
                                                                        &amp; Growth Officer. Philip
                                                                        is responsible for the business development and
                                                                        marketing efforts of one of the
                                                                        world’s most recognized brands and award-winning
                                                                        creative agencies.<span>
                                                                        </span></span><br /><br /><span>Over the past 20
                                                                            years, Philip has successfully
                                                                            fostered cultures on the client and agency side
                                                                            where creativity flourishes and is
                                                                            directed to drive demonstrably better business
                                                                            results. He has led global teams
                                                                            working on some of the most iconic brands including
                                                                            S.C. Johnson, Coca Cola, Netflix,
                                                                            Volkswagen, Dove and Harvey Nichols among
                                                                            others.<span>
                                                                            </span></span><br /><br /><span>Having worked across
                                                                                every continent, Philip brings a
                                                                                unique global perspective to brand building and what
                                                                                it takes to authentically connect
                                                                                brands to culture around the world. Since joining
                                                                                Ogilvy in 2008 Philip has served in
                                                                                a diverse range of leadership roles across markets.
                                                                                From 2013 to 2016 he led Ogilvy
                                                                                Paris, the company’s third-largest global client hub
                                                                                and the network’s second
                                                                                most-awarded creative office at the time. Prior to
                                                                                that, he led new business and
                                                                                marketing for EMEA. Most recently he served as a WPP
                                                                                and Ogilvy Global Client
                                                                                Leader.</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:philip.heimann@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/philip-heimann-a1639372/"
                                                                            target="_blank">LinkedIn</a></li>
                                                                        <li> <a href="https://twitter.com/HeimannP"
                                                                            target="_blank">Twitter</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team__grid-item" data-name="heimann">
                                        <div class="employee">
                                            <div class="flex-wrapper">
                                                <button class="employee__portrait" role="button">
                                                    <img
                                                        src={img1}
                                                        sizes="(min-width:960px) 25vw, (min-width:769px) 33.3333vw, (min-width:480px) 50vw, 100vw"
                                                        alt="Philip Heimann" title="Philip Heimann" typeof="foaf:Image" />
                                                    <div class="employee__portrait-content">
                                                        <p class="employee__portrait-name">
                                                            Philip <span class="block">
                                                                Heimann </span>
                                                        </p>
                                                        <p class="employee__portrait-job">
                                                            Global Chief Marketing &amp; Growth Officer
                                                        </p>
                                                        <svg viewbox="0 0 20.1 20.1" class="employee__portrait-icon">
                                                            <title>click to open Philip Global Chief Marketing &amp; Growth
                                                                Officer
                                                                bio</title>

                                                        </svg>
                                                    </div>
                                                </button>
                                                <div class="employee__content-wrapper">
                                                    <div class="employee__content">
                                                        <div class="employee__column employee__column--name">
                                                            <div class="employee__column-content">
                                                                <h3 class="employee__content-name">
                                                                    Philip <span class="block">
                                                                        Heimann </span>
                                                                </h3>
                                                                <h4 class="employee__content-job">
                                                                    Global Chief Marketing &amp; Growth Officer
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--content">
                                                            <div class="employee__column-content">
                                                                <div>
                                                                    <p><span>Philip is Executive Partner, Global Chief Marketing
                                                                        &amp; Growth Officer. Philip
                                                                        is responsible for the business development and
                                                                        marketing efforts of one of the
                                                                        world’s most recognized brands and award-winning
                                                                        creative agencies.<span>
                                                                        </span></span><br /><br /><span>Over the past 20
                                                                            years, Philip has successfully
                                                                            fostered cultures on the client and agency side
                                                                            where creativity flourishes and is
                                                                            directed to drive demonstrably better business
                                                                            results. He has led global teams
                                                                            working on some of the most iconic brands including
                                                                            S.C. Johnson, Coca Cola, Netflix,
                                                                            Volkswagen, Dove and Harvey Nichols among
                                                                            others.<span>
                                                                            </span></span><br /><br /><span>Having worked across
                                                                                every continent, Philip brings a
                                                                                unique global perspective to brand building and what
                                                                                it takes to authentically connect
                                                                                brands to culture around the world. Since joining
                                                                                Ogilvy in 2008 Philip has served in
                                                                                a diverse range of leadership roles across markets.
                                                                                From 2013 to 2016 he led Ogilvy
                                                                                Paris, the company’s third-largest global client hub
                                                                                and the network’s second
                                                                                most-awarded creative office at the time. Prior to
                                                                                that, he led new business and
                                                                                marketing for EMEA. Most recently he served as a WPP
                                                                                and Ogilvy Global Client
                                                                                Leader.</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="employee__column employee__column--links">
                                                            <div class="employee__column-content">
                                                                <div class="employee__contact">
                                                                    <h5 class="employee__column-header">Contact</h5>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="mailto:philip.heimann@ogilvy.com">E-mail
                                                                            </a>
                                                                        </li>
                                                                        <li> <a href="https://www.linkedin.com/in/philip-heimann-a1639372/"
                                                                            target="_blank">LinkedIn</a></li>
                                                                        <li> <a href="https://twitter.com/HeimannP"
                                                                            target="_blank">Twitter</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="employee__contact employee__quote">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="javascript:;" class="employee__close-icon">
                                                            <svg viewbox="0 0 14.6 14.6">
                                                                <title>click to close bio</title>

                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>



                <div class="has-sticky">
                    <section class="section section--sticky scrollSection noscriptCSS" id="feed">
                        <div class="section__mask"></div>
                        <div class="container">
                            <h2 class="section__title">Ideas</h2>
                            <div
                                class="view view-ideas-list view-id-ideas_list view-display-id-ideas_about js-view-dom-id-0351ae85c73e1ac3069d547d5c9dc9ccc89f138d2a509cbe320939ba13055895">
                                <div class="view-filters">
                                    <form class="views-exposed-form bef-exposed-form" data-bef-auto-submit-full-form=""
                                        data-bef-auto-submit="" data-bef-auto-submit-delay="500"
                                        data-drupal-selector="views-exposed-form-ideas-list-ideas-about"
                                        action="https://www.ogilvy.com/about" method="get"
                                        id="views-exposed-form-ideas-list-ideas-about" accept-charset="UTF-8">
                                        <ul class="section__grid-utilities section__grid-utilities--mobile ideas-list">
                                            <li id="edit-field-feed-category-target-id" class="section__grid-filters">
                                                <ul data-drupal-selector="edit-field-feed-category-target-id"
                                                    id="edit-field-feed-category-target-id--wrapper"
                                                    class="fieldgroup form-composite form-radios section__grid-filters"
                                                    name="field_feed_category_target_id">
                                                    <li class="ideas-category">
                                                        <input data-drupal-selector="edit-field-feed-category-target-id-all"
                                                            type="radio" id="edit-field-feed-category-target-id-all"
                                                            name="field_feed_category_target_id" value="All" checked="checked"
                                                            class="form-radio" />
                                                        <label for="edit-field-feed-category-target-id-all"
                                                            class="option">All</label>
                                                    </li>
                                                    <li class="ideas-category">
                                                        <input data-drupal-selector="edit-field-feed-category-target-id-201"
                                                            type="radio" id="edit-field-feed-category-target-id-201"
                                                            name="field_feed_category_target_id" value="201"
                                                            class="form-radio" />
                                                        <label for="edit-field-feed-category-target-id-201"
                                                            class="option">Read</label>
                                                    </li>
                                                    <li class="ideas-category">
                                                        <input data-drupal-selector="edit-field-feed-category-target-id-206"
                                                            type="radio" id="edit-field-feed-category-target-id-206"
                                                            name="field_feed_category_target_id" value="206"
                                                            class="form-radio" />
                                                        <label for="edit-field-feed-category-target-id-206"
                                                            class="option">Watch</label>
                                                    </li>
                                                    <li class="ideas-category">
                                                        <input data-drupal-selector="edit-field-feed-category-target-id-196"
                                                            type="radio" id="edit-field-feed-category-target-id-196"
                                                            name="field_feed_category_target_id" value="196"
                                                            class="form-radio" />
                                                        <label for="edit-field-feed-category-target-id-196"
                                                            class="option">Listen</label>
                                                    </li>
                                                    <li class="ideas-category">
                                                        <input data-drupal-selector="edit-field-feed-category-target-id-191"
                                                            type="radio" id="edit-field-feed-category-target-id-191"
                                                            name="field_feed_category_target_id" value="191"
                                                            class="form-radio" />
                                                        <label for="edit-field-feed-category-target-id-191"
                                                            class="option">Press</label>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="section__search-form js-feed-search "
                                                data-search-category="Idea">
                                                <div class="input">
                                                    <input data-bef-auto-submit-exclude="" data-drupal-selector="edit-combine"
                                                        type="text" id="edit-combine" name="combine" value="" size="30"
                                                        maxlength="128" class="form-text" aria-label="Search work" />
                                                </div>
                                                <button class="section__grid-utility">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                        viewBox="0 0 14 14" role="img" aria-labelledby="worksearch">
                                                        <title id="worksearch">Search</title>
                                                        <path fill="none" stroke="currentColor" stroke-width=".75"
                                                            d="M10.93 5.57a4.95 4.95 0 0 1-4.97 4.94A4.95 4.95 0 0 1 1 5.57 4.95 4.95 0 0 1 5.96.64a4.96 4.96 0 0 1 4.97 4.93zM9.37 9.35L13.04 13 9.37 9.35z" />
                                                    </svg>
                                                </button>
                                                <button class="section__grid-utility" type="reset">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15"
                                                        viewBox="0 0 17 15" role="img" aria-labelledby="workreset">
                                                        <title id="workreset">Reset</title>
                                                        <path fill="none" stroke="currentColor"
                                                            d="M15.64.8L1.43 15m14.14 0L1.36.8" />
                                                    </svg>
                                                </button>
                                                <div
                                                    class="search-form-showing section__grid-right section__grid-page js-section-page-view search-icons is-home">
                                                    <p>

                                                        {/* <a
                                                    class="section__page-view-link js-section-page-link">
                                                         */}
                                                        <span
                                                            class="js-section-page-view-text"><i
                                                                class="sr-only">Search</i></span> <svg
                                                                    viewBox="0 0 20.1 20.1">
                                                            <path fill="none" d="M10.1 0v20.1m10-10H0" />
                                                        </svg>

                                                        {/* </a> */}


                                                    </p>
                                                </div>
                                                <span class="adv-search-ideas-icon adv-search-icon  ">
                                                    <svg id="plus-icon" viewBox="0 0 20.1 20.1" width="100%" height="100%">
                                                        <path fill="none" stroke="currentColor" d="M10.1 0v20.1m10-10H0"></path>
                                                    </svg>
                                                </span>
                                            </li>
                                        </ul>
                                        <div id="search-capabilities" class="adv-search-list-con adv-search-list-con-ideas"
                                            style={{ display: "none" }}  >
                                            <ul data-drupal-selector="edit-field-capability-target-id"
                                                id="edit-field-capability-target-id--wrapper"
                                                class="fieldgroup form-composite form-checkboxes grid small--grid--2up large--grid--3up"
                                                name="field_capability_target_id">
                                                <li class="grid__item is__active">
                                                    <input data-drupal-selector="edit-field-capability-target-id-1"
                                                        type="checkbox" id="edit-field-capability-target-id-1"
                                                        name="field_capability_target_id[1]" value="1" class="form-checkbox"
                                                        data-url="advertising" />
                                                    <label for="edit-field-capability-target-id-1" class="option">
                                                        {/*                                                 
                                                <a
                                                    class="subcategories" title="Advertising">Advertising 
                                                     */}
                                                        <svg
                                                            id="plus-icon" viewBox="0 0 20.1 20.1" width="100%"
                                                            height="100%">
                                                            <path fill="none" stroke="currentColor"
                                                                d="M10.1 0v20.1m10-10H0"></path>
                                                        </svg>

                                                        {/* </a> */}

                                                    </label>
                                                </li>
                                                <li class="grid__item is__active">
                                                    <input data-drupal-selector="edit-field-capability-target-id-11"
                                                        type="checkbox" id="edit-field-capability-target-id-11"
                                                        name="field_capability_target_id[11]" value="11" class="form-checkbox"
                                                        data-url="pr" />
                                                    <label for="edit-field-capability-target-id-11" class="option">
                                                        {/* <a
                                                    class="subcategories" title="PR">PR  */}

                                                        <svg id="plus-icon"
                                                            viewBox="0 0 20.1 20.1" width="100%" height="100%">
                                                            <path fill="none" stroke="currentColor"
                                                                d="M10.1 0v20.1m10-10H0"></path>
                                                        </svg>

                                                        {/* </a> */}

                                                    </label>
                                                </li>
                                                <li class="grid__item is__active">
                                                    <input data-drupal-selector="edit-field-capability-target-id-31"
                                                        type="checkbox" id="edit-field-capability-target-id-31"
                                                        name="field_capability_target_id[31]" value="31" class="form-checkbox"
                                                        data-url="experience" />
                                                    <label for="edit-field-capability-target-id-31" class="option">
                                                        {/* <a
                                                    class="subcategories" title="Experience" href="#">
                                                         */}
                                                        Experience <svg
                                                            id="plus-icon" viewBox="0 0 20.1 20.1" width="100%"
                                                            height="100%">
                                                            <path fill="none" stroke="currentColor"
                                                                d="M10.1 0v20.1m10-10H0"></path>
                                                        </svg>
                                                        {/* </a> */}

                                                    </label>
                                                </li>
                                                <li class="grid__item is__active">
                                                    <input data-drupal-selector="edit-field-capability-target-id-36"
                                                        type="checkbox" id="edit-field-capability-target-id-36"
                                                        name="field_capability_target_id[36]" value="36" class="form-checkbox"
                                                        data-url="health" />
                                                    <label for="edit-field-capability-target-id-36" class="option">

                                                        {/* <a
                                                    class="subcategories" title="Health" href="#" >Health  */}

                                                        <svg id="plus-icon"
                                                            viewBox="0 0 20.1 20.1" width="100%" height="100%">
                                                            <path fill="none" stroke="currentColor"
                                                                d="M10.1 0v20.1m10-10H0"></path>
                                                        </svg>
                                                        {/* </a> */}

                                                    </label>
                                                </li>
                                                <li class="grid__item is__active">
                                                    <input data-drupal-selector="edit-field-capability-target-id-21"
                                                        type="checkbox" id="edit-field-capability-target-id-21"
                                                        name="field_capability_target_id[21]" value="21" class="form-checkbox"
                                                        data-url="consulting" />
                                                    <label for="edit-field-capability-target-id-21" class="option">
                                                        {/* <a
                                                    class="subcategories" title="Consulting" href="#" >Consulting 
                                                     */}
                                                        <svg
                                                            id="plus-icon" viewBox="0 0 20.1 20.1" width="100%"
                                                            height="100%">
                                                            <path fill="none" stroke="currentColor"
                                                                d="M10.1 0v20.1m10-10H0"></path>
                                                        </svg>
                                                        {/* </a> */}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <input data-drupal-selector="edit-open" type="hidden" name="open" value="" />
                                        <div data-drupal-selector="edit-actions"
                                            class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input
                                                data-bef-auto-submit-click="" class="js-hide button js-form-submit form-submit"
                                                data-drupal-selector="edit-submit-ideas-list" type="submit"
                                                id="edit-submit-ideas-list" value="Apply" />
                                        </div>
                                    </form>
                                </div>
                                <div class="js-feed-grid">
                                    <div
                                        class="grid small--grid--2up medium--grid--3up large--grid--4up xlarge--grid--5up js-feed-item-container js-feed-search-grid">
                                        <div class="grid__item">
                                            <a class="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/menno-kluin-named-chief-creative-officer-ogilvy-new-york"
                                                data-id="6796">
                                                <div class="feed__title-card">
                                                    <p class="feed__category">press</p>
                                                    <h4 class="feed__title">Menno Kluin Named Chief Creative Officer for Ogilvy
                                                        New York
                                                    </h4>
                                                </div>
                                                <div class="feed__metadata">
                                                    <p class="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p class="feed__date">07/05/2022</p>
                                                </div>
                                                <div class="feed__content">
                                                    <div>

                                                        <p>Menno will be responsible for the creative product in Ogilvy’s New
                                                            York office servicing a
                                                            range of global and…
                                                        </p>
                                                    </div>
                                                    <p class="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="grid__item">
                                            <a class="feed__item feed__item--watch js-feed-item"
                                                href="https://www.ogilvy.com/ideas/ogilvy-digital-empathy-can-virtual-interactions-create-meaningful-connections"
                                                data-id="6791">
                                                <div class="feed__title-card">
                                                    <p class="feed__category">watch</p>
                                                    <h4 class="feed__title">Ogilvy On: Digital Empathy — Can Virtual
                                                        Interactions Create Meaningful
                                                        Connections?
                                                    </h4>
                                                </div>
                                                <div class="feed__metadata">
                                                    <p class="feed__detail">
                                                        Dayoan Daumont
                                                    </p>
                                                    <p class="feed__date">07/01/2022</p>
                                                </div>
                                                <div class="feed__content">
                                                    <div>
                                                        <p>How can brands successfully deploy digital humans, digital
                                                            possessions, and digital spaces,
                                                            effectively and with…
                                                        </p>
                                                    </div>
                                                    <p class="feed__content-action">watch <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="grid__item">
                                            <a class="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/bower-house-digital-acquired-wpp-join-ogilvy-global-network"
                                                data-id="6786">
                                                <div class="feed__title-card">
                                                    <p class="feed__category">press</p>
                                                    <h4 class="feed__title">Bower House Digital Acquired by WPP, to Join Ogilvy
                                                        Global Network
                                                    </h4>
                                                </div>
                                                <div class="feed__metadata">
                                                    <p class="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p class="feed__date">06/30/2022</p>
                                                </div>
                                                <div class="feed__content">
                                                    <div>
                                                        <p>
                                                            <p>Bower House Digital is a leading marketing technology services agency
                                                                based in Australia.</p>
                                                        </p>
                                                    </div>
                                                    <p class="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="grid__item">
                                            <a class="feed__item feed__item--read js-feed-item"
                                                href="https://www.ogilvy.com/ideas/digital-empathy-can-virtual-interactions-create-meaningful-connections"
                                                data-id="6771">
                                                <div class="feed__title-card">
                                                    <p class="feed__category">read</p>
                                                    <h4 class="feed__title">Digital Empathy: Can Virtual Interactions Create
                                                        Meaningful Connections?
                                                    </h4>
                                                </div>
                                                <div class="feed__metadata">
                                                    <p class="feed__detail">
                                                        DieuCam Nguyen
                                                        and Emily Poon
                                                    </p>
                                                    <p class="feed__date">06/30/2022</p>
                                                </div>
                                                <div class="feed__content">
                                                    <div>
                                                        <p>
                                                            <p>How brands can successfully deploy digital humans, digital
                                                                possessions, and digital spaces.
                                                            </p>
                                                        </p>
                                                    </div>
                                                    <p class="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="grid__item">
                                            <a class="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/ogilvy-germany-deutsche-bahn-win-grand-prix-warc-awards-effectiveness"
                                                data-id="6766">
                                                <div class="feed__title-card">
                                                    <p class="feed__category">press</p>
                                                    <h4 class="feed__title">Ogilvy Germany and Deutsche Bahn win the Grand Prix
                                                        at the WARC Awards for
                                                        Effectiveness
                                                    </h4>
                                                </div>
                                                <div class="feed__metadata">
                                                    <p class="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p class="feed__date">06/28/2022</p>
                                                </div>
                                                <div class="feed__content">
                                                    <div>
                                                        <p>
                                                            <p>The "Discover Germany" campaign was awarded with the top prize in the
                                                                “Instant Impact”
                                                                category.</p>
                                                        </p>
                                                    </div>
                                                    <p class="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="grid__item">
                                            <a class="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/ogilvy-returns-top-spot-named-network-year-cannes-lions-2022"
                                                data-id="6756">
                                                <div class="feed__title-card">
                                                    <p class="feed__category">press</p>
                                                    <h4 class="feed__title">Ogilvy Returns to the Top Spot, Named Network of the
                                                        Year at Cannes Lions
                                                        2022
                                                    </h4>
                                                </div>
                                                <div class="feed__metadata">
                                                    <p class="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p class="feed__date">06/24/2022</p>
                                                </div>
                                                <div class="feed__content">
                                                    <div>
                                                        <p>
                                                            <p>Thirty-seven offices contributed to winning a total of 88 Lions as
                                                                Ogilvy earned the top
                                                                network prize.</p>
                                                        </p>
                                                    </div>
                                                    <p class="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="grid__item">
                                            <a class="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/ogilvy-wins-gold-lions-its-work-intersection-data-creativity-ups-festival-total-78-lions"
                                                data-id="6736">
                                                <div class="feed__title-card">
                                                    <p class="feed__category">press</p>
                                                    <h4 class="feed__title">Ogilvy Wins Gold Lions for Its Work at the
                                                        Intersection of Data &amp;
                                                        Creativity, Ups Festival Total to 78 Lions
                                                    </h4>
                                                </div>
                                                <div class="feed__metadata">
                                                    <p class="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p class="feed__date">06/23/2022</p>
                                                </div>
                                                <div class="feed__content">
                                                    <div>
                                                        <p lang="EN-US">Offices in Johannesburg, Lisbon,
                                                            Melbourne, Mumbai, and São
                                                            Paulo Win Gold as Creative…
                                                        </p>
                                                    </div>
                                                    <p class="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="grid__item">
                                            <a class="feed__item feed__item--read js-feed-item"
                                                href="https://www.ogilvy.com/ideas/how-brands-can-swim-against-inflation-stream"
                                                data-id="6741">
                                                <div class="feed__title-card">
                                                    <p class="feed__category">read</p>
                                                    <h4 class="feed__title">How Brands Can Swim Against the Inflation Stream
                                                    </h4>
                                                </div>
                                                <div class="feed__metadata">
                                                    <p class="feed__detail">
                                                        Amanda Ortiz
                                                        and Olivia Rindone
                                                    </p>
                                                    <p class="feed__date">06/23/2022</p>
                                                </div>
                                                <div class="feed__content">
                                                    <div>
                                                        <p>
                                                            <p>Keeping the big picture in mind and providing value to consumers has
                                                                proven to be sound
                                                                strategy. </p>
                                                        </p>
                                                    </div>
                                                    <p class="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="grid__item">
                                            <a class="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/ogilvy-recognized-creative-effectiveness-gold-lions-courage-beautiful-moldy-whopper"
                                                data-id="6711">
                                                <div class="feed__title-card">
                                                    <p class="feed__category">press</p>
                                                    <h4 class="feed__title">Ogilvy Recognized for Creative Effectiveness with
                                                        Gold Lions for ‘Courage
                                                        Is Beautiful’ and ‘Moldy Whopper’
                                                    </h4>
                                                </div>
                                                <div class="feed__metadata">
                                                    <p class="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p class="feed__date">06/22/2022</p>
                                                </div>
                                                <div class="feed__content">
                                                    <div>
                                                        <p>
                                                            <p lang="EN-US">Creative network wins seven Gold Lions
                                                                on Day 3, ups Festival
                                                                total to 55 Lions.</p>
                                                        </p>
                                                    </div>
                                                    <p class="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="grid__item">
                                            <a class="feed__item feed__item--press js-feed-item"
                                                href="https://www.ogilvy.com/ideas/ogilvy-wins-three-gold-lions-including-kenyas-first-gold-day-two-ups-festival-total-34"
                                                data-id="6706">
                                                <div class="feed__title-card">
                                                    <p class="feed__category">press</p>
                                                    <h4 class="feed__title">Ogilvy Wins Three Gold Lions Including Kenya’s First
                                                        Gold on Day Two, Ups
                                                        Festival Total to 34
                                                    </h4>
                                                </div>
                                                <div class="feed__metadata">
                                                    <p class="feed__detail">
                                                        Chris Celletti
                                                    </p>
                                                    <p class="feed__date">06/21/2022</p>
                                                </div>
                                                <div class="feed__content">
                                                    <div>
                                                        <p lang="EN-US">Ogilvy Africa, Ogilvy Mexico City among
                                                            Gold winners as agency
                                                            wins 12 Lions on Day…
                                                        </p>
                                                    </div>
                                                    <p class="feed__content-action">More <span>→</span></p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="js-feed-grid">
                                    <div class="feed-link__wrapper">
                                        <a class="m--fancy" href="https://www.ogilvy.com/ideas">See Archive</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>




                <div class="scrollSection noscriptCSS">
                    <div class="section--red">
                        <div class="has-sticky">
                            <section class="section section--sticky section--v-center hero hero--red">
                                <div class="section__mask"></div>
                                <div class="container">
                                    <div class="hero--con">
                                        <h1 class="section__title--contact">
                                            Careers
                                            –
                                            <span class="mobile-block">
                                                Work
                                                With
                                                Us
                                            </span>
                                        </h1>
                                        <p>As our founder David Ogilvy put it, we seek people who are bigger and smarter than
                                            ourselves. That’s
                                            how we create a company of giants. We’re always looking for modern marketing and
                                            brand experts with
                                            big hearts and enormous talent.</p>
                                        <p><a
                                            href="https://ogilvycareers-ogilvy.icims.com/jobs/search?ss=1&amp;hashed=-435626303">Explore
                                            opportunities</a>, and learn more below.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <section class="section careers-section-wrapper">
                        <div class="section__mask"></div>
                        <div class="views-element-container">
                            <div class="container container--narrow">
                                <div class="desktop__slider">
                                    <div class="careers-slider_desktop careers-slider_desktop_slider">
                                        <div data-url="/careers/covid-19" class="careers-section-mob-item">
                                            <div class="careers-full-photo desktop__slider">
                                                <a href="https://www.ogilvy.com/careers/covid-19">
                                                    <picture>
                                                        <source
                                                            srcset="/sites/g/files/dhpsjz106/files/styles/careers_full_images/public/careers/full-Image/O200420_COVID%20CAREERS%20announcement.png?itok=Cj7rd41O 1x"
                                                            media="all and (min-width: 1440px)" type="image/png" />
                                                        <source
                                                            srcset="/sites/g/files/dhpsjz106/files/styles/careers_full_images/public/careers/full-Image/O200420_COVID%20CAREERS%20announcement.png?itok=Cj7rd41O 1x"
                                                            media="all and (min-width: 1024px)" type="image/png" />
                                                        <source
                                                            srcset="/sites/g/files/dhpsjz106/files/styles/crop_thumbnail/public/careers/full-Image/O200420_COVID%20CAREERS%20announcement.png?itok=vUi55LuY 1x"
                                                            media="all and (min-width: 600px)" type="image/png" />
                                                        <img src="https://www.ogilvy.com/sites/g/files/dhpsjz106/files/styles/careers_full_images/public/careers/full-Image/O200420_COVID CAREERS announcement.png?itok=Cj7rd41O"
                                                            alt="Careers at Ogilvy during COVID-19 | Ogilvy"
                                                            title="Careers at Ogilvy during COVID-19 | Ogilvy"
                                                            typeof="foaf:Image" />
                                                    </picture>
                                                </a>
                                            </div>
                                        </div>
                                        <div data-url="/careers/who-we-are" class="careers-section-mob-item">
                                            <div>
                                                <div class="careers-col-full desktop__slider">
                                                    <div class="careers-col-full-50">
                                                        <picture>
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/David%20Ogilvy%201963.jpg?itok=XQXZTVh9 1x"
                                                                media="all and (min-width: 1440px)" type="image/jpeg" />
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/David%20Ogilvy%201963.jpg?itok=XQXZTVh9 1x"
                                                                media="all and (min-width: 1024px)" type="image/jpeg" />
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/crop_thumbnail/public/careers/half-Image/David%20Ogilvy%201963.jpg?itok=KaSujeYv 1x"
                                                                media="all and (min-width: 600px)" type="image/jpeg" />
                                                            <img
                                                                src={img1}
                                                                alt="David Ogilvy" title="David Ogilvy" typeof="foaf:Image" />
                                                        </picture>
                                                    </div>
                                                    <div class="careers-col-full-50">
                                                        <a href="https://www.ogilvy.com/careers/who-we-are">
                                                            <h2>Who We Are</h2>
                                                        </a>
                                                        <div class="careers-text-col-50">
                                                            <p>Ogilvy was founded in 1948 as one office. Today, we operate as a
                                                                creative network in 132
                                                                locations across 83 countries. In the course of this growth, the
                                                                world has become
                                                                effectively unrecognizable from what it once was.</p>
                                                            <p>Ogilvy has been there every step of the way, shepherding the
                                                                world’s most successful brands
                                                                through the uncertainty and helping them adapt and stay relevant
                                                                for the long-term.</p>
                                                            <p>We have never lost sight of our purpose in the world: we inspire
                                                                people and brands to make
                                                                an impact.</p>
                                                            <p>We have succeeded because, despite the massive shifts that have
                                                                occurred over the years, we
                                                                have always operated in the way David Ogilvy envisioned. He
                                                                created a corporate culture that
                                                                deeply respected and cared about its people and its clients. We
                                                                honor his legacy by
                                                                operating with that same commitment.</p>
                                                        </div>
                                                        <div class="careers-text-col-50">
                                                            <p>Our core values remain at the heart of everything we do. They are
                                                                not a set of rules, but
                                                                beliefs. They are our DNA.</p>
                                                            <p>They inform how we go about our daily lives that help set
                                                                expectations of the kind of work
                                                                we create, and the kind of people we hire.</p>
                                                            <p>We know that as long as we live our values, we will do great
                                                                work. Our people will learn
                                                                and grow, explore their interests and become the best versions
                                                                of their personal and
                                                                professional selves.</p>
                                                            <p>Our values have gotten us far, and they will take us ever further
                                                                into the future. We live
                                                                this as one force, indivisible.</p>
                                                            <p>We are: Pervasively Creative, Adaptively Connected, Relentlessly
                                                                Curious, Divinely
                                                                Discontented, Eternal Craftspeople.</p>
                                                            <p>We are Ogilvy.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-url="/careers/people" class="careers-section-mob-item">
                                            <div class="careers-photo-row desktop__slider">
                                                <div class="careers-photo-33">
                                                    <a href="https://www.ogilvy.com/careers/people">
                                                        <picture>
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who%20we%20are%2001.png?itok=rUPFCKdE 1x"
                                                                media="all and (min-width: 1440px)" type="image/png" />
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who%20we%20are%2001.png?itok=rUPFCKdE 1x"
                                                                media="all and (min-width: 1024px)" type="image/png" />
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/careers/three-column-Image/Who%20we%20are%2001.png 1x"
                                                                media="all and (min-width: 600px)" type="image/png" />
                                                            <img
                                                                src={img1}
                                                                alt="Employees | Ogilvy" title="Employees | Ogilvy"
                                                                typeof="foaf:Image" />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div class="careers-photo-33">
                                                    <picture>
                                                        <source
                                                            srcset="/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who%20we%20are%2002_ALT.png?itok=LzySa2YA 1x"
                                                            media="all and (min-width: 1440px)" type="image/png" />
                                                        <source
                                                            srcset="/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who%20we%20are%2002_ALT.png?itok=LzySa2YA 1x"
                                                            media="all and (min-width: 1024px)" type="image/png" />
                                                        <source
                                                            srcset="/sites/g/files/dhpsjz106/files/careers/three-column-Image/Who%20we%20are%2002_ALT.png 1x"
                                                            media="all and (min-width: 600px)" type="image/png" />
                                                        <img
                                                            src={img1}
                                                            alt="Employees | Ogilvy" title="Employees | Ogilvy"
                                                            typeof="foaf:Image" />
                                                    </picture>
                                                </div>
                                                <div class="careers-photo-33">
                                                    <picture>
                                                        <source
                                                            srcset="/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who-we-are-03.jpg?itok=f48XCgnZ 1x"
                                                            media="all and (min-width: 1440px)" type="image/jpeg" />
                                                        <source
                                                            srcset="/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who-we-are-03.jpg?itok=f48XCgnZ 1x"
                                                            media="all and (min-width: 1024px)" type="image/jpeg" />
                                                        <source
                                                            srcset="/sites/g/files/dhpsjz106/files/careers/three-column-Image/Who-we-are-03.jpg 1x"
                                                            media="all and (min-width: 600px)" type="image/jpeg" />
                                                        <img
                                                            src={img1}
                                                            alt="Employees | Ogilvy" title="Employees | Ogilvy"
                                                            typeof="foaf:Image" />
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-url="/careers/grow-us" class="careers-section-mob-item">
                                            <div>
                                                <div class="careers-col-full desktop__slider">
                                                    <div class="careers-col-full-50">
                                                        <a href="https://www.ogilvy.com/careers/grow-us">
                                                            <h2>Grow With Us</h2>
                                                        </a>
                                                        <div class="careers-text-col-50">
                                                            <p>Ogilvy’s mission is to inspire people and brands to make an
                                                                impact. We believe the best way
                                                                to do that is by fostering a community of inclusion made up of
                                                                people from diverse
                                                                backgrounds, where all contributions are valued, and where every
                                                                employee has the chance to
                                                                become their best creative and professional self.</p>
                                                            <p>Because our greatest asset is, has always been, and will always
                                                                be our people.</p>
                                                            <p>Our founder, David Ogilvy, proudly described our creative network
                                                                as the “teaching
                                                                hospital”. He envisioned Ogilvy as a place where professionals
                                                                not only do great work, but
                                                                come in each day with the possibility to learn and the ability
                                                                to practice and hone their
                                                                craft.</p>
                                                            <p>Learning &amp; Development plays an important role in creating
                                                                this atmosphere.</p>
                                                        </div>
                                                        <div class="careers-text-col-50">
                                                            <p>Today, Ogilvy's global Learning &amp; Development team continues
                                                                to build on David's legacy
                                                                by equipping our employees with all the tools they need to grow
                                                                their careers and become
                                                                even stronger, more well-rounded professionals.</p>
                                                            <p>In a world that not only requires new ideas but also new
                                                                capabilities to bring those ideas
                                                                to life, our training programs develop our people’s abilities to
                                                                tackle the greatest
                                                                challenges faced by our clients. We utilize our global resources
                                                                to deliver blended learning
                                                                that embodies our founder culture.</p>
                                                            <p>We offer a wide range of programs focused on deepening our
                                                                employees' knowledge and
                                                                enhancing their expertise, with courses and trainings focused on
                                                                areas such as Digital
                                                                Transformation, Leadership, Culture, Change Management, Growth,
                                                                and New Ways of Working,
                                                                among many others.</p>
                                                        </div>
                                                    </div>
                                                    <div class="careers-col-full-50">
                                                        {/* <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/Grow%20with%20us%2001.png?itok=TnCwrPck 1x"
                                                                media="all and (min-width: 1440px)" type="image/png" />
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/Grow%20with%20us%2001.png?itok=TnCwrPck 1x"
                                                                media="all and (min-width: 1024px)" type="image/png" />
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/crop_thumbnail/public/careers/half-Image/Grow%20with%20us%2001.png?itok=g9KnACa1 1x"
                                                                media="all and (min-width: 600px)" type="image/png" /> */}
                                                        <img
                                                            src={img1}
                                                            alt="Grow With Us" title="Grow With Us" typeof="foaf:Image" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-url="/careers/get-involved" class="careers-section-mob-item">
                                            <div>
                                                <div class="careers-col-full desktop__slider">
                                                    <div class="careers-col-full-50">
                                                        <a href="https://www.ogilvy.com/careers/get-involved">
                                                            <h2>Get Involved</h2>
                                                        </a>
                                                        <div class="careers-text-col-50">
                                                            <p>Community. Representation. Shared values.</p>
                                                            <p>Our Professional Networks represent a global community of
                                                                individuals from all backgrounds
                                                                committed to working together to shape Ogilvy's culture for the
                                                                present and the future. They
                                                                have been in operation in some form for over a decade, and their
                                                                size, scope, and influence
                                                                have only grown over time.</p>
                                                            <p>The Professional Networks are affinity-based groups enabling
                                                                employees to actively
                                                                participate and contribute in supporting our Diversity &amp;
                                                                Inclusion strategy. The
                                                                networks provide an environment for professional development and
                                                                networking along with a
                                                                formal link to employees, allies and senior management.</p>
                                                            <p>As we believe in empowering our people, Ogilvy's Professional
                                                                Networks are formed by
                                                                employees.</p>
                                                        </div>
                                                        <div class="careers-text-col-50">
                                                            <p>They are centered around those with common interests—but
                                                                regardless of who you are or where
                                                                you come from, you will always belong at Ogilvy. To that end,
                                                                our networks are open to all
                                                                employees.</p>
                                                            <p>Each network is dedicated to developing programs to promote
                                                                recruitment, retention,
                                                                career development; cultivating informal mentorship through
                                                                networking opportunities;
                                                                fostering education and outreach opportunities; making a
                                                                difference in the communities in
                                                                which we operate; and providing advice and counsel to our
                                                                business by acting as in-house
                                                                focus groups and sounding boards.</p>
                                                            <p>Networks supporting LGBTQ+, cultural and ethnic diversity,
                                                                administrative professionals,
                                                                neurodiversity, and working parents are among the many active
                                                                employee-driven groups.</p>
                                                        </div>
                                                    </div>
                                                    <div class="careers-col-full-50">
                                                        {/* <picture>
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/Get%20involved%2001.png?itok=5LhMiNfI 1x"
                                                                media="all and (min-width: 1440px)" type="image/png" />
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/Get%20involved%2001.png?itok=5LhMiNfI 1x"
                                                                media="all and (min-width: 1024px)" type="image/png" />
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/crop_thumbnail/public/careers/half-Image/Get%20involved%2001.png?itok=ZMa_WTKR 1x"
                                                                media="all and (min-width: 600px)" type="image/png" />
 */}
                                                        <img src="https://www.ogilvy.com/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/Get involved 01.png?itok=5LhMiNfI"
                                                            alt="Get Involved" title="Get Involved" typeof="foaf:Image" />
                                                        <img src="https://www.ogilvy.com/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/Get involved 01.png?itok=5LhMiNfI"
                                                            alt="Get Involved" title="Get Involved" typeof="foaf:Image" />
                                                        <img src="https://www.ogilvy.com/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/Get involved 01.png?itok=5LhMiNfI"
                                                            alt="Get Involved" title="Get Involved" typeof="foaf:Image" />
                                                        {/* </picture> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-url="/careers/ogilvy-sao-paulo" class="careers-section-mob-item">
                                            <div class="careers-full-photo desktop__slider">
                                                <a href="https://www.ogilvy.com/careers/ogilvy-sao-paulo">
                                                    <picture>
                                                        <source
                                                            srcset="/sites/g/files/dhpsjz106/files/styles/careers_full_images/public/careers/full-Image/Get%20involved%2002.png?itok=BhHpogr5 1x"
                                                            media="all and (min-width: 1440px)" type="image/png" />
                                                        <source
                                                            srcset="/sites/g/files/dhpsjz106/files/styles/careers_full_images/public/careers/full-Image/Get%20involved%2002.png?itok=BhHpogr5 1x"
                                                            media="all and (min-width: 1024px)" type="image/png" />
                                                        <source
                                                            srcset="/sites/g/files/dhpsjz106/files/styles/crop_thumbnail/public/careers/full-Image/Get%20involved%2002.png?itok=gUSZk1jm 1x"
                                                            media="all and (min-width: 600px)" type="image/png" />
                                                        <img src="https://www.ogilvy.com/sites/g/files/dhpsjz106/files/styles/careers_full_images/public/careers/full-Image/Get involved 02.png?itok=BhHpogr5"
                                                            alt="" typeof="foaf:Image" />
                                                    </picture>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="careers-section-mob-item">
                                            <div>
                                                <div class="careers-col-full desktop__slider">
                                                    <div class="careers-col-full-50">
                                                        <picture>
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/D-and-I-new.jpg?itok=3Pe_Jm0Y 1x"
                                                                media="all and (min-width: 1440px)" type="image/jpeg" />
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/D-and-I-new.jpg?itok=3Pe_Jm0Y 1x"
                                                                media="all and (min-width: 1024px)" type="image/jpeg" />
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/crop_thumbnail/public/careers/half-Image/D-and-I-new.jpg?itok=QZZqP1sA 1x"
                                                                media="all and (min-width: 600px)" type="image/jpeg" />
                                                            <img src="https://www.ogilvy.com/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/D-and-I-new.jpg?itok=3Pe_Jm0Y"
                                                                alt="Diversity &amp; Inclusion | Ogilvy"
                                                                title="Diversity &amp; Inclusion | Ogilvy"
                                                                typeof="foaf:Image" />
                                                        </picture>
                                                    </div>
                                                    <div class="careers-col-full-50">
                                                        <a href="https://www.ogilvy.com/careers/diversity-inclusion">
                                                            <h2>Diversity and Inclusion</h2>
                                                        </a>
                                                        <div class="careers-text-col-50">
                                                            <p>We firmly believe that a racially, ethnically, and culturally
                                                                diverse workforce, where all
                                                                perspectives are valued, leads to richer experiences for our
                                                                people and better outcomes for
                                                                our clients. Diversity has always been and will always be a part
                                                                of Ogilvy’s DNA, our core
                                                                values and our culture. Our founder David Ogilvy was an early
                                                                advocate for diversity in the
                                                                workplace. As Chairman of the United Negro College Fund in 1968,
                                                                he set the agenda for the
                                                                agency’s pursuit of inclusion in the workplace.</p>
                                                            <p>Diversity, inclusiveness, and explicit anti-racism are not just
                                                                issues of policy at Ogilvy,
                                                                but essential to our success and sustainability as a
                                                                business. Diverse teams are better at
                                                                solving complex problems—and employees who feel safe, welcome,
                                                                supported, and valued for
                                                                being their authentic selves are better able to do their very
                                                                best work.</p>
                                                        </div>
                                                        <div class="careers-text-col-50">
                                                            <p>We are committed to providing an open and safe environment for
                                                                everyone to thrive at Ogilvy
                                                                regardless of their race, color, creed, religion, sex, national
                                                                origin, veteran status,
                                                                ability, domestic violence victim status, age, citizenship,
                                                                marital or domestic/civil
                                                                partnership status, sexual orientation, gender identity or
                                                                expression. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="careers-section-mob-item">
                                            <div>
                                                <div class="careers-quote-wrapper desktop__slider">
                                                    <div class="careers-quote">
                                                        <a href="https://www.ogilvy.com/careers/david-ogilvy-quote">Talent, I
                                                            believe, is most likely to be found among nonconformists, rebels,
                                                            and
                                                            dissenters.</a>
                                                        <span>– David Ogilvy</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="mob-scrollSection">
                        <section class="section careers-section-wrapper">
                            <div class="section__mask"></div>
                            <div class="views-element-container">
                                <div class="mobile__slider">
                                    <div class="container">
                                        <div class="careers-section-mob-item">
                                            <div>
                                                <div class="mobile__slider">
                                                    <div class="has-sticky">
                                                        <div class="careers_mobile_slide section--sticky">
                                                            <div class="careers_mob_img">
                                                                <source
                                                                    srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/David%20Ogilvy%201963.jpg?itok=XQXZTVh9 1x"
                                                                    media="all and (min-width: 1440px)" type="image/jpeg" />
                                                                <source
                                                                    srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/David%20Ogilvy%201963.jpg?itok=XQXZTVh9 1x"
                                                                    media="all and (min-width: 1024px)" type="image/jpeg" />
                                                                <source
                                                                    srcset="/sites/g/files/dhpsjz106/files/styles/crop_thumbnail/public/careers/half-Image/David%20Ogilvy%201963.jpg?itok=KaSujeYv 1x"
                                                                    media="all and (min-width: 600px)" type="image/jpeg" />
                                                                <img
                                                                    src={img1}
                                                                    alt="David Ogilvy" title="David Ogilvy"
                                                                />
                                                            </div>
                                                            <h2>Who We Are</h2>
                                                            <p>Ogilvy was founded in 1948 as one office. Today, we operate as a
                                                                creative network in 132
                                                                locations across 83 countries. In the course of this growth, the
                                                                world has become
                                                                effectively unrecognizable from what it once was.</p>
                                                            <p>Ogilvy has been there every step of the way, shepherding the
                                                                world’s most successful brands
                                                                through the uncertainty and helping them adapt and stay relevant
                                                                for the long-term.</p>
                                                            <p>We have never lost sight of our purpose in the world: we inspire
                                                                people and brands to make
                                                                an impact.</p>
                                                            <p>We have succeeded because, despite the massive shifts that have
                                                                occurred over the years, we
                                                                have always operated in the way David Ogilvy envisioned. He
                                                                created a corporate culture that
                                                                deeply respected and cared about its people and its clients. We
                                                                honor his legacy by
                                                                operating with that same commitment.</p>
                                                            <p>Our core values remain at the heart of everything we do. They are
                                                                not a set of rules, but
                                                                beliefs. They are our DNA.</p>
                                                            <p>They inform how we go about our daily lives that help set
                                                                expectations of the kind of work
                                                                we create, and the kind of people we hire.</p>
                                                            <p>We know that as long as we live our values, we will do great
                                                                work. Our people will learn
                                                                and grow, explore their interests and become the best versions
                                                                of their personal and
                                                                professional selves.</p>
                                                            <p>Our values have gotten us far, and they will take us ever further
                                                                into the future. We live
                                                                this as one force, indivisible.</p>
                                                            <p>We are: Pervasively Creative, Adaptively Connected, Relentlessly
                                                                Curious, Divinely
                                                                Discontented, Eternal Craftspeople.</p>
                                                            <p>We are Ogilvy.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="careers-section-mob-item">
                                            <div class="mobile__slider">
                                                <div class="has-sticky">
                                                    <div class="careers_mobile_image section--sticky">
                                                        <div class="careers_mob_img">
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who%20we%20are%2001.png?itok=rUPFCKdE 1x"
                                                                media="all and (min-width: 1440px)" type="image/png" />
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who%20we%20are%2001.png?itok=rUPFCKdE 1x"
                                                                media="all and (min-width: 1024px)" type="image/png" />
                                                            <source
                                                                srcset="/sites/g/files/dhpsjz106/files/careers/three-column-Image/Who%20we%20are%2001.png 1x"
                                                                media="all and (min-width: 600px)" type="image/png" />
                                                            <img
                                                                src={img1}
                                                                alt="Employees | Ogilvy" title="Employees | Ogilvy"
                                                                typeof="foaf:Image" />
                                                        </div>
                                                        <div class="careers_mob_img">
                                                            <picture>
                                                                <source
                                                                    srcset="/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who%20we%20are%2002_ALT.png?itok=LzySa2YA 1x"
                                                                    media="all and (min-width: 1440px)" type="image/png" />
                                                                <source
                                                                    srcset="/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who%20we%20are%2002_ALT.png?itok=LzySa2YA 1x"
                                                                    media="all and (min-width: 1024px)" type="image/png" />
                                                                <source
                                                                    srcset="/sites/g/files/dhpsjz106/files/careers/three-column-Image/Who%20we%20are%2002_ALT.png 1x"
                                                                    media="all and (min-width: 600px)" type="image/png" />
                                                                <img src="https://www.ogilvy.com/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who we are 02_ALT.png?itok=LzySa2YA"
                                                                    alt="Employees | Ogilvy" title="Employees | Ogilvy"
                                                                    typeof="foaf:Image" />
                                                            </picture>
                                                        </div>
                                                        <div class="careers_mob_img">
                                                            <picture>
                                                                <source
                                                                    srcset="/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who-we-are-03.jpg?itok=f48XCgnZ 1x"
                                                                    media="all and (min-width: 1440px)" type="image/jpeg" />
                                                                <source
                                                                    srcset="/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who-we-are-03.jpg?itok=f48XCgnZ 1x"
                                                                    media="all and (min-width: 1024px)" type="image/jpeg" />
                                                                <source
                                                                    srcset="/sites/g/files/dhpsjz106/files/careers/three-column-Image/Who-we-are-03.jpg 1x"
                                                                    media="all and (min-width: 600px)" type="image/jpeg" />
                                                                <img src="https://www.ogilvy.com/sites/g/files/dhpsjz106/files/styles/career_image_33/public/careers/three-column-Image/Who-we-are-03.jpg?itok=f48XCgnZ"
                                                                    alt="Employees | Ogilvy" title="Employees | Ogilvy"
                                                                    typeof="foaf:Image" />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="careers-section-mob-item">
                                            <div>
                                                <div class="mobile__slider">
                                                    <div class="has-sticky">
                                                        <div class="careers_mobile_slide section--sticky">
                                                            <h2>Grow With Us</h2>
                                                            <p>Ogilvy’s mission is to inspire people and brands to make an
                                                                impact. We believe the best way
                                                                to do that is by fostering a community of inclusion made up of
                                                                people from diverse
                                                                backgrounds, where all contributions are valued, and where every
                                                                employee has the chance to
                                                                become their best creative and professional self.</p>
                                                            <p>Because our greatest asset is, has always been, and will always
                                                                be our people.</p>
                                                            <p>Our founder, David Ogilvy, proudly described our creative network
                                                                as the “teaching
                                                                hospital”. He envisioned Ogilvy as a place where professionals
                                                                not only do great work, but
                                                                come in each day with the possibility to learn and the ability
                                                                to practice and hone their
                                                                craft.</p>
                                                            <p>Learning &amp; Development plays an important role in creating
                                                                this atmosphere.</p>
                                                            <p>Today, Ogilvy's global Learning &amp; Development team continues
                                                                to build on David's legacy
                                                                by equipping our employees with all the tools they need to grow
                                                                their careers and become
                                                                even stronger, more well-rounded professionals.</p>
                                                            <p>In a world that not only requires new ideas but also new
                                                                capabilities to bring those ideas
                                                                to life, our training programs develop our people’s abilities to
                                                                tackle the greatest
                                                                challenges faced by our clients. We utilize our global resources
                                                                to deliver blended learning
                                                                that embodies our founder culture.</p>
                                                            <p>We offer a wide range of programs focused on deepening our
                                                                employees' knowledge and
                                                                enhancing their expertise, with courses and trainings focused on
                                                                areas such as Digital
                                                                Transformation, Leadership, Culture, Change Management, Growth,
                                                                and New Ways of Working,
                                                                among many others.</p>
                                                            <div class="careers_mob_img">
                                                                <picture>
                                                                    <source
                                                                        srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/Grow%20with%20us%2001.png?itok=TnCwrPck 1x"
                                                                        media="all and (min-width: 1440px)" type="image/png" />
                                                                    <source
                                                                        srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/Grow%20with%20us%2001.png?itok=TnCwrPck 1x"
                                                                        media="all and (min-width: 1024px)" type="image/png" />
                                                                    <source
                                                                        srcset="/sites/g/files/dhpsjz106/files/styles/crop_thumbnail/public/careers/half-Image/Grow%20with%20us%2001.png?itok=g9KnACa1 1x"
                                                                        media="all and (min-width: 600px)" type="image/png" />
                                                                    <img src="https://www.ogilvy.com/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/Grow with us 01.png?itok=TnCwrPck"
                                                                        alt="Grow With Us" title="Grow With Us"
                                                                        typeof="foaf:Image" />
                                                                </picture>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-url="/careers/get-involved" class="careers-section-mob-item">
                                            <div>
                                                <div class="mobile__slider">
                                                    <div class="has-sticky">
                                                        <div class="careers_mobile_slide section--sticky">
                                                            <h2>Get Involved</h2>
                                                            <p>Community. Representation. Shared values.</p>
                                                            <p>Our Professional Networks represent a global community of
                                                                individuals from all backgrounds
                                                                committed to working together to shape Ogilvy's culture for the
                                                                present and the future. They
                                                                have been in operation in some form for over a decade, and their
                                                                size, scope, and influence
                                                                have only grown over time.</p>
                                                            <p>The Professional Networks are affinity-based groups enabling
                                                                employees to actively
                                                                participate and contribute in supporting our Diversity &amp;
                                                                Inclusion strategy. The
                                                                networks provide an environment for professional development and
                                                                networking along with a
                                                                formal link to employees, allies and senior management.</p>
                                                            <p>As we believe in empowering our people, Ogilvy's Professional
                                                                Networks are formed by
                                                                employees.</p>
                                                            <p>They are centered around those with common interests—but
                                                                regardless of who you are or where
                                                                you come from, you will always belong at Ogilvy. To that end,
                                                                our networks are open to all
                                                                employees.</p>
                                                            <p>Each network is dedicated to developing programs to promote
                                                                recruitment, retention,
                                                                career development; cultivating informal mentorship through
                                                                networking opportunities;
                                                                fostering education and outreach opportunities; making a
                                                                difference in the communities in
                                                                which we operate; and providing advice and counsel to our
                                                                business by acting as in-house
                                                                focus groups and sounding boards.</p>
                                                            <p>Networks supporting LGBTQ+, cultural and ethnic diversity,
                                                                administrative professionals,
                                                                neurodiversity, and working parents are among the many active
                                                                employee-driven groups.</p>
                                                            <div class="careers_mob_img">
                                                                <picture>
                                                                    <source
                                                                        srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/Get%20involved%2001.png?itok=5LhMiNfI 1x"
                                                                        media="all and (min-width: 1440px)" type="image/png" />
                                                                    <source
                                                                        srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/Get%20involved%2001.png?itok=5LhMiNfI 1x"
                                                                        media="all and (min-width: 1024px)" type="image/png" />
                                                                    <source
                                                                        srcset="/sites/g/files/dhpsjz106/files/styles/crop_thumbnail/public/careers/half-Image/Get%20involved%2001.png?itok=ZMa_WTKR 1x"
                                                                        media="all and (min-width: 600px)" type="image/png" />
                                                                    <img src="https://www.ogilvy.com/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/Get involved 01.png?itok=5LhMiNfI"
                                                                        alt="Get Involved" title="Get Involved"
                                                                        typeof="foaf:Image" />
                                                                </picture>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-url="/careers/diversity-inclusion" class="careers-section-mob-item">
                                            <div>
                                                <div class="mobile__slider">
                                                    <div class="has-sticky">
                                                        <div class="careers_mobile_slide section--sticky">
                                                            <div class="careers_mob_img">
                                                                <picture>
                                                                    <source
                                                                        srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/D-and-I-new.jpg?itok=3Pe_Jm0Y 1x"
                                                                        media="all and (min-width: 1440px)" type="image/jpeg" />
                                                                    <source
                                                                        srcset="/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/D-and-I-new.jpg?itok=3Pe_Jm0Y 1x"
                                                                        media="all and (min-width: 1024px)" type="image/jpeg" />
                                                                    <source
                                                                        srcset="/sites/g/files/dhpsjz106/files/styles/crop_thumbnail/public/careers/half-Image/D-and-I-new.jpg?itok=QZZqP1sA 1x"
                                                                        media="all and (min-width: 600px)" type="image/jpeg" />
                                                                    <img src="https://www.ogilvy.com/sites/g/files/dhpsjz106/files/styles/careers_images/public/careers/half-Image/D-and-I-new.jpg?itok=3Pe_Jm0Y"
                                                                        alt="Diversity &amp; Inclusion | Ogilvy"
                                                                        title="Diversity &amp; Inclusion | Ogilvy"
                                                                        typeof="foaf:Image" />
                                                                </picture>
                                                            </div>
                                                            <h2>Diversity and Inclusion</h2>
                                                            <p>We firmly believe that a racially, ethnically, and culturally
                                                                diverse workforce, where all
                                                                perspectives are valued, leads to richer experiences for our
                                                                people and better outcomes for
                                                                our clients. Diversity has always been and will always be a part
                                                                of Ogilvy’s DNA, our core
                                                                values and our culture. Our founder David Ogilvy was an early
                                                                advocate for diversity in the
                                                                workplace. As Chairman of the United Negro College Fund in 1968,
                                                                he set the agenda for the
                                                                agency’s pursuit of inclusion in the workplace.</p>
                                                            <p>Diversity, inclusiveness, and explicit anti-racism are not just
                                                                issues of policy at Ogilvy,
                                                                but essential to our success and sustainability as a
                                                                business. Diverse teams are better at
                                                                solving complex problems—and employees who feel safe, welcome,
                                                                supported, and valued for
                                                                being their authentic selves are better able to do their very
                                                                best work.</p>
                                                            <p>We are committed to providing an open and safe environment for
                                                                everyone to thrive at Ogilvy
                                                                regardless of their race, color, creed, religion, sex, national
                                                                origin, veteran status,
                                                                ability, domestic violence victim status, age, citizenship,
                                                                marital or domestic/civil
                                                                partnership status, sexual orientation, gender identity or
                                                                expression. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-url="/careers/david-ogilvy-quote" class="careers-section-mob-item">
                                            <div>
                                                <div class="mobile__slider">
                                                    <div class="has-sticky">
                                                        <div class="careers_mobile_slide section--sticky">
                                                            <div class="careers-quote-wrapper">
                                                                <div class="careers-quote">
                                                                    Talent, I believe, is most likely to be found among
                                                                    nonconformists, rebels, and
                                                                    dissenters.
                                                                    <span>– David Ogilvy</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>


                <h2 class="visually-hidden" id="block-mainnavigation-3-menu">Main navigation</h2>




                <ul class="site-nav__list">
                    <li class="site-nav__item">
                        <a href="https://www.ogilvy.com/ogilvy" class="about_ogilvy"
                            data-drupal-link-system-path="ogilvy">Ogilvy</a>
                    </li>
                    <li class="site-nav__item">
                        <a href="https://www.ogilvy.com/team" data-drupal-link-system-path="team">Team</a>
                    </li>
                    <li class="site-nav__item">
                        <a href="https://www.ogilvy.com/ideas" class="ideas-link-mn"
                            data-drupal-link-system-path="ideas">Ideas</a>
                    </li>
                    <li class="site-nav__item">
                        <a href="https://www.ogilvy.com/careers" data-drupal-link-system-path="careers">Careers</a>
                    </li>
                </ul>

                <div class="modal__wrapper js-modal__wrapper">
                    <div class="modal js-modal">
                        <div class="container container--s">
                            <div class="modal__content-wrapper js-modal__content-wrapper">
                            </div>
                        </div>
                        <div class="popup-cookies-wrap">
                            <div class="cookies_clumn">
                                <p>In order to interact with this feature, you must turn on Functional Cookies. Change your
                                    cookie
                                    preference below, and&nbsp;<a class="cookie_page_link"
                                        href="https://www.ogilvy.com/cookies/">Click
                                        here</a>&nbsp;to read more about how we use cookies.</p>
                                <div target="1" class="cookies_ani-border" id="functional-cookies-id">
                                    <span></span>
                                    <p>Off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >

        </>
    )
}

export default About;


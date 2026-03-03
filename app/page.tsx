'use server'
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header/header";
import Button from "./components/button/button";
import ServiceCard from "./components/service-card/service-card";
import ShadowCard from "./components/shadow-card/shadow-card";
import ProblemCard from "./components/problem-card/problem-card";
import NumberCard from "./components/number-card/number-card";
import Arrow from "./components/arrow/arrow";
import Accordion from "./components/accordion/accordion";
import AccordionContainer from "./components/accordion/accordion-container";
import Input from "./components/input/input";
import SendRequestForm from "./components/form/send-request";
import Footer from "./components/footer/footer";
import CalculateButton from "./components/button/buttons/calculate";
import FloatingForm from "./components/floating-form/floating-form";
import styles from "./page.module.sass";

export default async function Landing() {
    return (<>
        <Header/>
        <div className={styles.wrapper}>
            {/* HERO */}
            <div id="hero" className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitleDesktop}>
                            Разработка документации по ФЗ-152 "О персональных данных"
                        </h1>
                        <h1 className={styles.heroTitleMobile}>
                            Разработка<br/> документации по ФЗ-152 "О персональных<br/> данных"
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Услуги по разработке документации для ИП, ООО,
                            АО и самозанятых как операторов персональных данных
                            в реестре Роскомнадзора в соответствии с Федеральным
                            Законом №152-ФЗ "О персональных данных"
                        </p>
                    </div>
                    <Image
                        src="./lock.svg"
                        alt="lock"
                        width={680}
                        height={451}
                        className={styles.heroLock}
                    />
                </div>
            </div>

            {/* SERVICES OVERVIEW */}
            <div className={styles.servicesOverview}>
                <Image
                    src="./backgrounds/background-1.svg"
                    alt="background image"
                    width={1920}
                    height={1298}
                    className={styles.bg1}
                />
                <div className={styles.bgBlue}></div>
                <Image
                    src="/cloud.png"
                    alt="cloud image"
                    width={1595}
                    height={559}
                    className={styles.cloudBg}
                />
                <div className={styles.servicesLayout}>
                    <div className={styles.servicesList}>
                        <div className={styles.servicesInner}>
                            <div className={styles.servicesTag}>
                                Услуги
                            </div>
                            <ul className={styles.servicesUl}>
                                <li><span>Политика по обработке персональных данных</span></li>
                                <li><span>Локальные акты и инструкции</span></li>
                                <li><span>Отправка уведомлений в Роскомнадзор</span></li>
                                <li><span>Согласие на обработку персональных данных</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.servicesButtons}>
                        <Link href="#contact"><Button variant="dark" size="md">Оставить заявку</Button></Link>
                        <CalculateButton/>
                    </div>
                </div>
            </div>
        </div>

        {/* SERVICES CARDS */}
        <div id="services" className={styles.servicesSection}>
            <div className={styles.servicesInner}>
                <div className={styles.servicesHeading}>
                    <h2 className={styles.servicesH2}>Чем мы занимаемся?</h2>
                    <div className={styles.servicesSubtitle}>Оказываем помощь Вам в соблюдении обязанностей как оператора персональных данных во избежание получения штрафов до 1,5 млн. рублей</div>
                </div>

                {/* Desktop grid (2xl) */}
                <div className={styles.servicesGrid}>
                    <ServiceCard
                        number="01"
                        title="Регистрация ООО, ИП, СЗ в Роскомнадзоре"
                        description="Проведем официальную регистрацию компании, ИП или самозанятого в реестре операторов персональных данных. Подадим уведомление в Роскомнадзор за вас. Быстро, корректно и без бюрократии"
                    />
                    <ServiceCard
                        number="02"
                        title="Документация по 152-ФЗ «О персональных данных»"
                        description="Разработаем полный комплект внутренней документации в соответствии с законом №152-ФЗ: политика конфиденциальности, согласия, положения и инструкции. Всё готово к проверке."
                        className={styles.card02}
                    />
                    <div className={styles.card03Container}>
                        <ServiceCard
                            number="03"
                            title="Юридический анализ Вашего сайта"
                            description="Проведем комплексную проверку сайта на соответствие требованиям 152-ФЗ. Выявим нарушения, дадим рекомендации и доработаем тексты. Поможем снизить юридические риски."
                        />
                    </div>
                    <ServiceCard
                        number="04"
                        title="Подготовка к проверке Роскомнадзора"
                        description="Проведем официальную регистрацию компании, ИП или самозанятого в реестре операторов персональных данных. Подадим уведомление в Роскомнадзор за вас. Быстро, корректно и без бюрократии"
                    />
                    <div className={`${styles.card05Container} after-rounding-block`}>
                        <ServiceCard
                            number="05"
                            title="Ответ на предписания и требования Роскомнадзора"
                            description="Проведем официальную регистрацию компании, ИП или самозанятого в реестре операторов персональных данных. Подадим уведомление в Роскомнадзор за вас. Быстро, корректно и без бюрократии"
                        />
                    </div>
                </div>

                {/* Mobile/tablet flex */}
                <div className={styles.servicesFlex}>
                    <ServiceCard
                        number="01"
                        title="Регистрация ООО, ИП, СЗ в Роскомнадзоре"
                        description="Проведем официальную регистрацию компании, ИП или самозанятого в реестре операторов персональных данных. Подадим уведомление в Роскомнадзор за вас. Быстро, корректно и без бюрократии"
                    />
                    <ServiceCard
                        number="02"
                        title="Документация по 152-ФЗ «О персональных данных»"
                        description="Разработаем полный комплект внутренней документации в соответствии с законом №152-ФЗ: политика конфиденциальности, согласия, положения и инструкции. Всё готово к проверке."
                    />
                    <ServiceCard
                        number="03"
                        title="Юридический анализ Вашего сайта"
                        description="Проведем комплексную проверку сайта на соответствие требованиям 152-ФЗ. Выявим нарушения, дадим рекомендации и доработаем тексты. Поможем снизить юридические риски."
                    />
                    <ServiceCard
                        number="04"
                        title="Подготовка к проверке Роскомнадзора"
                        description="Проведем официальную регистрацию компании, ИП или самозанятого в реестре операторов персональных данных. Подадим уведомление в Роскомнадзор за вас. Быстро, корректно и без бюрократии"
                    />
                    <ServiceCard
                        number="05"
                        title="Ответ на предписания и требования Роскомнадзора"
                        description="Проведем официальную регистрацию компании, ИП или самозанятого в реестре операторов персональных данных. Подадим уведомление в Роскомнадзор за вас. Быстро, корректно и без бюрократии"
                    />
                </div>
            </div>
        </div>

        {/* SHADOW CARDS */}
        <div className={styles.shadowSection}>
            <div className={styles.shadowInner}>
                <div className={styles.shadowMobileTitle}>
                    <h3 className={styles.shadowMobileTitleH3}>Необходимое для операторов данных</h3>
                    <p className={styles.shadowMobileTitleP}>Базовый, но ключевой минимум для соответствия закону №152-ФЗ "О персональных данных"</p>
                </div>
                <div className={styles.shadowCol}>
                    <ShadowCard title="Уведомление Роскомнадзора" icon="/icons/cowbell.svg" rounding="top"/>
                    <ShadowCard title="Политика в области обработки ПДн" icon="/icons/doc.svg" rounding="bottom"/>
                </div>
                <div className={styles.shadowColCenter}>
                    <ShadowCard title="Уведомление Роскомнадзора" icon="/icons/persons.svg" rounding="full"/>
                    <div className={styles.shadowDesktopTitle}>
                        <h3 className={styles.shadowDesktopTitleH3}>Необходимое для операторов данных</h3>
                        <p className={styles.shadowDesktopTitleP}>Базовый, но ключевой минимум для соответствия закону №152-ФЗ "О персональных данных"</p>
                    </div>
                    <ShadowCard title="Политика в области обработки ПДн" icon="/icons/person.svg" rounding="full"/>
                </div>
                <div className={styles.shadowCol}>
                    <ShadowCard title="Уведомление Роскомнадзора" icon="/icons/phone.svg" rounding="top"/>
                    <ShadowCard title="Политика в области обработки ПДн" icon="/icons/layers.svg" rounding="bottom"/>
                </div>
            </div>
        </div>

        {/* PROBLEMS */}
        <div id="problems" className={styles.problemsSection}>
            <div className={styles.problemsInner}>
                <div className={styles.problemsCorners}>
                    <div className={`${styles.cornerRight} after-rounding-big-block-right`}></div>
                    <div className={`${styles.cornerLeft} after-rounding-big-block-left`}></div>
                </div>
                <div className={styles.problemsBg}></div>
                {/* Desktop */}
                <div className={styles.problemsTop}>
                    <div className={styles.problemsTitleMobile}>Последствия несоблюдения требований №152-ФЗ "О персональных данных"</div>
                    <div className={styles.problemsTitleDesktop}>Последствия<br/>несоблюдения<br/>требований<br/>№152-ФЗ "О персональных данных"</div>
                    <div className={styles.problemsFirstCard}>
                        <ProblemCard
                            title="Штрафы"
                            description={['Для юр. лиц - до 300 тыс. руб.', 'Для ИП - до 50 тыс. руб.']}
                            href="#"
                            icon="debit-card"
                        />
                    </div>
                </div>
                <div className={styles.problemsBottom}>
                    <ProblemCard
                        title="Проблемы с репутацией"
                        description={['Утрата доверия со стороны Ваших', 'клиентов.']}
                        icon="dislike"
                    />
                    <ProblemCard
                        title="Блокировка сайта"
                        description="Роскомнадзор имеет право заблокировать Ваш сайт по решению суда"
                        icon="lock"
                    />
                </div>

                {/* Mobile */}
                <div className={styles.problemsMobile}>
                    <div className={styles.problemsTitleMobile}>Последствия несоблюдения требований №152-ФЗ "О персональных данных"</div>
                    <ProblemCard
                        title="Блокировка сайта"
                        description="Роскомнадзор имеет право заблокировать Ваш сайт по решению суда"
                        icon="lock"
                    />
                    <ProblemCard
                        title="Штрафы"
                        description={['Для юр. лиц - до 300 тыс. руб.', 'Для ИП - до 50 тыс. руб.']}
                        href="#"
                        icon="debit-card"
                    />
                    <ProblemCard
                        title="Проблемы с репутацией"
                        description={['Утрата доверия со стороны Ваших', 'клиентов.']}
                        icon="dislike"
                    />
                </div>
            </div>
        </div>

        {/* STEPS */}
        <div className={styles.stepsSection}>
            <div className={styles.stepsOuter}>
                <Image
                    src="backgrounds/background-2.svg"
                    alt="cloud image"
                    width={1920}
                    height={987}
                    className={styles.stepsBg2}
                />
                <div className={styles.stepsBgColor}></div>
                <h3 className={styles.stepsTitleMobile}>Четкий путь от проблемы к соответствию</h3>
                <h3 className={styles.stepsTitleDesktop}>Четкий путь<br/> от проблемы<br/> к соответствию</h3>
            </div>
            <div className={styles.stepsContent}>
                <div className={styles.stepsRow}>
                    <NumberCard
                        number="01"
                        title="Консультация и анализ"
                        description="Обсуждаем вашу ситуацию, определяем объем работ."
                    />
                    <Arrow/>
                    <NumberCard
                        number="02"
                        title="Глубокий аудит"
                        description="Эксперты проверяют вашу ИТ-инфраструктуру и средства защиты."
                    />
                    <Arrow/>
                    <NumberCard
                        number="03"
                        title="Заключение и дорожная карта"
                        description="Вы получаете отчёт с приоритизированным списком действий."
                    />
                    <Arrow/>
                    <NumberCard
                        number="04"
                        title="Приведение документации в порядок"
                        description="Разрабатываем документы, даём инструкции разработчикам"
                    />
                    <Arrow/>
                    <NumberCard
                        number="05"
                        title="Поддержка и защита"
                        description="Консультируем по вопросам, которые могут возникнуть у регуляторов."
                    />
                </div>
                <Button variant="primary" size="sm" className={styles.startButton}>Начать работу</Button>
            </div>
        </div>

        {/* DIVIDER TOP */}
        <div className={`${styles.divider} ${styles.dividerTop}`}>
            <div className={styles.dividerOval}></div>
        </div>

        {/* FAQ */}
        <div id="faq" className={styles.faqSection}>
            <h3 className={styles.faqTitle}>Частые вопросы</h3>
            <div className={styles.faqWrapper}>
                <AccordionContainer/>
            </div>
            <Image
                src="/cloud.png"
                alt="cloud image"
                width={1595}
                height={559}
                className={styles.faqCloud}
            />
        </div>

        {/* DIVIDER BOTTOM */}
        <div className={styles.divider}>
            <div className={styles.dividerOval}></div>
        </div>

        {/* CONTACT */}
        <div id="contact" className={styles.contactSection}>
            <div className={styles.contactInner}>
                <div className={styles.contactLeft}>
                    <h3 className={styles.contactTitle}>Остались вопросы?</h3>
                    <p className={styles.contactSubtitle}>Оставьте завку и мы свяжемся с Вами для проведения бесплатной консультации</p>
                    <div className={styles.contactRobotRow}>
                        <Image
                            src="/robot.svg"
                            alt="robot"
                            width={372}
                            height={354}
                            className={styles.contactRobot}
                        />
                        <p className={styles.contactCallHours}>Время работы колл-центра: 10:00 - 19:00</p>
                    </div>
                </div>
                <SendRequestForm/>
            </div>
        </div>

        <Footer/>
        <FloatingForm/>
    </>);
}

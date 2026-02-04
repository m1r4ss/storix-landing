"use client";

import styles from "./page.module.css";
import { useMemo, useState } from "react";

const imgRectangle3 =
  "https://www.figma.com/api/mcp/asset/e5144d63-facd-4613-abf3-d27d83ac3d8f";
const imgStorix =
  "https://www.figma.com/api/mcp/asset/5fd6b9c0-8e8d-4d5a-af1a-696528540e47";
const imgGroup8 =
  "https://www.figma.com/api/mcp/asset/18366929-1f62-498f-bc33-302e513fbfb1";
const imgArrow1 =
  "https://www.figma.com/api/mcp/asset/e8b93682-a0cf-4545-baa2-e3d379b20550";
const imgGroup1 =
  "https://www.figma.com/api/mcp/asset/a3446335-3283-493c-b481-2f9b9b799f3f";
const imgLine5 =
  "https://www.figma.com/api/mcp/asset/328c6b24-9a8e-4995-9559-cad645c33fc2";
const imgLine6 =
  "https://www.figma.com/api/mcp/asset/ea23f844-dab9-45fd-9b4b-abf42a5c5d93";
const imgVector1 =
  "https://www.figma.com/api/mcp/asset/99cbd9cd-893a-4e36-9146-ef9bf5628d78";
const imgVector7 =
  "https://www.figma.com/api/mcp/asset/3eeb81ad-65c3-4d35-92db-20ae291c372b";

const featureRows = [
  {
    title: "Создайте организацию за минуту",
    body: "Начните с простого: зарегистрируйтесь и создайте свою первую организацию. Всё готово для работы с первого экрана.",
    align: "left"
  },
  {
    title: "Добавляйте товары и склады",
    body: "Управляйте вариациями, остатками и движением без сложных таблиц — всё в одном интерфейсе.",
    align: "right"
  },
  {
    title: "Контролируйте продажи",
    body: "Фиксируйте продажи и возвраты, получайте аналитику по категориям и поставщикам в реальном времени.",
    align: "left"
  },
  {
    title: "Следите за остатками",
    body: "Система подскажет, какие позиции требуют закупки, чтобы вы не теряли продажи.",
    align: "right"
  },
  {
    title: "Работайте всей командой",
    body: "Роли, права доступа и приоритетная поддержка — чтобы каждый сотрудник видел только нужное.",
    align: "left"
  }
];

const faq = [
  {
    q: "Как считается количество товаров?",
    a: "Товары считаются по активным позициям в каталоге. В учёт входят все SKU, включая вариации по цвету и размеру."
  },
  {
    q: "Сколько сотрудников я могу пригласить?",
    a: "Количество сотрудников зависит от тарифа. В стартовом — 1 пользователь, в бизнес — до 5, в премиум — без ограничений."
  },
  {
    q: "Можно ли выгрузить данные?",
    a: "Да, выгрузка доступна в формате CSV и XLSX. Вы можете экспортировать остатки, продажи и закупки."
  },
  {
    q: "Как быстро настроить систему?",
    a: "Базовая настройка занимает 10–15 минут: создайте организацию, склад и добавьте товары."
  },
  {
    q: "Есть ли поддержка?",
    a: "Поддержка доступна по email для всех тарифов, приоритетная — для бизнес и премиум."
  }
];

export default function Home() {
  const tiers = useMemo(
    () => [
      { volume: "500", monthly: 2900 },
      { volume: "1 000", monthly: 3900 },
      { volume: "3 000", monthly: 5900 },
      { volume: "5 000", monthly: 7900 },
      { volume: "10 000", monthly: 9900 }
    ],
    []
  );
  const [tierIndex, setTierIndex] = useState(2);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const current = tiers[tierIndex];
  const price =
    billing === "monthly"
      ? current.monthly
      : Math.round(current.monthly * 0.8);

  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <div className={styles.logo}>
          <img src={imgGroup8} alt="" className={styles.logoIcon} />
          <img src={imgStorix} alt="Storix" className={styles.logoText} />
        </div>
        <nav className={styles.navLinks}>
          <a href="#how">Как это работает</a>
          <a href="#pricing">Тарифы</a>
          <a href="#support">Поддержка</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className={styles.navActions}>
          <button className={styles.ghostBtn}>Войти</button>
          <button className={styles.primaryBtn}>Зарегистрироваться</button>
        </div>
      </header>

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Упростите <span>учёт товаров</span>
          <br />вместе с Storix
        </h1>
        <p className={styles.heroSubtitle}>
          Склады, остатки и продажи — в одном месте.
        </p>
        <div className={styles.heroActions}>
          <button className={styles.primaryBtn}>Попробовать бесплатно</button>
          <button className={styles.outlineBtn}>Посмотреть демо</button>
        </div>
        <div className={styles.heroShot}>
          <img src={imgRectangle3} alt="" />
        </div>
      </section>

      <section className={styles.rolesBand}>
        <div className={styles.rolesWrap}>
          <h2>Владельцы, управляющие, сотрудники — каждому найдётся место</h2>
          <div className={styles.rolesGrid}>
            <div>
              <p>Владелец магазина одежды—</p>
              <span>Контроль остатков, списаний и закупок без Excel</span>
            </div>
            <div>
              <p>Аналитик или бухгалтер—</p>
              <span>Графики по закупкам и продажам, выгрузки</span>
            </div>
            <div>
              <p>Управляющий складом—</p>
              <span>Удобное добавление товаров, вариаций, движение остатков</span>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className={styles.features}>
        <div className={styles.featuresIntro}>
          <h2>
            Всё под рукой. <span>Ничего лишнего.</span>
          </h2>
          <p>
            Мы убрали всё лишнее и оставили только нужное: добавляйте склады и
            товары, фиксируйте движения и следите за остатками и аналитикой в
            реальном времени.
          </p>
        </div>
        <div className={styles.featureRows}>
          {featureRows.map((row, index) => (
            <div
              key={row.title}
              className={`${styles.featureRow} ${
                row.align === "right" ? styles.reverse : ""
              }`}
            >
              <div className={styles.featureCard}>
                <img src={imgRectangle3} alt="" />
              </div>
              <div className={styles.featureText}>
                <h3>{row.title}</h3>
                <p>{row.body}</p>
                <button className={styles.linkBtn}>
                  Перейти к созданию
                  <span>
                    <img src={imgArrow1} alt="" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className={styles.pricing}>
        <div className={styles.pricingHeader}>
          <h2>
            Гибкие тарифы для бизнеса <span>любого масштаба</span>
          </h2>
          <div className={styles.pricingActions}>
            <button className={styles.primaryBtn}>Попробовать бесплатно</button>
            <button className={styles.outlineBtn}>Посмотреть демо</button>
          </div>
        </div>
        <div className={styles.pricingControls}>
          <div>
            <p>Какой у вас объём учёта?</p>
            <div className={styles.slider}>
              <input
                className={styles.sliderInput}
                type="range"
                min={0}
                max={tiers.length - 1}
                step={1}
                value={tierIndex}
                onChange={(event) => setTierIndex(Number(event.target.value))}
                aria-label="Объём учета"
              />
              <div className={styles.sliderTrack} aria-hidden="true">
                <div
                  className={styles.sliderFill}
                  style={{
                    width: `${(tierIndex / (tiers.length - 1)) * 100}%`
                  }}
                />
              </div>
              <div className={styles.sliderTags}>
                {tiers.map((tier, i) => (
                  <span
                    key={tier.volume}
                    className={i === tierIndex ? styles.tagActive : ""}
                  >
                    {tier.volume}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p>Оплата</p>
            <div className={styles.toggle}>
              <button
                className={billing === "monthly" ? styles.toggleActive : ""}
                onClick={() => setBilling("monthly")}
              >
                Месячная
              </button>
              <button
                className={billing === "yearly" ? styles.toggleActive : ""}
                onClick={() => setBilling("yearly")}
              >
                Годовая
              </button>
            </div>
          </div>
        </div>
        <div className={styles.pricingCards}>
          <article className={styles.card}>
            <h4>Старт</h4>
            <strong>Беслпатно</strong>
            <p>Для небольших магазинов и тех, кто только начинает</p>
            <button className={styles.ghostBtn}>Попробовать бесплатно</button>
            <ul>
              <li>
                <img src={imgVector1} alt="" /> До 100 товаров
              </li>
              <li>
                <img src={imgVector1} alt="" /> 1 склад
              </li>
              <li>
                <img src={imgVector1} alt="" /> 1 пользователь
              </li>
              <li>
                <img src={imgVector1} alt="" /> Поступления и списания
              </li>
              <li>
                <img src={imgVector1} alt="" /> Базовая аналитика
              </li>
              <li>
                <img src={imgVector1} alt="" /> Поддержка по e-mail
              </li>
            </ul>
          </article>

          <article className={`${styles.card} ${styles.cardHighlight}`}>
            <h4>Бизнес</h4>
            <strong>
              {price.toLocaleString("ru-RU")}{" "}
              <span>₸ / месяц</span>
            </strong>
            <p>Оптимально для малого и среднего бизнеса</p>
            <button className={styles.solidWhiteBtn}>Зарегистрироваться</button>
            <ul>
              <li>
                <img src={imgVector7} alt="" /> До 1 000 товаров
              </li>
              <li>
                <img src={imgVector7} alt="" /> Неограниченно складов
              </li>
              <li>
                <img src={imgVector7} alt="" /> До 5 пользователей
              </li>
              <li>
                <img src={imgVector7} alt="" /> Расширенная аналитика
              </li>
              <li>
                <img src={imgVector7} alt="" /> Учёт продаж
              </li>
              <li>
                <img src={imgVector7} alt="" /> Роли и права доступа
              </li>
              <li>
                <img src={imgVector7} alt="" /> Приоритетная поддержка
              </li>
            </ul>
          </article>

          <article className={styles.card}>
            <h4>Премиум</h4>
            <strong>Индивидуально</strong>
            <p>Для сетевых компаний с большим объёмом данных</p>
            <button className={styles.ghostBtn}>Связаться с нами</button>
            <ul>
              <li>
                <img src={imgVector1} alt="" /> Безлимит товаров
              </li>
              <li>
                <img src={imgVector1} alt="" /> Сегментированная аналитика
              </li>
              <li>
                <img src={imgVector1} alt="" /> Персональный менеджер
              </li>
              <li>
                <img src={imgVector1} alt="" /> Интеграции по запросу
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="support" className={styles.faq}>
        <div className={styles.faqIntro}>
          <h2>Есть вопросы? Мы уже ответили</h2>
          <p>
            Не нашли ответ? Напишите нам в <u>поддержку</u>
          </p>
        </div>
        <div className={styles.faqList}>
          {faq.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <button
                key={`${item.q}-${index}`}
                className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}
                onClick={() =>
                  setOpenFaqIndex(isOpen ? null : index)
                }
                type="button"
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <img src={imgGroup1} alt="" />
                {isOpen && <p className={styles.faqAnswer}>{item.a}</p>}
              </button>
            );
          })}
        </div>
      </section>

      <footer id="contacts" className={styles.footer}>
        <div className={styles.footerBrand}>
          <h3>WMS</h3>
          <p>
            Наш сервис помогает малому и среднему бизнесу эффективно
            контролировать остатки, продажи, закупки и движение товаров — без
            сложных программ и Excel-таблиц.
            <br />
            <br />
            Приложение создано для того, чтобы вы тратили меньше времени на
            рутину и больше — на развитие бизнеса.
          </p>
        </div>
        <div className={styles.footerCols}>
          <div>
            <h4>СОЦ СЕТИ</h4>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">LinkedIn</a>
          </div>
          <div>
            <h4>СОЦ СЕТИ</h4>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">LinkedIn</a>
          </div>
          <div>
            <h4>СОЦ СЕТИ</h4>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className={styles.footerPolicy}>Политика конфендициальности</div>
      </footer>
    </main>
  );
}

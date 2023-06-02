(function () {
  const selectBox = document.getElementById("change-language");
  const nav = document.getElementById("nav");
  const hero = document.querySelector(".hero__info");
  const contactUsHeader = document.querySelector("#contact-us-header");
  const footerAddress = document.querySelector("#footer-address");
  const footerPhone = document.querySelector("#footer-phone");
  const footerEmail = document.querySelector("#footer-email");
  const footerCreate = document.querySelector("#footer-create");
  const footerTopText = document.querySelector("#footer-top-text");
  const footerTopButton = document.querySelector("#footer-top-button");
  const engineeringHeader = document.querySelector("#engineering--header");
  const engineeringItem1 = document.querySelector("#engineering-item-1");
  const engineeringItem2 = document.querySelector("#engineering-item-2");
  const engineeringItem3 = document.querySelector("#engineering-item-3");
  const engineeringItem4 = document.querySelector("#engineering-item-4");
  const engineeringItem5 = document.querySelector("#engineering-item-5");
  const engineeringItem6 = document.querySelector("#engineering-item-6");
  const engineeringItem7 = document.querySelector("#engineering-item-7");
  const engineeringItem8 = document.querySelector("#engineering-item-8");
  const engineeringMainTitle = document.querySelector("#engineering-main-title");

  translateContent();
  selectBox.addEventListener("change", translateContent);

  function translateContent() {
    const languageValue = selectBox.options[selectBox.selectedIndex].value;

    if (languageValue == "ru") {
      // * Nav
      nav.children[0].firstElementChild.textContent = "Главная";
      nav.children[1].firstElementChild.textContent = "О нас";
      nav.children[2].firstElementChild.textContent = "Анализ данных";
      nav.children[3].firstElementChild.textContent = "Визуализация данных";
      nav.children[4].firstElementChild.textContent = "Разработка данных";
      nav.children[5].firstElementChild.textContent = "Контакты";
      // * Hero
      hero.children[0].textContent = "Услуги по обработке данных";
      hero.children[2].textContent =
        "В MAAB Innovation мы предлагаем самые современные решения для обработки данных, которые могут поднять ваш бизнес на новый уровень. Наша команда экспертов разработает первоклассную инфраструктуру и оптимизирует поток данных, чтобы извлечь ценную информацию и повысить общую производительность. Кроме того, наши инженеры по облачным данным могут эффективно перенести корпоративные данные в рекордно короткие сроки.";

      // * Contact Us
      contactUsHeader.children[0].textContent =
        "Свяжитесь с нашими экспертами, чтобы узнать о наших услугах, проанализировать и визуализировать Ваши данные и создать индивидуальное решение BI, которое поможет вашему бизнесу расти, экономя Ваши деньги и время.";
      contactUsHeader.children[1].textContent = "Связаться с нами";

      // * Footer
      footerAddress.children[0].textContent = "Наш офис";
      footerAddress.children[1].textContent =
        'г.Ташкент, Мирабадский район, Ойбека, 18/1 Бизнес Центр "ATRIUM" 5м этажЕ-1.';
      footerPhone.children[0].textContent = "Номер телефона";
      footerPhone.children[1].textContent = "+998 99 8957706";
      footerEmail.children[0].textContent = "Электронная почта";
      footerEmail.children[1].textContent = "info@maab.uz";
      footerCreate.textContent = "Все права защищены.";
      footerTopText.textContent =
        "Давайте вместе разрабатывать решения бизнес-аналитики для Вашей компании!";
      footerTopButton.textContent = "Связаться с нами";

      // * Engineering
      engineeringHeader.children[0].textContent = `Что такое инжиниринг данных?`;
      engineeringHeader.children[1].textContent = `Инжиниринг данных включает в себя обработку огромных объемов необработанных данных, создание и поддержку конвейеров данных для объединения информации из различных источников и организации ее в одном месте для тщательного бизнес-анализа.`;
      engineeringHeader.children[2].textContent = `Преобразовывая данные в формат, пригодный для анализа специалистами по данным, инженеры данных предоставляют предприятиям точную аналитику, которая позволяет принимать решения на основе фактов. Точная обработка данных позволяет компаниям решать сложные бизнес-задачи и ускорять разработку новых продуктов и услуг при минимальных затратах.`;

      engineeringMainTitle.textContent = "Решения для обработки данных, которые мы поставляем"

      engineeringItem1.children[0].textContent = `Построение архитектуры данных`;
      engineeringItem1.children[1].textContent = `Наша компания предоставляет настраиваемые и легкодоступные решения для архитектуры данных. Наша структура объединяет информацию о том, как данные передаются внутри конкретной организации. Наши решения по архитектуре данных помогают компаниям достичь своих целей.`;

      engineeringItem2.children[0].textContent = `Реализация озера данных`;
      engineeringItem2.children[1].textContent = `Озера данных управляют хранением больших объемов необработанных необработанных данных до тех пор, пока они не будут использованы аналитическими приложениями. Мы предлагаем внедрение Data Lake, которое позволяет предприятиям повышать производительность и рост без дополнительных усилий.`;

      engineeringItem3.children[0].textContent = `Реализация хранилища данных`;
      engineeringItem3.children[1].textContent = `Мы создаем хранилища данных, которые объединяют всю информацию компании из нескольких источников в едином репозитории, отдельном от оперативной базы данных. Эта информация затем используется для создания аналитических идей.`;

      engineeringItem4.children[0].textContent = `Миграция облачных данных`;
      engineeringItem4.children[1].textContent = `Миграция в облако может быть сложным процессом, но она необходима в современном бизнесе. Наши инженеры по работе с облачными данными настроят ваше озеро данных и быстро перенесут корпоративные данные по доступной цене.`;

      engineeringItem5.children[0].textContent = `Управление данными и соответствие`;
      engineeringItem5.children[1].textContent = `Управление данными и соответствие требованиям имеют решающее значение для обеспечения безопасности всех данных и их соответствия государственным нормам и бизнес-правилам. Наша команда гарантирует, что ваши данные надежно защищены.`;

      engineeringItem6.children[0].textContent = `Аналитика и визуализация данных`;
      engineeringItem6.children[1].textContent = `Наши технологии обработки данных используют эти инструменты для анализа и обработки больших объемов информации и представления ее в простом для понимания виде. Это позволяет предприятиям получать доступ к данным, которые могут улучшить их деятельность.`;

      engineeringItem7.children[0].textContent = `Консалтинг по обработке данных`;
      engineeringItem7.children[1].textContent = `Наша команда опытных инженеров имеет основополагающее значение для успешного управления данными. Наши инженеры по обработке данных проектируют данные и управляют ими, чтобы подготовить их к отчетности, что приводит к лучшим результатам и решениям, основанным на данных.`;

      engineeringItem8.children[0].textContent = `Стратегия данных и дорожная карта`;
      engineeringItem8.children[1].textContent = `Мы можем помочь вам разработать стратегию и дорожную карту данных, в которой будут описаны шаги, необходимые для достижения ваших целей и задач, связанных с данными.`;
    }

    if (languageValue == "uz") {
      // * Nav
      nav.children[0].firstElementChild.textContent = "Asosiy";
      nav.children[1].firstElementChild.textContent = "Biz haqimizda";
      nav.children[2].firstElementChild.textContent = "Ma'lumotlar tahlili";
      nav.children[3].firstElementChild.textContent =
        "Ma'lumotlar vizualizatsiyasi";
      nav.children[4].firstElementChild.textContent =
        "Ma'lumotlar muhandisligi";
      nav.children[5].firstElementChild.textContent = "Kontaktlar";

      // * Hero
      hero.children[0].textContent = "Ma'lumotlar injiniringi";
      hero.children[2].textContent =
        "MAAB Innovationda biz sizning biznesingizni keyingi bosqichga olib chiqishi mumkin bo'lgan ma'lumotlarni qayta ishlashning zamonaviy yechimlarini taqdim etamiz. Bizning mutaxassislarimiz ma’lumotlar tahlili natijalariga ko’ra qimmatli bilim va tushunchalarni olish, ish faoliyatini yaxshilash uchun yuqori darajadagi infratuzilmani loyihalashtiradi va ma'lumotlar oqimini optimallashtiradi. Bundan tashqari, bizning bulutli ma'lumotlar muhandislarimiz korporativ ma'lumotlarni rekord vaqt ichida samarali tarzda ko'chirishga yordam beradi.";

      // * Contact Us
      contactUsHeader.children[0].textContent =
        "Xizmatlarimiz haqida bilish, maʼlumotlaringizni tahlil qilish va vizualizatsiya qilish hamda vaqtingizni va mablaglaringizni tejash bilan birga kompaniyangiz rivojlanishiga yordam beradigan maxsus BI yechimini yaratish uchun mutaxassislarimiz bilan bogʻlaning.";
      contactUsHeader.children[1].textContent = "Biz bilan bog'lanish";

      //   * Footer
      footerAddress.children[0].textContent = "Bizning ofisimiz";
      footerAddress.children[1].textContent =
        "Toshkent shahri, Mirobod tumani, Oybek, 18/1 ATRIUM biznes markazi 5m qavat-1.";
      footerPhone.children[0].textContent = "Telefon raqami";
      footerPhone.children[1].textContent = "+998 99 8957706";
      footerEmail.children[0].textContent = "Elektron pochta";
      footerEmail.children[1].textContent = "info@maab.uz";
      footerCreate.textContent = "Barcha huquqlar himoyalangan.";
      footerTopText.textContent =
        "Keling, Sizning kompaniyangiz uchun biznes tahlili yechimlarini birgalikda ishlab chiqamiz!";
      footerTopButton.textContent = "Bog'lanish";

      // * Engineering
      engineeringHeader.children[0].textContent = `Ma'lumotlar injiniringi (muhandisligi) nima?`;
      engineeringHeader.children[1].textContent = `Ma'lumotlar muhandisligi katta hajmdagi qayta ishlanmagan ma'lumotlarni qayta ishlashni, turli manbalardan olingan ma'lumotlarni birlashtirish va biznesni to'liq tahlil qilish maqsadida ularni bir joyda to’plash uchun ma'lumotlar konveyerlarini yaratish va saqlashni o'z ichiga oladi.`;
      engineeringHeader.children[2].textContent = `Ma'lumotlarni tahlilchilar tahlil qilishi uchun mos formatga aylantirish orqali ma'lumotlar muhandislari korxonalarni faktlarga asoslangan qarorlar qabul qilish imkonini beruvchi aniq tahlillar bilan ta'minlaydilar. Ma'lumotlarni to'g'ri qayta ishlash kompaniyalarga murakkab biznes muammolarini hal qilish va minimal xarajatlar bilan yangi mahsulot va xizmatlarni ishlab chiqishni tezlashtirish imkonini beradi.`;

      engineeringMainTitle.textContent = `Ma'lumotlarni qayta ishlash bo'yicha biz taqdim etadigan yechimlar`


      engineeringItem1.children[0].textContent = `Ma'lumotlar arxitekturasini qurish`;
      engineeringItem1.children[1].textContent = `Kompaniyamiz sozlanishi va foydalanilishi oson bo'lgan ma'lumotlar arxitekturasi yechimlarini taqdim etadi. Bizning tizimimiz ma'lum bir tashkilot ichida ma'lumotlar qanday uzatilishi haqidagi ma'lumotlarni birlashtiradi. Bizning ma'lumotlar arxitekturasi yechimlarimiz kompaniyalarga maqsadlariga erishishda yordam beradi.`;

      engineeringItem2.children[0].textContent = `Ma'lumotlar ko'lini (Data Lake) tatbiq qilish`;
      engineeringItem2.children[1].textContent = `Ma'lumotlar ko'llari (Data Lake) katta hajmdagi qayta ishlanmagan ma'lumotlarini tahliliy ilovalar tomonidan foydalanilgunga qadar saqlashni anglatadi. Biz korxonalarga qo'shimcha kuch sarflamasdan unumdorlik va o'sishni oshirish imkonini beruvchi ma'lumotlar ko'lini (Data Lake) tatbiq qilishni taklif qilamiz.`;

      engineeringItem3.children[0].textContent = `Ma'lumotlar omborini (Data Warehouse) tatbiq qilish`;
      engineeringItem3.children[1].textContent = `Biz bir nechta manbalardan olingan kompaniyaning barcha ma'lumotlarini operatsion ma'lumotlar bazasidan mustaqil bo’lgan omborda birlashtiradigan ma'lumotlar omborlarini yaratamiz. Keyinchalik bu ma'lumotlar analitik g’oyalarni yaratish uchun ishlatiladi.`;

      engineeringItem4.children[0].textContent = `Ma'lumotlarni bulutli infrastrukturaga ko'chirish`;
      engineeringItem4.children[1].textContent = `Ma'lumotlarni bulutli infrastrukturaga ko'chirish murakkab jarayon bo'lishi mumkin, ammo bugungi biznesda bu juda muhim. Bizning ekspertlarimiz ma'lumotlar ko'lini  sozlaydilar va korxona ma'lumotlarini arzon narxlarda tezda ko'chirishga yordam beradilar. `;

      engineeringItem5.children[0].textContent = `Ma'lumotlarni boshqarish va muvofiqlik`;
      engineeringItem5.children[1].textContent = `Ma'lumotlarni boshqarish va komplaens barcha ma'lumotlarni xavfsiz saqlash va davlat qonunlariga va biznes talablariga muvofiqligini ta’minlash uchun juda muhimdir. Bizning jamoamiz sizning ma'lumotlaringiz ishonchli himoyalanganligini ta'minlaydi.`;

      engineeringItem6.children[0].textContent = `Tahlil va ma'lumotlarni vizualizatsiya qilish`;
      engineeringItem6.children[1].textContent = `Biz ma'lumotlarni qayta ishlash texnologiyalari orqali katta hajmdagi ma'lumotlarni tahlil qilish va qayta ishlash va ularni tushunarli tarzda taqdim etamiz. Bu korxonalarga o'z faoliyatini yaxshilashi mumkin bo'lgan ma'lumotlardan foydalanish imkonini beradi.`;

      engineeringItem7.children[0].textContent = `Ma'lumotlarni qayta ishlash bo'yicha konsalting`;
      engineeringItem7.children[1].textContent = `Ekspertlarimiz turli soha korxonalariga oid ma'lumotlarni boshqarishda katta tajribaga ega. Bizning ekspertlarimiz ma'lumotlarni ulardan foydalangan holda hisobotlar shakllantirishga tayyorlash uchun loyihalashtiradi, bu esa yaxshi natijalarga va ma'lumotlarga asoslangan qarorlar qabul qilishga yordam beradi.`;

      engineeringItem8.children[0].textContent = `Ma'lumotlar strategiyasi va yo'l xaritasi`;
      engineeringItem8.children[1].textContent = `Biz sizga maʼlumotlardan maqsad va vazifalaringizga erishish uchun zarur qadamlarni koʻrsatuvchi maʼlumotlar strategiyasi va yoʻl xaritasini ishlab chiqishda yordam bera olamiz.`;
    }

    if (languageValue == "en") {
      // * Nav
      nav.children[0].firstElementChild.textContent = "Home";
      nav.children[1].firstElementChild.textContent = "About Us";
      nav.children[2].firstElementChild.textContent = "Data Analytics";
      nav.children[3].firstElementChild.textContent = "Data Visualization";
      nav.children[4].firstElementChild.textContent = "Data Engineering";
      nav.children[5].firstElementChild.textContent = "Contact Us";

      // * Hero
      hero.children[0].textContent = "Data engineering services";
      hero.children[2].textContent =
        "At MAAB Innovation, we offer state-of-the-art data engineering solutions that can elevate your business to the next level. Our team of experts will design a top-notch infrastructure and streamline your data flow to extract valuable insights, boost productivity, and enhance overall performance. Additionally, our cloud data engineers can efficiently transfer your enterprise data in record time.";

      // * Contact Us
      contactUsHeader.children[0].textContent =
        "Contact our experts to learn about our services, analyze and visualize your data, and create a customized BI solution that will help your business grow while saving you money and time.";
      contactUsHeader.children[1].textContent = "Contact us";

      //  * Footer
      footerAddress.children[0].textContent = "Our office";
      footerAddress.children[1].textContent =
        "Tashkent, Mirabad district, Oybeka, 18/1 ATRIUM Business Center on the 5th floor-1.";
      footerPhone.children[0].textContent = "Phone number";
      footerPhone.children[1].textContent = "+998 99 8957706";
      footerEmail.children[0].textContent = "Email";
      footerEmail.children[1].textContent = "info@maab.uz";
      footerCreate.textContent = "All rights reserved.";
      footerTopText.textContent =
        "Let's work together to develop business intelligence solutions for your company!";
      footerTopButton.textContent = "Contact us";
      
      // * Engineering
      engineeringHeader.children[0].textContent = `What is data engineering?`;
      engineeringHeader.children[1].textContent = `Data engineering involves handling vast amounts of unprocessed data, constructing and sustaining data pipelines to merge information from diverse sources, and organizing it into a single location for thorough business analysis.`;
      engineeringHeader.children[2].textContent = `By transforming data into a usable format for data scientists to analyze, data engineers provide businesses with precise analytics that allow for fact-based decision-making. Accurate data processing enables companies to tackle intricate business problems and enhance the development of new products and services while minimizing costs.`;

      engineeringMainTitle.textContent = `Data engineering solutions we deliver`

      engineeringItem1.children[0].textContent = `Building Data Architecture`;
      engineeringItem1.children[1].textContent = `Our company provides customizable and easily accessible data architecture solutions. Our framework combines information about how data flows within a specific organization. Our data architecture solutions guide businesses towards achieving their goals.`;

      engineeringItem2.children[0].textContent = `Data Lake Implementation`;
      engineeringItem2.children[1].textContent = `Data Lakes manage the storage of large amounts of raw, unprocessed data until it is used by analytics applications. We offer Data Lake implementation, which allows businesses to increase productivity and growth without additional effort.`;

      engineeringItem3.children[0].textContent = `Data Warehouse Implementation`;
      engineeringItem3.children[1].textContent = `We create data warehouses that consolidate all of the company's information from multiple sources in a single repository, separate from the operational database. This information is then used to generate analytical insights.`;

      engineeringItem4.children[0].textContent = `Cloud Data Migration`;
      engineeringItem4.children[1].textContent = `Cloud migration can be a challenging process, but it is essential in modern business. Our cloud data engineers will set up your data lake and quickly move your enterprise data at an affordable cost.`;

      engineeringItem5.children[0].textContent = `Data Management and Compliance`;
      engineeringItem5.children[1].textContent = `Data management and compliance are crucial to ensure that all data is secured and adheres to government regulations and business rules. Our team guarantees that your data is adequately protected.`;

      engineeringItem6.children[0].textContent = `Data Analytics and Visualization`;
      engineeringItem6.children[1].textContent = `Our data engineering technologies utilize these tools to analyze and process large amounts of information and present it in an easy-to-understand way. This enables businesses to access data that can improve their operations.`;

      engineeringItem7.children[0].textContent = `Data Engineering Consulting`;
      engineeringItem7.children[1].textContent = `Our expert team of engineers is fundamental to successful data management. Our data engineers design and manage data to prepare it for reporting, leading to better results and data-driven decisions.`;

      engineeringItem8.children[0].textContent = `Data Strategy and Roadmap
      `;
      engineeringItem8.children[1].textContent = `We can help you to develop a data strategy and roadmap, which outlines the steps needed to achieve your data-related goals and objectives.
      `;
    }
  }
})();

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
  const businessHeader = document.querySelector("#business--header");
  const businessItem1 = document.querySelector("#business-item-1");
  const businessItem2 = document.querySelector("#business-item-2");
  const businessItem3 = document.querySelector("#business-item-3");
  const businessItem4 = document.querySelector("#business-item-4");
  const businessItem5 = document.querySelector("#business-item-5");
  const businessItem6 = document.querySelector("#business-item-6");
  const businessItem7 = document.querySelector("#business-item-7");
  const businessItem8 = document.querySelector("#business-item-8");
  const businessItem9 = document.querySelector("#business-item-9");

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
      hero.children[0].textContent = "Услуги бизнес-аналитики";
      hero.children[2].textContent =
        "MAAB Innovation предлагает ряд решений для обработки и анализа данных, которые полезны для изучения различных типов данных и принятия обоснованных решений по различным аспектам бизнеса. Благодаря нашему совместному партнерству клиенты могут по-новому взглянуть на свою деятельность и развитие бизнеса. Кроме того, они могут получить доступ к высококачественному анализу данных с минимальными усилиями и по разумной цене.";

      // * Contact Us
      contactUsHeader.children[0].textContent =
        "Свяжитесь с нашими экспертами, чтобы узнать о наших услугах, проанализировать и визуализировать Ваши данные и создать индивидуальное решение BI, которое поможет вашему бизнесу расти, экономя Ваши деньги и время.";
      contactUsHeader.children[1].textContent = "Связаться с нами";

      // * Footer
      footerAddress.children[0].textContent = "Наш офис";
      footerAddress.children[1].textContent =
        "Узбекистан, г.Ташкент, Мирабадский район Нукус, 83А";
      footerPhone.children[0].textContent = "Номер телефона";
      footerPhone.children[1].textContent = "+998 99 8957706";
      footerEmail.children[0].textContent = "Электронная почта";
      footerEmail.children[1].textContent = "info@maab.uz";
      footerCreate.textContent = "Все права защищены.";
      footerTopText.textContent =
        "Давайте вместе разрабатывать решения бизнес-аналитики для Вашей компании!";
      footerTopButton.textContent = "Связаться с нами";

      // * Business
      businessHeader.children[0].textContent = `Сферы применения бизнес-аналитики`;
      businessHeader.children[1].textContent = `Аналитика данных — это многогранный процесс, который включает в себя использование разнообразных инструментов и практик. В MAAB Innovation мы предоставляем нашим клиентам широкий спектр услуг в этой области, включая консультации, управление данными, картирование, оценку качества и многое другое. Наши клиенты могут получить доступ ко всем самым популярным услугам в нише аналитики данных в одном месте.`;

      businessItem1.children[0].textContent = `Управление данными`;
      businessItem1.children[1].textContent = `В MAAB Innovation работает команда ведущих экспертов, которые много лет работают в области управления данными, включая сбор, хранение, защиту и организацию данных.`;
      businessItem2.children[0].textContent = `Хранилище данных`;
      businessItem2.children[1].textContent = `Наши клиенты могут рассчитывать на то, что мы обеспечим надлежащее хранение данных, включая интеграцию информации, полученной из различных источников, в надежную базу данных.`;
      businessItem3.children[0].textContent = `Преобразование данных`;
      businessItem3.children[1].textContent = `Мы конвертируем данные из любого возможного формата, чтобы они стали читабельными и совместимыми для анализа.`;
      businessItem4.children[0].textContent = `Отображение данных`;
      businessItem4.children[1].textContent = `Наши специалисты обеспечивают беспрепятственный процесс гомогенизации данных путем сопоставления полей в разных базах данных для улучшения управления, интеграции и переноса данных.`;
      businessItem5.children[0].textContent = `Качество данных`;
      businessItem5.children[1].textContent = `Мы оцениваем качество данных по различным параметрам, чтобы гарантировать, что информация, которую получают наши клиенты, соответствует всем стандартам качества данных.`;
      businessItem6.children[0].textContent = `Аналитика данных как услуга`;
      businessItem6.children[1].textContent = `Мы предоставляем нашим клиентам все преимущества платформы DaaaS`;
      businessItem7.children[0].textContent = `Модернизация данных`;
      businessItem7.children[1].textContent = `MAAB Innovation помогает клиентам выполнить безошибочную и модернизацию данных любой сложности, включая перенос данных из устаревших баз данных в современные, в том числе с использованием облачных технологий.`;
      businessItem8.children[0].textContent = `Консалтинг по данным`;
      businessItem8.children[1].textContent = `Наши консультационные услуги помогают компаниям правильно использовать информацию в своей деятельности, поскольку только малое количество организаций знают, как применять данные, полученные от консалтинга по данным, в своей деловой рутине.`;
      businessItem9.children[0].textContent = ``;
      businessItem9.children[1].textContent = ``;
    }

    if (languageValue == "uz") {
      // * Nav
      nav.children[0].firstElementChild.textContent = "Asosiy";
      nav.children[1].firstElementChild.textContent = "Biz haqimizda";
      nav.children[2].firstElementChild.textContent = "Ma'lumotlar Tahlili";
      nav.children[3].firstElementChild.textContent =
        "Ma'lumotlar vizualizatsiyasi";
      nav.children[4].firstElementChild.textContent =
        "Ma'lumotlar Muhandisligi";
      nav.children[5].firstElementChild.textContent = "Kontaktlar";

      // * Hero
      hero.children[0].textContent = "Ma'lumotlarni tahlil qilish";
      hero.children[2].textContent =
        "MAAB Innovation har xil turdagi ma'lumotlarni o'rganish va biznesning turli jihatlari bo'yicha asosli qarorlar qabul qilish uchun foydali bo'lgan ma'lumotlar turlari va tahliliy yechimlarni taklif etadi. Bizning qo'shma hamkorligimiz orqali mijozlar o'z faoliyati va biznes rivojlanishiga yangicha qarashlari mumkin. Bundan tashqari, ular yuqori sifatli ma'lumotlar tahlilini minimal harakat va maqbul narx orqali qo’lga kiritishlari mumkin.";

      // * Contact Us
      contactUsHeader.children[0].textContent =
        "Xizmatlarimiz haqida bilish, maʼlumotlaringizni tahlil qilish va vizualizatsiya qilish hamda vaqtingizni va mablaglaringizni tejash bilan birga kompaniyangiz rivojlanishiga yordam beradigan maxsus BI yechimini yaratish uchun mutaxassislarimiz bilan bogʻlaning.";
      contactUsHeader.children[1].textContent = "Biz bilan bog'lanish";

      //   * Footer
      footerAddress.children[0].textContent = "Bizning ofisimiz";
      footerAddress.children[1].textContent =
        "O'zbekiston, Toshkent shahri, Nukus Mirobod tumani, 83a";
      footerPhone.children[0].textContent = "Telefon raqami";
      footerPhone.children[1].textContent = "+998 99 8957706";
      footerEmail.children[0].textContent = "Elektron pochta";
      footerEmail.children[1].textContent = "info@maab.uz";
      footerCreate.textContent = "Barcha huquqlar himoyalangan.";
      footerTopText.textContent =
        "Keling, Sizning kompaniyangiz uchun biznes tahlili yechimlarini birgalikda ishlab chiqamiz!";
      footerTopButton.textContent = "Bog'lanish";

      // * Business
      businessHeader.children[0].textContent = `Biznes razvedkasini qo'llash sohalari`;
      businessHeader.children[1].textContent = `Ma'lumotlar tahlili ko'p qirrali jarayon bo'lib, turli vositalar va amaliyotlardan foydalanishni o'z ichiga oladi. MAAB Innovation kompaniyasida biz mijozlarimizga ushbu sohada keng ko‘lamli xizmatlar, jumladan, konsalting, ma’lumotlarni boshqarish, xaritalash, sifatni baholash va boshqalarni taqdim etamiz. Bizning mijozlarimiz ma'lumotlar tahlili bo'shlig'idagi barcha eng mashhur xizmatlarni bir joyda qo’lga kiritishlari mumkin.`;

      businessItem1.children[0].textContent = `Ma'lumotlarni boshqarish`;
      businessItem1.children[1].textContent = `MAAB Innovation kompaniyasi ma’lumotlarni boshqarish, jumladan, ma’lumotlarni yig‘ish, saqlash, himoya qilish va tashkil etish bo‘yicha ko‘p yillik ish tajribasiga ega yetakchi mutaxassislar jamoasiga ega.`;
      businessItem2.children[0].textContent = `Ma'lumotlar ombori`;
      businessItem2.children[1].textContent = `Mijozlarimiz ma'lumotlarning to'g'ri saqlanishini, shu jumladan turli manbalardan olingan ma'lumotlarni xavfsiz ma'lumotlar bazasiga integratsiyalashuvini ta'minlash uchun bizga ishonishlari mumkin.`;
      businessItem3.children[0].textContent = `Ma'lumotlar transformatsiyasi`;
      businessItem3.children[1].textContent = `Biz ma'lumotlarni o'qish va tahlil qilish uchun mos qilish uchun har qanday mumkin bo'lgan formatga aylantiramiz.`;
      businessItem4.children[0].textContent = `Ma'lumotlarni ko'rsatish`;
      businessItem4.children[1].textContent = `Mutaxassislarimiz o'xshash ma'lumotlarni topish va solishtirish orqali turli ma'lumotlar bazalari ma'lumotlari birgalikda yaxshi ishlashini tashkil qiladi. Bu ma'lumotlarni boshqarish, birlashtirish va ko'chirishni osonlashtirishga yordam beradi.`;
      businessItem5.children[0].textContent = `Ma'lumotlar sifati`;
      businessItem5.children[1].textContent = `Mijozlarimiz oladigan ma'lumotlar yoqori sifat standartlariga javob berishini ta'minlash uchun biz ma'lumotlar sifatini turli usullar bilan baholaymiz.`;
      businessItem6.children[0].textContent = `Ma'lumotlar tahlili xizmat sifatida`;
      businessItem6.children[1].textContent = `Biz mijozlarimizga DaaaS platformasining barcha afzalliklarini taqdim etamiz.`;
      businessItem7.children[0].textContent = `Ma'lumotlarni modernizatsiya qilish`;
      businessItem7.children[1].textContent = `MAAB Innovation mijozlarga har qanday murakkablikdagi ma'lumotlarni xatosiz shakllantirish va modernizatsiya qilish, jumladan, eski ma'lumotlar bazalaridan ma'lumotlarni zamonaviy ma'lumotlarga o'tkazish, shu jumladan bulutli texnologiyalardan foydalanishda yordam beradi.`;
      businessItem8.children[0].textContent = `Ma'lumotlar bo'yicha konsalting`;
      businessItem8.children[1].textContent = `Bizning konsalting xizmatlarimiz kompaniyalarga o'z faoliyatida ma'lumotlardan to'g'ri foydalanishda yordam beradi, chunki faqat oz sonli tashkilotlar ma'lumotlar konsaltingidan olingan ma'lumotlarni o'z biznes faoliyatida qanday qo'llashni biladi.`;
      businessItem9.children[0].textContent = ``;
      businessItem9.children[1].textContent = ``;
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
      hero.children[0].textContesnt = "Data analytics service";
      hero.children[2].textContent = `MAAB Innovation LLC offers a range of data processing and analysis solutions that are
          beneficial for examining various types of data and making informed decisions on different
          aspects of the business. Through our collaborative partnership, clients can gain new
          perspectives on their operations and business development. Moreover, they can access
          premium-quality data analysis with minimal effort and at a reasonable cost.`;

      // * Contact Us
      contactUsHeader.children[0].textContent =
        "Contact our experts to learn about our services, analyze and visualize your data, and create a customized BI solution that will help your business grow while saving you money and time.";
      contactUsHeader.children[1].textContent = "Contact us";

      //  * Footer
      footerAddress.children[0].textContent = "Our office";
      footerAddress.children[1].textContent =
        "Uzbekistan, Tashkent, Mirabad district Nukus, 83A";
      footerPhone.children[0].textContent = "Phone number";
      footerPhone.children[1].textContent = "+998 99 8957706";
      footerEmail.children[0].textContent = "Email";
      footerEmail.children[1].textContent = "info@maab.uz";
      footerCreate.textContent = "All rights reserved.";
      footerTopText.textContent =
        "Let's work together to develop business intelligence solutions for your company!";
      footerTopButton.textContent = "Contact us";

      // * Business
      businessHeader.children[0].textContent = `Spheres of business intelligence applications`;
      businessHeader.children[1].textContent = `Data analytics is a multifaceted process that involves the use of diverse tools and practices. At MAAB Innovation LLC, we provide our customers with a comprehensive range of services in this field, including consultancy, data management, mapping, quality assessment, and more. Our clients can benefit from accessing all the most popular services in the data analytics niche in one place.`;

      businessItem1.children[0].textContent = `Data management`;
      businessItem1.children[1].textContent = `MAAB Innovation LLC has a team of top experts who have worked for years in data management, including data collection, storage, protection, and organization.`;
      businessItem2.children[0].textContent = `Data warehousing`;
      businessItem2.children[1].textContent = `Our clients can rely on us to provide proper data warehousing, including the integration of information received from various sources into a dependable database.`;
      businessItem3.children[0].textContent = `Data transformation`;
      businessItem3.children[1].textContent = `We convert data from any possible format so that it becomes readable and compatible for analysis.`;
      businessItem4.children[0].textContent = `Data mapping`;
      businessItem4.children[1].textContent = `Our experts ensure a seamless process of data homogenizing by matching fields in different databases to improve the management, integration, and migration of data.`;
      businessItem5.children[0].textContent = `Data quality`;
      businessItem5.children[1].textContent = `We assess data quality with various parameters to guarantee that the information our clients receive meets all data quality standards.`;
      businessItem6.children[0].textContent = `Data analytics as a service`;
      businessItem6.children[1].textContent = `MAAB Innovation LLC provides our clients with all the advantages of a DAaaS platform, which is a fast-growing niche that is expanding up to 30% in the next following years.`;
      businessItem7.children[0].textContent = `Augmented analytics`;
      businessItem7.children[1].textContent = `Our company introduces ML and AI tools to make the whole data analytics process more effective and accurate.`;
      businessItem8.children[0].textContent = `Data modernization`;
      businessItem8.children[1].textContent = `MAAB Innovation LLC helps customers complete error-free and data modernization of any complexity, including transferring data from legacy databases to modern ones, including cloud technologies.`;
      businessItem9.children[0].textContent = `Data advisory and consulting`;
      businessItem9.children[1].textContent = `Our consultancy and advisory services help companies properly use the information in their business activities since only 24% of organizations know how to apply the data received from DA in their business routine according to the latest studies.`;
    }
  }
})();

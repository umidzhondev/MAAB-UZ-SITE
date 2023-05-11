(function () {
  const selectBox = document.getElementById("change-language");
  const nav = document.getElementById("nav");
  const hero = document.querySelector("#hero--info");
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
  const cloudHeader = document.querySelector("#cloud--header");
  const cloudItemTitle1 = document.querySelector("#cloud-item-title-1");
  const cloudItemDescription1 = document.querySelector(
    "#cloud-item-description-1"
  );
  const cloudItemTitle2 = document.querySelector("#cloud-item-title-2");
  const cloudItemDescription2 = document.querySelector(
    "#cloud-item-description-2"
  );
  const cloudItemListTitle1 = document.querySelector(
    "#cloud-item-list-title-1"
  );
  const cloudItemListTitle2 = document.querySelector(
    "#cloud-item-list-title-2"
  );
  const cloudItemOneText1 = document.querySelector("#cloud-item-1-text-1");
  const cloudItemOneText2 = document.querySelector("#cloud-item-1-text-2");
  const cloudItemOneText3 = document.querySelector("#cloud-item-1-text-3");
  const cloudItemOneText4 = document.querySelector("#cloud-item-1-text-4");
  const cloudItemOneText5 = document.querySelector("#cloud-item-1-text-5");
  const cloudItemTwoText1 = document.querySelector("#cloud-item-2-text-1");
  const cloudItemTwoText2 = document.querySelector("#cloud-item-2-text-2");
  const cloudItemTwoText3 = document.querySelector("#cloud-item-2-text-3");
  const cloudItemTwoText4 = document.querySelector("#cloud-item-2-text-4");
  const cloudItemTwoText5 = document.querySelector("#cloud-item-2-text-5");

  const useCasesHeader = document.querySelector("#use-cases-header");
  const useCasesCardTitle1 = document.querySelector("#use-cases-card-title-1");
  const useCasesCardTitle2 = document.querySelector("#use-cases-card-title-2");
  const useCasesCardTitle3 = document.querySelector("#use-cases-card-title-3");
  const useCasesCardTitle4 = document.querySelector("#use-cases-card-title-4");
  const useCasesCardTitle5 = document.querySelector("#use-cases-card-title-5");
  const useCasesCardTitle6 = document.querySelector("#use-cases-card-title-6");
  const useCasesCardTitle7 = document.querySelector("#use-cases-card-title-7");
  const useCasesCardTitle8 = document.querySelector("#use-cases-card-title-8");
  const useCasesCardTitle9 = document.querySelector("#use-cases-card-title-9");
  const useCasesCardTitle10 = document.querySelector(
    "#use-cases-card-title-10"
  );
  const useCasesCardTitle11 = document.querySelector(
    "#use-cases-card-title-11"
  );
  const useCasesCardTitle12 = document.querySelector(
    "#use-cases-card-title-12"
  );

  const useCasesCardList1 = document.querySelector("#use-cases-card-list-1");
  const useCasesCardList2 = document.querySelector("#use-cases-card-list-2");
  const useCasesCardList3 = document.querySelector("#use-cases-card-list-3");
  const useCasesCardList4 = document.querySelector("#use-cases-card-list-4");
  const useCasesCardList5 = document.querySelector("#use-cases-card-list-5");
  const useCasesCardList6 = document.querySelector("#use-cases-card-list-6");
  const useCasesCardList7 = document.querySelector("#use-cases-card-list-7");
  const useCasesCardList8 = document.querySelector("#use-cases-card-list-8");
  const useCasesCardList9 = document.querySelector("#use-cases-card-list-9");
  const useCasesCardList10 = document.querySelector("#use-cases-card-list-10");
  const useCasesCardList11 = document.querySelector("#use-cases-card-list-11");
  const useCasesCardList12 = document.querySelector("#use-cases-card-list-12");

  const beniftsHeader = document.querySelector("#benifts--header");
  const benefitsItem1 = document.querySelector("#benifts-item-1")
  const benefitsItem2 = document.querySelector("#benifts-item-2")
  const benefitsItem3 = document.querySelector("#benifts-item-3")
  const benefitsItem4 = document.querySelector("#benifts-item-4")
  const benefitsItem5 = document.querySelector("#benifts-item-5")
  const benefitsItem6 = document.querySelector("#benifts-item-6")

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
      hero.children[0].textContent = "Услуги визуализации данных";
      hero.children[2].textContent =
        "Квалифицированные инженеры данных нашей компании используют ряд инструментов визуализации данных для оценки рыночных тенденций и анализа эффективности бизнеса.";

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
      businessHeader.children[0].textContent = `Услуги визуализации данных`;
      businessHeader.children[1].textContent = `На ранних этапах создания бизнеса работа с большими объемами данных может быть сложной задачей, что приводит к задержкам в развитии проекта. В MAAB Innovation мы предлагаем услуги визуализации данных, которые помогают управлять сложными данными и извлекать из них пользу. Наш люкс включает в себя следующее:`;

      businessItem1.children[0].textContent = `Консультации по визуализации данных`;
      businessItem1.children[1].textContent = `Наши консультанты по данным помогают предприятиям выбирать ценные данные для оптимизации затрат и поиска новых решений.`;
      businessItem2.children[0].textContent = `Реализация визуализации данных`;
      businessItem2.children[1].textContent = `Наша команда экспертов может внедрить надежные решения для визуализации данных, которые извлекают нужные данные и дают новое представление о потребностях целевой аудитории.`;
      businessItem3.children[0].textContent = `Разработка платформы данных`;
      businessItem3.children[1].textContent = `Мы разрабатываем настраиваемые платформы визуализации данных, которые объединяют данные из различных источников, создают централизованное хранилище, обеспечивают защиту данных и улучшают отчетность и визуализацию.`;
      businessItem4.children[0].textContent = `Разработка пользовательских отчетов и дашбордов`;
      businessItem4.children[1].textContent = `Мы создаем индивидуальные информационные панели и отчеты, которые показывают ключевые показатели для развития вашей компании и улучшения бизнес-аналитики.`;
      businessItem5.children[0].textContent = `Аналитика данных и оптимизация визуализации`;
      businessItem5.children[1].textContent = `Наша команда инженеров данных может оптимизировать существующие системы управления данными, улучшая процессы или устраняя зависимость от ручного ввода данных.`;
      businessItem6.children[0].textContent = ``;
      businessItem6.children[1].textContent = ``;

      // * Cloud

      cloudHeader.children[0].textContent = `Визуализация данных с помощью облачных сервисов`;
      cloudHeader.children[1].textContent = `MAAB Innovation может определить наиболее выгодные облачные инструменты для управления, анализа и визуализации данных. Эти легко адаптируемые сервисы обеспечивают доступ с любого устройства, в том числе мобильного, и позволяют целым командам отслеживать и визуализировать данные в режиме реального времени.`;

      cloudItemTitle1.textContent = `Визуализация данных AWS`;
      cloudItemTitle2.textContent = `Визуализация данных Azure`;

      cloudItemDescription1.textContent = `Облачная платформа Amazon Web Services (AWS) предлагает множество сервисов для расширенной аналитики, позволяя владельцам бизнеса получать ценную информацию и сравнивать свою производительность с показателями основных конкурентов. `;
      cloudItemDescription2.textContent = `В MAAB Innovation мы используем сервис Microsoft, который предлагает выдающиеся вычислительные возможности для обработки огромных объемов данных. Эта информация может быть преобразована в комплексную бизнес-аналитику для вашего проекта. Кроме того, эту службу можно легко интегрировать с Microsoft Power BI, которая обеспечивает дополнительную аналитику в различных областях.`;

      cloudItemListTitle1.textContent = ``;
      cloudItemListTitle2.textContent = ``;

      cloudItemOneText1.textContent = ``;
      cloudItemOneText2.textContent = ``;
      cloudItemOneText3.textContent = ``;
      cloudItemOneText4.textContent = ``;
      cloudItemOneText5.textContent = ``;

      cloudItemTwoText1.textContent = ``;
      cloudItemTwoText2.textContent = ``;
      cloudItemTwoText3.textContent = ``;
      cloudItemTwoText4.textContent = ``;
      cloudItemTwoText5.textContent = ``;

      // * Use Cases
      useCasesHeader.children[0].textContent = `Примеры использования визуализации данных`;
      useCasesHeader.children[1].textContent = `Чтобы работать эффективно, компания должна иметь всестороннее представление о своих производственных процессах, финансовом положении и других важных факторах. MAAB Innovation признает важность объединения этой информации в единый источник, визуального представления каждой точки данных и выявления сильных и слабых сторон в бизнесе. Преимущества визуализации данных для бизнеса включают в себя:`;

      useCasesCardTitle1.textContent = `Производительность предприятия`;
      useCasesCardTitle2.textContent = `Производство`;
      useCasesCardTitle3.textContent = `Цепочка поставок`;
      useCasesCardTitle4.textContent = `Маркетинг и продажи`;
      useCasesCardTitle5.textContent = `Финансы`;
      useCasesCardTitle6.textContent = `Рекрутинг и HR`;
      useCasesCardTitle7.textContent = `Безопасность`;
      useCasesCardTitle8.textContent = `Обслуживание`;
      useCasesCardTitle9.textContent = `Розничная торговля и электронная коммерция`;
      useCasesCardTitle10.textContent = `Здравоохранение`;
      useCasesCardTitle11.textContent = `Транспорт`;
      useCasesCardTitle12.textContent = `Другой`;

      useCasesCardList1.children[0].textContent = `Отслеживайте KPI целых отделов и отдельных сотрудников`;
      useCasesCardList1.children[1].textContent = `Аналитика ваших прямых конкурентов, а также продуктов`;
      useCasesCardList1.children[2].textContent = `Обзор закупок и проверка поставщиков`;

      useCasesCardList2.children[0].textContent = `Анализ эффективности оборудования на разных этапах эксплуатации`;
      useCasesCardList2.children[1].textContent = `Выявление недостатков в процессе производства для их устранения`;
      useCasesCardList2.children[2].textContent = `Прогнозы производительности оборудования при замене или улучшении оборудования`;

      useCasesCardList3.children[0].textContent = `Идентификация точек входа товарных потребностей`;
      useCasesCardList3.children[1].textContent = `Детальное планирование и управление заказами у поставщиков`;
      useCasesCardList3.children[2].textContent = `Углубленный анализ затрат на закупки`;
      useCasesCardList3.children[3].textContent = `Прогнозирование рисков заказа у поставщиков`;
      useCasesCardList3.children[4].textContent = `Структурная оптимизация всей логистики`;

      useCasesCardList4.children[0].textContent = `Анализ вовлеченности и настроений клиентов для улучшения качества обслуживания`;
      useCasesCardList4.children[1].textContent = `Планирование и прогнозирование влияния маркетинговых кампаний на клиентов`;
      useCasesCardList4.children[2].textContent = `Анализ бюджета на маркетинговую деятельность`;
      useCasesCardList4.children[3].textContent = `Анализ платежеспособности клиентов для построения рекламных кампаний`;

      useCasesCardList5.children[0].textContent = `Мониторинг бюджетных данных`;
      useCasesCardList5.children[1].textContent = `Прогнозирование и идентификация рисков`;
      useCasesCardList5.children[2].textContent = `Определение наиболее важных направлений доходов и расходов`;

      useCasesCardList6.children[0].textContent = `Анализ настроений сотрудников и процессы удержания`;
      useCasesCardList6.children[1].textContent = `Полная разбивка работы всего отдела и сотрудников`;
      useCasesCardList6.children[2].textContent = `Планирование разработки плана повышения эффективности сотрудников`;

      useCasesCardList7.children[0].textContent = `Анализ оборудования, услуг и ресурсов`;
      useCasesCardList7.children[1].textContent = `Планирование технического обслуживания`;
      useCasesCardList7.children[2].textContent = `Анализ операционных рисков`;

      useCasesCardList8.children[0].textContent = ``;
      useCasesCardList8.children[1].textContent = ``;
      useCasesCardList8.children[2].textContent = ``;
      useCasesCardList8.children[3].textContent = ``;

      useCasesCardList9.children[0].textContent = `Анализ операционных рисков`;
      useCasesCardList9.children[1].textContent = `Оптимизация цен`;
      useCasesCardList9.children[2].textContent = `Прогноз тенденций рынка`;

      useCasesCardList10.children[0].textContent = `Показатели повторной госпитализации`;
      useCasesCardList10.children[1].textContent = `Анализ настроения пациентов от качества обслуживания`;
      useCasesCardList10.children[2].textContent = `Отслеживание времени, которое клиенты проводят в здравоохранении`;

      useCasesCardList11.children[0].textContent = `Оптимизация пассажиропотока или цепочки поставок`;
      useCasesCardList11.children[1].textContent = `Мониторинг транспортной тематики`;
      useCasesCardList11.children[2].textContent = `Анализ воздействия на окружающую среду`;

      useCasesCardList12.children[0].textContent = `Варианты визуализации для оценки общей картины бизнеса или компании чрезвычайно разнообразны и применимы повсеместно. Мы сможем подобрать идеальный вариант для ваших нужд.`;

      
      // * Benifts
      beniftsHeader.children[0].textContent = `Преимущества визуализации данных`
      beniftsHeader.children[1].textContent = `Сложные методы анализа данных и визуализации очень эффективны для повышения эффективности бизнеса и прогнозирования потенциальных рисков. Ниже приведены основные преимущества визуализации.`

      benefitsItem1.children[1].textContent = `Для помощи в принятии бизнес-решений`
      benefitsItem1.children[2].textContent = `Визуализация данных — эффективный инструмент для лиц, принимающих решения, поскольку он упрощает объяснение идей и помогает сделать осознанный выбор.`

      benefitsItem2.children[1].textContent = `Для обеспечения четкого понимания эффективности бизнеса`
      benefitsItem2.children[2].textContent = `Представляя данные в отчете, становится проще оценить текущее состояние и будущие перспективы бизнеса.`

      benefitsItem3.children[1].textContent = `Для повышения организационной производительности`
      benefitsItem3.children[2].textContent = `Используя визуализацию данных, легко определить слабые места в отделах или командах и предсказать будущую неэффективность.`

      benefitsItem4.children[1].textContent = `Для быстрого распознавания закономерностей и причин`
      benefitsItem4.children[2].textContent = `Вместо просеивания огромных объемов данных визуализация данных позволяет быстро обрабатывать и анализировать информацию, упрощая выявление тенденций и основных причин.`

      benefitsItem6.children[1].textContent = `Для составления аналитики на основе анализа данных`
      benefitsItem6.children[2].textContent = `Данные, визуальные эффекты и повествование можно объединить, чтобы создать убедительную историю, которая поможет ключевым лицам, принимающим решения, сосредоточиться на наиболее важных факторах.`

      benefitsItem5.children[1].textContent = ``
      benefitsItem5.children[2].textContent = ``

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
      hero.children[0].textContent = "Ma'lumotlarni vizualizatsiya qilish";
      hero.children[2].textContent =
        "Bizning malakali ekspertlarimiz bozor tendentsiyalarini baholash va biznes faoliyatini tahlil qilish uchun bir qator ma'lumotlarni vizualizatsiya qilish vositalaridan foydalanadilar.";

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
      businessHeader.children[0].textContent = `Ma'lumotlarni vizualizatsiya qilish`;
      businessHeader.children[1].textContent = `Biznesni shakllantirishning dastlabki bosqichlarida katta hajmdagi ma'lumotlar bilan ishlash qiyin bo'lishi mumkin, bu esa loyihani ishlab chiqishda kechikishlarga olib keladi. MAAB Innovationda biz murakkab ma'lumotlarni boshqarish va ulardan qiymat yaratishga yordam beradigan ma'lumotlarni vizualizatsiya qilish xizmatlarini taklif etamiz. Bizning xizmatlarimizga quyidagilar kiradi:`;

      businessItem1.children[0].textContent = `Ma'lumotlarni vizuallashtirish bo'yicha konsalting`;
      businessItem1.children[1].textContent = `Bizning ekspertlarimiz korxonalarga xarajatlarni optimallashtirish va yangi yechimlarni topish uchun ma'lumotlarni vizuallashtirishga yordam beradi.`;
      businessItem2.children[0].textContent = `Ma'lumotlarni vizuallashtirishni tashkil qilish`;
      businessItem2.children[1].textContent = `Bizning ekspertlarimiz zarur ma'lumotlarni ajratib olib, kompaniya rahbariyati uchun ularni vizualizatsiya qilish yechimlarini tashkil qilishi mumkin.`;
      businessItem3.children[0].textContent = `Ma'lumotlar platformasini ishlab chiqish`;
      businessItem3.children[1].textContent = `Biz turli manbalardan olingan ma'lumotlarni birlashtirgan, markazlashtirilgan omborni yaratadigan, ma'lumotlarni himoya qiladigan, hisobot va vizualizatsiyani yaxshilaydigan maxsus ma'lumotlarni vizualizatsiya qilish platformalarini ishlab chiqamiz.`;
      businessItem4.children[0].textContent = `Maxsus hisobotlarni va dashbordni ishlab chiqish`;
      businessItem4.children[1].textContent = `Biz biznesingizni rivojlantirish va yaxshilashga yordam berish uchun muhim raqamlar va ma'lumotlarni aks ettiruvchi shaxsiy boshqaruv paneli va hisobotlarni tayyorlaymiz.`;
      businessItem5.children[0].textContent = `Ma'lumotlarni tahlil qilish va vizualizatsiyani optimallashtirish`;
      businessItem5.children[1].textContent = `Mutaxassislarimiz sizning ma'lumotlaringizni boshqarishni yaxshilashi mumkin. Biz jarayonlarni takomillashtirish orqali ishlarni yanada samaraliroq qilishimiz yoki ma'lumotlarni qo'lda kiritish zaruriyatini olib tashlashimiz mumkin.`;
      businessItem6.children[0].textContent = ``;
      businessItem6.children[1].textContent = ``;

      // * Cloud

      cloudHeader.children[0].textContent = `Bulutli xizmatlar yordamida ma'lumotlarni vizualizatsiya qilish`;
      cloudHeader.children[1].textContent = `MAAB Innovation ma'lumotlarni boshqarish, tahlil qilish va vizualizatsiya qilish uchun bulutli texnologiyalarga asoslangan eng samarali vositalarni tavsiya qiladi. Bu vositalar telefoningiz kabi har qanday qurilmada ishlaydi va butun jamoangizga maʼlumotlarni ayni vaqtning o’zida koʻrib borish imkonini beradi.`;

      cloudItemTitle1.textContent = `AWS ma'lumotlar vizualizatsiyasi`;
      cloudItemTitle2.textContent = `Azure ma'lumotlarini vizualizatsiya qilish`;

      cloudItemDescription1.textContent = `Amazon Web Services (AWS) bulutli platformasi turli ilg‘or tahliliy xizmatlarni taklif etadi, bu esa biznes egalariga qimmatli ma’lumotlarga ega bo‘lish va o‘z ish faoliyatini asosiy raqobatchilar bilan solishtirish imkonini beradi. `;
      cloudItemDescription2.textContent = `MAAB Innovationda biz loyihangiz uchun ko'plab ma'lumotlarni qayta ishlash uchun Microsoft xizmatidan foydalanamiz. Bu sizning biznesingizni batafsil tahlil qilishimizga yordam beradi. Loyihangizga yanada koʻproq tahlillarni qoʻshish uchun biz Microsoft Power BI’dan ham foydalanamiz.`;

      cloudItemListTitle1.textContent = ``;
      cloudItemListTitle2.textContent = ``;

      cloudItemOneText1.textContent = ``;
      cloudItemOneText2.textContent = ``;
      cloudItemOneText3.textContent = ``;
      cloudItemOneText4.textContent = ``;
      cloudItemOneText5.textContent = ``;

      cloudItemTwoText1.textContent = ``;
      cloudItemTwoText2.textContent = ``;
      cloudItemTwoText3.textContent = ``;
      cloudItemTwoText4.textContent = ``;
      cloudItemTwoText5.textContent = ``;

      // * Use Cases
      useCasesHeader.children[0].textContent = `Ma'lumotlarni vizualizatsiyasi qilish bo’yicha misollar`;
      useCasesHeader.children[1].textContent = `Samarali ishlash uchun kompaniya o'zining ishlab chiqarish jarayonlari, moliyaviy holati va boshqa muhim omillarni har tomonlama tushunishi va nazorat qilishi kerak. MAAB Innovationda biz barcha ma’lumotlarni bir joyga to‘plash, ularni vizual ko‘rsatish va biznesingizning qaysi qismlari yaxshi ishlayotgani va qaysi qismlarini yaxshilash kerakligini aniqlash muhimligini bilamiz. Biznes uchun ma'lumotlar vizualizatsiyasidan foydalanish ko'plab afzalliklarga ega, jumladan:`;

      useCasesCardTitle1.textContent = `Korxona faoliyati samaradorligi`;
      useCasesCardTitle2.textContent = `Ishlab chiqarish`;
      useCasesCardTitle3.textContent = `Yetkazib berish tizimi`;
      useCasesCardTitle4.textContent = `Marketing va sotish`;
      useCasesCardTitle5.textContent = `Moliya`;
      useCasesCardTitle6.textContent = `Ishga qabul qilish va HR`;
      useCasesCardTitle7.textContent = `Xizmat ko’rsatish`;
      useCasesCardTitle8.textContent = `Xavfzsizlik`;
      useCasesCardTitle9.textContent = `Chakana savdo va elektron tijorat`;
      useCasesCardTitle10.textContent = `Sog'liqni saqlash`;
      useCasesCardTitle11.textContent = `Transport`;
      useCasesCardTitle12.textContent = `Boshqa`;

      useCasesCardList1.children[0].textContent = `Butun bo'limlar va alohida xodimlarning KPIlarini kuzatib borish`;
      useCasesCardList1.children[1].textContent = `To'g'ridan-to'g'ri raqobatchilaringiz va mahsulotlaringizning tahlili`;
      useCasesCardList1.children[2].textContent = `Xaridni va sotuvchini tekshirish`;

      useCasesCardList2.children[0].textContent = `Ekspluatatsiyaning turli bosqichlarida uskunaning samaradorligini tahlil qilish`;
      useCasesCardList2.children[1].textContent = `Ishlab chiqarish jarayonidagi kamchiliklarni aniqlash, ularni bartaraf etish`;
      useCasesCardList2.children[2].textContent = `Uskunani almashtirish yoki yangilashda uning ishlash samaradorligini bashorat qilish`;

      useCasesCardList3.children[0].textContent = `Mahsulot ehtiyojlarini qondirish uchun yetkazib beruvchilarni aniqlash`;
      useCasesCardList3.children[1].textContent = `Yetkazib beruvchilar bilan ishni batafsil rejalashtirish va buyurtmalarni boshqarish`;
      useCasesCardList3.children[2].textContent = `Xarid qilish xarajatlarini chuqur tahlil qilish`;
      useCasesCardList3.children[3].textContent = `Yetkazib beruvchilardan buyurtma berish xavfini prognoz qilish`;
      useCasesCardList3.children[4].textContent = `Logistikani tarkibiy optimallashtirish`;

      useCasesCardList4.children[0].textContent = `Xizmat sifatini yaxshilash uchun mijozlarni jalb qilish va fikr-mulohazalarini tahlil qilish`;
      useCasesCardList4.children[1].textContent = `Marketing kampaniyalarining mijozlarga ta'sirini rejalashtirish va bashorat qilish`;
      useCasesCardList4.children[2].textContent = `Marketing faoliyati uchun byudjetni tahlil qilish`;
      useCasesCardList4.children[3].textContent = `Reklama kampaniyalarini taskil qilish uchun mijozlarning to'lov qobiliyatini tahlil qilish`;

      useCasesCardList5.children[0].textContent = `Byudjet ma'lumotlarini monitoring qilish`;
      useCasesCardList5.children[1].textContent = `Xatarlarni prognozlash va aniqlash`;
      useCasesCardList5.children[2].textContent = `Daromad va xarajatlarning eng muhim sohalarini aniqlash`;

      useCasesCardList6.children[0].textContent = `Xodimlarning kayfiyatini tahlil qilish va ularni ish joyini almashtirmasliklari uchun ushlab turish usullari`;
      useCasesCardList6.children[1].textContent = `Butun bo'lim va xodimlarning ishini to'liq taqsimlash`;
      useCasesCardList6.children[2].textContent = `Xodimlarning ish faoliyati samaradorligini oshirish rejasini ishlab chiqish`;

      useCasesCardList7.children[0].textContent = `Uskunalar, xizmatlar va resurslarni tahlil qilish`;
      useCasesCardList7.children[1].textContent = `Ta'mirlashni rejalashtirish`;
      useCasesCardList7.children[2].textContent = `Operatsion xavf tahlili`;

      useCasesCardList8.children[0].textContent = ``;
      useCasesCardList8.children[1].textContent = ``;
      useCasesCardList8.children[2].textContent = ``;
      useCasesCardList8.children[3].textContent = ``;

      useCasesCardList9.children[0].textContent = `Maqsadli auditoriya tahlili`;
      useCasesCardList9.children[1].textContent = `Narxlarni optimallashtirish`;
      useCasesCardList9.children[2].textContent = `Bozor tendentsiyalari prognozi`;

      useCasesCardList10.children[0].textContent = `Qayta gospitalizatsiya qilish ko’rsatkichlari`;
      useCasesCardList10.children[1].textContent = `Xizmat ko'rsatish sifati bo'yicha bemorlarning kayfiyatini tahlil qilish`;
      useCasesCardList10.children[2].textContent = `Mijozlarning sog'liqni saqlashga sarflagan vaqtini kuzatish`;

      useCasesCardList11.children[0].textContent = `Yo'lovchi oqimi yoki ta'minot zanjirini optimallashtirish`;
      useCasesCardList11.children[1].textContent = `Transport monitoringi`;
      useCasesCardList11.children[2].textContent = `Atrof-muhitga ta'sir tahlili`;

      useCasesCardList12.children[0].textContent = `Biznes yoki kompaniyaning umumiy holatini baholash uchun vizualizatsiya variantlari juda xilma-xil va hamma joyda qo'llanilishi mumkin. Biz sizning ehtiyojlaringiz uchun mukammal variantni topa olamiz.`;

      
      // * Benifts
      beniftsHeader.children[0].textContent = `Ma'lumotlarni vizualizatsiya qilishning afzalliklari`
      beniftsHeader.children[1].textContent = `Murakkab ma'lumotlarni tahlil qilish va vizualizatsiya qilish usullari biznes samaradorligini oshirish va potentsial xavflarni bashorat qilishda juda samarali hisoblanadi. Quyida vizualizatsiyaning asosiy afzalliklarini keltirib o’tamiz.`

      benefitsItem1.children[1].textContent = `Biznes qarorlar qabul qilishda ko’mak`
      benefitsItem1.children[2].textContent = `Ma'lumotlarni vizualizatsiya qilish qaror qabul qiluvchilar uchun samarali vositadir, chunki u g'oyalarni tushuntirish va ongli tanlov qilishni osonlashtiradi.`

      benefitsItem2.children[1].textContent = `Biznes samaradorligini aniq tushunishni ta'minlash`
      benefitsItem2.children[2].textContent = `Hisobotda ma'lumotlarni taqdim etish biznesning hozirgi holati va kelajakdagi istiqbollarini baholashni osonlashtiradi.`

      benefitsItem3.children[1].textContent = `Tashkiliy ish faoliyatini yaxshilash`
      benefitsItem3.children[2].textContent = `Ma'lumotlar vizualizatsiyasidan foydalanib, bo'limlar yoki guruhlardagi zaif tomonlarni aniqlash va kelajakdagi samaradorlikning pasayishini bashorat qilish mumkin.`

      benefitsItem4.children[1].textContent = `O’zaro bog’liqliklar va sabablarni tezda aniqlash`
      benefitsItem4.children[2].textContent = `Katta hajmdagi ma'lumotlarni saralash o'rniga, ma'lumotlarni vizualizatsiya qilish sizga ma'lumotlarni tezda qayta ishlash va tahlil qilish imkonini beradi, bu tendentsiyalar va asosiy sabablarni aniqlashni osonlashtiradi.`

      benefitsItem6.children[1].textContent = `Ma'lumotlarni tahlil qilish asosida tahlillarni yaratish`
      benefitsItem6.children[2].textContent = `Ma'lumotlar, vizual va boshqa tahlillar qaror qabul qiluvchilarga eng muhim omillarga e'tibor qaratishga yordam beradi.`

      benefitsItem5.children[2].textContent = ``
      benefitsItem5.children[1].textContent = ``

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
      hero.children[0].textContesnt = "Data visualization services";
      hero.children[2].textContent = `Skilled data engineers of our company leverage a range of data visualization tools to
      evaluate market trends and analyze business performance.`;

      // * Contact Us
      contactUsHeader.children[0].textContent = ` If you're looking to gain a comprehensive understanding of our services and develop a
        tailor-made business intelligence solution that fits your unique needs, we invite you to contact
        our team of experienced business intelligence consultants. Our experts will work with you to
        optimize your business growth while keeping costs low, helping you achieve success and stay
        ahead of the competition.`;
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
      businessHeader.children[0].textContent = `Data visualization services`;
      businessHeader.children[1].textContent = `In the early stages of business establishment, dealing with large volumes of data can be challenging, causing project growth delays. At MAAB Innovation, we offer data visualization services to help manage and extract value from complex data. Our suite includes the following:`;

      businessItem1.children[0].textContent = `Data visualization consulting`;
      businessItem1.children[1].textContent = `Our data consultants help businesses select valuable data to optimize costs and find new solutions.`;
      businessItem2.children[0].textContent = `Data visualization implementation`;
      businessItem2.children[1].textContent = `Our expert team can implement reliable data visualization solutions that extract the right data and provide new insights on the needs of the target audience.`;
      businessItem3.children[0].textContent = `Data platform development`;
      businessItem3.children[1].textContent = `We develop customizable data visualization platforms that integrate data from various sources, create a centralized repository, provide data protection, and improve reporting and visualization.`;
      businessItem4.children[0].textContent = `Custom reports and dashboard development`;
      businessItem4.children[1].textContent = `We create tailored dashboards and reports that show key metrics for growing your company and improving business analytics.`;
      businessItem5.children[0].textContent = `Data analytics and visualization optimization`;
      businessItem5.children[1].textContent = `Our team of data engineers can optimize existing data management frameworks by improving processes or removing the dependency on manual data entry.`;
      businessItem6.children[0].textContent = `Data management`;
      businessItem6.children[1].textContent = `MAAB Innovation LLC has a team of top experts who have worked for years in data management, including data collection, storage, protection, and organization.`;

      // * Cloud

      cloudHeader.children[0].textContent = `Data visualization using cloud services`;
      cloudHeader.children[1].textContent = `MAAB Innovation can identify the most advantageous cloud-based tools for managing, analyzing, and visualizing data. These highly adaptable services enable access from any device, including mobile, and empower entire teams to monitor and visualize data in real-time.`;

      cloudItemTitle1.textContent = `AWS data visualization`;
      cloudItemTitle2.textContent = `Azure data visualization`;

      cloudItemDescription1.textContent = `The cloud-based Amazon Web Services (AWS) platform offers numerous services to carry out advanced analytics, enabling business owners to gain valuable insights and compare their performance with that of major competitors. At our organization, we utilize AWS to precisely identify various performance metrics.`;
      cloudItemDescription2.textContent = `At MAAB Innovation LLC, we utilize Microsoft's service, which offers outstanding computational capabilities for processing vast amounts of data. This information can be transformed into comprehensive business analytics for your project. Additionally, this service can be seamlessly integrated with Microsoft's Power BI, which provides supplementary analytics in various domains.`;

      cloudItemListTitle1.textContent = `Here are the capacities of Amazon Web Services:`;
      cloudItemListTitle2.textContent = `Here’s what Microsoft Azure provides for data:`;

      cloudItemOneText1.textContent = ` Predicting business metrics`;
      cloudItemOneText2.textContent = ` Ongoing machine learning analysis`;
      cloudItemOneText3.textContent = ` Integration of data from different sources`;
      cloudItemOneText4.textContent = ` Visualization of key performance indicator`;
      cloudItemOneText5.textContent = ` Data storage and encryption`;

      cloudItemTwoText1.textContent = ` Visualization with Azure Dashboards`;
      cloudItemTwoText2.textContent = ` Integration of other cloud platforms`;
      cloudItemTwoText3.textContent = ` Machine learning models and tools`;
      cloudItemTwoText4.textContent = ` Prediction from artificial intelligence`;
      cloudItemTwoText5.textContent = ` Ongoing data flow analytics`;

      // * Use Cases
      useCasesHeader.children[0].textContent = `Data visualization use cases`;
      useCasesHeader.children[1].textContent = `In order to operate efficiently, a company must have a comprehensive understanding of its production processes, financial status, and other important factors. MAAB Innovation LLC recognizes the importance of consolidating this information into a unified source, visually representing each data point, and identifying areas of strength and weakness within a business. The benefits of data visualization for businesses include:`;

      useCasesCardTitle1.textContent = `Enterprise performance`;
      useCasesCardTitle2.textContent = `Manufacturing`;
      useCasesCardTitle3.textContent = `Supply chain`;
      useCasesCardTitle4.textContent = `Marketing and sales`;
      useCasesCardTitle5.textContent = `Financials`;
      useCasesCardTitle6.textContent = `Recruiting and HR`;
      useCasesCardTitle7.textContent = `Maintenance`;
      useCasesCardTitle8.textContent = `Security`;
      useCasesCardTitle9.textContent = `Retail and eCommerce`;
      useCasesCardTitle10.textContent = `Healthcare`;
      useCasesCardTitle11.textContent = `Transportation`;
      useCasesCardTitle12.textContent = `Other`;

      useCasesCardList1.children[0].textContent = `Monitor KPIs of your entire departments and individual employees`;
      useCasesCardList1.children[1].textContent = `Analytics of your direct competitors as well as products`;
      useCasesCardList1.children[2].textContent = `Procurement overview and supplier validation`;

      useCasesCardList2.children[0].textContent = `Analysis of equipment efficiency at different stages of operation`;
      useCasesCardList2.children[1].textContent = `Detection of deficiencies during the production process to eliminate them`;
      useCasesCardList2.children[2].textContent = `Predictions of equipment performance when replacing or improving equipment`;

      useCasesCardList3.children[0].textContent = `Identification of goods demands entry points`;
      useCasesCardList3.children[1].textContent = `Detailed planning and management of orders with suppliers`;
      useCasesCardList3.children[2].textContent = `In-depth analysis of procurement costs`;
      useCasesCardList3.children[3].textContent = `Forecasting of risks of ordering from suppliers`;
      useCasesCardList3.children[4].textContent = `Structural optimization of all logistics`;

      useCasesCardList4.children[0].textContent = `Analysis of customer engagement and sentiments to improve service quality`;
      useCasesCardList4.children[1].textContent = `Planning and forecasting the impact on customers from marketing campaigns`;
      useCasesCardList4.children[2].textContent = `Budget analysis for marketing activities`;
      useCasesCardList4.children[3].textContent = `Analyzing the solvency of the clients for building promotional campaigns`;

      useCasesCardList5.children[0].textContent = `Monitoring of budget data`;
      useCasesCardList5.children[1].textContent = `Forecasting and identification of risks`;
      useCasesCardList5.children[2].textContent = `Identifying the most important areas of income and expenses`;

      useCasesCardList6.children[0].textContent = `Analyzing employee sentiment and retention processes`;
      useCasesCardList6.children[1].textContent = `A complete breakdown of the entire department and employee performance`;
      useCasesCardList6.children[2].textContent = `Planning the development of an employee performance improvement plan`;

      useCasesCardList7.children[0].textContent = `Analysis of equipment, services, and resources`;
      useCasesCardList7.children[1].textContent = `Maintenance planning`;
      useCasesCardList7.children[2].textContent = `Operational risk analysis`;

      useCasesCardList8.children[0].textContent = `Cyber security analysis of site and servers`;
      useCasesCardList8.children[1].textContent = `Fraud detection`;
      useCasesCardList8.children[2].textContent = `Threat assessment analysis`;
      useCasesCardList8.children[3].textContent = `Location and platform sourcing monitoring`;

      useCasesCardList9.children[0].textContent = `Target audience analysis`;
      useCasesCardList9.children[1].textContent = `Price optimization`;
      useCasesCardList9.children[2].textContent = `Market trend forecast`;

      useCasesCardList10.children[0].textContent = `Market trend forecast`;
      useCasesCardList10.children[1].textContent = `Analysis of patient sentiment from the quality of care`;
      useCasesCardList10.children[2].textContent = `Tracking the time customers spend in healthcare`;

      useCasesCardList11.children[0].textContent = `Optimizing passenger flow or supply chain`;
      useCasesCardList11.children[1].textContent = `Monitoring of transportation topics`;
      useCasesCardList11.children[2].textContent = `Environmental impact analysis`;

      useCasesCardList12.children[0].textContent = `Visualization options for assessing the overall picture of a business or company are extremely diverse and applicable everywhere. We will be able to find the ideal option for your needs.`;

      // * Benifts
      beniftsHeader.children[0].textContent = `Data visualization benefits`
      beniftsHeader.children[1].textContent = `Sophisticated data analytics and visualization techniques are highly effective in enhancing business performance and forecasting potential risks. The following are main benefits of visualization.`

      benefitsItem1.children[1].textContent = `To assist in making business decisions`
      benefitsItem1.children[2].textContent = `Data visualization is an effective tool for decision-makers as it simplifies the explanation of ideas and aids in making informed choices.`

      benefitsItem2.children[1].textContent = `To provide a clear understanding of business performance`
      benefitsItem2.children[2].textContent = `By presenting data in a report, it becomes easier to evaluate the current status and future prospects of a business.`

      benefitsItem3.children[1].textContent = `To enhance organizational productivity`
      benefitsItem3.children[2].textContent = `By using data visualization, it is easy to identify weak points within departments or teams and predict future inefficiencies.`

      benefitsItem4.children[1].textContent = `To quickly recognize patterns and reasons`
      benefitsItem4.children[2].textContent = `Instead of sifting through vast amounts of data, data visualization enables information to be processed and analyzed quickly, making it easier to identify trends and root causes.`

      
   
      benefitsItem5.children[1].textContent = `To discover valuable business intelligence
      `
      benefitsItem5.children[2].textContent = `Data visualization enhanced with artificial intelligence can uncover compelling insights and opportunities for business growth and provide a justification for them.

      `
      benefitsItem6.children[1].textContent = `To tell stories through data`
      benefitsItem6.children[2].textContent = `Data, visuals, and narrative can be combined to create a compelling story that helps key decision-makers focus on the most important factors.`


    }
  }
})();

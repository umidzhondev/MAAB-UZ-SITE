
(function () {
  const selectBox = document.getElementById("change-language");
  const nav = document.getElementById("nav");
  const hero = document.querySelector(".hero__info");
  const servicesHeader = document.querySelector(".services--header");
  const servicesCard1 = document.querySelector("#services-card-1");
  const servicesCard2 = document.querySelector("#services-card-2");
  const servicesCard3 = document.querySelector("#services-card-3");
  const servicesCard4 = document.querySelector("#services-card-4");
  const servicesCard5 = document.querySelector("#services-card-5");
  const servicesCard6 = document.querySelector("#services-card-6");
  const servicesCard7 = document.querySelector("#services-card-7");
  const servicesCard8 = document.querySelector("#services-card-8");
  const servicesCard9 = document.querySelector("#services-card-9");
  const contactUsHeader = document.querySelector("#contact-us-header");

  const exploreHeader = document.querySelector("#explore-header");
  const exploreCard1 = document.querySelector("#explore-card-1");
  const exploreCard2 = document.querySelector("#explore-card-2");
  const exploreCard3 = document.querySelector("#explore-card-3");
  const exploreCard4 = document.querySelector("#explore-card-4");

  const expertiseHeader = document.querySelector("#expertise-header");
  const expertiseCardTitleOne = document.querySelector(
    "#expertise-card-title-one"
  );
  const expertiseCardTitleTwo = document.querySelector(
    "#expertise-card-title-two"
  );
  const expertiseCardTitleThree = document.querySelector(
    "#expertise-card-title-three"
  );
  const expertiseCardMainList = document.querySelector("#expertise-main-list");
  const expertiseCardListOne = document.querySelector(
    "#expertise-card-list-one"
  );
  const expertiseCardListTwo = document.querySelector(
    "#expertise-card-list-two"
  );
  const expertiseCardListThree = document.querySelector(
    "#expertise-card-list-three"
  );
  const expertiseCardListFour = document.querySelector(
    "#expertise-card-list-four"
  );

  const valuesHeader = document.querySelector("#values-header");
  const valuesCardOne = document.querySelector("#values-card-one");
  const valuesCardTwo = document.querySelector("#values-card-two");
  const valuesCardThree = document.querySelector("#values-card-three");
  const valuesCardFour = document.querySelector("#values-card-four");
  const valuesCardFive = document.querySelector("#values-card-five");
  const valuesCardSix = document.querySelector("#values-card-six");
  const partnersTitle = document.querySelector("#partners-title");

  const footerAddress = document.querySelector("#footer-address");
  const footerPhone = document.querySelector("#footer-phone");
  const footerEmail = document.querySelector("#footer-email");
  const footerCreate = document.querySelector("#footer-create");
  const footerTopText = document.querySelector("#footer-top-text")
  const footerTopButton = document.querySelector("#footer-top-button");

  
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
        "Поскольку объем цифровых данных продолжает расти, процессы принятия решений становятся все более сложными. Именно здесь могут оказаться весьма полезными технологии бизнес-аналитики, интеллектуальный анализ данных, прогнозная аналитика и другие инструменты. В MAAB Innovation работает команда опытных профессионалов, которая специализируется на предоставлении ряда решений бизнес-аналитики для различных отраслей. Наши специалисты сотрудничают с клиентами для улучшения рабочих процессов и увеличения продаж.";

      // * Services
      servicesHeader.children[0].textContent =
        "Мы предоставляем услуги бизнес-аналитики";
      servicesHeader.children[1].textContent =
        "В MAAB Innovation мы предлагаем широкий спектр услуг бизнес-аналитики, включая разработку BI, консультирование по BI, индивидуальную разработку, поддержку и обслуживание BI, а также создание решений самообслуживания, среди прочего. Наши эксперты помогли многочисленным клиентам усовершенствовать свои операционные процессы и получить свежие бизнес-идеи. Чтобы узнать больше о наших предложениях, пожалуйста, обратитесь к информации ниже.";

      servicesCard1.children[0].textContent = "Визуализация данных";
      servicesCard1.children[1].textContent =
        "Обработка больших объемов данных в различных форматах может быть сложной задачей. Однако мы можем помочь вам разработать решение, которое объединит все ваши бизнес-данные в единый формат. После этого данные можно легко обрабатывать и визуализировать, оптимизируя процессы управления данными.";

      servicesCard2.children[0].textContent =
        "Бизнес-аналитика и анализ данных";
      servicesCard2.children[1].textContent =
        "В нашей компании мы не только проводим анализ данных, но и помогаем нашим клиентам принимать решения, основанные на фактических данных, а не на интуиции. На самом деле существует значительное расхождение между бизнес-решениями, принятыми на основе надежных структурированных данных, и решениями, основанными на случайных выводах.";

      servicesCard3.children[0].textContent = "Архитектура DWH и ETL";
      servicesCard3.children[1].textContent =
        "Для хранения больших объемов неструктурированных данных и облегчения их простой миграции мы используем хранилище данных (DWH) и внедряем процессы извлечения, преобразования, загрузки (ETL) для каждого проекта. Эта техническая стратегия гарантирует эффективное хранение и обработку данных.";

      servicesCard4.children[0].textContent =
        "Индивидуальные решения и компоненты BI";
      servicesCard4.children[1].textContent =
        "Несмотря на то, что на рынке доступно множество готовых продуктов для бизнес-аналитики, найти тот, который точно соответствует вашим бизнес-требованиям, может быть непросто. Если вы окажетесь в этом затруднительном положении, не стесняйтесь обращаться к нам, чтобы заказать создание индивидуального решения, адаптированного к вашим потребностям.";

      servicesCard5.children[0].textContent = "Корпоративная бизнес-аналитика";
      servicesCard5.children[1].textContent =
        "Мы специализируемся на разработке масштабируемых решений бизнес-аналитики для крупных корпораций, которые можно легко модернизировать и настраивать в соответствии с растущими потребностями бизнеса и рыночными тенденциями по мере их возникновения.";

      servicesCard6.children[0].textContent = "Внедрение BI-приложений";
      servicesCard6.children[1].textContent =
        "Наш опыт выходит за рамки создания решений для бизнес-аналитики и позволяет эффективно интегрировать их в существующие системы.";

      servicesCard7.children[0].textContent = "BI-консалтинг";
      servicesCard7.children[1].textContent =
        "Если вы не уверены в технологическом стеке своего решения для бизнес-аналитики или сомневаетесь в его функциональности и дизайне, мы можем предоставить экспертное руководство, основанное на передовых отраслевых практиках, чтобы помочь вам принять обоснованное решение.";

      servicesCard8.children[0].textContent = "BI-поддержка и обслуживание";
      servicesCard8.children[1].textContent =
        "Обслуживание существующих решений для бизнес-аналитики требует регулярных обновлений и технической поддержки. Мы можем решать технические проблемы и внедрять новые функции по мере необходимости, чтобы ваше решение BI оставалось актуальным и соответствовало потребностям вашего бизнеса.";

      servicesCard9.children[0].textContent = "BI самообслуживания";
      servicesCard9.children[1].textContent =
        "Автоматизируя определенные задачи анализа данных, вы можете избежать затрат на наем дорогостоящих бизнес-аналитиков.";

      // * Contact Us
      contactUsHeader.children[0].textContent =
        "Свяжитесь с нашими экспертами, чтобы узнать о наших услугах, проанализировать и визуализировать Ваши данные и создать индивидуальное решение BI, которое поможет вашему бизнесу расти, экономя Ваши деньги и время.";
      contactUsHeader.children[1].textContent = "Связаться с нами";

      // * Explore
      exploreHeader.children[0].textContent = "Преимущества бизнес-аналитики";
      exploreHeader.children[1].textContent =
        "При эффективном применении, решения для бизнес-аналитики предлагают владельцам бизнеса множество преимуществ, включая повышение организационной эффективности, надежные данные, улучшение качества обслуживания клиентов и высококачественный анализ данных. В следующих разделах мы обрисуем некоторые из наиболее распространенных преимуществ применения подхода бизнес-аналитики.";

      exploreCard1.children[1].textContent =
        "Повышенная организационная эффективность";
      exploreCard1.children[2].textContent =
        "Решения BI могут значительно повысить точность сценариев развития бизнеса и позволить компаниям более эффективно распределять свои ресурсы за счет обработки данных в реальном времени и исторических данных.";

      exploreCard2.children[1].textContent =
        "Структурированные надежные данные";
      exploreCard2.children[2].textContent =
        "Вместо использования нескольких программных инструментов для разрозненных источников данных решения бизнес-аналитики и аналитики объединяют, структурируют и визуализируют данные для дальнейшего анализа.";

      exploreCard3.children[1].textContent =
        "Повышение удовлетворенности клиентов";
      exploreCard3.children[2].textContent =
        "Технологии BI быстро выявляют любые нарушения в обслуживании клиентов и предлагают способы их устранения после внедрения, что приводит к повышению удовлетворенности клиентов.";

      exploreCard4.children[1].textContent =
        "Быстрый и качественный анализ данных";
      exploreCard4.children[2].textContent =
        "Платформы BI могут быстро обрабатывать значительные объемы данных, позволяя владельцам бизнеса быстро находить нужную информацию и принимать обоснованные решения.";

      // *  Expertise
      expertiseHeader.textContent = "Наш опыт: ";

      expertiseCardTitleOne.textContent = "Хранилище данных";
      expertiseCardTitleTwo.textContent = "Прием данных";
      expertiseCardTitleThree.textContent = "Анализ данных";

      expertiseCardMainList.children[0].textContent =
        "Преобразование данных, Сопоставление данных, Очистка данных, Обнаружение данных, Финансовое балансирование, Анализ и проверка данных, Миграция данных, Очистка корпоративных данных, устранение неполадок.";
      expertiseCardMainList.children[1].textContent =
        "Отчеты самообслуживания, информационные панели и аналитика.";
      expertiseCardMainList.children[2].textContent =
        "Централизованное хранилище данных для финансовой информации и информации о транзакциях.";
      expertiseCardMainList.children[3].textContent =
        "Замените устаревшую или несовершенную технологию.";
      expertiseCardMainList.children[4].textContent =
        "Создавайте оптимизированные наборы данных для конкретных и целевых потребностей.";
      expertiseCardMainList.children[5].textContent =
        "Включите аналитику практически в режиме реального времени с помощью корпоративных служб обработки данных.";
      expertiseCardMainList.children[6].textContent =
        "Разработка систем бизнес-аналитики и доставки информации.";

      expertiseCardListOne.children[0].textContent =
        "Облачные хранилища данных";
      expertiseCardListOne.children[1].textContent =
        "Microsoft Azure (база данных SQL Azure, Azure AD, подписки, группы ресурсов, Azure Озеро данных, хранилище больших двоичных объектов Azure, Azure Synapse, службы анализа Azure)";
      expertiseCardListOne.children[2].textContent = "Снежинка";
      expertiseCardListOne.children[3].textContent =
        "Веб-сервисы Amazon (AWS Redshift, AWS S3 bucket, AWS RDS)";

      expertiseCardListTwo.children[0].textContent =
        "Локальное хранилище данных : Microsoft SQL Server, Oracle";
      expertiseCardListTwo.children[1].textContent =
        "Локальные решения для миграции в облако.";
      expertiseCardListTwo.children[2].textContent =
        "Решения для архитектуры локальных и облачных хранилищ данных.";
      expertiseCardListTwo.children[3].textContent =
        "Хранилище данных, поддерживающее отчеты самообслуживания, информационные панели и аналитику.";

      expertiseCardListThree.children[0].textContent =
        "Мы внедряем ETL и ETL-решения.";
      expertiseCardListThree.children[1].textContent =
        "Инструменты разработки данных: MS SQL Server, службы интеграции SQL Server, Azure Data Factory, Azure Synapse Analytics, Azure Data bricks, Python (Pandas)";
      expertiseCardListThree.children[2].textContent =
        "Пакетная обработка: Apache Spark (PySpark)";
      expertiseCardListThree.children[3].textContent =
        "Потоковая обработка: Apache Kafka";
      expertiseCardListThree.children[4].textContent =
        "Инструменты мониторинга: Агент SQL Server, триггеры фабрики данных Azure, Apache Airflow.";

      expertiseCardListFour.children[0].textContent =
        "Мы предоставляем углубленную аналитику данных, чтобы получить полезную бизнес-информацию.";
      expertiseCardListFour.children[1].textContent =
        "Инструменты анализа: SQL Server, MySQL, Postgres SQL, Snowflake Cloud SQL, Spark SQL.";
      expertiseCardListFour.children[2].textContent =
        "Инструменты создания отчетов: MS Power BI, службы отчетов SQL Server, Tableau, QlikView, Qlik Sense.";

      // * Values
      valuesHeader.children[0].textContent = "НАШИ ЦЕННОСТИ";
      valuesHeader.children[1].textContent =
        "Наши ценности руководят всем, что мы делаем.Мы верим в честность, клиентоориентированность, командную работу, инновации, уважение и социальную ответственность.";

      valuesCardOne.children[1].textContent = "Честность";
      valuesCardOne.children[2].textContent =
        "Мы считаем честность своей высшей ценностью. Доверие, которое оказывают нам наши клиенты, сотрудники и деловые партнеры, священно. Все, что мы делаем, как мы думаем, как мы взаимодействуем, всегда будет руководствоваться принципом всегда делать правильные вещи, особенно когда это трудно сделать. Без честности нет настоящего успеха";
      valuesCardTwo.children[1].textContent = "Опыт";
      valuesCardTwo.children[2].textContent =
        "Мы считаем, что опыт имеет решающее значение при обслуживании наших клиентов. Мы нанимаем людей с исключительными возможностями и потенциалом. Мы поддерживаем дух постоянного роста и стремления к достижению постоянно растущего уровня знаний. Наша цель - помочь каждому члену команды раскрыть свой наивысший потенциал.";
      valuesCardThree.children[1].textContent = "Совершенство";
      valuesCardThree.children[2].textContent =
        "Мы верим в то, что стараемся делать все возможное. Когда мы обеспечиваем высочайший уровень производительности, результаты демонстрируют отличную производительность, и наши клиенты получают от этого выгоду. Наш опыт подтверждается тем, что мы обеспечиваем стабильные превосходные результаты, которые имеют значение для организаций, с которыми мы работаем. Работа выполняется по-настоящему только тогда, когда наши клиенты довольны тем, что мы делаем";
      valuesCardFour.children[1].textContent = "Ловкость";
      valuesCardFour.children[2].textContent =
        "Мы будем использовать нашу способность действовать быстро и изящно как источник конкурентного преимущества для нашей организации и для наших клиентов. Наша маневренность будет ключом к обеспечению устойчивого роста нашей компании и будет основной причиной успеха наших клиентов, что сделает нас их предпочтительным партнером.";
      valuesCardFive.children[1].textContent = "Расширение";
      valuesCardFive.children[2].textContent =
        "Мы считаем, что люди - наша главная ценность. Поскольку мы нанимаем только самых талантливых людей, мы поощряем их каждый день делать все возможное. Каждый момент в нашей организации - это возможность продемонстрировать свой талант и оказать влияние. Каждый член организации знает, что он уполномочен и доверяет ему действовать в интересах нашей организации и тех, кому мы служим.";
      valuesCardSix.children[1].textContent = "Инновация";
      valuesCardSix.children[2].textContent =
        "Мы уверены, что лучшие дни в мире еще впереди. Мы будем развивать свое любопытство, использовать силу технологий и использовать наши ресурсы для создания инновационных идей и открытия новых способов мышления. Мы делаем это, как наша часть в том, чтобы сделать этот мир лучше.";

      // * Partners
      partnersTitle.textContent = "Наши партнеры";

    // * Footer
    footerAddress.children[0].textContent = "Наш офис"
    footerAddress.children[1].textContent = "Узбекистан, г.Ташкент, Мирабадский район Нукус, 83А"
    footerPhone.children[0].textContent = "Номер телефона"
    footerPhone.children[1].textContent = "+998 99 8957706"
    footerEmail.children[0].textContent = "Электронная почта"
    footerEmail.children[1].textContent = "info@maab.uz"
    footerCreate.textContent = "Все права защищены."
    footerTopText.textContent  ="Давайте вместе разрабатывать решения бизнес-аналитики для Вашей компании!"
    footerTopButton.textContent  ="Связаться с нами"
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
      hero.children[0].textContent = "Biznes tahlili";
      hero.children[2].textContent =
        "Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin. MAAB Innovation kompaniyasi turli sohalar uchun biznes tahlili (business intelligence) yechimlarini taqdim etishga ixtisoslashgan tajribali mutaxassislar jamoasiga ega. Mutaxassislarimiz ish jarayonlarini yaxshilash va savdo hajmini oshirish uchun mijozlar bilan hamkorlik qiladi.";

      // * Services
      servicesHeader.children[0].textContent =
        "Biz biznes tahlil xizmatlarini taqdim etamiz";
      servicesHeader.children[1].textContent =
        "MAAB Innovationda biz biznes tahlili (business intelligence) xizmatlarining keng spektrini taklif etamiz, jumladan, business intelligence (BI) tizimini ishlab chiqish, BI konsaltingi, shaxsiy BIni ishlab chiqish, qo'llab-quvvatlash va texnik xizmat ko'rsatish, o'z-o'ziga xizmat ko'rsatish yechimlarini yaratish va boshqalar. Mutaxassislarimiz ko'plab mijozlarga operatsion jarayonlarini yaxshilashda va yangi biznes g'oyalarini yaratishda yordam berishdi. Bizning takliflarimiz haqida ko'proq bilish uchun quyidagi ma'lumotlarni ko'ring.";

      servicesCard1.children[0].textContent =
        "Ma'lumotlarni vizualizatsiya qilish";
      servicesCard1.children[1].textContent =
        "Turli formatlarda katta hajmdagi ma'lumotlar bilan ishlash qiyin bo'lishi mumkin. Biroq, biz sizga barcha biznes ma'lumotlaringizni yagona formatga birlashtiradigan yechimni ishlab chiqishda yordam bera olamiz. Keyin ma'lumotlar osongina qayta ishlanishi va vizualizatsiya qilinishi mumkin, bu esa ma'lumotlarni boshqarish jarayonlarini soddalashtiradi.";

      servicesCard2.children[0].textContent =
        "Biznes ma'lumotlarini tahlil qilish";
      servicesCard2.children[1].textContent =
        "Kompaniyamizda biz nafaqat ma'lumotlarni tahlil qilamiz, balki mijozlarimizga tavakkalchilik va tajribadan tashqari dalillar asosida qaror qabul qilishda yordam beramiz. Aslida, ishonchli tuzilgan ma'lumotlarga asoslangan biznes qarorlari va tasodifiy xulosalarga asoslangan biznes qarorlar o'rtasida sezilarli tafovut mavjud.";

      servicesCard3.children[0].textContent = "DWH va ETL arxitekturasi";
      servicesCard3.children[1].textContent =
        "Katta hajmdagi tartibga solinmagan ma'lumotlarni saqlash va ularning migratsiyasini osonlashtirish uchun biz ma'lumotlar omboridan (DWH) foydalanamiz va har bir loyiha uchun ma’lumotlarni chiqarish, o'zgartirish, yuklash (ETL) jarayonlarini amalga oshiramiz. Ushbu texnik strategiya ma'lumotlarni samarali saqlash va qayta ishlashni kafolatlaydi.";

      servicesCard4.children[0].textContent =
        "Individual BI yechimlari va komponentlari";
      servicesCard4.children[1].textContent =
        "Bozorda biznes tahlilini amalga oshiruvchi ko'plab tayyor mahsulotlar mavjud bo'lsada, Sizning biznes talablaringizga to'liq mos keladiganini topish qiyin bo'lishi mumkin. Agar Siz ushbu qiyin tanlovga duch kelsangiz, ehtiyojlaringizga moslashtirilgan maxsus yechimga buyurtma berish uchun biz bilan bog'laning.";

      servicesCard5.children[0].textContent =
        "Korxona miqyosidagi ma’lumotlarning tahlili";
      servicesCard5.children[1].textContent =
        "Biz yirik korporatsiyalar uchun kengaytiriladigan biznes tahlili yechimlarini ishlab chiqishga ixtisoslashganmiz, ularni osonlik bilan yangilash va o'sib borayotgan biznes ehtiyojlari va bozor tendentsiyalarini qondirish uchun moslashtirish mumkin.";

      servicesCard6.children[0].textContent =
        "BI ilovalarini amalga tatbiq qilish";
      servicesCard6.children[1].textContent =
        "Bizning tajribamiz biznes tahlili yechimlarini yaratishdan tashqariga chiqadi va ularni mavjud tizimlarga samarali integratsiya qilish imkonini beradi.";

      servicesCard7.children[0].textContent = "BI konsalting";
      servicesCard7.children[1].textContent =
        "Agar Siz biznes tahlili tizimingizning texnologik mukammalligiga ishonchingiz komil boʻlmasa yoki uning funksionalligi va dizayniga shubhangiz boʻlsa, biz Sizga asosli qaror qabul qilishingizga yordam berish uchun sohaning ilgʻor amaliyotlari asosida ekspert koʻrsatmalarini taqdim etamiz.";

      servicesCard8.children[0].textContent =
        "BI qo'llab-quvvatlash va texnik xizmat ko'rsatish";
      servicesCard8.children[1].textContent =
        "Mavjud biznes tahlili yechimlarini saqlab qolish muntazam yangilanishlar va texnik yordamni talab qiladi. BI yechimingizni yangilab turish va biznes ehtiyojlaringizga mos kelishi uchun biz texnik muammolarni hal qilishimiz va kerak bo'lganda yangi xususiyatlarni joriy qilishimiz mumkin.";

      servicesCard9.children[0].textContent = "O'z-o'ziga xizmat ko'rsatish BI";
      servicesCard9.children[1].textContent =
        "Ayrim ma'lumotlarni tahlil qilish vazifalarini avtomatlashtirish orqali Siz qimmat biznes tahlilchilarni yollash xarajatlarini tejashingiz mumkin.";

      // * Contact Us
      contactUsHeader.children[0].textContent =
        "Xizmatlarimiz haqida bilish, maʼlumotlaringizni tahlil qilish va vizualizatsiya qilish hamda vaqtingizni va mablaglaringizni tejash bilan birga kompaniyangiz rivojlanishiga yordam beradigan maxsus BI yechimini yaratish uchun mutaxassislarimiz bilan bogʻlaning.";
      contactUsHeader.children[1].textContent = "Biz bilan bog'lanish";

      // * Explore
      exploreHeader.children[0].textContent = "Biznes tahlilining afzalliklari";
      exploreHeader.children[1].textContent =
        "Samarali qo'llanilganda, biznes tahlili yechimlari biznes egalariga ko'plab afzalliklarni taqdim etadi, jumladan, tashkiliy samaradorlikni oshirish, ishonchli ma'lumotlar, mijozlarga xizmat ko’rsatish salohiyatini yaxshilash va ma'lumotlarni yuqori sifatli tahlil qilish. Quyidagi bo'limlarda biz biznes tahlili qo'llashning eng keng tarqalgan afzalliklarini sanab o'tamiz.";

      exploreCard1.children[1].textContent =
        "Tashkiliy samaradorlikni oshirish";
      exploreCard1.children[2].textContent =
        "BI yechimlari kompaniyaning rivojlanish stsenariylarining aniqligini sezilarli darajada oshirishi va kompaniyalarga real vaqt rejimida va tarixiy ma'lumotlarni qayta ishlash orqali o'z resurslarini yanada samaraliroq taqsimlash imkonini beradi.";

      exploreCard2.children[1].textContent =
        "Strukturaviy ishonchli ma'lumotlar";
      exploreCard2.children[2].textContent =
        "BI yechimlari kompaniyaning rivojlanish stsenariylarining aniqligini sezilarli darajada oshirishi va kompaniyalarga real vaqt rejimida va tarixiy ma'lumotlarni qayta ishlash orqali o'z resurslarini yanada samaraliroq taqsimlash imkonini beradi.";

      exploreCard3.children[1].textContent =
        "Mijozlarning qoniqish darajasini oshirish";
      exploreCard3.children[2].textContent =
        "BI texnologiyalari mijozlarga xizmat ko'rsatishdagi har qanday uzilishlarni tezda aniqlaydi va joriy qilingandan so'ng ularni tuzatish yo'llarini taklif qiladi, natijada mijozlar qoniqishini oshiradi.";

      exploreCard4.children[1].textContent =
        "Ma'lumotlarni tez va yuqori sifatli tahlil qilish";
      exploreCard4.children[2].textContent =
        "BI platformalari katta hajmdagi ma’lumotlarni tezda qayta ishlay oladi, bu esa biznes egalariga kerakli ma’lumotlarni tezda topish va asosli qarorlar qabul qilish imkonini beradi.";

      //  * Expertise
      expertiseHeader.textContent = "BIZNING TAJRIBA: ";

      expertiseCardTitleOne.textContent = "Ma'lumotlar ombori";
      expertiseCardTitleTwo.textContent = "Ma'lumotlarni qabul qilish";
      expertiseCardTitleThree.textContent = "Ma'lumotlarni tahlil qilish";

      expertiseCardMainList.children[0].textContent =
        "Ma'lumotlarni konvertatsiya qilish, ma'lumotlarni xaritalash, ma'lumotlarni tozalash, ma'lumotlarni aniqlash, moliyaviy muvozanat, ma'lumotlarni tahlil qilish va tekshirish, ma'lumotlarni ko'chirish, korporativ ma'lumotlarni tozalash, muammolarni bartaraf etish.";
      expertiseCardMainList.children[1].textContent =
        "O'z-o'ziga xizmat ko'rsatish hisobotlari, boshqaruv panellari va tahlillar.";
      expertiseCardMainList.children[2].textContent =
        "Moliyaviy va tranzaksiya ma'lumotlari uchun markazlashtirilgan ma'lumotlar ombori.";
      expertiseCardMainList.children[3].textContent =
        "Eskirgan yoki nomukammal texnologiyani almashtiring.";
      expertiseCardMainList.children[4].textContent =
        "Muayyan va maqsadli ehtiyojlar uchun optimallashtirilgan ma'lumotlar to'plamlarini yarating.";
      expertiseCardMainList.children[5].textContent =
        "Korporativ ma'lumotlarni qayta ishlash xizmatlaridan foydalangan holda Real vaqt rejimida tahlillarni yoqing.";
      expertiseCardMainList.children[6].textContent =
        "Biznes razvedkasi va axborot etkazib berish tizimlarini ishlab chiqish.";

      expertiseCardListOne.children[0].textContent =
        "Bulutli ma'lumotlarni saqlash";
      expertiseCardListOne.children[1].textContent =
        "Microsoft Azure (Azure SQL ma'lumotlar bazasi, Azure AD, obunalar, resurslar guruhlari, Azure ma'lumotlar ko'li, Azure Big binary Object Storage, Azure Synapse, Azure Analysis services)";
      expertiseCardListOne.children[2].textContent = "Qor parchasi";
      expertiseCardListOne.children[3].textContent =
        "Amazon veb-xizmatlari (AWS Redshift, AWS S3 bucket, AWS RDS)";

      expertiseCardListTwo.children[0].textContent =
        "Mahalliy ma'lumotlarni saqlash: Microsoft SQL Server, Oracle";
      expertiseCardListTwo.children[1].textContent =
        "Bulutga ko'chish uchun mahalliy echimlar.";
      expertiseCardListTwo.children[2].textContent =
        "Mahalliy va bulutli ma'lumotlarni saqlash arxitekturasi echimlari.";
      expertiseCardListTwo.children[3].textContent =
        "O'z-o'ziga xizmat ko'rsatish hisobotlari, boshqaruv panellari va tahlillarni qo'llab-quvvatlaydigan ma'lumotlar ombori.";

      expertiseCardListThree.children[0].textContent =
        "Biz ETL va ETL echimlarini amalga oshirmoqdamiz.";
      expertiseCardListThree.children[1].textContent =
        "Ma'lumotlarni ishlab chiqish vositalari: MS SQL Server, SQL Server integratsiya xizmatlari, Azure Data Factory, Azure Synapse Analytics, Azure Data bricks, Python (Pandas)";
      expertiseCardListThree.children[2].textContent =
        "Ommaviy ishlov berish: Apache Spark (Payspark)";
      expertiseCardListThree.children[3].textContent =
        "Oqim bilan ishlash: Apache Kafka";
      expertiseCardListThree.children[4].textContent =
        "Monitoring vositalari: SQL Server agenti, Azure Data Factory triggerlari, Apache Air flow.";

      expertiseCardListFour.children[0].textContent =
        "Biz foydali biznes ma'lumotlarini olish uchun chuqur ma'lumotlar tahlilini taqdim etamiz.";
      expertiseCardListFour.children[1].textContent =
        "Tahlil vositalari: SQL Server, MySQL, Postgresql, Snowflake Cloud SQL, Spark SQL.";
      expertiseCardListFour.children[2].textContent =
        "Hisobot vositalari: MS Power BI, SQL Server hisobot xizmatlari, Tableau, QlikView, Qlik Sense.";

      // * Values
      valuesHeader.children[0].textContent = "BIZNING QADRIYATLARIMIZ";
      valuesHeader.children[1].textContent =
        "Bizning qadriyatlarimiz biz qilayotgan barcha ishlarni boshqaradi.Biz halollik, mijozlarga e'tibor, jamoaviy ish, innovatsiya, hurmat va ijtimoiy mas'uliyatga ishonamiz.";

      valuesCardOne.children[1].textContent = "Halollik";
      valuesCardOne.children[2].textContent =
        "Biz halollokikni eng yuqori qadriyatimiz deb bilamiz. Mijozlarimiz, ishchilarimiz va biznes sheriklarimiz tomonidan bizga bildirilgan ishonch muqaddasdir. Biz qilayotgan har bir narsa, qanday fikrlashimiz va o'zaro munosabatlarimiz doimo to'g'ri ish tutish tamoyiliga amal qiladi, ayniqsa buni amalga oshirish qiyin bo'lganda. Halollik bo'lmasa, haqiqiy muvaffaqiyat bo'lmaydi.";
      valuesCardTwo.children[1].textContent = "Tajriba";
      valuesCardTwo.children[2].textContent =
        "Biz mijozlarimizga xizmat ko'rsatishda tajriba juda muhim deb hisoblaymiz. Biz ajoyib qobiliyat va salohiyat uchun yollaymiz. Biz doimiy ravishda o'sib boradigan va o'zimizni itarish ruhini qamrab olamiz, shunda biz doimo yuqori darajadagi tajribaga ega bo'lamiz. Bizning maqsadimiz jamoaning har bir a'zosiga eng yuqori salohiyatiga erishishda yordam berishdir";
      valuesCardThree.children[1].textContent = "Mukammallik";
      valuesCardThree.children[2].textContent =
        "Biz har bir ishda mumkin bo’lgan eng yuqori sifatli xizmatni ko’rsatishimizga ishonamiz. Xizmatimiz har doim mukammal darajadagi natijalarni namoyish etadi va mijozlarimiz bundan foyda ko'rishadi. Xizmatlarimizning bizning mijozlarimizning tashkilotlari rivojlanishini ta'minlaydigan izchil va yuqori darajadagi natijalarni keltirib chiqarishini tajribamizning isboti sifatida ko’rsatishimiz mumkin. Biz uchun natija bu - mijozlarimizning xizmatlarimizdan mamnunligidir";
      valuesCardFour.children[1].textContent = "Epchillik";
      valuesCardFour.children[2].textContent =
        "Biz tezkorlik va epchillik bilan faoliyat yuritish qobiliyatimizdan tashkilotimiz va mijozlarimiz uchun raqobatbardosh ustunlik manbai sifatida foydalanamiz. Bizning epchilligimiz kompaniyamizning barqaror o'sishini ta'minlashda muhim ahamiyat kasb etadi va mijozlarimiz bizni o'zlariga ma'qul sherik qilib, muvaffaqiyat qozonishlarining asosiy sababi bo'ladi.";
      valuesCardFive.children[1].textContent = "Kengayish";
      valuesCardFive.children[2].textContent =
        "Biz odamlar bizning eng katta boyligimiz ekanligiga ishonamiz. Biz faqat eng iste’dodlilarini yollaganimiz sababli, ularni har kuni eng yaxshi va sifatli xizmat ko’rsatishga undaymiz. Tashkilotimizdagi har bir lahza o'z iste'dodini namoyish etish va ta'sir o'tkazish uchun imkoniyatdir. Tashkilotning har bir a'zosi, ular bizning tashkilotimiz va mijozlarimiz manfaati yo'lida harakat qilishadi va biz ularga ishonishimizni bilishadi.";
      valuesCardSix.children[1].textContent = "Innovatsiya";
      valuesCardSix.children[2].textContent =
        "Biz dunyoning eng yaxshi kunlari hali oldinda ekanligiga ishonamiz. Biz o’z qiziqishlarimizni rivojlantiramiz, innovatsion g'oyalarni yaratish va yangi fikrlash usullarini kashf etish uchun o'z resurslarimizdan va so’nggi texnologiyalardan foydalanamiz. Dunyoni yanada yaxshilashga va uni rivojlantirishga o'z hissamiz qo’shishni o’zimizning ajralmas bir jihatimiz deb hisoblaymiz";

      // * Partners
      partnersTitle.textContent = "Bizning hamkorlar";

    //   * Footer
    footerAddress.children[0].textContent = "Bizning ofisimiz"
    footerAddress.children[1].textContent = "O'zbekiston, Toshkent shahri, Nukus Mirobod tumani, 83a"
    footerPhone.children[0].textContent = "Telefon raqami"
    footerPhone.children[1].textContent = "+998 99 8957706"
    footerEmail.children[0].textContent = "Elektron pochta"
    footerEmail.children[1].textContent = "info@maab.uz"
    footerCreate.textContent = "Barcha huquqlar himoyalangan."
    footerTopText.textContent  ="Keling, Sizning kompaniyangiz uchun biznes tahlili yechimlarini birgalikda ishlab chiqamiz!"
    footerTopButton.textContent  ="Bog'lanish"

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
      hero.children[0].textContent = "Business intelligence";
      hero.children[2].textContent =
        "As the volume of digital data continues to grow, decision-making processes become increasingly challenging. That is where business intelligence technologies, data mining, predictive analytics, and other tools can be highly beneficial. At MAAB Innovation LLC, we have a team of experienced professionals who specialize in delivering a range of BI solutions to diverse industries. Our experts work collaboratively with clients to enhance operational workflows and increase sales.";

      // * Services
      servicesHeader.children[0].textContent =
        "Business intelligence services we provide";
      servicesHeader.children[1].textContent =
        "At MAAB Innovation LLC, we offer an extensive array of business intelligence services, comprising BI development, BI consulting, custom development, BI support and maintenance, and self-service solution creation, among others. Our experts have helped numerous clients enhance their operational processes and attain fresh business insights. To learn more about our offerings, please refer to the information below.";

      servicesCard1.children[0].textContent = "Data visualization";
      servicesCard1.children[1].textContent =
        "Processing large volumes of data in varying formats can be challenging. However, we can assist you in developing a solution that will unify all your business data into a single format. Once this is done, the data can be effortlessly processed and visualized, streamlining your data management processes.";

      servicesCard2.children[0].textContent =
        "Business insights and data analysis";
      servicesCard2.children[1].textContent =
        "At our company, we not only conduct data analysis but also aid our clients in making decisions based on factual evidence rather than intuition. In reality, there is a significant disparity between business decisions made using dependable, structured data and those based on haphazard insights.";

      servicesCard3.children[0].textContent = "DWH and ETL architecture";
      servicesCard3.children[1].textContent =
        "To store vast quantities of unstructured data and facilitate its straightforward migration, we employ data warehousing (DWH) and implement Extract, Transform, Load (ETL) processes for each project. This technical strategy guarantees effective data storage and processing.";

      servicesCard4.children[0].textContent =
        "Custom BI solutions and components";
      servicesCard4.children[1].textContent =
        "Although there is a plethora of off-the-shelf business intelligence products available on the market, finding one that precisely fits your business requirements can be challenging. If you find yourself in this predicament, feel free to reach out to us to commission the creation of a custom solution tailored to your needs.";

      servicesCard5.children[0].textContent =
        "Enterprise business intelligence";
      servicesCard5.children[1].textContent =
        "We specialize in developing scalable business intelligence solutions for large corporations that can be easily upgraded and customized to meet evolving business demands and market trends as they arise.";

      servicesCard6.children[0].textContent =
        "Implementation of BI applications";
      servicesCard6.children[1].textContent =
        "Our proficiency extends beyond creating business intelligence solutions to efficiently integrating them into your existing systems.";

      servicesCard7.children[0].textContent = "BI consulting";
      servicesCard7.children[1].textContent =
        "If you are uncertain about the technology stack for your business intelligence solution or hesitant about its functionality and design, we can provide expert guidance based on industry best practices to help you make an informed decision.";

      servicesCard8.children[0].textContent = "BI support & maintenance";
      servicesCard8.children[1].textContent =
        "Maintaining existing business intelligence solutions involves regular updates and technical support. We can address technical issues and incorporate new features as needed to ensure that your BI solution stays up-to-date and continues to meet your business needs.";

      servicesCard9.children[0].textContent = "Self-service BI";
      servicesCard9.children[1].textContent =
        "By automating certain data analysis tasks, you can avoid the expense of hiring costly business analysts.";

      // * Contact Us
      contactUsHeader.children[0].textContent =
        "Contact our experts to learn about our services, analyze and visualize your data, and create a customized BI solution that will help your business grow while saving you money and time.";
      contactUsHeader.children[1].textContent = "Contact us";

      // * Explore
      exploreHeader.children[0].textContent =
        "Benefits of business intelligence and analytics";
      exploreHeader.children[1].textContent =
        "When deployed effectively, business intelligence solutions offer a multitude of benefits to business owners, including enhanced organizational efficiency, dependable data, improved customer experience, and high-quality data analysis. In the sections that follow, we will outline some of the most common advantages of adopting a business intelligence approach.";

      exploreCard1.children[1].textContent =
        "Enhanced Organizational Efficiency";
      exploreCard1.children[2].textContent =
        "BI solutions can significantly improve the accuracy of business development scenarios and enable companies to allocate their resources more efficiently by processing real-time and historical data.";

      exploreCard2.children[1].textContent = "Structured Reliable Data";
      exploreCard2.children[2].textContent =
        "Rather than utilizing multiple software tools for disparate data sources, business intelligence and analytics solutions amalgamate, structure, and visualize data for further analysis.";

      exploreCard3.children[1].textContent = "Improved Customer Satisfaction";
      exploreCard3.children[2].textContent =
        "BI technologies quickly identify any breaches in customer service and offer ways to rectify them once implemented, resulting in more satisfied customers.";

      exploreCard4.children[1].textContent = "Fast and Quality Data Analysis";
      exploreCard4.children[2].textContent =
        "BI platforms can rapidly process substantial volumes of data, enabling business owners to promptly locate relevant information and make informed decisions.";

      //  * Expertise
      expertiseHeader.textContent = "Our expertise";
      expertiseCardTitleOne.textContent = "Data Warehousing";
      expertiseCardTitleTwo.textContent = "Data Ingestion";
      expertiseCardTitleThree.textContent = "Data Analytics";

      expertiseCardMainList.children[0].textContent =
        "Data Conversion, Data Mapping, Data Cleaning, Data Discovery, Financial Balancing, Data Analysis and Validation, Data Migration, Enterprise Data Cleaning, Troubleshooting.";
      expertiseCardMainList.children[1].textContent =
        "Self-Service Reporting, Dashboards and Analytics.";
      expertiseCardMainList.children[2].textContent =
        "Centralized Data Repository for Financial and Transactional Information.";
      expertiseCardMainList.children[3].textContent =
        "Replace Legacy or Deficient Technology.";
      expertiseCardMainList.children[4].textContent =
        "Build Optimized Data Sets for Specific and Targeted Needs";
      expertiseCardMainList.children[5].textContent =
        "Enable Near Real-time Analytics with Enterprise Data Services.";
      expertiseCardMainList.children[6].textContent =
        "Design of Business Intelligence and Information Delivery Systems";

      expertiseCardListOne.children[0].textContent = "Cloud Data Warehouses";
      expertiseCardListOne.children[1].textContent =
        "Microsoft Azure (Azure SQL Database, Azure AD, Subscriptions, Resource Groups, Azure Data Lake, Azure Blob Storage, Azure Synapse, Azure Analysis Services)";
      expertiseCardListOne.children[2].textContent = "Snowflake";
      expertiseCardListOne.children[3].textContent =
        "Amazon Web Services (AWS Redshift, AWS S3 bucket, AWS RDS)";

      expertiseCardListTwo.children[0].textContent =
        "On-Premise DataWarehouse : Microsoft SQL Server, Oracle";
      expertiseCardListTwo.children[1].textContent =
        "On-premise to Cloud Migration Solutions.";
      expertiseCardListTwo.children[2].textContent =
        "On-premise and Cloud DataWarehouse Architecture Solutions.";
      expertiseCardListTwo.children[3].textContent =
        "DataWarehouse that supports self-service reporting, Dashboards and analytics.";

      expertiseCardListThree.children[0].textContent =
        "We implement ETL and ELT solutions";
      expertiseCardListThree.children[1].textContent =
        "Data Engineering Tools: MS SQL Server, SQL Server Integration Services, Azure Data Factory, Azure Synapse Analytics, Azure Data bricks, Python (Pandas)";
      expertiseCardListThree.children[2].textContent =
        "Batch Processing: Apache Spark (PySpark) ";
      expertiseCardListThree.children[3].textContent =
        "Streaming Processing: Apache Kafka";
      expertiseCardListThree.children[4].textContent =
        "Monitoring Tools: SQL Server Agent, Azure Data Factory Triggers, Apache Airflow.";

      expertiseCardListFour.children[0].textContent =
        "We provide in-depth analytics for data to provide useful business insights.";
      expertiseCardListFour.children[1].textContent =
        "Analysis Tools : SQL Server, MySQL, Postgres SQL, Snowflake Cloud SQL, Spark SQL.";
      expertiseCardListFour.children[2].textContent =
        "Reporting Tools: MS Power BI, SQL Server Reporting Services, Tableau, QlikView, Qlik Sense.";

      // * Values

      valuesHeader.children[0].textContent = "OUR VALUES";
      valuesHeader.children[1].textContent =
        "Our values guide everything we do.We believe in honesty, customer focus, teamwork, innovation, respect and social responsibility.";

      valuesCardOne.children[1].textContent = "Honesty";
      valuesCardOne.children[2].textContent =
        "We consider honesty to be our highest value. The trust that our customers, employees and business partners place in us is sacred. Everything we do, how we think, how we interact, will always be guided by the principle of always doing the right thing, especially when it is difficult to do. There is no real success without honesty";
      valuesCardTwo.children[1].textContent = "Experience";
      valuesCardTwo.children[2].textContent =
        "We believe that experience is crucial when serving our customers. We hire people with exceptional capabilities and potential. We support the spirit of constant growth and striving to achieve an ever-increasing level of knowledge. Our goal is to help each team member reach their highest potential.";
      valuesCardThree.children[1].textContent = "Perfection";
      valuesCardThree.children[2].textContent =
        "We believe that we are trying to do our best. When we deliver the highest level of performance, the results demonstrate excellent performance, and our customers benefit from it. Our experience is confirmed by the fact that we provide stable excellent results that matter to the organizations we work with. The work is really done only when our customers are satisfied with what we do";
      valuesCardFour.children[1].textContent = "Dexterity";
      valuesCardFour.children[2].textContent =
        "We will use our ability to act quickly and gracefully as a source of competitive advantage for our organization and for our customers. Our agility will be the key to ensuring the sustainable growth of our company and will be the main reason for the success of our customers, which will make us their preferred partner.";
      valuesCardFive.children[1].textContent = "Expansion";
      valuesCardFive.children[2].textContent =
        "We believe that people are our main value. Since we only hire the most talented people, we encourage them to do their best every day. Every moment in our organization is an opportunity to showcase your talent and make an impact. Every member of the organization knows that he is authorized and trusts him to act in the interests of our organization and those whom we serve.";
      valuesCardSix.children[1].textContent = "Innovation";
      valuesCardSix.children[2].textContent =
        "We are sure that the best days in the world are still ahead. We will develop our curiosity, harness the power of technology and use our resources to create innovative ideas and discover new ways of thinking. We do this as our part in making this world a better place.";

      // * Partners
      partnersTitle.textContent = "Our partners";

    //  * Footer
    footerAddress.children[0].textContent = "Our office"
    footerAddress.children[1].textContent = "Uzbekistan, Tashkent, Mirabad district Nukus, 83A"
    footerPhone.children[0].textContent = "Phone number"
    footerPhone.children[1].textContent = "+998 99 8957706"
    footerEmail.children[0].textContent = "Email"
    footerEmail.children[1].textContent = "info@maab.uz"
    footerCreate.textContent = "All rights reserved."
    footerTopText.textContent  ="Let's work together to develop business intelligence solutions for your company!"
    footerTopButton.textContent  ="Contact us"

    }
  }
})();

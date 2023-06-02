(function () {
  const selectBox = document.getElementById("change-language");
  const nav = document.getElementById("nav");
  const hero = document.querySelector(".hero__info");
  const aboutHeader = document.querySelector("#about--info");
  const aboutSectionTitle = document.querySelector(
    "#about-accordion-section-title"
  );
  const aboutAccordionTitle1 = document.querySelector(
    "#about-accordion-title-1"
  );
  const aboutAccordionTitle2 = document.querySelector(
    "#about-accordion-title-2"
  );
  const aboutAccordionTitle3 = document.querySelector(
    "#about-accordion-title-3"
  );
  const aboutAccordionBody1 = document.querySelector("#about-accordion-body-1");
  const aboutAccordionBody2 = document.querySelector("#about-accordion-body-2");
  const aboutAccordionBody3 = document.querySelector("#about-accordion-body-3");
  const statementTitle = document.querySelector("#statement--title");
  const statementOne = document.querySelector("#statement-section-one");
  const statementTwo = document.querySelector("#statement-section-two");
  const whyTitle = document.querySelector("#why--title");
  const whyItem1 = document.querySelector("#why-item-1");
  const whyItem2 = document.querySelector("#why-item-2");
  const whyItem3 = document.querySelector("#why-item-3");
  const whyItem4 = document.querySelector("#why-item-4");
  const whyItem5 = document.querySelector("#why-item-5");
  const whyItem6 = document.querySelector("#why-item-6");
  const whyItem7 = document.querySelector("#why-item-7");
  const whyItem8 = document.querySelector("#why-item-8");
  const whyItem9 = document.querySelector("#why-item-9");
  const toolsHeader = document.querySelector("#tools--header");
  const toolsItemTitle1 = document.querySelector("#tools-item-title-1");
  const toolsItemTitle2 = document.querySelector("#tools-item-title-2");
  const toolsItemTitle3 = document.querySelector("#tools-item-title-3");
  const footerAddress = document.querySelector("#footer-address");
  const footerPhone = document.querySelector("#footer-phone");
  const footerEmail = document.querySelector("#footer-email");
  const footerCreate = document.querySelector("#footer-create");
  const footerTopText = document.querySelector("#footer-top-text");
  const footerTopButton = document.querySelector("#footer-top-button");
  const toolsItemsMainTitle = document.querySelector("#tools-items-main-title");
  const teamTitle = document.querySelector("#team--title");

  translateContent();
  selectBox.addEventListener("change", translateContent);

  function translateContent() {
    const languageValue = selectBox.options[selectBox.selectedIndex].value;
    localStorage.setItem("language", languageValue);
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

      //  * About
      aboutHeader.children[0].textContent = "Наша компания";
      aboutHeader.children[1].textContent = `Добро пожаловать в MAAB INNOVATION! Мы ИТ-организация, базирующаяся в Ташкенте, специализирующуюся на предоставлении услуг бизнес-аналитики. Наша компания была основана командой профессионалов с большим опытом как в бизнесе, так и в технологиях, и мы стремимся предоставлять индивидуальные решения для бизнес-аналитики для различных отраслевых организаций и учреждений. Мы используем передовые инструменты, технологии и методологии для обеспечения высокого качества предоставления наших услуг. Наши основные услуги включают разработку ETL, хранение данных, интеллектуальный анализ данных, визуализацию данных и аналитику. Мы также предоставляем консультационные услуги, техническую экспертизу для индивидуальной разработки приложений, системную интеграцию, поддержку и настройку, а также разработку и внедрение различных программных решений.
         В дополнение к нашим услугам бизнес-аналитики мы также предлагаем онлайн-учебный курс, где мы обучаем талантливую молодежь навыкам и знаниям, которые им необходимы для достижения успеха в области бизнес-аналитики. Наш учебный курс охватывает широкий круг тем, включая анализ данных, моделирование данных и визуализацию данных. Учебный курс под руководством опытных экспертов по бизнес-аналитике позволяет освоить навыки бизнес-аналитики, научить работать с отраслевыми инструментами и сложными наборами данных, а также помочь развить необходимые навыки и знания в области работы с данными. Наш курс разработан в таком формате, что за 9 месяцев слушатели становятся IT-специалистами мирового уровня. В MAAB INNOVATION мы стремимся предоставлять нашим клиентам первоклассные услуги и решения для бизнес-аналитики, отвечающие их конкретным потребностям.
         Свяжитесь с нами сегодня, чтобы узнать больше о том, как мы можем помочь Вашей организации добиться успеха с помощью Business Intelligence.`;

      aboutSectionTitle.textContent = "Наши сильные стороны";

      aboutAccordionTitle1.textContent = `Международная команда`;
      aboutAccordionTitle2.textContent = `Опыт работы в отрасли`;
      aboutAccordionTitle3.textContent = `Специалисты`;
      aboutAccordionBody1.textContent = `Имея команду, разбросанную по часовым поясам, с технологией, которая позволяет нам работать гибко, мы можем помочь вам сделать вашу компанию более отзывчивой и гибкой, что не только повысит вашу репутацию за хорошее обслуживание, но и позволит вам использовать возможности намного быстрее`;
      aboutAccordionBody2.textContent = `Наша опытная команда бизнес-аналитики родом из самых разных отраслях. Наши совместные знания помогут вам в развитии ваших данных в вашей конкретной отрасли. Ценность наших решений во многих отраслях поможет вам достичь бизнес-целей быстрее и с меньшими затратами`;
      aboutAccordionBody3.textContent = `Важно, чтобы вы обращались за советом к нужным специалистам в соответствующей области. Консультанты «MAAB INNOVATION» обладают опытом и способностью обрабатывать, анализировать и формулировать решения ваших проблем. Они заслуживают доверия, представительны и искренне увлечены вашими потребностями в бизнес-аналитике`;

      //  * Statement
      statementTitle.textContent = "Миссия и видение";
      statementOne.children[0].textContent = `Наша миссия`;
      statementOne.children[1].textContent = `Наша миссия состоит в том, чтобы предоставить компаниям интеллектуальные идеи и инструменты для принятия решений на основе данных, что позволит им достичь своих стратегических целей и стимулировать рост. Мы стремимся предоставлять превосходные услуги бизнес-аналитики, которые позволяют нашим клиентам оставаться впереди своих конкурентов, снижать риски и извлекать выгоду из новых возможностей. Наша цель — стать надежным партнером для компаний, которым нужны действенные идеи и интеллектуальные решения.`;
      statementTwo.children[0].textContent = `Наше видение`;
      statementTwo.children[1].textContent = `Наше видение — быть ведущим поставщиком услуг бизнес-аналитики, которому доверяют предприятия всех размеров и отраслей по всему миру. Мы стремимся изменить то, как предприятия принимают решения, используя передовые технологии, отраслевой опыт и аналитические навыки. Наше видение состоит в том, чтобы постоянно внедрять инновации и предоставлять нашим клиентам исключительную ценность, способствуя долгосрочному партнерству, основанному на доверии, честности и результатах. Мы стремимся быть признанными первопроходцами в области бизнес-аналитики, устанавливающими стандарты качества в нашей отрасли.`;

      //  * Why
      whyTitle.textContent = `Почему стоит выбрать нас?`;
      whyItem1.children[1].textContent = `Планирование`;
      whyItem1.children[2].textContent = `Мы планируем нашу работу таким образом, чтобы выполнить указанный объем вовремя и способны работать в сжатые сроки.`;
      whyItem2.children[1].textContent = `Управление рисками`;
      whyItem2.children[2].textContent = `Мы минимизируем управленческие усилия со стороны заказчика, обеспечивая при этом высокий уровень прозрачности процесса разработки и упреждающее управление рисками.`;
      whyItem3.children[1].textContent = `Мониторинг`;
      whyItem3.children[2].textContent = `Мы регулярно измеряем состояние проекта с помощью KPI, чтобы следить за ходом проекта и при необходимости корректировать процесс разработки.`;
      whyItem4.children[1].textContent = `Настройка`;
      whyItem4.children[2].textContent = `Мы предлагаем настраиваемые решения для бизнес-аналитики, адаптированные к уникальным потребностям каждого клиента. Это гарантирует, что клиенты получат решения, соответствующие их отрасли, бизнес-целям и источникам данных.`;
      whyItem5.children[1].textContent = `Экспертиза`;
      whyItem5.children[2].textContent = `Наша команда состоит из опытных специалистов по бизнес-аналитике, которые хорошо осведомлены о последних технологиях и тенденциях в отрасли. Этот опыт воплощается в высококачественных решениях и рекомендациях для клиентов.`;
      whyItem6.children[1].textContent = `Масштабируемость`;
      whyItem6.children[2].textContent = `Наши решения рассчитаны на масштабирование по мере роста бизнеса клиента. Это гарантирует, что клиенты могут продолжать использовать одни и те же решения, даже если их потребности в данных со временем меняются.`;
      whyItem7.children[1].textContent = `Безопасность данных`;
      whyItem7.children[2].textContent = `Мы уделяем большое внимание безопасности данных и используем стандартные отраслевые протоколы безопасности для защиты данных клиентов. Клиенты могут быть уверены, что их данные в безопасности при работе с вашей компанией.`;
      whyItem8.children[1].textContent = `Поддержка клиентов`;
      whyItem8.children[2].textContent = `Мы стремимся обеспечить отличную поддержку клиентов, чтобы клиенты были довольны своими решениями. Клиенты имеют доступ к постоянной поддержке и обучению, чтобы они могли максимально эффективно использовать свои решения для бизнес-аналитики.`;
      whyItem9.children[1].textContent = `Прозрачность`;
      whyItem9.children[2].textContent = `Наши клиенты имеют постоянный доступ к нашим системам отслеживания задач, таким как Jira, и базе знаний, в которой мы документируем всю работу, связанную с проектом.`;

      //  * Tools
      toolsHeader.children[0].textContent = `В MAAB Innovation мы используем новейшие технологии и инструменты для предоставления комплексных услуг бизнес-аналитики нашим клиентам. `;
      toolsHeader.children[1].textContent = `Мы используем платформы расширенной аналитики для извлечения информации из данных, а также мощные инструменты визуализации для передачи этих идей интуитивно понятным способом. Наша команда владеет различными языками программирования, что позволяет нам разрабатывать индивидуальные решения с учетом уникальных потребностей каждого клиента. В конечном счете, наша цель — предоставить нашим клиентам информацию, необходимую им для принятия решений на основе данных, которые будут способствовать развитию их бизнеса.`;
      toolsItemTitle1.textContent = `БАЗА ДАННЫХ + ХРАНИЛИЩЕ`;
      toolsItemTitle2.textContent = `ИНТЕГРАЦИЯ + АНАЛИТИКА`;
      toolsItemTitle3.textContent = `ХРАНИЛИЩЕ ДАННЫХ + ИНФОРМАЦИОННЫЕ ПАНЕЛИ`;
      toolsItemsMainTitle.textContent = "Технологии, которые мы используем";
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
      // * Team
      teamTitle.textContent =
        "Вы можете нанять наших экспертов по бизнес-аналитике";
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
      hero.children[0].textContent = "Biznes tahlili";
      hero.children[2].textContent =
        "Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin. MAAB Innovation kompaniyasi turli sohalar uchun biznes tahlili (business intelligence) yechimlarini taqdim etishga ixtisoslashgan tajribali mutaxassislar jamoasiga ega. Mutaxassislarimiz ish jarayonlarini yaxshilash va savdo hajmini oshirish uchun mijozlar bilan hamkorlik qiladi.";
      //  * About
      aboutHeader.children[0].textContent = "Bizning kompaniya";
      aboutHeader.children[1].textContent = `MAAB INNOVATION xush kelibsiz! Biz biznes tahlili (business intelligence) xizmatlarini ko’rsatishga ixtisoslashgan Toshkentda joylashgan IT tashkilotimiz. Bizning kompaniyamiz biznes va texnologiya sohasida kuchli tajribaga ega bo'lgan professionallar jamoasi tomonidan tashkil etilgan va biz turli soha tashkilotlari va muassasalari uchun mo’jallangan biznes tahlili (business intelligence) yechimlarini taqdim etamiz. Biz xizmatlarimizni yuqori sifatli yetkazib berishni ta'minlash uchun zamonaviy vositalar, texnologiyalar va metodologiyalardan foydalanamiz. Bizning asosiy xizmatlarimizga ETLni ishlab chiqish, ma'lumotlarni saqlash, ma'lumotlarni qidirish, ma'lumotlarni vizualizatsiya qilish va tahlil qilish kiradi. Shuningdek, biz konsalting xizmatlarini, maxsus ilovalarni ishlab chiqish, tizim integratsiyasi, qo'llab-quvvatlash va sozlash, shuningdek, turli dasturiy yechimlarni loyihalash va amalga oshirish bo'yicha texnik ekspertizalarni taqdim etamiz.
        Biznes tahlili (business intelligence) xizmatlaridan tashqari, biz iqtidorli talabalarga Biznes tahlili (business intelligence) sohasida yetuk mutaxassis bo‘lib yetishishlari uchun zarur bo‘lgan ko‘nikma va bilimlarni o‘rgatish uchun onlayn bootcamp ham taklif etamiz. Bizning bootcamp keng mavzularni qamrab oladi, jumladan, ma'lumotlarni tahlil qilish, ma'lumotlarni modellashtirish va ma'lumotlarni vizualizatsiya qilish. Tajribali ekspertlar boshchiligidagi bootcamp kursi biznes razvedka ko'nikmalarini o'rganish, sohadagi mavjud dasturiy vositalar va murakkab ma'lumotlar to'plamlari bilan ishlashni o'rgatish va muhim ma'lumotlar ko'nikmalari va bilimlarini rivojlantirishga yordam beradi. Bizning kursimiz shunday formatda tuzilganki, 9 oy ichida talabalar jahon darajasidagi IT mutaxassislariga aylanadi.
        MAAB INNOVATION kompaniyasida biz mijozlarimizga biznes tahlili (business intelligence) bo‘yicha yuqori darajadagi xizmatlar va ularning o‘ziga xos ehtiyojlariga javob beradigan yechimlarni taqdim etishga intilamiz. Tashkilotingizga Business Intelligence bilan muvaffaqiyatga erishishda qanday yordam berishimiz haqida ko'proq bilish uchun bugun biz bilan bog'laning.`;
      aboutSectionTitle.textContent = "Bizning kuchli tomonlarimiz";
      aboutAccordionTitle1.textContent = `Xalqaro jamoa`;
      aboutAccordionTitle2.textContent = `Soha tajribasi`;
      aboutAccordionTitle3.textContent = `Ekspertlar`;
      aboutAccordionBody1.textContent = `Bizga moslashuvchan ishlash uchun imkon beradigan texnologiya bilan turli vaqt zonalari bo'ylab tarqalgan jamoaga ega bo'lish orqali biz sizning kompaniyangizni yanada epchil va tezkor qilishga yordam beramiz, bu nafaqat yaxshi xizmat uchun kompaniyangiz e’tiborini oshiradi, balki sizga imkoniyat va sharoitlardan tezroq foydalanish imkonini beradi`;
      aboutAccordionBody2.textContent = `Bizning tajribali biznes-tahlil jamoamiz turli sohalarda tajriba orttirishgan. Bizning birgalikdagi bilimimiz sizning sohangizdagi ma'lumotlar bilan ishlash bo'yicha sizga yordam beradi. Ko'pgina soha tarmoqlari haqidagi tajriba va yechimlarimiz sizning biznes maqsadlaringizga tezroq va tejamkorroq erishishda yordam beradi.`;
      aboutAccordionBody3.textContent = `Ma’lum bir soha bo'yicha mutaxassislardan maslahat olish hozirgi kunda juda muhimdir. "MAAB INNOVATION" maslahatchilari muammolarni qayta ishlash, tahlil qilish va yechimlarini aniqlab olish qobiliyatiga va tajribasiga ega. Ular sizning biznesni tahlil qilish sohasidagi zaruriyatlaringizga yechim 
      topishga nisbatan ishonchli va chinakam ishtiyoqmandlar.`;

      //  * Statement
      statementTitle.textContent = "Bizning missiyamiz va maqsadlarimiz";
      statementOne.children[0].textContent = `Bizning missiyamiz`;
      statementOne.children[1].textContent = `Bizning missiyamiz tadbirkorlik subyektlari imkoniyatlarini kengaytirishdir. Biz buni tadbirkorlik subyektlari faoliyatini tahlil qilish (business intelligence) natijalariga ko’ra intellektual xulosalar taqdim qilish orqali amalga oshiramiz. Bizning xizmatlarimiz korxonalarga strategik maqsadlarga erishish va rivojlanish imkonini beradi. Biz taqdim qiladigan yuqori sifatli biznes tahlili (business intelligence) xizmatlaridan foydalanish mijozlarimizga o’z raqobatchilaridan oldinda bo’lishlariga, riskni kamaytirishlari va yangi imkoniyatlardan manfaat olsihlariga imkon beradi. Bizning missiyamiz intellektual yechimlarni taqdim qilish orqali ishonchli biznes hamkoriga aylanishdir.`;
      statementTwo.children[0].textContent = `Bizning maqsadimiz`;
      statementTwo.children[1].textContent = `Bizning maqsadimiz tadbirkorlik subyektlariga biznes tahlili (business intelligence) xizmatlarini ishonchli yetkazib berish tizimini yo’lga qo'yishdir. Biz ilg‘or texnologiyalar, sohada orttirilgan tajriba va tahliliy ko‘nikmalardan foydalangan holda korxonalarning qaror qabul qilish usullarini takomillashtirishni maqsad qilganmiz. Asosiy maqsadimiz doimiy innovatsiyalar kiritish va mijozlarimizga sifatli xizmatlarimizni taqdim etish, ishonch, halollik va natijalarga asoslangan uzoq muddatli hamkorlikni rivojlantirishdir. Biz o'z sohamizda yetuk mezonlarni belgilab, biznes tahlili (business intelligence) sohasida ilg'or natijalarga erishishga intilamiz.`;

      //  * Why
      whyTitle.textContent = `Mijozlarimiz nima uchun bizni tanlashadi?`;
      whyItem1.children[1].textContent = `Rejalashtirish`;
      whyItem1.children[2].textContent = `Biz o’z ishimizni jiddiy rejalashtiramiz va aniq muddatlarga asoslangan holda ishlaymiz.`;
      whyItem2.children[1].textContent = `Risklarni boshqarish`;
      whyItem2.children[2].textContent = `Biz mijozlar uchun boshqaruv ishlarining ko'p qismini bajarib, ularni osonlashtiramiz. Shuningdek, biz ularni loyihani qanday ishlab chiqayotganimiz haqida yaxshi xabardor qilamiz va yuzaga kelishi mumkin bo'lgan har qanday muammolarni oldini olish uchun choralar ko'ramiz.`;
      whyItem3.children[1].textContent = `Monitoring`;
      whyItem3.children[2].textContent = `Loyiha qanday ketayotganini nazorat qilish va hamma narsa o‘z yo‘lida ekanligiga ishonch hosil qilish uchun KPI (samaradorlikning muhim ko’rsatkichlari) dan foydalanamiz. Agar biron bir o'zgartirish kiritishimiz kerak bo'lsa, biz buni tezda amalga oshiramiz.`;
      whyItem4.children[1].textContent = `Sozlash`;
      whyItem4.children[2].textContent = `Biz har bir mijozning o'ziga xos ehtiyojlariga moslashtirilgan biznes tahlili yechimlarini ishlab chiqamiz. Bu sizning sohangiz, biznes maqsadlaringiz va maʼlumotlar manbalaringiz uchun eng yaxshi natijalarni olishingizni taʼminlash uchun maxsus yechimlarni yaratamiz.`;
      whyItem5.children[1].textContent = `Mutaxassislik`;
      whyItem5.children[2].textContent = `Bizning jamoamiz eng so'nggi texnologiyalar va tendentsiyalardan xabardor bo'lgan tajribali biznes tahlili mutaxassislaridan iborat. Biz Sizning kompaniyangiz uchun dolzarb bo'lgan yuqori sifatli yechimlar va tavsiyalarni taqdim etamiz.`;
      whyItem6.children[1].textContent = `Masshtablilik`;
      whyItem6.children[2].textContent = `Bizning yechimlarimiz biznesingiz bilan birga o'sishga mo'ljallangan. Maʼlumotlaringizga boʻlgan ehtiyoj vaqt oʻtishi bilan oʻzgargan boʻlsa ham, narsalarni sodda va samarali saqlash uchun bir xil yechimlardan foydalanishda davom etishingiz mumkin.`;
      whyItem7.children[1].textContent = `Ma'lumotlar xavfsizligi`;
      whyItem7.children[2].textContent = `Biz ma'lumotlar xavfsizligiga juda jiddiy yondashamiz va mijoz ma'lumotlarini xavfsiz saqlash uchun sohadagi mavjud standartdagi xavfsizlik protokollaridan foydalanamiz. Biz bilan ishlaganingizda maʼlumotlaringiz xavfsiz ekanligiga ishonishingiz mumkin.`;
      whyItem8.children[1].textContent = `Mijozlarni qo'llab-quvvatlash`;
      whyItem8.children[2].textContent = `Mijozlarimiz o‘z yechimlaridan mamnun bo‘lishlariga ishonch hosil qilish uchun biz mijozlarga mukammal yordam ko‘rsatishga intilamiz. Biz sizga biznes tahlili yechimlaridan maksimal darajada foydalanishga yordam berish uchun doimiy yordam va treninglarni taklif etamiz.`;
      whyItem9.children[1].textContent = `Shaffoflik`;
      whyItem9.children[2].textContent = `Mijozlarimiz Jira kabi vazifalarni kuzatish tizimlarimizga va loyiha bilan bog'liq barcha ishlarni hujjatlashtiradigan bilimlar bazasiga doimiy kirish huquqiga ega.`;

      //  * Tools
      toolsHeader.children[0].textContent = `MAAB Innovationda biz mijozlarimizga biznes tahlili xizmatlarini taqdim etish uchun zamonaviy texnologiyalar va vositalardan foydalanamiz. `;
      toolsHeader.children[1].textContent = `Mijozlarimiz o’zlarida mavjud ma'lumotlarni mukammal anglab olishlari uchun ilg'or tahliliy dasturlardan va vizual vositalardan foydalanamiz. Bizning jamoamiz turli dasturlardan foydalanishga qodir, shuning uchun biz har bir mijozning o'ziga xos ehtiyojlariga mos keladigan maxsus yechimlarni yaratishimiz mumkin. Bizning asosiy maqsadimiz mijozlarimizga ma'lumotlarga asoslangan qarorlar qabul qilishda yordam berish va ularning biznesini rivojlantirishdir.`;
      toolsItemTitle1.textContent = `MA'LUMOTLAR BAZASI + SAQLASH`;
      toolsItemTitle2.textContent = `INTEGRATSIYA + TAHLIL`;
      toolsItemTitle3.textContent = `MA'LUMOTLAR OMBORI + ASBOBLAR PANELI`;
      toolsItemsMainTitle.textContent = "Biz foydalanadigan texnologiyalar";

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

      // * Team
      teamTitle.textContent =
        "Bizning biznes tahlili bo'yicha ekspertlarimizni yollashingiz mumkin";
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
      hero.children[0].textContent = "About us";
      hero.children[2].textContent =
        "Welcome to MAAB INNOVATION, a Tashkent-based IT organization specializing in Business Intelligence services. Our company was founded by a team of professionals with strong expertise in both business and technology, and we are dedicated to providing tailored Business Intelligence solutions for various industry organizations and institutions. ";

      //  * About
      aboutHeader.children[0].textContent = "Our company";
      aboutHeader.children[1].textContent =
        "Welcome to MAAB INNOVATION, a Tashkent-based IT organization specializing in Business Intelligence services. Our company was founded by a team of professionals with strong expertise in both business and technology, and we are dedicated to providing tailored Business Intelligence solutions for various industry organizations and institutions. We utilize cutting-edge tools, technologies, and methodologies to ensure high-quality delivery of our services. Our core services include ETL development, data warehousing, data mining, data visualization, and analytics. We also provide consultancy services, technical expertise for tailored application development, system integration, support and customization, and the design and implementation of various software solutions. In addition to our Business Intelligence services, we also offer an online bootcamp where we teach talented students the skills and knowledge they need to excel in the field of Business Intelligence. Our bootcamp covers a wide range of topics, including data analysis, data modeling, and data visualization. Led by experienced BI professionals, out bootcamp course allow to learn business intelligence skills, teach how to work with industry tools and complex datasets, and help develop essential data skills and knowledge. Our course is designed in such a format that within 9 months learners become a world-class IT specialists. At MAAB INNOVATION, we are committed to providing our clients with top-notch Business Intelligence services and solutions that meet their specific needs. Contact us today to learn more about how we can help your organization succeed with Business Intelligence.";
      aboutSectionTitle.textContent = "Our strengths";
      aboutAccordionTitle1.textContent = `International Team`;
      aboutAccordionTitle2.textContent = `Industry Experience`;
      aboutAccordionTitle3.textContent = `Subject Matter Expertise`;
      aboutAccordionBody1.textContent = `By having a team that is spread across time zones, with a technology that allows us to work flexibly, we can help you to make your company more responsive and agile, which will not only enhance your reputation for good service but could also allow you to capitalize on opportunities much quicker.`;
      aboutAccordionBody2.textContent = `Our experienced business intelligence team come from a diverse range of industries. Our combined knowledge can guide you through your data evolution in your specific industry. The value of our solutions, across many industries, will help you to achieve your business goals faster and more cost-effectively`;
      aboutAccordionBody3.textContent = `It’s important that you seek advice from the right subject matter experts. “MAAB INNOVATION” consultants have the experience and the ability to process, analyze, and articulate solutions to your problems. They are credible, personable and genuinely passionate about your business intelligence needs.`;

      //  * Statement
      statementTitle.textContent = "Mission and vision";
      statementOne.children[0].textContent = `Our mission`;
      statementOne.children[1].textContent = `Our mission is to empower businesses with intelligent insights and data-driven decision-making tools, enabling them to achieve their strategic objectives and drive growth. We strive to deliver superior business intelligence services that enable our clients to stay ahead of their competition, mitigate risks, and capitalize on new opportunities. Our goal is to become the go-to partner for businesses seeking actionable insights and intelligent solutions.`;
      statementTwo.children[0].textContent = `Our vision`;
      statementTwo.children[1].textContent = `Our vision is to be a leading provider of business intelligence services, trusted by businesses of all sizes and industries worldwide. We aim to transform the way businesses make decisions by leveraging cutting-edge technology, industry expertise, and analytical skills. Our vision is to continuously innovate and deliver exceptional value to our clients, fostering long-term partnerships based on trust, integrity, and results. We aspire to be recognized as a trailblazer in the field of business intelligence, setting the standard for excellence in our industry.`;

      //  * Why
      whyTitle.textContent = `Why Choose Us?`;
      whyItem1.children[1].textContent = `Planning`;
      whyItem1.children[2].textContent = `We plan our work in a way to deliver the specified scope on time and are capable of working with tight schedules.`;
      whyItem2.children[1].textContent = `Risk management`;
      whyItem2.children[2].textContent = `We minimize management efforts on the customer’s side while providing a high level of transparency over the development process and proactive risk management.`;
      whyItem3.children[1].textContent = `Monitoring`;
      whyItem3.children[2].textContent = `We regularly measure project health with KPIs to ensure the project’s progress and adjust the development process if needed`;
      whyItem4.children[1].textContent = `Customization`;
      whyItem4.children[2].textContent = `We offer customizable business intelligence solutions tailored to the unique needs of each client. This ensures that clients receive solutions that are specific to their industry, business goals, and data sources.`;
      whyItem5.children[1].textContent = `Expertise`;
      whyItem5.children[2].textContent = `Our team consists of experienced business intelligence professionals who are knowledgeable in the latest technologies and trends in the industry. This expertise translates into high-quality solutions and recommendations for clients.`;
      whyItem6.children[1].textContent = `Scalability`;
      whyItem6.children[2].textContent = `Our solutions are designed to scale as a client's business grows. This ensures that clients can continue to use the same solutions even as their data needs change over time.`;
      whyItem7.children[1].textContent = `Data Security`;
      whyItem7.children[2].textContent = `We place a high priority on data security and uses industry-standard security protocols to protect client data. Clients can trust that their data is safe and secure when working with your company.`;
      whyItem8.children[1].textContent = `Customer Support`;
      whyItem8.children[2].textContent = `We are dedicated to providing excellent customer support to ensure that clients are satisfied with their solutions. Clients have access to ongoing support and training to ensure that they are getting the most out of their business intelligence solutions.`;
      whyItem9.children[1].textContent = `Transparency`;
      whyItem9.children[2].textContent = `Our customers have constant access to our task-tracking systems, such as Jira, and a knowledge base where we document all project-related work.`;

      //  * Tools
      toolsHeader.children[0].textContent = `At MAAB Innovation, we utilize the latest technologies, instruments, and tools to deliver comprehensive business intelligence services to our clients.`;
      toolsHeader.children[1].textContent = `We leverage advanced analytics platforms to extract insights from data, and we employ powerful visualization tools to communicate those insights in an intuitive way. Our team is proficient in a variety of programming languages, allowing us to develop custom solutions tailored to the unique needs of each client. Ultimately, our goal is to empower our clients with the information they need to make data-driven decisions that drive their business forward.`;
      toolsItemTitle1.textContent = `DATABASE + STORAGE`;
      toolsItemTitle2.textContent = `INTEGRATION + ANALYTICS`;
      toolsItemTitle3.textContent = `DATAWAREHOUSE + DASHBOARDS`;
      toolsItemsMainTitle.textContent = `Technologies we use`;

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

      // * Team
      teamTitle.textContent = "You can hire our business intelligence experts";
    }
  }
})();

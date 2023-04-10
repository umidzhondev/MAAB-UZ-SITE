(function(){
    const selectBox = document.getElementById("change-language");
    const nav = document.getElementById("nav");
    const hero = document.querySelector(".hero__info");
    const exploreHeader = document.querySelector("#explore-header")
    const exploreCardOne = document.querySelector("#explore-card-one")
    const exploreCardTwo = document.querySelector("#explore-card-two")
    const exploreCardThree = document.querySelector("#explore-card-three")
    const featureHeader = document.querySelector("#feature-header")
    const featureCardOne = document.querySelector("#feature-card-one")
    const featureCardTwo = document.querySelector("#feature-card-two")
    const featureCardThree = document.querySelector("#feature-card-three")
    const featureCardFour = document.querySelector("#feature-card-four")
    const valuesHeader = document.querySelector("#values-header");
    const valuesCardOne = document.querySelector("#values-card-one");
    const valuesCardTwo = document.querySelector("#values-card-two");
    const valuesCardThree = document.querySelector("#values-card-three");
    const valuesCardFour = document.querySelector("#values-card-four");
    const valuesCardFive = document.querySelector("#values-card-five");
    const valuesCardSix = document.querySelector("#values-card-six");
    const statementOne = document.querySelector("#statement-section-one");
    const statementTwo = document.querySelector("#statement-section-two");
    const expertiseHeader = document.querySelector("#expertise-header");
    const expertiseCardTitleOne = document.querySelector("#expertise-card-title-one");
    const expertiseCardTitleTwo = document.querySelector("#expertise-card-title-two");
    const expertiseCardTitleThree = document.querySelector("#expertise-card-title-three");
    const expertiseCardMainList = document.querySelector("#expertise-main-list");
    const expertiseCardListOne = document.querySelector("#expertise-card-list-one");
    const expertiseCardListTwo = document.querySelector("#expertise-card-list-two");
    const expertiseCardListThree = document.querySelector("#expertise-card-list-three");
    const expertiseCardListFour = document.querySelector("#expertise-card-list-four");
    const partnersHeader = document.querySelector("#partners-header");
    const footerTopHeader = document.querySelector("#footer-top-header");
    const footerTopButton = document.querySelector("#footer-top-button");
    const footerAddress = document.querySelector("#footer-address");
    const footerPhone = document.querySelector("#footer-phone");
    const footerCreate = document.querySelector("#footer-create");
    const footerEmail = document.querySelector("#footer-email");

    translateContent()
    selectBox.addEventListener("change", translateContent)
    
    function translateContent(){
        const languageValue = selectBox.options[selectBox.selectedIndex].value;
 
        if(languageValue == "ru"){
            nav.children[0].firstElementChild.textContent = "Главная";
            nav.children[1].firstElementChild.textContent = "О нас";
            nav.children[2].firstElementChild.textContent = "Услуги";
            nav.children[3].firstElementChild.textContent = "Контакты";

            hero.children[0].textContent = "ПОЛУЧИТЕ ПРАВИЛЬНЫЕ ДАННЫЕ";
            hero.children[1].textContent = "И Получите Данные Правильно";
            hero.children[2].children[0].textContent = "Информация";
            hero.children[2].children[1].textContent = "Подробнее";

            exploreHeader.children[0].textContent = "ИССЛЕДУЙТЕ НАШЕ ПРЕДЛОЖЕНИЕ"
            exploreHeader.children[1].textContent = "Мы предоставляем больше, чем просто услуги; мы обеспечиваем первоклассные результаты, которые стали возможными благодаря сочетанию наших навыков и продуктов"
            exploreCardOne.children[1].textContent = "ИТ Консультация"
            exploreCardOne.children[2].firstElementChild.textContent = "Наши эксперты могут помочь разработать и реализовать эффективную ИТ-стратегию, помочь в плавной цифровой трансформации и системной интеграции, а также посоветовать, как улучшить качество обслуживания клиентов в цифровом формате."
            exploreCardTwo.children[1].textContent = "Анализ данных"
            exploreCardTwo.children[2].firstElementChild.textContent = "Мы поддерживаем предприятия в принятии решений, основанных на фактах, путем преобразования их исторических данных и данных в реальном времени в практические идеи. Наши услуги предназначены для подготовки необработанных данных и среды, а также для укрепления бизнеса с помощью расширенных аналитических возможностей."
            exploreCardThree.children[1].textContent = "Разработка программного обеспечения"
            exploreCardThree.children[2].firstElementChild.textContent = "Разработка надежных и масштабируемых программных решений для любых ОС, браузеров и устройств. Мы объединяем глубокий отраслевой опыт и последние достижения в области ИТ для предоставления индивидуальных решений и продуктов, которые идеально соответствуют потребностям и поведению их пользователей."

            featureHeader.children[0].textContent ="ПОЧЕМУ ВЫБРАЛИ НАС"
            featureHeader.children[1].textContent ="Мы предоставляем больше, чем просто услуги; мы обеспечиваем первоклассные результаты, которые стали возможными благодаря сочетанию наших навыков и продуктов"
            featureCardOne.children[2].textContent = "КОЛИЧЕСТВО КЛИЕНТОВ"
            featureCardTwo.children[2].textContent = "СЧАСТЛИВЫЕ КЛИЕНТЫ"
            featureCardThree.children[2].textContent = "УДОСТОЕННЫЙ НАГРАД"
            featureCardFour.children[2].textContent = "ЗАВЕРШЕННЫЕ ДЕЛА"

            valuesHeader.children[0].textContent = "НАШИ ЦЕННОСТИ"
            valuesHeader.children[1].textContent = "Наши ценности руководят всем, что мы делаем.Мы верим в честность, клиентоориентированность, командную работу, инновации, уважение и социальную ответственность."

            valuesCardOne.children[0].textContent = "Честность"
            valuesCardOne.children[1].textContent = "Мы считаем честность своей высшей ценностью. Доверие, которое оказывают нам наши клиенты, сотрудники и деловые партнеры, священно. Все, что мы делаем, как мы думаем, как мы взаимодействуем, всегда будет руководствоваться принципом всегда делать правильные вещи, особенно когда это трудно сделать. Без честности нет настоящего успеха"
            valuesCardTwo.children[0].textContent = "Опыт"
            valuesCardTwo.children[1].textContent ="Мы считаем, что опыт имеет решающее значение при обслуживании наших клиентов. Мы нанимаем людей с исключительными возможностями и потенциалом. Мы поддерживаем дух постоянного роста и стремления к достижению постоянно растущего уровня знаний. Наша цель - помочь каждому члену команды раскрыть свой наивысший потенциал."
            valuesCardThree.children[0].textContent = "Совершенство"
            valuesCardThree.children[1].textContent ="Мы верим в то, что стараемся делать все возможное. Когда мы обеспечиваем высочайший уровень производительности, результаты демонстрируют отличную производительность, и наши клиенты получают от этого выгоду. Наш опыт подтверждается тем, что мы обеспечиваем стабильные превосходные результаты, которые имеют значение для организаций, с которыми мы работаем. Работа выполняется по-настоящему только тогда, когда наши клиенты довольны тем, что мы делаем"
            valuesCardFour.children[0].textContent ="Ловкость"
            valuesCardFour.children[1].textContent ="Мы будем использовать нашу способность действовать быстро и изящно как источник конкурентного преимущества для нашей организации и для наших клиентов. Наша маневренность будет ключом к обеспечению устойчивого роста нашей компании и будет основной причиной успеха наших клиентов, что сделает нас их предпочтительным партнером."
            valuesCardFive.children[0].textContent ="Расширение"
            valuesCardFive.children[1].textContent ="Мы считаем, что люди - наша главная ценность. Поскольку мы нанимаем только самых талантливых людей, мы поощряем их каждый день делать все возможное. Каждый момент в нашей организации - это возможность продемонстрировать свой талант и оказать влияние. Каждый член организации знает, что он уполномочен и доверяет ему действовать в интересах нашей организации и тех, кому мы служим."
            valuesCardSix.children[0].textContent = "Инновация"
            valuesCardSix.children[1].textContent = "Мы уверены, что лучшие дни в мире еще впереди. Мы будем развивать свое любопытство, использовать силу технологий и использовать наши ресурсы для создания инновационных идей и открытия новых способов мышления. Мы делаем это, как наша часть в том, чтобы сделать этот мир лучше."
            
            statementOne.children[0].textContent ="Заявление о миссии"
            statementOne.children[1].textContent ="Наша миссия состоит в том, чтобы предоставить предприятиям интеллектуальную аналитику и инструменты принятия решений на основе данных, позволяющие им достигать своих стратегических целей и стимулировать рост. Мы стремимся предоставлять превосходные услуги бизнес-аналитики, которые позволяют нашим клиентам оставаться впереди конкурентов, снижать риски и извлекать выгоду из новых возможностей. Наша цель - стать идеальным партнером для компаний, ищущих действенную информацию и интеллектуальные решения."
            statementTwo.children[0].textContent ="Заявление о видении"
            statementTwo.children[1].textContent ="Наше видение заключается в том, чтобы быть ведущим поставщиком услуг бизнес-аналитики, которому доверяют предприятия всех размеров и отраслей по всему миру. Мы стремимся изменить то, как бизнес принимает решения, используя передовые технологии, отраслевой опыт и аналитические навыки. Наше видение заключается в постоянном внедрении инноваций и предоставлении исключительной ценности нашим клиентам, укрепляя долгосрочные партнерские отношения, основанные на доверии, добросовестности и результатах. Мы стремимся быть признанными первопроходцами в области бизнес-аналитики, устанавливая стандарты совершенства в нашей отрасли."

            expertiseHeader.children[0].textContent = "НАШ ОПЫТ"
            expertiseHeader.children[1].textContent = "Многолетний и профессиональный опыт"

            expertiseCardTitleOne.textContent = "Хранилище данных"
            expertiseCardTitleTwo.textContent = "Прием данных"
            expertiseCardTitleThree.textContent = "Анализ данных"

            expertiseCardMainList.children[0].textContent = "Преобразование данных, Сопоставление данных, Очистка данных, Обнаружение данных, Финансовое балансирование, Анализ и проверка данных, Миграция данных, Очистка корпоративных данных, устранение неполадок."
            expertiseCardMainList.children[1].textContent = "Отчеты самообслуживания, информационные панели и аналитика."
            expertiseCardMainList.children[2].textContent = "Централизованное хранилище данных для финансовой информации и информации о транзакциях."
            expertiseCardMainList.children[3].textContent = "Замените устаревшую или несовершенную технологию."
            expertiseCardMainList.children[4].textContent = "Создавайте оптимизированные наборы данных для конкретных и целевых потребностей."
            expertiseCardMainList.children[5].textContent = "Включите аналитику практически в режиме реального времени с помощью корпоративных служб обработки данных."
            expertiseCardMainList.children[6].textContent = "Разработка систем бизнес-аналитики и доставки информации."

            expertiseCardListOne.children[0].textContent = "Облачные хранилища данных"
            expertiseCardListOne.children[1].textContent = "Microsoft Azure (база данных SQL Azure, Azure AD, подписки, группы ресурсов, Azure Озеро данных, хранилище больших двоичных объектов Azure, Azure Synapse, службы анализа Azure)"
            expertiseCardListOne.children[2].textContent = "Снежинка"
            expertiseCardListOne.children[3].textContent = "Веб-сервисы Amazon (AWS Redshift, AWS S3 bucket, AWS RDS)"

            expertiseCardListTwo.children[0].textContent = "Локальное хранилище данных : Microsoft SQL Server, Oracle"
            expertiseCardListTwo.children[1].textContent = "Локальные решения для миграции в облако."
            expertiseCardListTwo.children[2].textContent = "Решения для архитектуры локальных и облачных хранилищ данных."
            expertiseCardListTwo.children[3].textContent = "Хранилище данных, поддерживающее отчеты самообслуживания, информационные панели и аналитику."

            expertiseCardListThree.children[0].textContent = "Мы внедряем ETL и ETL-решения."
            expertiseCardListThree.children[1].textContent = "Инструменты разработки данных: MS SQL Server, службы интеграции SQL Server, Azure Data Factory, Azure Synapse Analytics, Azure Data bricks, Python (Pandas)"
            expertiseCardListThree.children[2].textContent = "Пакетная обработка: Apache Spark (PySpark)"
            expertiseCardListThree.children[3].textContent = "Потоковая обработка: Apache Kafka"    
            expertiseCardListThree.children[4].textContent = "Инструменты мониторинга: Агент SQL Server, триггеры фабрики данных Azure, Apache Airflow."    

            expertiseCardListFour.children[0].textContent = "Мы предоставляем углубленную аналитику данных, чтобы получить полезную бизнес-информацию."
            expertiseCardListFour.children[1].textContent = "Инструменты анализа: SQL Server, MySQL, Postgres SQL, Snowflake Cloud SQL, Spark SQL."
            expertiseCardListFour.children[2].textContent = "Инструменты создания отчетов: MS Power BI, службы отчетов SQL Server, Tableau, QlikView, Qlik Sense."

            partnersHeader.children[0].textContent = "Наши партнеры"
            partnersHeader.children[1].textContent = "Наши партнеры: Сотрудничество, которому можно доверять"

            footerTopHeader.children[0].textContent = "Консалтинговое Агентство Для Вашего Бизнеса"
            footerTopHeader.children[1].textContent = "быстрая лиса перепрыгивает через ленивую собаку"
            footerTopButton.textContent = "Связаться с нами"
            footerCreate.textContent = "© 2023. Все сервисы защищены"
            footerAddress.children[0].textContent = "Наш офис"
            footerAddress.children[1].textContent = "Узбекистан, г.Ташкент, Мирабадский район Нукус, 83А"
            footerPhone.children[0].textContent = "Номер телефона"
            footerPhone.children[1].textContent = "+998 99 8957706"
            footerEmail.children[0].textContent = "Электронная почта"
            footerEmail.children[1].textContent = "info@maab.uz"
        }
        if(languageValue == "uz"){
            nav.children[0].firstElementChild.textContent = "Asosiy";
            nav.children[1].firstElementChild.textContent = "Biz haqimizda";
            nav.children[2].firstElementChild.textContent = "Xizmatlar";
            nav.children[3].firstElementChild.textContent = "Kontakt";

            hero.children[0].textContent = "TO'G'RI MA'LUMOTLARNI OLING";
            hero.children[1].textContent = "Va Ma'lumotlarni To'g'ri Oling";
            hero.children[2].children[0].textContent = "Ma'lumot";
            hero.children[2].children[1].textContent = "Batafsil";

            exploreHeader.children[0].textContent = "BIZNING TAKLIFIMIZNI O'RGANING"
            exploreHeader.children[1].textContent = "Biz nafaqat xizmatlardan ko'proq narsani taqdim etamiz; biz mahoratimiz va mahsulotlarimiz kombinatsiyasi orqali mumkin bo'lgan yuqori darajadagi natijalarni taqdim etamiz"
            exploreCardOne.children[1].textContent = "IT bo'yicha maslahat"
            exploreCardOne.children[2].firstElementChild.textContent = "Bizning mutaxassislarimiz samarali it strategiyasini ishlab chiqish va amalga oshirishda yordam berishi, raqamli transformatsiya va tizim integratsiyasiga yordam berishi va raqamli mijozlar tajribasini qanday yaxshilash bo'yicha maslahat berishi mumkin."
            exploreCardTwo.children[1].textContent = "Ma'lumotlarni tahlil qilish"
            exploreCardTwo.children[2].firstElementChild.textContent = "Biz korxonalarni tarixiy va Real vaqtda ma'lumotlarni amaliy g'oyalarga aylantirish orqali dalillarga asoslangan qarorlar qabul qilishda qo'llab-quvvatlaymiz. Bizning xizmatlarimiz xom ma'lumotlar va atrof-muhitni tayyorlash va ilg'or tahliliy imkoniyatlar orqali biznesni mustahkamlash uchun mo'ljallangan."
            exploreCardThree.children[1].textContent = "Dasturiy ta'minotni ishlab chiqish"
            exploreCardThree.children[2].firstElementChild.textContent = "Har qanday OS, brauzer va qurilmalar uchun ishonchli va kengaytiriladigan dasturiy echimlarni ishlab chiqish. Biz o'z foydalanuvchilarining ehtiyojlari va xatti-harakatlariga to'liq mos keladigan moslashtirilgan echimlar va mahsulotlarni taqdim etish uchun chuqur sanoat tajribasi va otdagi so'nggi yutuqlarni birlashtiramiz."

            featureHeader.children[0].textContent ="NEGA BIZNI TANLADIK"
            featureHeader.children[1].textContent ="Biz nafaqat xizmatlardan ko'proq narsani taqdim etamiz; biz o'z mahoratimiz va mahsulotlarimiz kombinatsiyasi orqali eng yaxshi natijani ta'minlaymiz"
            featureCardOne.children[2].textContent = "MIJOZLAR SONI"
            featureCardTwo.children[2].textContent = "BAXTLI MIJOZLAR"
            featureCardThree.children[2].textContent = "MUKOFOTGA SAZOVOR BO'LGAN"
            featureCardFour.children[2].textContent = "TUGALLANGAN ISHLAR"
            
            valuesHeader.children[0].textContent = "BIZNING QADRIYATLARIMIZ"
            valuesHeader.children[1].textContent = "Bizning qadriyatlarimiz biz qilayotgan barcha ishlarni boshqaradi.Biz halollik, mijozlarga e'tibor, jamoaviy ish, innovatsiya, hurmat va ijtimoiy mas'uliyatga ishonamiz."

            valuesCardOne.children[0].textContent = "Halollik"
            valuesCardOne.children[1].textContent = "Biz halollikni eng yuqori qadriyat deb bilamiz. Mijozlarimiz, xodimlarimiz va biznes hamkorlarimiz bizga beradigan ishonch muqaddasdir. Biz qilayotgan har bir narsa, qanday fikrlashimiz, qanday munosabatda bo'lishimiz har doim to'g'ri ish qilish tamoyiliga asoslanadi, ayniqsa buni qilish qiyin bo'lsa. Halolliksiz haqiqiy muvaffaqiyat yo'q"
            valuesCardTwo.children[0].textContent ="Tajriba"
            valuesCardTwo.children[1].textContent ="Bizning fikrimizcha, tajriba mijozlarimizga xizmat ko'rsatishda juda muhimdir. Biz ajoyib qobiliyat va salohiyatga ega odamlarni yollaymiz. Biz doimiy o'sish ruhini qo'llab-quvvatlaymiz va tobora o'sib borayotgan bilim darajasiga erishishga intilamiz. Bizning maqsadimiz har bir jamoa a'zosiga eng yuqori salohiyatga erishishga yordam berishdir."
            valuesCardThree.children[0].textContent ="Mukammallik"
            valuesCardThree.children[1].textContent ="Biz qo'limizdan kelganini qilishga harakat qilayotganimizga ishonamiz. Biz eng yuqori darajadagi ishlashni ta'minlaganimizda, natijalar ajoyib ishlashni namoyish etadi va mijozlarimiz bundan foyda ko'rishadi. Bizning tajribamiz biz ishlayotgan tashkilotlar uchun muhim bo'lgan barqaror, yuqori natijalarni taqdim etishimiz bilan tasdiqlanadi. Ish faqat mijozlarimiz qilayotgan ishimizdan mamnun bo'lganda amalga oshiriladi"
            valuesCardFour.children[0].textContent = "Chaqqonlik"
            valuesCardFour.children[1].textContent ="Biz tashkilotimiz va mijozlarimiz uchun raqobatbardosh ustunlik manbai sifatida tez va nafis harakat qilish qobiliyatimizdan foydalanamiz. Bizning chaqqonligimiz kompaniyamizning barqaror o'sishini ta'minlashning kaliti bo'ladi va mijozlarimiz muvaffaqiyatining asosiy sababi bo'lib, bizni ularning afzal ko'rgan sherigiga aylantiradi."
            valuesCardFive.children[0].textContent = "Kengaytirish"
            valuesCardFive.children[1].textContent ="Biz odamlar bizning asosiy qadriyatimiz ekanligiga ishonamiz. Biz faqat eng iste'dodli odamlarni yollaganimiz sababli, biz ularni har kuni qo'llaridan kelganini qilishga undaymiz. Tashkilotimizdagi har bir lahza sizning iste'dodingizni namoyish etish va ta'sir o'tkazish imkoniyatidir. Tashkilotning har bir a'zosi bizning tashkilotimiz va biz xizmat qilayotganlar manfaati uchun harakat qilish huquqiga ega ekanligini va unga ishonishini biladi."
            valuesCardSix.children[0].textContent ="Innovatsiya"
            valuesCardSix.children[1].textContent = "Ishonchimiz komilki, dunyodagi eng yaxshi kunlar hali oldinda. Biz qiziqishimizni rivojlantiramiz, texnologiya kuchidan foydalanamiz va innovatsion g'oyalarni yaratish va fikrlashning yangi usullarini kashf qilish uchun resurslarimizdan foydalanamiz. Biz buni bu dunyoni yaxshiroq joyga aylantirishning bir qismi sifatida qilamiz."

            statementOne.children[0].textContent ="Missiya bayonoti"
            statementOne.children[1].textContent ="Bizning vazifamiz korxonalarga strategik maqsadlariga erishish va o'sishni rag'batlantirish uchun aqlli tahlillar va ma'lumotlarga asoslangan qarorlar qabul qilish vositalarini taqdim etishdir. Biz mijozlarimizga raqobatchilardan oldinda qolish, xavflarni kamaytirish va yangi imkoniyatlardan foydalanish imkonini beruvchi yuqori darajadagi biznes razvedka xizmatlarini taqdim etishga intilamiz. Bizning maqsadimiz amaliy ma'lumot va aqlli echimlarni izlayotgan kompaniyalar uchun ideal sherik bo'lishdir."
            statementTwo.children[0].textContent ="Vizyon bayonoti"
            statementTwo.children[1].textContent ="Bizning maqsadimiz butun dunyo bo'ylab barcha o'lchamdagi va sohalardagi korxonalar tomonidan ishonchli bo'lgan etakchi biznes razvedka provayderi bo'lishdir. Biz ilg'or texnologiyalar, sanoat tajribasi va tahliliy ko'nikmalardan foydalangan holda biznesning qaror qabul qilish usulini o'zgartirishga intilamiz. Bizning maqsadimiz doimiy ravishda innovatsiyalarni amalga oshirish va mijozlarimizga alohida qiymat berish, ishonch, vijdonlilik va natijalarga asoslangan uzoq muddatli hamkorlikni mustahkamlashdir. Biz o'z sohamizda mukammallik standartlarini o'rnatish orqali biznes razvedkasining kashshoflari sifatida tan olinishga intilamiz."

            expertiseHeader.children[0].textContent = "BIZNING TAJRIBAMIZ"
            expertiseHeader.children[1].textContent = "Ko'p yillik va professional tajriba"

            expertiseCardTitleOne.textContent = "Ma'lumotlar ombori"
            expertiseCardTitleTwo.textContent = "Ma'lumotlarni qabul qilish"
            expertiseCardTitleThree.textContent = "Ma'lumotlarni tahlil qilish"

            expertiseCardMainList.children[0].textContent = "Ma'lumotlarni konvertatsiya qilish, ma'lumotlarni xaritalash, ma'lumotlarni tozalash, ma'lumotlarni aniqlash, moliyaviy muvozanat, ma'lumotlarni tahlil qilish va tekshirish, ma'lumotlarni ko'chirish, korporativ ma'lumotlarni tozalash, muammolarni bartaraf etish."
            expertiseCardMainList.children[1].textContent = "O'z-o'ziga xizmat ko'rsatish hisobotlari, boshqaruv panellari va tahlillar."
            expertiseCardMainList.children[2].textContent = "Moliyaviy va tranzaksiya ma'lumotlari uchun markazlashtirilgan ma'lumotlar ombori."
            expertiseCardMainList.children[3].textContent = "Eskirgan yoki nomukammal texnologiyani almashtiring."
            expertiseCardMainList.children[4].textContent = "Muayyan va maqsadli ehtiyojlar uchun optimallashtirilgan ma'lumotlar to'plamlarini yarating."
            expertiseCardMainList.children[5].textContent = "Korporativ ma'lumotlarni qayta ishlash xizmatlaridan foydalangan holda Real vaqt rejimida tahlillarni yoqing."
            expertiseCardMainList.children[6].textContent = "Biznes razvedkasi va axborot etkazib berish tizimlarini ishlab chiqish."

            expertiseCardListOne.children[0].textContent = "Bulutli ma'lumotlarni saqlash"
            expertiseCardListOne.children[1].textContent = "Microsoft Azure (Azure SQL ma'lumotlar bazasi, Azure AD, obunalar, resurslar guruhlari, Azure ma'lumotlar ko'li, Azure Big binary Object Storage, Azure Synapse, Azure Analysis services)"
            expertiseCardListOne.children[2].textContent = "Qor parchasi"
            expertiseCardListOne.children[3].textContent = "Amazon veb-xizmatlari (AWS Redshift, AWS S3 bucket, AWS RDS)"

            expertiseCardListTwo.children[0].textContent = "Mahalliy ma'lumotlarni saqlash: Microsoft SQL Server, Oracle"
            expertiseCardListTwo.children[1].textContent = "Bulutga ko'chish uchun mahalliy echimlar."
            expertiseCardListTwo.children[2].textContent = "Mahalliy va bulutli ma'lumotlarni saqlash arxitekturasi echimlari."
            expertiseCardListTwo.children[3].textContent = "O'z-o'ziga xizmat ko'rsatish hisobotlari, boshqaruv panellari va tahlillarni qo'llab-quvvatlaydigan ma'lumotlar ombori."

            expertiseCardListThree.children[0].textContent = "Biz ETL va ETL echimlarini amalga oshirmoqdamiz."
            expertiseCardListThree.children[1].textContent = "Ma'lumotlarni ishlab chiqish vositalari: MS SQL Server, SQL Server integratsiya xizmatlari, Azure Data Factory, Azure Synapse Analytics, Azure Data bricks, Python (Pandas)"
            expertiseCardListThree.children[2].textContent = "Ommaviy ishlov berish: Apache Spark (Payspark)"
            expertiseCardListThree.children[3].textContent = "Oqim bilan ishlash: Apache Kafka"    
            expertiseCardListThree.children[4].textContent = "Monitoring vositalari: SQL Server agenti, Azure Data Factory triggerlari, Apache Air flow."    

            expertiseCardListFour.children[0].textContent = "Biz foydali biznes ma'lumotlarini olish uchun chuqur ma'lumotlar tahlilini taqdim etamiz."
            expertiseCardListFour.children[1].textContent = "Tahlil vositalari: SQL Server, MySQL, Postgresql, Snowflake Cloud SQL, Spark SQL."
            expertiseCardListFour.children[2].textContent = "Hisobot vositalari: MS Power BI, SQL Server hisobot xizmatlari, Tableau, QlikView, Qlik Sense."

            partnersHeader.children[0].textContent = "Bizning sheriklarimiz"
            partnersHeader.children[1].textContent = "Bizning sheriklarimiz: siz ishonishingiz mumkin bo'lgan hamkorlik"

            footerTopHeader.children[0].textContent = "Sizning Biznesingiz Uchun Konsalting Agentligi"
            footerTopHeader.children[1].textContent = "tez tulki dangasa it ustidan sakrab o'tadi"
            footerTopButton.textContent = "Biz bilan bog'laning"
            footerCreate.textContent = "© 2023. Barcha xizmatlar himoyalangan"
            footerAddress.children[0].textContent = "Bizning ofisimiz"
            footerAddress.children[1].textContent = "O'zbekiston, Toshkent shahri, Nukus Mirobod tumani, 83a"
            footerPhone.children[0].textContent = "Telefon raqami"
            footerPhone.children[1].textContent = "+998 99 8957706"
            footerEmail.children[0].textContent = "Elektron pochta"
            footerEmail.children[1].textContent = "info@maab.uz"
        }
        if(languageValue == "en"){
            nav.children[0].firstElementChild.textContent = "Home";
            nav.children[1].firstElementChild.textContent = "About";
            nav.children[2].firstElementChild.textContent = "Services";
            nav.children[3].firstElementChild.textContent = "Contact us";

            hero.children[0].textContent = "GET THE CORRECT DATA";
            hero.children[1].textContent = "And Get The Data Right";
            hero.children[2].children[0].textContent = "Information";
            hero.children[2].children[1].textContent = "More details";

            exploreHeader.children[0].textContent = "EXPLORE OUR OFFER"
            exploreHeader.children[1].textContent = "We provide more than just services; we deliver first-class results made possible by the combination of our skills and products";
            exploreCardOne.children[1].textContent = "IT Consultation"
            exploreCardOne.children[2].firstElementChild.textContent = "Our experts can help develop and implement an effective IT strategy, assist in smooth digital transformation and system integration, and advise on how to improve the quality of customer service in digital format."
            exploreCardTwo.children[1].textContent = "Data analysis"
            exploreCardTwo.children[2].firstElementChild.textContent = "We support businesses in making fact-based decisions by converting their historical and real-time data into practical ideas. Our services are designed to prepare raw data and the environment, as well as to strengthen the business with advanced analytical capabilities."
            exploreCardThree.children[1].textContent = "Разработка программного обеспечения"
            exploreCardThree.children[2].firstElementChild.textContent = "Development of reliable and scalable software solutions for any OS, browsers and devices. We combine deep industry experience and the latest achievements in the field of OT to provide customized solutions and products that perfectly match the needs and behavior of their users."

            featureHeader.children[0].textContent ="WHY CHOOSE US"
            featureHeader.children[1].textContent ="We provide more than just services; we deliver first-class results made possible by the combination of our skills and products"
            featureCardOne.children[2].textContent = "NUMBER OF CLIENTS"
            featureCardTwo.children[2].textContent = "HAPPY CUSTOMERS"
            featureCardThree.children[2].textContent = "AWARD -WINNING"
            featureCardFour.children[2].textContent = "COMPLETED CASES"

            valuesHeader.children[0].textContent = "OUR VALUES"
            valuesHeader.children[1].textContent = "Our values guide everything we do.We believe in honesty, customer focus, teamwork, innovation, respect and social responsibility."

            valuesCardOne.children[0].textContent = "Honesty"
            valuesCardOne.children[1].textContent = "We consider honesty to be our highest value. The trust that our customers, employees and business partners place in us is sacred. Everything we do, how we think, how we interact, will always be guided by the principle of always doing the right thing, especially when it is difficult to do. There is no real success without honesty"
            valuesCardTwo.children[0].textContent = "Experience"
            valuesCardTwo.children[1].textContent ="We believe that experience is crucial when serving our customers. We hire people with exceptional capabilities and potential. We support the spirit of constant growth and striving to achieve an ever-increasing level of knowledge. Our goal is to help each team member reach their highest potential."
            valuesCardThree.children[0].textContent ="Perfection"
            valuesCardThree.children[1].textContent ="We believe that we are trying to do our best. When we deliver the highest level of performance, the results demonstrate excellent performance, and our customers benefit from it. Our experience is confirmed by the fact that we provide stable excellent results that matter to the organizations we work with. The work is really done only when our customers are satisfied with what we do"
            valuesCardFour.children[0].textContent ="Dexterity"
            valuesCardFour.children[1].textContent ="We will use our ability to act quickly and gracefully as a source of competitive advantage for our organization and for our customers. Our agility will be the key to ensuring the sustainable growth of our company and will be the main reason for the success of our customers, which will make us their preferred partner."
            valuesCardFive.children[0].textContent ="Expansion"
            valuesCardFive.children[1].textContent ="We believe that people are our main value. Since we only hire the most talented people, we encourage them to do their best every day. Every moment in our organization is an opportunity to showcase your talent and make an impact. Every member of the organization knows that he is authorized and trusts him to act in the interests of our organization and those whom we serve."
            valuesCardSix.children[0].textContent ="Innovation"
            valuesCardSix.children[1].textContent ="We are sure that the best days in the world are still ahead. We will develop our curiosity, harness the power of technology and use our resources to create innovative ideas and discover new ways of thinking. We do this as our part in making this world a better place."

            statementOne.children[0].textContent ="Mission statement"
            statementOne.children[1].textContent ="Our mission is to provide businesses with intelligent analytics and data-driven decision-making tools to enable them to achieve their strategic goals and drive growth. We strive to provide excellent business intelligence services that enable our clients to stay ahead of the competition, reduce risks and benefit from new opportunities. Our goal is to become an ideal partner for companies looking for effective information and intelligent solutions."
            statementTwo.children[0].textContent ="Vision Statement"
            statementTwo.children[1].textContent ="Our vision is to be a leading business intelligence service provider trusted by businesses of all sizes and industries around the world. We strive to change the way businesses make decisions using advanced technology, industry experience and analytical skills. Our vision is to continuously innovate and deliver exceptional value to our customers by strengthening long-term partnerships based on trust, integrity and results. We strive to be recognized as pioneers in the field of business intelligence, setting standards of excellence in our industry."

            expertiseHeader.children[0].textContent = "OUR EXPERIENCE"
            expertiseHeader.children[1].textContent = "Long-term and professional experience"

            expertiseCardTitleOne.textContent = "Data Warehousing"
            expertiseCardTitleTwo.textContent = "Data Ingestion"
            expertiseCardTitleThree.textContent = "Data Analytics"

            expertiseCardMainList.children[0].textContent = "Data Conversion, Data Mapping, Data Cleaning, Data Discovery, Financial Balancing, Data Analysis and Validation, Data Migration, Enterprise Data Cleaning, Troubleshooting."
            expertiseCardMainList.children[1].textContent = "Self-Service Reporting, Dashboards and Analytics."
            expertiseCardMainList.children[2].textContent = "Centralized Data Repository for Financial and Transactional Information."
            expertiseCardMainList.children[3].textContent = "Replace Legacy or Deficient Technology."
            expertiseCardMainList.children[4].textContent = "Build Optimized Data Sets for Specific and Targeted Needs"
            expertiseCardMainList.children[5].textContent = "Enable Near Real-time Analytics with Enterprise Data Services."
            expertiseCardMainList.children[6].textContent = "Design of Business Intelligence and Information Delivery Systems"

            expertiseCardListOne.children[0].textContent = "Cloud Data Warehouses"
            expertiseCardListOne.children[1].textContent = "Microsoft Azure (Azure SQL Database, Azure AD, Subscriptions, Resource Groups, Azure Data Lake, Azure Blob Storage, Azure Synapse, Azure Analysis Services)"
            expertiseCardListOne.children[2].textContent = "Snowflake"
            expertiseCardListOne.children[3].textContent = "Amazon Web Services (AWS Redshift, AWS S3 bucket, AWS RDS)"

            expertiseCardListTwo.children[0].textContent = "On-Premise DataWarehouse : Microsoft SQL Server, Oracle"
            expertiseCardListTwo.children[1].textContent = "On-premise to Cloud Migration Solutions."
            expertiseCardListTwo.children[2].textContent = "On-premise and Cloud DataWarehouse Architecture Solutions."
            expertiseCardListTwo.children[3].textContent = "DataWarehouse that supports self-service reporting, Dashboards and analytics."
        

            expertiseCardListThree.children[0].textContent = "We implement ETL and ELT solutions"
            expertiseCardListThree.children[1].textContent = "Data Engineering Tools: MS SQL Server, SQL Server Integration Services, Azure Data Factory, Azure Synapse Analytics, Azure Data bricks, Python (Pandas)"
            expertiseCardListThree.children[2].textContent = "Batch Processing: Apache Spark (PySpark) "
            expertiseCardListThree.children[3].textContent = "Streaming Processing: Apache Kafka"    
            expertiseCardListThree.children[4].textContent = "Monitoring Tools: SQL Server Agent, Azure Data Factory Triggers, Apache Airflow."    

            expertiseCardListFour.children[0].textContent = "We provide in-depth analytics for data to provide useful business insights."
            expertiseCardListFour.children[1].textContent = "Analysis Tools : SQL Server, MySQL, Postgres SQL, Snowflake Cloud SQL, Spark SQL."
            expertiseCardListFour.children[2].textContent = "Reporting Tools: MS Power BI, SQL Server Reporting Services, Tableau, QlikView, Qlik Sense."

            partnersHeader.children[0].textContent = "Our partners"
            partnersHeader.children[1].textContent = "Our partners: Cooperation that can be trusted"

            footerTopHeader.children[0].textContent = "Consulting Agency For Your Business"
            footerTopHeader.children[1].textContent = "a fast fox jumps over a lazy dog"
            footerTopButton.textContent = "Contact us"
            footerCreate.textContent = "© 2023. All services are protected"
            footerAddress.children[0].textContent = "Our office"
            footerAddress.children[1].textContent = "Uzbekistan, Tashkent, Mirabad district Nukus, 83A"
            footerPhone.children[0].textContent = "Phone number"
            footerPhone.children[1].textContent = "+998 99 8957706"
            footerEmail.children[0].textContent = "Email"
            footerEmail.children[1].textContent = "info@maab.uz"
        }
    }
})()
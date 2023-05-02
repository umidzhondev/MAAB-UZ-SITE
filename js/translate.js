(function () {
  const selectBox = document.getElementById("change-language");
  const nav = document.getElementById("nav");
  const hero = document.querySelector(".hero__info");
  const servicesHeader = document.querySelector(".services--header");

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
      servicesHeader.children[0].textContent ="Мы предоставляем услуги бизнес-аналитики";
      servicesHeader.children[1].textContent ="В MAAB Innovation мы предлагаем широкий спектр услуг бизнес-аналитики, включая разработку BI, консультирование по BI, индивидуальную разработку, поддержку и обслуживание BI, а также создание решений самообслуживания, среди прочего. Наши эксперты помогли многочисленным клиентам усовершенствовать свои операционные процессы и получить свежие бизнес-идеи. Чтобы узнать больше о наших предложениях, пожалуйста, обратитесь к информации ниже.";
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
      nav.children[5].firstElementChild.textContent = "Bog'lanish";

      // * Hero
      hero.children[0].textContent = "Biznes tahlili";
      hero.children[2].textContent =
        "Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin. MAAB Innovation kompaniyasi turli sohalar uchun biznes tahlili (business intelligence) yechimlarini taqdim etishga ixtisoslashgan tajribali mutaxassislar jamoasiga ega. Mutaxassislarimiz ish jarayonlarini yaxshilash va savdo hajmini oshirish uchun mijozlar bilan hamkorlik qiladi.";

      // * Services
      servicesHeader.children[0].textContent ="Biz biznes tahlil xizmatlarini taqdim etamiz";
      servicesHeader.children[1].textContent ="MAAB Innovationda biz biznes tahlili (business intelligence) xizmatlarining keng spektrini taklif etamiz, jumladan, business intelligence (BI) tizimini ishlab chiqish, BI konsaltingi, shaxsiy BIni ishlab chiqish, qo'llab-quvvatlash va texnik xizmat ko'rsatish, o'z-o'ziga xizmat ko'rsatish yechimlarini yaratish va boshqalar. Mutaxassislarimiz ko'plab mijozlarga operatsion jarayonlarini yaxshilashda va yangi biznes g'oyalarini yaratishda yordam berishdi. Bizning takliflarimiz haqida ko'proq bilish uchun quyidagi ma'lumotlarni ko'ring.";
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
    }
  }
})();

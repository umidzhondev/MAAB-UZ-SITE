(function () {
  const selectBox = document.getElementById("change-language");
  const nav = document.getElementById("nav");
  const footerAddress = document.querySelector("#footer-address");
  const footerPhone = document.querySelector("#footer-phone");
  const footerEmail = document.querySelector("#footer-email");
  const footerCreate = document.querySelector("#footer-create");
  const footerTopText = document.querySelector("#footer-top-text");
  const footerTopButton = document.querySelector("#footer-top-button");

  const contactHeader = document.querySelector("#contact--header");
  const contactAddress = document.querySelector("#contact--address");
  const contactSupport1 = document.querySelector("#contact-support-1");
  const contactSupport2 = document.querySelector("#contact-support-2");
  const contactSupport3 = document.querySelector("#contact-support-3");
  const contactEmail = document.querySelector("#contact--email");
  const contactLocation = document.querySelector("#contact--location");
  const contactPhone = document.querySelector("#contact--phone");

  const mapHeader = document.querySelector("#map--header");
  selectBox.value = localStorage.getItem("language");

  selectBox.addEventListener("change", translateContent);

  selectBox.addEventListener("change", (e) => {
    localStorage.setItem("language", e.target.value);
  });

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

      // * Footer
      footerAddress.children[0].textContent = "Наш офис";
      footerAddress.children[1].textContent =
        'г.Ташкент, Мирабадский район, Ойбека, 18/1 Бизнес Центр "ATRIUM" 5м этажЕ-1.';
      footerPhone.children[0].textContent = "Номер телефона";
      footerPhone.children[1].textContent = "+998 97 783 90 45";
      footerEmail.children[0].textContent = "Электронная почта";
      footerEmail.children[1].textContent = "info@maab.uz";
      footerCreate.textContent = "Все права защищены.";
      footerTopText.textContent =
        "Давайте вместе разрабатывать решения бизнес-аналитики для Вашей компании!";
      footerTopButton.textContent = "Связаться с нами";

      // * Contact
      contactHeader.children[0].textContent =
        "Мы всегда готовы связаться с вами";
      contactHeader.children[1].textContent = "Оставаться на связи";

      contactAddress.textContent = `г.Ташкент, Мирабадский район, Ойбека, 18/1 Бизнес Центр "ATRIUM" 5м этажЕ-1.`;
      contactEmail.textContent = `Электронная почта`;
      contactLocation.textContent = "Локация";
      contactPhone.textContent = "Телефон";
      contactSupport1.textContent = "Получить поддержку";
      contactSupport2.textContent = "Получить поддержку";
      contactSupport3.textContent = "Получить поддержку";

      // * Map
      mapHeader.children[0].textContent = "Наш адрес";
      mapHeader.children[1].textContent =
        "Вы можете найти наш офис по этому адресу";
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

      //   * Footer
      footerAddress.children[0].textContent = "Bizning ofisimiz";
      footerAddress.children[1].textContent =
        "Toshkent shahri, Mirobod tumani, Oybek, 18/1 ATRIUM biznes markazi 5m qavat-1.";
      footerPhone.children[0].textContent = "Telefon raqami";
      footerPhone.children[1].textContent = "+998 97 783 90 45";
      footerEmail.children[0].textContent = "Elektron pochta";
      footerEmail.children[1].textContent = "info@maab.uz";
      footerCreate.textContent = "Barcha huquqlar himoyalangan.";
      footerTopText.textContent =
        "Keling, Sizning kompaniyangiz uchun biznes tahlili yechimlarini birgalikda ishlab chiqamiz!";
      footerTopButton.textContent = "Bog'lanish";

      // * Contact
      contactHeader.children[0].textContent =
        "Biz har doim siz bilan bog'lanishga tayyormiz";
      contactHeader.children[1].textContent = "Aloqada Qoling";

      contactAddress.textContent = `Toshkent shahri, Mirobod tumani, Oybek, 18/1 ATRIUM biznes markazi 5m qavat-1.`;
      contactEmail.textContent = `Elektron pochta`;
      contactLocation.textContent = "Lokatsiya";
      contactPhone.textContent = "Telefon";
      contactSupport1.textContent = "Yordam olish";
      contactSupport2.textContent = "Yordam olish";
      contactSupport3.textContent = "Yordam olish";

      // * Map
      mapHeader.children[0].textContent = "Bizning manzil";
      mapHeader.children[1].textContent =
        "Bizning ofisimizni ushbu manzilda topishingiz mumkin";
    }

    if (languageValue == "en") {
      // * Nav
      nav.children[0].firstElementChild.textContent = "Home";
      nav.children[1].firstElementChild.textContent = "About Us";
      nav.children[2].firstElementChild.textContent = "Data Analytics";
      nav.children[3].firstElementChild.textContent = "Data Visualization";
      nav.children[4].firstElementChild.textContent = "Data Engineering";
      nav.children[5].firstElementChild.textContent = "Contact Us";

      //  * Footer
      footerAddress.children[0].textContent = "Our office";
      footerAddress.children[1].textContent =
        "Tashkent, Mirabad district, Oybeka, 18/1 ATRIUM Business Center on the 5th floor-1.";
      footerPhone.children[0].textContent = "Phone number";
      footerPhone.children[1].textContent = "+998 97 783 90 45";
      footerEmail.children[0].textContent = "Email";
      footerEmail.children[1].textContent = "info@maab.uz";
      footerCreate.textContent = "All rights reserved.";
      footerTopText.textContent =
        "Let's work together to develop business intelligence solutions for your company!";
      footerTopButton.textContent = "Contact us";

      // * Contact
      contactHeader.children[0].textContent =
        "We are always ready to contact you";
      contactHeader.children[1].textContent = "Stay In Touch";

      contactAddress.textContent = `Tashkent, Mirabad district, Oybeka, 18/1 ATRIUM Business Center on the 5th floor-1.`;
      contactEmail.textContent = `Email`;
      contactLocation.textContent = "Location";
      contactPhone.textContent = "Phone";
      contactSupport1.textContent = "Get support";
      contactSupport2.textContent = "Get support";
      contactSupport3.textContent = "Get support";

      // * Map
      mapHeader.children[0].textContent = "Our address";
      mapHeader.children[1].textContent =
        "You can find our office at this address";
    }
  }
  translateContent();
})();

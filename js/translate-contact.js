(function(){
    const selectBox = document.getElementById("change-language");
    const nav = document.getElementById("nav");
    const mapHeader = document.querySelector("#map-header");
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
            nav.children[2].firstElementChild.textContent = "Адрес";
            nav.children[3].firstElementChild.textContent = "Контакты";

            mapHeader.children[0].textContent = "Наш адрес"
            mapHeader.children[1].textContent = "Вы можете найти наш офис по этому адресу"

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
            nav.children[2].firstElementChild.textContent = "Manzil";
            nav.children[3].firstElementChild.textContent = "Kontakt";

            mapHeader.children[0].textContent = "Bizning manzil"
            mapHeader.children[1].textContent = "Siz bizning ofisimizni ushbu manzilda topishingiz mumkin"

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
            nav.children[2].firstElementChild.textContent = "Address";
            nav.children[3].firstElementChild.textContent = "Contact";

            mapHeader.children[0].textContent = "Our address"
            mapHeader.children[1].textContent = "You can find our office at this address"

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
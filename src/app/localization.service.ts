import { Injectable } from '@angular/core';

@Injectable()


export class LocalizationService {
    currentLang: string;
    langPack: any;
    defaultLang = 'en';
    availableLang = ['ua', 'ru', 'en'];


    constructor() {}

    initLocal(lang?) {
        const localStorageLang = localStorage.getItem('spaceLandingLang');
        if (lang) {
            this.currentLang = lang;
            return this.sendReq(lang);
        }
        if (localStorageLang) {
            this.currentLang = localStorageLang;
            return this.sendReq(localStorageLang);
        }
        this.currentLang = window.navigator.language || 'en';
        return this.sendReq(this.currentLang);
    }

    sendReq(lang) {
        lang = this.availableLang.includes(lang)? lang: 'en';
        this.langPack = langPack[lang];
        localStorage.setItem('spaceLandingLang', this.currentLang);
    }
}
const langPack = {
    en: {
        credo: "MAKE YOUR BUSSINESS ACCESSIBLE TO EVERYONE",
        buildpoint: "build a brand",
        developpoint: "develop web site",
        publishpoint: "publish",
        popularizationpoint: "earn money",
        letsgo: "Let's go",
        prices: "PRICES",
        design: "Design",
        develop: "Develop",
        promouting: "Promouting"
    },
    ru: {
        credo: "СДЕЛАЙТЕ ВАШ БИЗНЕС ДОСТУПНЫМ ДЛЯ ВСЕГО МИРА",
        buildpoint: "создайте бренд",
        developpoint: "разработайте сайт",
        publishpoint: "опубликуйте",
        popularizationpoint: "получайте выгоду",
        letsgo: "поехали!",
        prices: "ЦЕНЫ",
        design: "Дизайн",
        develop: "Разработка",
        promouting: "Раскрутка"
    },
    ua: {
        credo: "ЗРОБІТЬ ВАШ БІЗНЕС ДОСТУПНИМ ДЛЯ ВСЬОГО СВІТУ",
        buildpoint: "створіть бренд",
        developpoint: "розробіть сайт",
        publishpoint: "опублікуйте",
        popularizationpoint: "отримуйте прибуток",
        letsgo: "ПОЇХАЛИ!",
        prices: "ЦІНИ",
        design: "Дизайн",
        develop: "Розробка",
        promouting: "Розкрутка"
    }
}

// ---------- Translation dictionary ----------
// Each key matches a data-i18n="key" attribute in index.html
const translations = {
    en: {
        navAbout: "About Me",
        navSkills: "Skills",
        navProjects: "Projects",
        navHobbies: "Hobbies",
        navContact: "Contact",
        langButton: "العربية",
        darkMode: "Dark Mode🌙",
        lightMode: "Light Mode☀️",
        name: "SAEED ALWEDIAN",
        title: "COMPUTER ENGINEERING",
        aboutTitle: "About me",
        aboutText: "A newly graduated computer engineer looking to join a technology company where I can apply my skills in an innovation-driven environment and contribute to the development of advanced technology solutions.",
        skillsTitle: "Skills",
        skillProblem: "Problem solving",
        projectsTitle: "Projects",
        project0: "Practiced Linux commands, file management, Git, GitHub, and SSH authentication.",
        project1: "Practiced HTML5 structure, links, images, lists, tables, forms, validation, and semantic HTML.",
        project2: "Learned CSS Flexbox, positioning, shapes, colors, the box model, animations, and transitions.",
        project3: "Practiced JavaScript, DOM manipulation, events, and building interactive web applications.",
        hobbiesTitle: "Hobbies",
        hobby0: "Programming",
        hobby1: "Learning new technologies",
        hobby2: "Cybersecurity",
        hobby3: "Gaming",
        hobby4: "Solving puzzles",
        contactTitle: "Contact",
        labelName: "Name",
        labelEmail: "Email",
        labelMessage: "Message",
        sendButton: "Send message",
        copyright: "© 2026 Saeed Alwedian",
        footerEmail: "Email Me",
        footerCall: "Call Me"
    },
    ar: {
        navAbout: "من أنا",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navHobbies: "الهوايات",
        navContact: "تواصل معي",
        langButton: "English",
        darkMode: "الوضع الداكن🌙",
        lightMode: "الوضع الفاتح☀️",
        name: "سعيد الوديان",
        title: "هندسة الحاسوب",
        aboutTitle: "من أنا",
        aboutText: "مهندس حاسوب حديث التخرج، أتطلع للانضمام إلى شركة تقنية أطبّق فيها مهاراتي في بيئة عمل قائمة على الابتكار، وأساهم في تطوير حلول تقنية متقدمة.",
        skillsTitle: "المهارات",
        skillProblem: "حل المشكلات",
        projectsTitle: "المشاريع",
        project0: "تدرّبت على أوامر لينكس، وإدارة الملفات، وGit وGitHub، والمصادقة عبر SSH.",
        project1: "تدرّبت على بنية HTML5 والروابط والصور والقوائم والجداول والنماذج والتحقق من المدخلات وHTML الدلالي.",
        project2: "تعلّمت Flexbox في CSS، والتموضع، والأشكال، والألوان، ونموذج الصندوق، والحركات والانتقالات.",
        project3: "تدرّبت على JavaScript والتعامل مع DOM والأحداث وبناء تطبيقات ويب تفاعلية.",
        hobbiesTitle: "الهوايات",
        hobby0: "البرمجة",
        hobby1: "تعلّم تقنيات جديدة",
        hobby2: "الأمن السيبراني",
        hobby3: "الألعاب",
        hobby4: "حل الألغاز",
        contactTitle: "تواصل معي",
        labelName: "الاسم",
        labelEmail: "البريد الإلكتروني",
        labelMessage: "الرسالة",
        sendButton: "إرسال الرسالة",
        copyright: "© 2026 سعيد الوديان",
        footerEmail: "راسلني",
        footerCall: "اتصل بي"
    }
}

let currentLang = "en" 


const button = document.getElementById("themeButton")
const body = document.querySelector("body");

function updateThemeButton() {
    if (body.classList.contains("dark")) {
        button.textContent = translations[currentLang].lightMode;
    } else {
        button.textContent = translations[currentLang].darkMode;
    }
}

button.addEventListener('click',function(){
    body.classList.toggle("dark");
    updateThemeButton();
})


const langButton = document.getElementById("langButton")
const html = document.documentElement  

function setLanguage(lang) {
    currentLang = lang;

    html.lang = lang;
    if (lang === "ar") {
        html.dir = "rtl";
    } else {
        html.dir = "ltr";
    }

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function(element){
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[lang][key];
    });

    updateThemeButton();
}

langButton.addEventListener('click',function(){
    if (currentLang === "en") {
        setLanguage("ar");
    } else {
        setLanguage("en");
    }
})

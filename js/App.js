const body = document.body;
const themeTogBtn = document.querySelector("[data-toggle-theme]");
const navTogBtn = document.querySelector("[data-toggle-nav]");
const nav = document.querySelector("[data-nav]");

const App = {
    set Theme(val) {
        localStorage.setItem('theme', val);
    },
    get Theme() {
        return localStorage.getItem('theme');
    },
    init: function () {
        if (this.Theme == null)
            this.Theme = "dark";

        this.applyTheme();

        themeTogBtn.onclick = () => {
            if (this.Theme == "light") this.Theme = "dark";
            else this.Theme = "light";
            this.applyTheme();
        }

        navTogBtn.onclick = (e) => {

            for (let i = 0; i < navTogBtn.children.length; i++)
                navTogBtn.children[i].classList.toggle("active-bar");
            nav.classList.toggle("nav-shown");
        }
    },
    applyTheme: function () {
        body.className = "";
        body.classList.add(this.Theme);
        themeTogBtn.className = "toggle-theme theme-btn-"+this.Theme;
    }
};



window.onload = App.init.bind(App);

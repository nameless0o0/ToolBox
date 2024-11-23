document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    let menuVisible = false;
    const Title = document.getElementById("title");

    document.addEventListener('mousemove', (event) => {
        if (event.clientX < 10 && !menuVisible) {
            sidebar.classList.add('open');
            content.style.marginLeft = '250px';
            menuVisible = true;
        }
    });

    sidebar.addEventListener('mouseleave', () => {
        sidebar.classList.remove('open');
        content.style.marginLeft = '0';
        menuVisible = false;
    });


    const exploreBtn = document.getElementById('exploreBtn');
    exploreBtn.addEventListener('click', () => {
        alert('Исследуй разделы сайта и найдешь множество полезных инструментов!');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const titles = document.querySelectorAll(".title"); // Все элементы с классом title

    // Проверяем состояние темы из localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.textContent = "☀️";
        // Меняем цвет всех элементов с классом title на белый
        titles.forEach(title => {
            title.style.color = "white";
        });
    }

    // Переключатель темы
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeIcon.textContent = "☀️";

            // Меняем цвет всех элементов с классом title на белый
            titles.forEach(title => {
                title.style.color = "white";
            });
            ps.forEach(p => {
                p.style.color = "white";
            });
        } else {
            localStorage.setItem("theme", "light");
            themeIcon.textContent = "🌙";

            // Возвращаем цвет по умолчанию
            titles.forEach(title => {
                title.style.color = ""; // Убираем стиль
            });
            ps.forEach(p => {
                p.style.color = ""; // Убираем стиль
            });
        }
    });
});


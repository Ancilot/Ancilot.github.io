const newsData = [
    {
        id: 1,
        title: "В Ленинградском зоопарке манул Шу начал зажировку к зиме",
        date: "7 октября 2024",
        image: "1.jpg",
        excerpt: "Любимец посетителей Ленинградского зоопарка манул по имени Шу активно набирает вес перед зимними холодами.",
        fullText: " Московский зоопарк запустил на портале мэра и правительства столицы трансляцию из вольера манула Тимофея, сообщается в Telegram-канале учреждения. 'Старт трансляций позволит отследить все стадии процесса зажировки и разжировки манула. Посетители портала mos.ru увидят, как хищник активно набирает вес к зиме, становится более активным, пушистым и как у него рыжеют бока', — говорится в публикации."
    },
    {
        id: 2,
        title: "В Крыму композиции из арбузов отдали на съедение бегемоту",
        date: "9 августа 2025",
        image: "2.jpg",
        excerpt: "Фестиваль по вырезанию композиций из арбуза прошел в зоопарке Бахчисарайского парка миниатюр, лучшие шедевры отдали на съедение бегемоту Фриде.",
        fullText: "Фестиваль по вырезанию композиций из арбуза прошел в зоопарке Бахчисарайского парка миниатюр, лучшие шедевры отдали на съедение бегемоту Фриде, рассказал РИА Новости директора парка Виктор Жиленко. 'В парке прошел фестиваль по вырезанию композиций из арбуза. Получилось яркое арбузное экзотик-шоу.На суд зрителей представили труды 'арбузных' дел мастеров, а лучшие шедевры преподнесли в качестве десертов нашей любимице - бегемоту Фриде, она же Морячка Соня', - сказал Жиленко. По его словам, крымские сочные сладкие арбузы особенно пришлись по вкусу бегемоту."
    },
    {
        id: 3,
        title: "Кенгуренка из калужского зоопарка скоро вернут родителям",
        date: "3 октября 2024",
        image: "3.jpg",
        excerpt: "Выжившего при похищении кенгуренка из зоопарка в Калужской области скоро вернут домой, где он встретится со своими родителями.",
        fullText: "Выжившего при похищении кенгуренка из зоопарка в Калужской области скоро вернут домой, где он встретится со своими родителями, сообщает Ярославский зоопарк. Ранее полиция возбудила уголовное дело в связи с похищением кенгуренка Кроша из зоопарка в Ярославле. В пресс-службе зоопарка РИА Новости пояснили, что детеныша, скорее всего, похитили в ночь на 27 сентября. Аналогичное дело завела полиция Калужской области – там из зоопарка в Жуковском районе области в ночь на 30 сентября похитили двух детенышей кенгуру."
    },
    {
        id: 4,
        title: "СКота Симбу взяли на работу в Московский зоопарк",
        date: "6 августа 2024",
        image: "4.jpg",
        excerpt: "Кота Симбу взяли на работу в Московский зоопарк, сообщается в Telegram-канале зоосада.",
        fullText: "Кота Симбу взяли на работу в Московский зоопарк, сообщается в Telegram-канале зоосада. Симба у нас не скучает. Я приняла решение взять его на работу в PR — в отдел внешних коммуникаций, а сейчас он еще и по совместительству работает в отделе 'Фауна России' — цитируют в публикации генерального директора зоопарка Светлану Акулову."
    }
];

function initApp() {
    const isDetailPage = window.location.pathname.includes('detail.html');
    const content = document.getElementById('content');
    
    if (!content) return;
    
    if (isDetailPage) {
        showNewsDetail();
    } else {
        showNewsList();
    }
}

function showNewsList() {
    const content = document.getElementById('content');
    let html = '<div class="news-container">';

    newsData.forEach(news => {
        html += ` 
        <div class="news-item">
            <img src="${news.image}" alt="${news.title}" class="news-item__image">
            <div class="news-content">
                <h2 class="news-item__title">${news.title}</h2>
                <span class="news-item__time">${news.date}</span>
                <p class="news-item__description">${news.excerpt}</p>
                <a href="detail.html?id=${news.id}" class="news-item__link-interesting">Читать далее</a>
            </div>
        </div>
        `;
    });

    html += '</div>';
    content.innerHTML = html;
}

function showNewsDetail() {
    const content = document.getElementById('content');
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = parseInt(urlParams.get('id'));

    const news = newsData.find(item => item.id === newsId);

    if (news) {
        const html = `
            <div class="news-item detail-view">
                <img src="${news.image}" alt="${news.title}" class="news-item__image">
                <div class="news-content">
                    <h1 class="news-item__title">${news.title}</h1>
                    <span class="news-item__time">${news.date}</span>
                    <div class="news-item__description">
                        <p>${news.fullText}</p>
                    </div>
                    <a href="News.html" class="news-item__link-interesting">← Вернуться к списку новостей</a>
                </div>
            </div>
        `;
        content.innerHTML = html;
    } else {
        content.innerHTML = '<p>Новость не найдена</p>';
    }
}

document.addEventListener('DOMContentLoaded', initApp);
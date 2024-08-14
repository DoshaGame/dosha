// Логин и пароль
const USERNAME = "Dosha"; // Ваш логин
const PASSWORD = "Dosh@2008"; // Ваш пароль

// Функция для отображения записей
function displayPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";

    posts.forEach(post => {
        const article = document.createElement("article");
        article.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        postContainer.appendChild(article);
    });
}

// Логика админки
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === USERNAME && password === PASSWORD) {
        document.getElementById("admin-panel").style.display = "block";
        alert("Вы успешно вошли!");
    } else {
        alert("Неверный логин или пароль.");
    }
});

document.getElementBy
Id("post-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;

    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push({ title, content });
    localStorage.setItem("posts", JSON.stringify(posts));

    displayPosts();
    
    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";
});

// Отображаем посты при загрузке страницы
if (document.getElementById("post-container")) {
    displayPosts();
}
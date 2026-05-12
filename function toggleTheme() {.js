function toggleTheme() {
    const htmlTag = document.documentElement;
    let newTheme = "light";
    if (htmlTag.getAttribute("data-theme") === "light") { newTheme = "dark"; }
    htmlTag.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Makes sure index/projects write to storage too
    syncButtonLabel(newTheme);}
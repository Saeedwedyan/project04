# Personal Portfolio

My personal portfolio website, built from scratch with HTML5, CSS3 and JavaScript (ES6+).
No frameworks, templates or UI libraries were used.

## Files

```
ex00/
├── index.html    # page structure (all sections)
├── style.css     # styling, light and dark theme, responsive layout
├── script.js     # theme switcher
├── assets/       # images (profile.jpg)
└── README.md
```

## Sections

- **Header / Navbar**: my name, title, and links to every section, plus the theme button
- **About Me**: short introduction with a profile photo
- **Skills**: grid of the technologies I work with
- **Projects**: showcase of Projects 00 to 03 (Linux/Git/GitHub, HTML5, CSS, JavaScript)
- **Hobbies**: grid of my interests
- **Contact**: form with name, email and message (with HTML validation)
- **Footer**: copyright and links (GitHub, email, LinkedIn, phone)

## Theme switcher

The **Change Theme** button switches between the light theme (default) and the dark theme.

How it works, step by step:

1. **User action**: the visitor clicks the `Change Theme` button (`#themeButton`).
2. **Event firing**: the browser fires a `click` event on that button.
3. **JavaScript callback**: the function given to `addEventListener` in `script.js` runs.
4. **DOM/CSS mutation**: the function calls `body.classList.toggle("dark")`, which adds or removes the `dark` class on the `<body>`. The `.dark` rules in `style.css` then override the colors, so the page changes instantly without reloading.

```js
button.addEventListener('click', function () {
    body.classList.toggle("dark");
});
```

## Responsive design

- **Flexbox** is used for the header, the navigation bar, the About Me section, the contact form and the footer.
- **CSS Grid** is used for the skills, projects and hobbies cards.
- A **media query** (`max-width: 768px`) stacks the layout in one column on tablets and phones.

## How to run

1. Clone or download the project.
2. Put a photo named `profile.jpg` inside the `assets/` folder.
3. Open `index.html` in any browser.

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Git and GitHub

## Author

Saeed Alwedian

- GitHub: https://github.com/Saeedwedyan
- LinkedIn: https://www.linkedin.com/in/saeed-alwedyan

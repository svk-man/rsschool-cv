const code = document.querySelector('.section__code');
code.innerHTML = hljs.highlight(code.textContent, { language: 'js' }).value;
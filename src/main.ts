import './main.css';
import 'alpinejs';

// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

window.addEventListener('DOMContentLoaded', () => {
  let tbody = document.getElementById('contentBody');
  const templ = document.getElementById('rowtempl') as HTMLTemplateElement;
  if (!tbody || !templ) {
    return;
  }
  for (let index = 0; index < 5; index++) {
    tbody.append(templ.content.cloneNode(true));
  }
});

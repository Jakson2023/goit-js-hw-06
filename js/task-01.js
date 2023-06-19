const category = document.querySelectorAll('.item');
console.log('Number of categories:', category.length);


[...category].forEach((item) => {
    const categoryTitle = item.querySelector('h2').innerText;
    const elements =item.querySelectorAll('li');
    console.log('Category:', categoryTitle);
    console.log('Elements:', elements.length);
  });
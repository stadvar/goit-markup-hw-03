window.onload = () => {
  //Обьявляем глобальнные переменные, получаем в них нужные значения.
  let bttns = document.querySelectorAll('.filter-butt .link');
  let cards = document.querySelectorAll('.card-list .card');
  //Запускаем цикл на количество наших кнопочек, вешаем на них событие onclick.
  for (let i = 0; i < bttns.length; i++) {
    //bttns[i].onclick = () => {
    let Bdata = bttns[i].getAttribute('data');
    //

    switch (Bdata) {
      case 'all':
        bttns[i].onclick = () => {
          for (let i = 0; i < cards.length; i++) {
            let aval = cards[i].classList.contains('hidden');
            if (aval) {
              cards[i].classList.remove('hidden');
            }
          }
        };
        break;
      case 'web':
        bttns[i].onclick = () => {
          job('web');
        };
        break;
      case 'app':
        bttns[i].onclick = () => {
          job('app');
        };
        break;
      case 'des':
        bttns[i].onclick = () => {
          job('des');
        };
        break;
      case 'mar':
        bttns[i].onclick = () => {
          job('mar');
        };
        break;
      // default:
      //   console.log('Нет таких значений');
    }
    //button onclick};
  }
  //******
  function job(VaL) {
    for (let i = 0; i < cards.length; i++) {
      let Cdata = cards[i].getAttribute('data');
      if (Cdata == VaL) {
        let aval = cards[i].classList.contains('hidden');
        if (aval) {
          cards[i].classList.remove('hidden');
        }
      } else {
        cards[i].classList.add('hidden');
      }
    }
  }
};

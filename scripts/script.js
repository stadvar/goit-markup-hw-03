window.onload = () => {
  const Cweb = document.querySelectorAll('.card-list .c-web');
  const Cdes = document.querySelectorAll('.card-list .c-des');
  const Capp = document.querySelectorAll('.card-list .c-app');
  const Cmar = document.querySelectorAll('.card-list .c-mar');
  const Call = document.querySelectorAll('.card-list .card');
  //console.log(Call);

  //--------------------ALL
  const all = document.getElementById('all');
  all.onclick = () => {
    Call.forEach((E, i) => {
      Call[i].style.display = 'list-item';
    });
  };

  //------------------WEB
  const web = document.getElementById('web');
  web.onclick = () => {
    Call.forEach((E, i) => {
      Call[i].style.display = 'none';
    });
    Cweb.forEach((E, i) => {
      Cweb[i].style.display = 'list-item';
    });
  };

  //------------------DESIGN
  const des = document.getElementById('des');
  des.onclick = () => {
    Call.forEach((E, i) => {
      Call[i].style.display = 'none';
    });
    Cdes.forEach((E, i) => {
      Cdes[i].style.display = 'list-item';
    });
  };
  //------------------APPLICATION
  const app = document.getElementById('app');
  app.onclick = () => {
    Call.forEach((E, i) => {
      Call[i].style.display = 'none';
    });
    Capp.forEach((E, i) => {
      Capp[i].style.display = 'list-item';
    });
  };
  //------------------MARKETING
  const mar = document.getElementById('mar');
  mar.onclick = () => {
    Call.forEach((E, i) => {
      Call[i].style.display = 'none';
    });
    Cmar.forEach((E, i) => {
      Cmar[i].style.display = 'list-item';
    });
  };
};


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });
  
    let headers = document.querySelectorAll('header');
    headers.forEach(header => {
      header.classList.toggle('sticky', window.scrollY > 100);
    });
  
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
  



ScrollReveal({ 
    reset: true ,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfoliyo-box, .services-container , .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p , .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



function getDownloadUrl() {
  const repoUrl = 'https://api.github.com/repos/P-K-G/Files';
  const filePath = 'Profile Resume.pdf';
  const branch = 'main';

  const apiUrl = `${repoUrl}/contents/${encodeURIComponent(filePath)}?ref=${encodeURIComponent(branch)}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const downloadUrl = data.download_url;
      if (downloadUrl) {
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'Profile Resume.pdf'; // Set the desired file name for the download
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        console.error('Download URL not found.');
      }
    })
    .catch(error => {
      console.error('Error retrieving file:', error);
    });
}



function show(val , val1){
  document.getElementById(val).style.display="inline-block";
  document.getElementById(val).style.marginTop="-5px";
  document.getElementById(val1).innerText = "Show Less";
  let text1 = "showless(";
  let call = text1.concat(val,",'",val1,"')");
  document.getElementById(val1).setAttribute("onclick",call);

}
function showless(val,val1){
  document.getElementById(val).style.display="none";
  document.getElementById(val1).innerText = "Read More";
  let text1 = "show(";
  let call = text1.concat(val,",'",val1,"')");
  document.getElementById(val1).setAttribute("onclick",call);
}

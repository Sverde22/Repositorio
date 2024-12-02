

const button1 = document.getElementById ("button1");
const addsong = document.getElementById ("addsong");
const awollist = document.getElementById ("awollist");

button1.addEventListener('click', () => {
    const button2= addsong.value.trim(); 
    if (button2) {
     
      const button3 = document.createElement('li');
      button3.textContent = button2;
  
   
      awollist.appendChild(button3);
  
     
      addsong.value = '';
    } else {
      alert('');
    }
  });
document.addEventListener('DOMContentLoaded', () => {
  const lightSwitch = document.querySelector('.light-switch');

  lightSwitch.addEventListener('click', () => switchTheme(lightSwitch));
});

  function switchTheme(lightSwitch) {
    lightSwitch.classList.toggle('off');

    if (lightSwitch.classList.contains('off')) {
      document.getElementById('switcher-id').href = './themes/dark.css';
      document.documentElement.style.setProperty('--accent-color', '#0056B3');
      document.documentElement.style.setProperty('--main-color', '#1E1E1E');
      document.documentElement.style.setProperty('--text-changeable', '#fff');

      
    } else {
      document.getElementById('switcher-id').href = '';
      document.documentElement.style.setProperty('--accent-color', '#007BFF');
      document.documentElement.style.setProperty('--main-color', '#fff');
      document.documentElement.style.setProperty('--text-changeable', '#000');



    }
  }

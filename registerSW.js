if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/PestControl/sw.js', { scope: '/PestControl/' })})}
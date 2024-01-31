//sw.js

self.addEventListener('install', (a) => {
    console.log('설치 완료!')
})

self.addEventListener('active', (a) => {
    console.log('서비스워커 동작 시작!')
})

self.addEventListener('fetch', (a) => {
    console.log('데이터 요청시 처리!')
})

self.addEventListener('message', (event) => {
    console.log('메세지?', event.data);
    self.registration.showNotification('title', {
        body: event.data.message,
    });
})
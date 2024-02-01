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
    const option = {
        body: event.data.message,
        icon: './puu.jpg', //제목 옆 작은 원형이미지
        image: './puu.jpg', //내용 썸네일
        badge: './puu.jpg',
        vibrate: [200, 100, 300], //0.2초간격으로 1초 후에?
        actions: [
            { action: 'open', title: '자세히보기' },
            { action: 'close', title: '닫기' },
        ]
    }

    self.registration.showNotification('title', option);
});   //showNotification 알림창을 띄어쥼




self.addEventListener('notificationclick', (event) => {
    console.log(event)
    console.log(clients)

    if (event.action == 'open') {
        //자세히보기
        clients.openWindow('https://naver.com');
    } else {
        //닫기
        event.notification.close();
    }

});
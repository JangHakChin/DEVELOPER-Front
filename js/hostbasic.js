let backURL = "http://192.168.219.103:8888/developer/";
let frontURL = "http://192.168.219.103:5500/html/";
//http://192.168.0.20 학원
//http://192.168.219.100 집
//http://192.168.0.13학원와이파이

//--현재 로그인/로그아웃 상태를 요청하는 함수 START--
function hostCheckLogined() {
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        url: backURL + 'host/checklogined',
        success: function (responseObj) {
        }, error: function (xhr) {
        }
    });
}
//--현재 로그인상태인지 로그아웃상태인가를 요청하는 함수 END--

//--5초간격으로 로그인여부확인하기 함수 START--    
function hostCheckIntervalLogined() {
    hostCheckLogined();
    window.setInterval(hostCheckLogined, 5000);
}
//--5초간격으로 로그인여부확인하기 함수 END--


$(() => {
    //--로그아웃 클릭되었을 때 할 일 START--
    $('#nav-wrap > div > nav > ul > li.logout').click((e) => {
       
        alert("로그아웃클릭됨")
        $.ajax({
            xhrFields: {
                withCredentials: true
            },
            url: backURL + 'host/logout',
            success: function () {
                location.href = frontURL + 'index.html'
            }
        })
        return false
    })
    //---로그아웃 클릭되었을 때 할 일 END--

    //--로고가 클릭되었을 때 할 일 START--
    $('div.nav-container>img#logo').click(() => {
        location.href = frontURL + 'hostindex.html'
    })
    //--로고가 클릭되었을 때 할 일 END--
})
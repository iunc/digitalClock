function clock() {
    //dom tới id của các div
    var hours = document.querySelector('#hours');
    var minutes = document.querySelector('#minutes');
    var seconds = document.querySelector('#seconds');
    var ampm = document.querySelector('#ampm');

    //lấy giờ phút giây
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var am = 'AM';
    
    //tính giờ theo am pm
    if (h > 12) {
        h = h - 12;
        var am = 'PM';
    }

    //Nếu số nhỏ hơn 10 thì thêm số 0 đằng trước
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }

    //Gán vào innerHTML
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
}
//cứ 1s thì lại gọi hàm clock để lấy thời gian thực
var interval = setInterval(clock, 1000);
'use strict';

const check = function() {
    const num = document.getElementById('input').value;

    if (num > 0) {

        if (num == 1) {
            alert('素数ではありません');

        } else if (num == 2) {
            alert('素数 です');

        } else {
            for (let i = 2; i < num; i++) {
                //割り切れたら合成数
                if (num % i == 0) {
                    alert('素数ではありません');
                    break;
                } 

                //割り切れないとき素数
                if (i + 1 == num) {
                    alert('素数 です');
                }
            }               
        }

    } else {
        alert('１以上の数字を入力して下さい　※半角');
    }
}

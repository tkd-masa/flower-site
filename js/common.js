$(function(){
    //topページの写真にslickを適用
    $('.fade_slide').slick({
        accessibility: false,
        fade: true,
        autoplay: true,
        infinite: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 3000,
        speed: 1000,
    });
    
    //topページのsnsスライドにslickを適用
    $('.slide').slick({
    dots: true, //下の丸ぽっち（インジケーター）を表示 
    autoplay: true, //自動再生 
    autoplaySpeed: 3000, //自動再生の速度 
    slidesToShow: 4,
    variableWidth: true,
    infinite: true,
    });
    
    //spanタグを一文字ずつあてるための関数
    const wrapCharSpan = function(str){
         return [...str].map(char => `<span>${char}</span>`).join('');
    }
    
    //対象の要素を取得する
    const subTitle = document.querySelectorAll('.sub_title');
    subTitle.forEach(el => el.innerHTML = wrapCharSpan(el.textContent.trim()));
    
    //topページのinstagramのタイトルにロゴを付ける
    if($('#top').length){
        const snsTitle = document.querySelector('.sns_img .sub_title');
    snsTitle.insertAdjacentHTML('beforeend','<span><i class="fab fa-instagram"></i></span>');
    //instagramのロゴにmarginを設定する
    const instaIcon = document.querySelector('.sns_img .sub_title i');
    instaIcon.style.marginLeft="10px";
    }
    
    //サブタイトルのアニメーションを実行する関数
    function showSubTitle() {
        let scrollValue = window.pageYOffset;
        // 画面の高さを取得
        let windowHeight = window.innerHeight;
        // はみ出させる値
        let value = 150;
        // 条件設定
        for (let i = 0; i < subTitle.length; i++) {
            // 取得した要素のtop値の取得 + スクロール量
            let scrollTop = subTitle[i].getBoundingClientRect().top + scrollValue;
            //条件
            if (scrollValue > scrollTop - windowHeight + value) {
                subTitle[i].classList.add("is-ani");
            } else {
                subTitle[i].classList.remove("is-ani");
            }
        }
    }
    
    
    //topのローディング中はスクロールできないようにする
    function handle(event) {
        event.preventDefault();
    }

    window.onload = function() {
        if($('#top').length){
            document.addEventListener('touchmove', handle, { passive: false });
            document.addEventListener('mousewheel', handle, { passive: false });
            $('.loading').addClass('completed');
            setTimeout(function() {
                //スクロール解除
                document.removeEventListener('touchmove', handle, { passive: false });
                document.removeEventListener('mousewheel', handle, { passive: false });
            }, 3500);
        }
    }
    
    //ロードまたはスクロールしたときにshowSubTitleの関数を実行
    $(window).on('load scroll', showSubTitle);

    // validationEngineの記述
    $("#mail_form").validationEngine({
        promptPosition:"bottomRight:-50,20"
    });
});



 

 

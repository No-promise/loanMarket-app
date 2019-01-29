var insertStyle = false
        function setDPR() {
            //定义设计稿宽度
            var d = document;
            const desWidth = 750;
            var _dpr = (1 / window.devicePixelRatio).toFixed(2);
            const _MaxWidth = 414 * window.devicePixelRatio;
            const userAgent = navigator.userAgent;
            var widthStr = 'device-width';
            var isMobile = true;
            var iWidth = 0;
            var _html = d.getElementsByTagName('html')[0];
            // 设置网页模式下最大宽度
            if (userAgent.toLowerCase().indexOf('iphone') == -1 && userAgent.toLowerCase().indexOf('android') == -1) {
                isMobile = false;//iWidth = _MaxWidth;
                // widthStr = iWidth + 'px';
            }
            d.querySelector('[name="viewport"]').setAttribute('content',
                'width=' + widthStr + ' , initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
            iWidth = Math.min(d.documentElement.clientWidth, window.innerWidth);
            if (!isMobile) iWidth = _MaxWidth;
            // 插入网页宽度
            if (!insertStyle&&!isMobile) {
                    var $style = document.createElement('style')
                    $style.innerHTML = 'html{background-color: #f8f8f8;}body{width:' + iWidth + 'px;margin: 0 auto;background-color: #fff;}'
                    document.querySelector('html').appendChild($style)
                    insertStyle = true
                }
            _html.style.fontSize = (((100 * iWidth) / desWidth)) + 'px';
            _html.dataset.dpr = window.devicePixelRatio;
        }
        setDPR();
        window.onresize = function () {
            setDPR();
}
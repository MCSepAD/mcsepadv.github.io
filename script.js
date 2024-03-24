document.addEventListener('DOMContentLoaded', function() {  
    const ads = document.querySelectorAll('.ad');  
    const switchAdButton = document.getElementById('switchAd');  
    let currentIndex = 0;  
  
    // 初始化时显示第一个广告  
    ads[currentIndex].classList.add('active');  
  
    switchAdButton.addEventListener('click', function() {  
        // 移除当前广告的 'active' 类  
        ads[currentIndex].classList.remove('active');  
  
        // 计算下一个广告的索引，如果超过广告总数则循环回第一个广告  
        currentIndex = (currentIndex + 1) % ads.length;  
  
        // 为下一个广告添加 'active' 类以显示它  
        ads[currentIndex].classList.add('active');  
    });  
});
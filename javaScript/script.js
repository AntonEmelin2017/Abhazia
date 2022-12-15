document.addEventListener('mousemove', function(event){
    this.querySelectorAll('.img').forEach(img => {
        let speed = img.getAttribute('data-speed')
        img.style.transform = `translateX(${event.clientX*speed/1000}px)`
    });
    
})




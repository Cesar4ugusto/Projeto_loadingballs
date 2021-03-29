const loadingBalls = document.querySelectorAll('.js-loadingBall');
TweenMax.staggerFromTo(
    loadingBalls,
    0.75,
    {
        opacity: 0,
        transform: 'scale(0)'
    },
    {
        ease: Power3.easeInOut,
        opacity: 1,
        repeat: -1,
        transform: 'scale(1.2)',
        yoyo: true
    },
    0.2
)
  /*
// 'bottom', 'left', 'top', 'right'
origin: 'bottom',

// Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
distance: '20px',

// Time in milliseconds.
duration: 500,
delay: 0,

// Starting angles in degrees, will transition from these values to 0 in all axes.
rotate: { x: 0, y: 0, z: 0 },

// Starting opacity value, before transitioning to the computed opacity.
opacity: 0,

// Starting scale value, will transition from this value to 1
scale: 0.9,

// Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  */

// Changing the defaults
window.sr = ScrollReveal({ reset: false });

// Customizing a reveal set
sr.reveal('.flipInX', { 
					origin: 'top',
                    opacity: 1,
                    rotate: { x: 360, y: 0, z: 0 },
                    duration: 700});

sr.reveal('.fadeInLeft', { origin: 'left',
                    opacity: 0.1,
                    distance: '500px',
                    duration: 700});

sr.reveal('.fadeInRight', { origin: 'right',
                    opacity: 0.1,
                    distance: '500px',
                    duration: 700});

sr.reveal('.fadeInDown1', { origin: 'left',
                    opacity: 0.1,
                    distance: '500px',
                    duration: 700});

sr.reveal('.rotate1', { 
                    opacity: 0.1,
                    rotate: { x: 0, y: 0, z: 360 },
                    distance: '300px',
                    duration: 800,
                    delay: 100,});

sr.reveal('.fadeInDown2', { origin: 'bottom',
                    opacity: 0.1,
                    distance: '500px',
                    duration: 700,
                    delay: 500});

sr.reveal('.rotate2', { 
                    opacity: 0.1,
                    rotate: { x: 0, y: 0, z: -360 },
                    distance: '300px',
                    duration: 800,
                    delay: 600,});

sr.reveal('.fadeInDown3', { origin: 'right',
                    opacity: 0.1,
                    distance: '500px',
                    duration: 700,
                    delay: 1000});

sr.reveal('.rotate3', { 
                    opacity: 0.1,
                    rotate: { x: 0, y: 0, z: 360 },
                    distance: '300px',
                    duration: 800,
                    delay: 1100,});

export function parallaxSlider() {
  const images: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('.parallax-img'));
  const slider = document.querySelector('.parallax-slider') as HTMLElement;
  let sliderWidth: number;
  let imageWidth: number;
  let current = 0;
  let target = 0;
  const ease = 0.05;

  window.addEventListener('resize', init);

  images.forEach((img, idx) => {
    img.style.backgroundImage = `url(/assets/img/home-12/portfolio/port-d-${idx + 1}.png)`;
  });

  function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  function setTransform(el: HTMLElement, transform: string) {
    el.style.transform = transform;
  }

  function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
  }

  function animate() {
    current = parseFloat(lerp(current, target, ease).toFixed(2));
    target = window.scrollY;
    setTransform(slider, `translateX(-${current}px)`);
    animateImages();
    requestAnimationFrame(animate);
  }

  function animateImages() {
    let ratio = current / imageWidth;
    let intersectionRatioValue: number;

    images.forEach((image, idx) => {
      intersectionRatioValue = ratio - (idx * 0.7);
      setTransform(image, `translateX(${intersectionRatioValue * 100}px)`);
    });
  }
  init();
  animate();
}


export function parallaxSlider1() {
  const images: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('.parallax-img'));
  const slider = document.querySelector('.parallax-slider') as HTMLElement;
  let sliderWidth: number;
  let imageWidth: number;
  let current = 0;
  let target = 0;
  const ease = 0.05;

  window.addEventListener('resize', init);

  images.forEach((img, idx) => {
    img.style.backgroundImage = `url(/assets/img/home-12/portfolio/dev-d-${idx + 1}.png)`;
  });

  function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  function setTransform(el: HTMLElement, transform: string) {
    el.style.transform = transform;
  }

  function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
  }

  function animate() {
    current = parseFloat(lerp(current, target, ease).toFixed(2));
    target = window.scrollY;
    setTransform(slider, `translateX(-${current}px)`);
    animateImages();
    requestAnimationFrame(animate);
  }

  function animateImages() {
    let ratio = current / imageWidth;
    let intersectionRatioValue: number;

    images.forEach((image, idx) => {
      intersectionRatioValue = ratio - (idx * 0.7);
      setTransform(image, `translateX(${intersectionRatioValue * 100}px)`);
    });
  }
  init();
  animate();
}


export function parallaxSlider2() {
  const images: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('.parallax-img'));
  const slider = document.querySelector('.parallax-slider') as HTMLElement;
  let sliderWidth: number;
  let imageWidth: number;
  let current = 0;
  let target = 0;
  const ease = 0.05;

  window.addEventListener('resize', init);

  images.forEach((img, idx) => {
    img.style.backgroundImage = `url(/assets/img/home-12/portfolio/photo-d-${idx + 1}.png)`;
  });

  function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  function setTransform(el: HTMLElement, transform: string) {
    el.style.transform = transform;
  }

  function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
  }

  function animate() {
    current = parseFloat(lerp(current, target, ease).toFixed(2));
    target = window.scrollY;
    setTransform(slider, `translateX(-${current}px)`);
    animateImages();
    requestAnimationFrame(animate);
  }

  function animateImages() {
    let ratio = current / imageWidth;
    let intersectionRatioValue: number;

    images.forEach((image, idx) => {
      intersectionRatioValue = ratio - (idx * 0.7);
      setTransform(image, `translateX(${intersectionRatioValue * 100}px)`);
    });
  }
  init();
  animate();
}


export function parallaxSlider3() {
  const images: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('.parallax-img'));
  const slider = document.querySelector('.parallax-slider') as HTMLElement;
  let sliderWidth: number;
  let imageWidth: number;
  let current = 0;
  let target = 0;
  const ease = 0.05;

  window.addEventListener('resize', init);

  images.forEach((img, idx) => {
    img.style.backgroundImage = `url(/assets/img/home-12/portfolio/vid-d-${idx + 1}.png)`;
  });

  function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  function setTransform(el: HTMLElement, transform: string) {
    el.style.transform = transform;
  }

  function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
  }

  function animate() {
    current = parseFloat(lerp(current, target, ease).toFixed(2));
    target = window.scrollY;
    setTransform(slider, `translateX(-${current}px)`);
    animateImages();
    requestAnimationFrame(animate);
  }

  function animateImages() {
    let ratio = current / imageWidth;
    let intersectionRatioValue: number;

    images.forEach((image, idx) => {
      intersectionRatioValue = ratio - (idx * 0.7);
      setTransform(image, `translateX(${intersectionRatioValue * 100}px)`);
    });
  }
  init();
  animate();
}


// projects section slider
export function parallaxSlider4() {
  const images: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('.parallax-img'));
  const slider = document.querySelector('.parallax-slider') as HTMLElement;
  const sliderContainer = document.querySelector('.parallax-slider-container') as HTMLElement; // Add a container element in your HTML
  let sliderWidth: number;
  let imageWidth: number;
  let current = 0;
  let target = 0;
  const ease = 0.05;
  let animationId: number | null = null;
  let isAnimating = false;
  let isActive = false;
  let startOffset = 0;

  window.addEventListener('resize', init);

  images.forEach((img, idx) => {
    img.style.backgroundImage = `url(/assets/img/home-12/portfolio/p-${idx + 1}.jpg)`;
  });

  function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  function setTransform(el: HTMLElement, transform: string) {
    el.style.transform = transform;
  }

  function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
    
    // Reset positions when resizing
    if (isActive) {
      startOffset = sliderContainer.getBoundingClientRect().top + window.scrollY;
    }
  }

  function animate() {
    if (!isAnimating) return;
    
    current = parseFloat(lerp(current, target, ease).toFixed(2));
    setTransform(slider, `translateX(-${current}px)`);
    animateImages();
    animationId = requestAnimationFrame(animate);
  }

  function animateImages() {
    let ratio = current / imageWidth;
    let intersectionRatioValue: number;

    images.forEach((image, idx) => {
      intersectionRatioValue = ratio - (idx * 0.7);
      setTransform(image, `translateX(${intersectionRatioValue * 70}px)`); // Reduced movement for parallax
    });
  }

  function startAnimation() {
    if (!isAnimating) {
      isAnimating = true;
      isActive = true;
      startOffset = sliderContainer.getBoundingClientRect().top + window.scrollY;
      
      // Set slider to fixed positioning when active
      slider.style.position = 'fixed';
      slider.style.top = '0';
      slider.style.left = '0';
      slider.style.width = '100%';
      
      animate();
    }
  }

  function stopAnimation() {
    isAnimating = false;
    isActive = false;
    
    // Reset slider positioning
    slider.style.position = '';
    slider.style.top = '';
    slider.style.left = '';
    slider.style.width = '';
    
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  function handleScroll() {
    if (!isActive) return;
    
    const scrollPosition = window.scrollY - startOffset;
    const maxScroll = sliderWidth - window.innerWidth;
    
    // Only animate when within the slider's scroll range
    if (scrollPosition >= 0 && scrollPosition <= maxScroll) {
      target = scrollPosition;
    } else if (scrollPosition < 0) {
      target = 0;
    } else {
      target = maxScroll;
    }
  }

  // Set up Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          startAnimation();
          window.addEventListener('scroll', handleScroll);
        } else {
          stopAnimation();
          window.removeEventListener('scroll', handleScroll);
        }
      });
    },
    {
      threshold: 0.5 // Trigger when 50% visible (you can adjust this)
    }
  );

  // Start observing the container element
  observer.observe(sliderContainer);

  // Initialize but don't start animation yet
  init();
}
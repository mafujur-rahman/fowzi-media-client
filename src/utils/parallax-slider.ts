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
  let sliderWidth: number;
  let imageWidth: number;
  let maxTranslateX: number;
  let current = 0;
  let target = 0;
  const ease = 0.1;
  let lastScrollY = window.scrollY;
  let shouldAnimate = false;
  let initialized = false; // new flag

  window.addEventListener('resize', init);
  window.addEventListener('scroll', onScroll);

  images.forEach((img, idx) => {
    img.style.backgroundImage = `url(/assets/img/home-12/portfolio/p-${idx + 1}.jpg)`;
  });

  function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    maxTranslateX = sliderWidth - window.innerWidth;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
    // Initialize target and current the same at start
    current = 0;
    target = 0;
    lastScrollY = window.scrollY;
    initialized = false;
  }

  function onScroll() {
    const rect = slider.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const triggerPoint = rect.height * 0.9;

    shouldAnimate = windowHeight - rect.top >= triggerPoint && rect.bottom > 0;
  }

  function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  function setTransform(el: HTMLElement, transform: string) {
    el.style.transform = transform;
  }

  function animate() {
    if (shouldAnimate) {
      const scrollDelta = window.scrollY - lastScrollY;

      if (initialized) {
        // Add scroll delta to target gradually only after first frame
        target += scrollDelta * 1.5;
        target = Math.min(Math.max(0, target), maxTranslateX);
      } else {
        // On first animate frame after scrolling starts, sync target and current to avoid jump
        target = current;
        initialized = true;
      }

      lastScrollY = window.scrollY;
      current = lerp(current, target, ease);

      setTransform(slider, `translateX(-${current.toFixed(2)}px)`);
      animateImages();
    }
    requestAnimationFrame(animate);
  }

  function animateImages() {
    const ratio = current / imageWidth;
    images.forEach((image, idx) => {
      const offset = ratio - idx * 0.7;
      setTransform(image, `translateX(${offset * 100}px)`);
    });
  }

  init();
  animate();
}




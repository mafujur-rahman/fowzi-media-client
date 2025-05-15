import $ from 'jquery';
import { gsap } from 'gsap';
import { SplitText, chroma } from '@/plugins';

function ctaAnimation() {
  if ($('.cta-text').length > 0) {
    // Set initial opacity to 0
    gsap.set('.cta-text', {
      opacity: 0
    });
    
    // Fade in animation
    gsap.to('.cta-text', {
      opacity: 1,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.cta-text',
        start: 'bottom 100%-=50px',
        once: true
      }
    });

    // Apply gradient color to each character
    let mySplitText = new SplitText(".cta-text", { type: "words,chars" });
    let chars = mySplitText.chars;
    let endGradient: any = (chroma as any).scale(['#111111', '#FF0101']);
    
    gsap.set(chars, {
      color: (i, el, arr) => {
        return endGradient(i / arr.length).hex();
      }
    });
  }
};

export {
  ctaAnimation,
}
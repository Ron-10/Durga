/**
 * Optimized Hover Effects for Tailwind CSS
 *
 * NOTE: The key to smooth animations is to avoid 'transition-all' and instead
 * specify the exact properties you want to animate. Animations on `transform` and
 * `opacity` are the most performant. Animating `box-shadow` can be slow, but
 * the visual impact is often tied to a transform, which masks any minor lag.
 *
 * I've also added `will-change-transform` as a hint to the browser to optimize
 * animations involving scaling, which can help prevent stuttering.
 */
export const hoverEffects = {
  // More specific: transitions only 'color' and 'transform'.
  link: 'will-change-transform transition-[color,transform] duration-200 ease-out hover:text-blue-600 hover:scale-105',

  // Be specific instead of using 'transition-all'. While shadow animation isn't ideal,
  // being explicit is better for performance. The 'scale' transform will be the smoothest part.
  button: 'will-change-transform transition-[background-color,color,box-shadow,transform] duration-200 ease-out hover:bg-blue-600 hover:text-white hover:shadow-xl hover:scale-105',

  // Focus the transition on the two properties that actually change: shadow and transform.
  card: 'will-change-transform transition-[box-shadow,transform] duration-200 ease-out hover:shadow-2xl hover:scale-105',

  // This was already good, but adding `will-change-transform` can help on complex pages.
  image: 'will-change-transform transition-transform duration-200 ease-out hover:scale-110 hover:shadow-lg',

  // Same optimization as the 'link' style.
  icon: 'will-change-transform transition-[color,transform] duration-200 ease-out hover:text-blue-600 hover:scale-110',

  // Specifically transition border-color and box-shadow.
  border: 'transition-[border-color,box-shadow] duration-200 ease-out hover:border-blue-600 hover:shadow-md',

  // This was already performant as `transition-colors` is specific.
  background: 'transition-colors duration-200 ease-out hover:bg-blue-50',
};

/**
 * Mobile-First Responsive Styles for Tailwind CSS
 *
 * NOTE: This object is well-structured and follows best practices for creating
 * a responsive design system. No changes were needed here.
 */
export const mobileStyles = {
  container: 'px-4 sm:px-6 lg:px-8',
  text: {
    heading: 'text-2xl sm:text-3xl lg:text-4xl',
    subheading: 'text-xl sm:text-2xl lg:text-3xl',
    body: 'text-base sm:text-lg',
    small: 'text-sm sm:text-base',
  },
  spacing: {
    section: 'py-8 sm:py-12 lg:py-16',
    container: 'py-4 sm:py-6 lg:py-8',
  },
  grid: {
    responsive: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8',
  },
};

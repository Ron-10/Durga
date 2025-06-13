export const hoverEffects = {
  link: 'transition-colors duration-300 hover:text-[#007BFF]',
  button: 'transition-all duration-300 hover:bg-[#007BFF] hover:text-white hover:shadow-md',
  card: 'transition-all duration-300 hover:shadow-lg hover:scale-[1.02]',
  image: 'transition-transform duration-300 hover:scale-105',
  icon: 'transition-colors duration-300 hover:text-[#007BFF]',
  border: 'transition-colors duration-300 hover:border-[#007BFF]',
  background: 'transition-colors duration-300 hover:bg-gray-50',
};

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
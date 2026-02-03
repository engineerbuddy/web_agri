function Mission() {
  return (
    <section className="py-16 sm:py-20 w-full bg-white dark:bg-background-dark border-t border-gray-100 dark:border-[#1E332A]" id="mission">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 text-center">
        <span className="material-symbols-outlined text-4xl sm:text-5xl text-primary mb-4 sm:mb-6 inline-block">eco</span>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111816] dark:text-white mb-4 sm:mb-6 leading-tight">
          "Empowering farmers to feed the world with less impact and more intelligence."
        </h2>
        
        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
          We believe that the intersection of nature and technology holds the key to sustainable agriculture. Our team of agronomists and engineers work daily to bridge this gap.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="h-6 sm:h-8 w-20 sm:w-24 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-6 sm:h-8 w-20 sm:w-24 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-6 sm:h-8 w-20 sm:w-24 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-6 sm:h-8 w-20 sm:w-24 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </section>
  )
}

export default Mission

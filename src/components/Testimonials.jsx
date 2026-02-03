import { useState } from 'react'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Farm Manager, Punjab',
      content: 'AgriBotics has transformed our farming operations. The soil health monitoring alone has increased our yield by 15% this season.',
      image: '👨‍🌾'
    },
    {
      name: 'Maria Santos',
      role: 'Agricultural Consultant, Mexico',
      content: 'The mobile app is intuitive and the AI disease detection is incredibly accurate. Our farmers love using it daily.',
      image: '👩‍🌾'
    },
    {
      name: 'David Thompson',
      role: 'Large-Scale Farmer, California',
      content: 'Investing in AgriBotics robotics was the best decision for our operation. The autonomous systems are reliable and cost-effective.',
      image: '👨‍💼'
    },
    {
      name: 'Aisha Okafor',
      role: 'Sustainable Agriculture Advocate, Nigeria',
      content: 'The platform helps smallholder farmers compete with larger operations. Data-driven farming is now accessible to everyone.',
      image: '👩‍💻'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 lg:py-32 w-full bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-[#0d1c17]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111816] dark:text-white mb-4 leading-tight">
            What Farmers Are Saying
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Real experiences from farmers around the world transforming their operations with AgriBotics.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonials Carousel */}
          <div className="bg-white dark:bg-[#1E332A] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-[#2A453A] min-h-[350px] flex flex-col justify-between">
            {/* Content */}
            <div className="mb-8">
              <div className="flex gap-4 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-primary">star</span>
                ))}
              </div>
              <p className="text-xl md:text-2xl text-[#111816] dark:text-white font-light leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-[#2A453A]">
              <div className="text-4xl">{testimonials[currentIndex].image}</div>
              <div>
                <h4 className="font-bold text-[#111816] dark:text-white text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center size-12 rounded-full bg-primary hover:bg-[#0fb881] text-[#10221c] shadow-lg transition-all transform hover:scale-110"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 dark:bg-gray-600 w-3 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center size-12 rounded-full bg-primary hover:bg-[#0fb881] text-[#10221c] shadow-lg transition-all transform hover:scale-110"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

import { useState } from 'react'

function FeaturesComparison() {
  const [selectedPlan, setSelectedPlan] = useState('mobile')

  const features = {
    mobile: {
      name: 'Mobile App',
      icon: 'smartphone',
      color: 'from-blue-500 to-cyan-500',
      items: [
        { feature: 'Real-time Soil Monitoring', included: true },
        { feature: 'AI Disease Detection', included: true },
        { feature: 'Weather Alerts', included: true },
        { feature: 'Market Price Tracking', included: true },
        { feature: 'Offline Mode', included: false },
        { feature: 'Custom Reports', included: false }
      ]
    },
    sensors: {
      name: 'IoT Sensors',
      icon: 'sensors',
      color: 'from-green-500 to-emerald-500',
      items: [
        { feature: 'Soil Health Monitoring', included: true },
        { feature: '24/7 Data Collection', included: true },
        { feature: 'pH & Nutrient Tracking', included: true },
        { feature: 'Wireless Connectivity', included: true },
        { feature: 'Mobile Integration', included: true },
        { feature: 'Custom Reports', included: false }
      ]
    },
    robotics: {
      name: 'Autonomous Robots',
      icon: 'precision_manufacturing',
      color: 'from-purple-500 to-pink-500',
      items: [
        { feature: 'Autonomous Weeding', included: true },
        { feature: '24/7 Operation', included: true },
        { feature: 'Solar Charging', included: true },
        { feature: 'AI Navigation', included: true },
        { feature: 'Remote Monitoring', included: true },
        { feature: 'Custom Missions', included: true }
      ]
    }
  }

  const current = features[selectedPlan]

  return (
    <section className="py-20 lg:py-32 w-full bg-gray-50 dark:bg-[#0B1713]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111816] dark:text-white mb-4 leading-tight">
            Choose Your Solution
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Select a product to explore its features and capabilities.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {Object.entries(features).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setSelectedPlan(key)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold transition-all transform ${
                selectedPlan === key
                  ? `bg-gradient-to-r ${data.color} text-white shadow-lg scale-105`
                  : 'bg-white dark:bg-[#1E332A] text-[#111816] dark:text-white border-2 border-gray-200 dark:border-[#2A453A] hover:border-primary'
              }`}
            >
              <span className="material-symbols-outlined">{data.icon}</span>
              {data.name}
            </button>
          ))}
        </div>

        {/* Features Display */}
        <div className="max-w-2xl mx-auto">
          <div className={`bg-gradient-to-br ${current.color} rounded-t-3xl p-8 text-white`}>
            <div className="flex items-center gap-4 mb-2">
              <span className="material-symbols-outlined text-5xl">{current.icon}</span>
              <h3 className="text-3xl font-bold">{current.name}</h3>
            </div>
            <p className="text-white/90">Explore what this solution offers</p>
          </div>

          <div className="bg-white dark:bg-[#1E332A] rounded-b-3xl p-8 border-2 border-t-0 border-gray-200 dark:border-[#2A453A]">
            <div className="space-y-4">
              {current.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-[#152620] hover:bg-gray-100 dark:hover:bg-[#1f3a32] transition-colors"
                >
                  <div className={`flex-shrink-0 size-6 rounded-full flex items-center justify-center ${
                    item.included
                      ? 'bg-primary'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <span className="material-symbols-outlined text-white text-sm">
                      {item.included ? 'check' : 'close'}
                    </span>
                  </div>
                  <span className={`text-lg font-medium ${
                    item.included
                      ? 'text-[#111816] dark:text-white'
                      : 'text-gray-400 dark:text-gray-600 line-through'
                  }`}>
                    {item.feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 h-12 px-6 rounded-xl bg-primary hover:bg-[#0fb881] text-[#10221c] font-bold shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesComparison

import { Award, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-charcoal-800 via-charcoal-700 to-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Premium Flour Mill Machinery
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Manufacturing excellence in flour grinding technology since inception.
              ISO 9001:2015 certified manufacturer of high-quality Aata Chakki machines.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-gold-400 to-gold-500 text-charcoal-900 px-8 py-3 rounded-lg font-semibold hover:from-gold-500 hover:to-gold-600 transition-all shadow-lg"
              >
                View Products
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gold-400 text-gold-400 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 hover:text-charcoal-900 transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src="https://images.pexels.com/photos/7937473/pexels-photo-7937473.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Flour mill machinery"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <Award className="w-12 h-12 mb-4 text-gold-400" />
            <h3 className="text-xl font-bold mb-2">ISO Certified</h3>
            <p className="text-gray-300">ISO 9001:2015 certified manufacturing processes ensuring top quality</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <Shield className="w-12 h-12 mb-4 text-gold-400" />
            <h3 className="text-xl font-bold mb-2">Durable Design</h3>
            <p className="text-gray-300">Stainless steel construction with copper winding motors for longevity</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <Zap className="w-12 h-12 mb-4 text-gold-400" />
            <h3 className="text-xl font-bold mb-2">High Performance</h3>
            <p className="text-gray-300">Multiple motor options from 1.25 HP to 5 HP for varied requirements</p>
          </div>
        </div>
      </div>
    </section>
  );
}

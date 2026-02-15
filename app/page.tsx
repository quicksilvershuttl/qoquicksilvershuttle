import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MapPin, Clock, Star, Shield, DollarSign,
  Users, Car, Plane, CheckCircle, ArrowRight, Calendar, Wifi, Battery, Check
} from 'lucide-react';
import FadeIn from './components/FadeIn';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Home page images/Airport-Shuttle-Services.webp"
            alt="Quicksilver Luxury Fleet"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90 mix-blend-multiply"></div>
        </div>

        <div className="container-custom relative z-10">
          <FadeIn className="text-center text-white">
            <div className="inline-block mb-6 px-6 py-2 bg-slate-800/50 backdrop-blur-md rounded-full border border-amber-500/30">
              <p className="text-sm font-semibold tracking-widest text-amber-400 uppercase">Est. 1982 • Kansas City</p>
            </div>

            <h1 className="mb-6 font-display font-extrabold leading-tight text-4xl md:text-6xl lg:text-7xl">
              Quicksilver Airport Shuttle <br />
              <span className="text-amber-500">
                &amp; Car Service
              </span>
            </h1>

            <p className="text-2xl md:text-3xl mb-4 font-light text-slate-200">The Gold Standard in</p>
            <a href="tel:913-262-0905" className="text-3xl md:text-5xl font-bold mb-8 block text-amber-400 hover:text-amber-300 transition-colors font-display">
              913-262-0905
            </a>

            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-slate-300 font-light leading-relaxed">
              Serving Kansas City International Airport (MCI) with uncompromised luxury and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 w-full max-w-2xl mx-auto">
              <Link
                href="/reservation"
                className="btn btn-primary text-xl w-full sm:w-auto"
              >
                <span>Book A Reservation</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
              </Link>
              <Link href="/contact" className="btn btn-secondary text-xl w-full sm:w-auto">
                Contact Support
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-center mb-8 font-display">Welcome to Quicksilver <span className="text-amber-600">Airport Shuttle</span></h2>
              <p className="text-xl text-center text-gray-600 mb-8 font-light">
                Kansas City Airport Shuttle and Airport Car Service
              </p>

              <div className="text-lg text-gray-700 space-y-6 mb-12 text-center max-w-3xl mx-auto">
                <p>
                  Quicksilver Airport Shuttle offers premium dedicated airport car service and airport shuttle service, 24/7 to MCI (KCI) airport, Wheeler Executive Airport, major venues such as Arrowhead, Kauffman (home of our World Series Champions), Cricket Amphitheater, Museums, Sprint Center and many others. Since 1982.
                </p>
                <p>
                  We also service colleges and universities as a preferred transportation provider to Kansas University (KU), Kansas State University (KSU), Pittsburg State, Washburn University, and many other schools.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'The Lowest Rates',
                  description: 'Quicksilver airport shuttle offer lowest rates to and from Kansas airport, from any destination.',
                  image: '/Home page images/2019-11-05-2-1.png'
                },
                {
                  title: 'Point to Point',
                  description: 'Quicksilver Airport car service offer point to point private car service',
                  image: '/Home page images/2019-11-05-5.png'
                },
                {
                  title: 'Quick and Easy Reservation',
                  description: 'Quicksilver Kansas City airport Shuttle Enjoy 24/7 pick-up and return service to and from Kansas City Airport.',
                  image: '/Home page images/2019-11-05-9.png'
                },
                {
                  title: 'Drop-Off Locations',
                  description: 'From Kansas City to Kansas City Missouri and Overland Park and Lenexa.',
                  image: '/Home page images/2019-11-05-2-1.png'
                }
              ].map((feature, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="card p-6 h-full flex flex-col group hover:bg-slate-50 transition-colors relative overflow-hidden text-center items-center">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                    <div className="relative w-full h-40 mb-6 transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-amber-600 transition-colors font-display relative z-10">{feature.title}</h3>
                    <p className="text-gray-600 relative z-10">{feature.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Everything Goes According Section */}
      <section className="section bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="container-custom relative z-10">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 font-display">Quicksilver Airport Shuttle Ensures<br /><span className="text-amber-500">Everything Goes According to Plan</span></h2>
            <p className="text-xl text-slate-300 mb-8 font-light">
              Your satisfaction is our priority. Experience superior quality, safety, and the fastest airport shuttle service in town without ever compromising your schedule.
            </p>
            <p className="text-lg text-slate-400 border-t border-slate-800 pt-8 mt-8">
              Serving Kansas City since 1982 with pride and professionalism.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-white text-xl">
                Contact Us Today
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vehicles / Fleet */}
      <section className="section bg-white">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="mb-4 font-display">Book Vehicles of Your Choice for <span className="text-amber-600">Kansas City Airport</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our fleet features the latest models, meticulously maintained for your comfort and safety.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Economy Class', price: 'From $35', image: '/Home page images/Economy Class.png' },
              { name: 'Saloon Class', price: 'From $55', image: '/Home page images/Saloon Class.png' },
              { name: 'Business Class', price: 'From $75', image: '/Home page images/Business Class.png' }
            ].map((vehicle, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card p-8 text-center hover:shadow-2xl">
                  <div className="relative w-full h-48 mb-6 group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-display">{vehicle.name}</h3>
                  <p className="text-3xl font-bold text-amber-600 mb-6 font-display">{vehicle.price}</p>
                  <Link href="/reservation" className="btn btn-primary w-full shadow-lg shadow-amber-500/20">
                    Book Now
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Easy to Book Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <FadeIn className="text-center mb-12">
            <h2 className="text-center mb-12 font-display">Easy to book Airport Shuttle and Airport car Service</h2>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-gray-700 text-center mb-8">
                Quicksilver airport shuttle booking procedure is easy and user-friendly. Our website and booking system are easily navigable. You can book airport shuttle or airport car service with us from anywhere and everywhere you want to.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Car size={32} />, text: 'Comfortable, reliable and luxurious vehicles' },
              { icon: <DollarSign size={32} />, text: 'All-inclusive, fixed price' },
              { icon: <Clock size={32} />, text: '24/7 availability' },
              { icon: <Plane size={32} />, text: 'Airport shuttle or Airport car service' },
              { icon: <CheckCircle size={32} />, text: 'No additional fee' },
              { icon: <Shield size={32} />, text: 'Fast, safe and courteous drivers' }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="card p-6 flex items-center gap-4 hover:border-amber-500/30 transition-colors">
                  <div className="text-amber-500 flex-shrink-0 bg-amber-50 p-3 rounded-full">{item.icon}</div>
                  <p className="font-semibold text-gray-700">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn btn-outline text-xl">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* University Deals */}
      <section className="section bg-white">
        <div className="container-custom">
          <FadeIn className="text-center mb-12">
            <h2 className="mb-4 font-display">Our Deals</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Baker University', price: '$135.00' },
              { name: 'Barclay College', price: '$600.00' },
              { name: 'Benedictine College', price: '$65.00' },
              { name: 'Bethany College', price: '$260.00' }
            ].map((deal, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card p-8 text-center hover:shadow-2xl">
                  <h3 className="text-xl font-bold mb-4 font-display">{deal.name}</h3>
                  <p className="text-3xl font-bold text-amber-600 mb-6 font-display">{deal.price}</p>
                  <Link href="/reservation" className="btn-outline w-full hover:bg-amber-500 hover:text-white hover:border-amber-500">
                    Book Now
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Traveling For Work */}
      <section className="section bg-slate-900 text-white">
        <div className="container-custom">
          <FadeIn className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8 font-display">Traveling For Work?</h2>
            <p className="text-xl text-center text-slate-300 mb-12 font-light">
              Work travel can be draining and stressful. But your work cannot wait. Quicksilver Airport Shuttle enables you to travel for work with style, comfort and safety, and that too, at competitive rates.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Easy to book',
                  description: 'Our booking procedure is easy and user-friendly. Our website and booking system are easily navigable. You can book Airport Shuttle or Airport Car service, without any additional fee or requirements.'
                },
                {
                  title: 'Book Your Ride Instantly',
                  description: 'Getting late for a meeting? Book your ride instantly with Quicksilver Airport Shuttle. We make sure you reach your destination on time.'
                },
                {
                  title: 'Relaxed From door to door',
                  description: 'Our chauffeurs assist you with luggage and ensure your comfort. You can relax or prepare for your meeting while we take care of the road.'
                },
                {
                  title: 'Arriving at your destination',
                  description: 'We drop you right at the entrance, ensuring you arrive refreshed and ready. No parking hassles, no long walks.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-amber-500 font-display">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="mb-4 font-display uppercase tracking-widest text-slate-400 text-sm">Why Choose Us</h2>
            <h3 className="text-4xl font-bold font-display text-slate-900">BENEFITS</h3>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <DollarSign size={40} />, title: 'Fixed Price', description: 'No hidden fees. The price you see is the price you pay.' },
              { icon: <Clock size={40} />, title: 'No Fee & Tips', description: 'Transparent pricing with no mandatory tips or extra charges.' },
              { icon: <Car size={40} />, title: 'Luxury cars', description: 'Travel in style with our premium fleet of sedans and SUVs.' },
              { icon: <Star size={40} />, title: 'Full Satisfaction', description: 'We guarantee your satisfaction with our professional service.' },
              { icon: <MapPin size={40} />, title: 'Nationwide Ride', description: 'Connecting you to major destinations across the region.' },
              { icon: <Users size={40} />, title: 'No smoking & clean', description: 'Pristine, non-smoking vehicles for your health and comfort.' }
            ].map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card p-8 text-center group hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors text-amber-500 shadow-sm">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* A Car for Every Budget */}
      <section className="section bg-white">
        <div className="container-custom">
          <FadeIn className="text-center mb-8">
            <h2 className="text-center mb-8 font-display">A Car for Every Budget and Occasion</h2>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-gray-700 text-center mb-8">
                Economy, Business or First Class. Quicksilver Airport Shuttle offer airport shuttle and airport car service to cover every budget and occasion.
              </p>
              <p className="text-lg text-gray-700 text-center mb-8">
                From our economy cars to business class sedans and luxury SUVs. We have a vehicle for every budget and occasion. Whether you are travelling alone or with a group, for business or pleasure. We have a vehicle that fits your needs.
              </p>
              <p className="text-lg text-gray-700 text-center mb-8">
                And for those special occasions, we offer our first class luxury sedans and SUVs. Perfect for weddings, proms, anniversaries or just a night out on the town.
              </p>

              <div className="text-center">
                <Link href="/contact" className="btn btn-primary text-xl px-12">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl mt-12 bg-slate-900 group">
              {/* Fixed Image Logic roughly - placeholder if original image unknown */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white opacity-50 text-xl">Quicksilver Fleet Experience</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="mb-4 font-display">What Our Customers Are Saying About Us...</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card p-8">
                  <div className="flex gap-1 text-amber-500 mb-4">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                  </div>
                  <p className="text-gray-600 mb-6 italic">"Excellent service. Driver was on time and very professional. Vehicle was clean and comfortable. Highly recommended!"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Happy Customer</p>
                      <p className="text-xs text-slate-500">Google Review</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
              <div className="text-4xl font-bold text-slate-900 mb-1">4.8/5</div>
              <div className="flex gap-1 text-amber-500 mb-2">
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} strokeWidth={1} style={{ fillOpacity: 0.8 }} />
              </div>
              <p className="text-sm text-gray-500 font-medium">Based on 150+ Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
        <div className="container-custom text-center relative z-10">
          <FadeIn>
            <h2 className="mb-6 font-display">Ready to Book Your Ride?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-300 font-light">
              Experience the Quicksilver difference. Book online or call us 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 w-full max-w-2xl mx-auto">
              <Link href="/reservation" className="btn btn-primary text-2xl w-full sm:w-auto px-12">
                Book Online Now
              </Link>
              <a href="tel:913-262-0905" className="btn btn-secondary text-2xl w-full sm:w-auto px-12 flex items-center justify-center gap-3">
                <Phone size={24} />
                Call 913-262-0905
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

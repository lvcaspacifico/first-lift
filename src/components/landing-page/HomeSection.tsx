import heroImage from '../../assets/base.png';
import bannerImage from '../../assets/banner-fl-image.jpg'

export default function HomeSection() {
  return (
    <section id="home" 
    className="min-h-screen flex items-center justify-center text-white pt-20 relative"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-fl-blue to-blue-900"
        style={{
          backgroundImage: `url(${bannerImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'brightness(30%)',
          zIndex: 0
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 desktop:px-8 desktop:grid desktop:grid-cols-2 desktop:text-left mobile:text-center mobile:flex mobile:flex-col mobile:px-6 mobile:py-10 gap-12 items-center relative z-10">
        <div className="desktop:order-1 mobile:order-2 desktop:m-0 mobile:mt-2">
          <h1 className="text-4xl mobile:text-5xl desktop:text-6xl font-bold mb-6">
            Your <span className='marker-animate'>First Lift</span> to the Skies Starts Here
          </h1>
          <p className="text-lg mobile:text-xl mb-8 text-gray-200">
            Professional flight training with FAA-certified instructors. Whether you're pursuing a career or flying for passion, we'll get you there safely and confidently.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-fl-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 mobile:mb-4"
          >
            Book Your Discovery Flight
          </a>
        </div>
        <div className="mobile:order-1 w-full desktop:z-0 mobile:-z-1 desktop:brightness-75 mobile:brightness-50">
          <div className="w-full mobile:h-64 desktop:h-96 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
            <img src={heroImage} alt="FirstLift Aircraft"
            className="w-full rounded-lg shadow-2xl " />
          </div>
        </div>
      </div>
    </section>
  );
}
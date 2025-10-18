import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      program: 'Private Pilot License',
      text: 'FirstLift made my dream of flying a reality. The instructors were patient, knowledgeable, and truly invested in my success. I passed my checkride on the first try!',
    },
    {
      name: 'James Rodriguez',
      program: 'Commercial Pilot License',
      text: 'The training here is top-notch. Professional environment, modern aircraft, and flexible scheduling that worked perfectly with my job. Highly recommend!',
    },
    {
      name: 'Emily Chen',
      program: 'Instrument Rating',
      text: 'Best decision I made for my aviation career. The instructors focus on real-world scenarios and safety. I feel confident flying in any conditions now.',
    },
    {
      name: 'Michael Thompson',
      program: 'Flight Instructor',
      text: 'FirstLift prepared me not just to be a pilot, but to be an excellent instructor. The CFI program is comprehensive and the support is incredible.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 mobile:px-6 desktop:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl desktop:text-4xl font-bold text-black mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real experiences from real pilots who trained with FirstLift
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 desktop:p-12 relative">
          <Quote className="absolute top-4 left-4 w-12 h-12 text-fl-blue opacity-10" />
          
          <div className="relative z-10">
            <p className="text-xl text-gray-700 mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <div>
              <p className="font-bold text-black text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-fl-blue">
                {testimonials[currentIndex].program}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full hover:cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? 'bg-fl-blue w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { GraduationCap, Compass, Briefcase, Users } from 'lucide-react';

export default function ProgramsSection() {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Private Pilot License (PPL)',
      description: 'Start your aviation journey with comprehensive training covering all fundamentals of safe flying.',
      duration: '6-8 months',
    },
    {
      icon: Compass,
      title: 'Instrument Rating (IR)',
      description: 'Master flying in all weather conditions with advanced instrument training and navigation skills.',
      duration: '3-4 months',
    },
    {
      icon: Briefcase,
      title: 'Commercial Pilot License (CPL)',
      description: 'Transform your passion into a profession. Get certified to fly commercially and earn as a pilot.',
      duration: '4-6 months',
    },
    {
      icon: Users,
      title: 'Flight Instructor (CFI)',
      description: 'Share your expertise while building flight hours. Train the next generation of aviators.',
      duration: '2-3 months',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 mobile:px-6 desktop:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl desktop:text-4xl font-bold text-black mb-4">
            Flight Training Programs
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the program that matches your aviation goals. All courses include ground school, flight hours, and exam preparation.
          </p>
        </div>

        <div className="grid mobile:grid-cols-1 desktop:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-lg hover:cursor-pointer p-8 hover:border-fl-blue transition-colors duration-300"
            >
              <program.icon className="w-12 h-12 text-fl-blue mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-black">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <p className="text-sm text-fl-blue font-semibold">
                Duration: {program.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
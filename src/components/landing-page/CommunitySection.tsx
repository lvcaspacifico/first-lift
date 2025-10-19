import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

import post1 from '../../assets/posts/post1.png';
import post2 from '../../assets/posts/post3.png';
import post3 from '../../assets/posts/post2.png';
import post4 from '../../assets/posts/post4.png';

export default function CommunitySection() {

  const posts = [
    {
      image: post1,
      caption: 'Beautiful morning flight over the city 🌅',
      platform: 'Instagram',
      likes: '1.1K'
    },
    {
      image: post2,
      caption: 'Congrats to John on his first solo flight! 🎉',
      platform: 'Instagram',
      likes: '2.8K'
    },
    {
      image: post3,
      caption: 'Our fleet is ready for your training ✈️',
      platform: 'Instagram',
      likes: '3.3K'
    },
    {
      image: post4,
      caption: 'Sunset flight session with students 🧡',
      platform: 'Instagram',
      likes: '7.1K'
    },
  ];

  return (
    <section id="community" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 mobile:px-6 desktop:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl desktop:text-4xl font-bold mb-4">
            Follow Our Journey
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join our community and see what's happening at FirstLift
          </p> 
        </div>

        <div className="grid mobile:grid-cols-1 desktop:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden desktop:p-4 mobile:p-6">
              <div className="w-full aspect-square bg-white flex items-center justify-center rounded-lg">
                <img src={post.image} alt={post.caption} className="w-full h-full object-cover rounded-lg border-1 border-gray-300" />
              </div>
              <div className="p-4">
                <div className='flex flex-row justify-between mb-1'>
                  <p className="text-sm italic text-black">@firstlift</p>
                  <p className="desktop:text-sm mobile:text-md font-bold text-black"><span className='hover:cursor-pointer'>❤️</span> {post.likes}</p>
                </div>
                <p className="desktop:text-sm mobile:text-md text-black">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
           <div className="flex justify-center gap-6 mt-16">
            <a href="#" className="hover:text-fl-blue transition-colors duration-300">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-fl-blue transition-colors duration-300">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-fl-blue transition-colors duration-300">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-fl-blue transition-colors duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
      </div>
    </section>
  );
}
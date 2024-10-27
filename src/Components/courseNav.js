import { Link } from 'react-router-dom';

const callouts = [
  {
    name: 'CECS 326',
    description: 'Operating Systems',
    imageSrc: 'https://i.postimg.cc/CMbkN3JP/istockphoto-1386531981-612x612.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/',
  },
  {
    name: 'CECS 328',
    description: 'Algorithms',
    imageSrc: 'https://i.postimg.cc/Dzt4Q6G3/istockphoto-1386341272-612x612.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/',
  },
  {
    name: 'CECS 378',
    description: 'Intro to Computer Security Principles',
    imageSrc: 'https://i.postimg.cc/Wb2F7hdz/istockphoto-1331943958-612x612.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/', // Link to the Calendar component
  },
  {
    name: 'EE 381',
    description: 'Probability and Statistics - Computing',
    imageSrc: 'https://i.postimg.cc/8z7CyWNp/360-F-211732841-Gknumxwh-Sdcei-B38k7s8fpue-Xh-ZQ6-RDC.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/', // Link to the Calendar component
  },
  {
    name: 'ENGR 361',
    description: 'Scientific Research Communication',
    imageSrc: 'https://i.postimg.cc/Zq35mSWX/istockphoto-175489635-612x612.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/', // Link to the Calendar component
  },
];

export default function Example() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Courses</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
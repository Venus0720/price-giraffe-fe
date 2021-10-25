import {
  BellIcon,
  TrendingUpIcon,
  ChartBarIcon,
  DocumentReportIcon
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Discover new trends',
    description:
      'Get access to data across all marketplaces to make vital buying and selling decisions.',
    icon: TrendingUpIcon
  },
  {
    name: 'Set real time alerts',
    description:
      'Create smart alerts that tracks the changes in prices real time and updates you if the prices hit your target. ',
    icon: BellIcon
  },
  {
    name: 'Premium analytics',
    description:
      'Perform all your E-commerce product research on our platform using fresh data and analytic tools provided by us.',
    icon: ChartBarIcon
  },
  {
    name: 'Export detailed reports',
    description: 'Receive detailed E-commerce analytic reports delivered directly to your inbox on a daily basis.',
    icon: DocumentReportIcon
  }
];

export default function Example() {
  return (
    <div className="pt-28 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Retrieve data analyics & discover trends
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Access our premium database of fresh data collected daily that will keep you up to date on the latest trends and changes
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';

export default function Breadcrumb({ text }) {
  return (
    <div className="flex items-center gap-0.5">
      <a href="/" className="w-3 h-3">
        <HomeIcon />
      </a>
      <div className="w-3 h-3">
        <ChevronRightIcon />
      </div>
      <div className="text-13px">{text}</div>
    </div>
  );
}

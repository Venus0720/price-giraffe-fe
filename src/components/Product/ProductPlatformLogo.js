import { classNames, platformLogo } from 'helpers';

export default function ProductPlatformLogo({ platform = '', sizeClass = '', className = '' }) {
  const platformSvg = platformLogo(platform);

  if (platformSvg) {
    return (
      <div className={classNames(className, sizeClass)}>
        <img src={platformSvg} alt={platform} className={sizeClass} />
      </div>
    );
  }

  return <div className={classNames('text-13px truncate', sizeClass, className)}>{platform}</div>;
}

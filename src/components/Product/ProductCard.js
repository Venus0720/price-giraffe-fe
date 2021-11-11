import ProductFavorite from 'components/Product/ProductFavorite'
import { classNames, platformLogo } from 'helpers'

export default function ProductCard({ product, imageBorder = false }) {
  const platform = product.all_platforms && product.all_platforms[0]
  const platformSvg = platformLogo(platform)

  return (
    <a href={'/products/' + product.id}>
      <div className="relative max-w-screen-sm h-full bg-white rounded-lg">
        <div
          className={classNames(
            'aspect-w-1 aspect-h-1 bg-white',
            imageBorder
              ? 'rounded-lg border border-grey-border'
              : 'rounded-t-lg'
          )}
        >
          {product.thumbnail && (
            <img
              src={product.thumbnail}
              alt={product.name}
              className={classNames(
                'object-cover',
                imageBorder ? 'rounded-lg' : 'rounded-t-lg'
              )}
            />
          )}
        </div>
        <div className="p-18px">
          <div className="font-semibold text-13px line-clamp-2 mb-5px">
            {product.product_name}
          </div>
          <div className="font-bold text-15px text-primary mb-21px">
            From ${product.min_price || 0}
          </div>
          <div className="flex items-center justify-between gap-2">
            {product.number_sellers && (
              <div className="flex-grow text-13px">
                Compare {product.number_sellers} Prices
              </div>
            )}
            {platformSvg ? (
              <div className="max-w-64px max-h-27px">
                <img src={platformSvg} alt={platform} />
              </div>
            ) : (
              <div className="max-w-64px text-13px">{platform}</div>
            )}
          </div>
        </div>
        <ProductFavorite productId={product.id} isFavorite={product.is_favor} />
      </div>
    </a>
  )
}

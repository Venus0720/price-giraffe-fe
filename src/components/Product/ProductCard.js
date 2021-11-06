import { useContext, useState } from 'react'
import images from 'assets/images'
import { UserContext } from 'contexts/User'
import ProductService from 'services/product'

const PlatformImages = {
  AliExpress: images.AliExpressLogo,
  Amazon: images.AmazonLogo,
  Carousell: images.CarousellLogo,
  Ebay: images.EbayLogo,
  Lazada: images.LazadaLogo,
  Qoo10: images.Qoo10Logo,
  Shopee: images.ShopeeLogo
}

export default function ProductCard({ product }) {
  const [state] = useContext(UserContext)
  const [isFavorite, setIsFavorite] = useState(product.is_favor)
  const prodSvc = new ProductService()

  async function onClick(e) {
    e.preventDefault()

    if (!state.loggedIn) {
      return
    }

    try {
      if (isFavorite) {
        await prodSvc.removeFavorite(product.id)
        setIsFavorite(false)
      } else {
        await prodSvc.addFavorite(product.id)
        setIsFavorite(true)
      }
    } catch (err) {
      alert(err.message)
    }
  }

  const prodThumb = product.thumbnail && (
    <img
      src={product.thumbnail}
      alt={product.name}
      className="object-cover rounded-t-lg"
    />
  )

  return (
    <a href={'/products/' + product.id}>
      <div className="relative max-w-screen-sm h-full bg-white rounded-lg">
        <div className="aspect-w-1 aspect-h-1 rounded-md bg-white">
          {prodThumb}
        </div>
        <div className="p-18px">
          <div className="font-semibold text-13px line-clamp-2 mb-5px">
            {product.product_name}
          </div>
          <div className="font-bold text-15px text-primary mb-21px">
            From ${product.min_price}
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex-grow text-13px">Compare X Prices</div>
            <div className="max-w-64px max-h-27px">
              <img
                src={PlatformImages[product.all_platforms[0]]}
                alt="Lazada"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2" onClick={onClick}>
          <img
            src={isFavorite ? images.HeartIconFill : images.HeartIcon}
            alt="Like"
            className="w-29px h-29px md:w-35px md:h-35px"
          />
        </div>
      </div>
    </a>
  )
}

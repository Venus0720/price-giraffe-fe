import { useState } from 'react'
import images from 'assets/images'
import { classNames } from 'helpers'
import ProductService from 'services/product'
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from 'reducers/modalReducer'

export default function ProductFavorite({
  productId,
  isFavorite,
  top = 'top-2',
  right = 'right-2',
  className = ''
}) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user || null)
  const [isFavor, setIsFavor] = useState(isFavorite)
  const prodSvc = new ProductService()

  async function onClick(e) {
    e.preventDefault()

    if (!user) {
      dispatch(toggleModal('LOGIN'))
      return
    }

    try {
      if (isFavor) {
        await prodSvc.removeFavorite(productId)
        setIsFavor(false)
      } else {
        await prodSvc.addFavorite(productId)
        setIsFavor(true)
      }
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div
      className={classNames(
        'absolute cursor-pointer select-none',
        top,
        right,
        className
      )}
      onClick={onClick}
    >
      <img
        src={isFavor ? images.HeartIconFill : images.HeartIcon}
        alt="Favorite"
        className="w-29px h-29px md:w-35px md:h-35px"
      />
    </div>
  )
}

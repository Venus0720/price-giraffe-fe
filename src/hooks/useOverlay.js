import { useSelector, useDispatch } from 'react-redux'
import { toggleOverlay } from 'reducers/overlayReducer'

const useOverlay = () => {
  const dispatch = useDispatch()
  const open = useSelector((state) => state.overlay)

  const setOpen = () => {
    dispatch(toggleOverlay())
  }

  return [open, setOpen]
}

export default useOverlay

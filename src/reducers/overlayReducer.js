const overlayReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_OVERLAY':
      console.log(state)
      return !state

    default:
      return state
  }
}

export const toggleOverlay = () => {
  return {
    type: 'TOGGLE_OVERLAY'
  }
}

export default overlayReducer

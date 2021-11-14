const modalReducer = (state = '', action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return action.modal
    default:
      return state
  }
}

export const toggleModal = (modalName) => {
  return {
    type: 'TOGGLE_MODAL',
    modal: modalName || null
  }
}

export default modalReducer

export const showModal = (randomId) => {
  document.getElementById(`my_modal_${randomId}`)?.showModal();

  return randomId;
};

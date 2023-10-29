export const showModal = (randomId: string) => {
  document.getElementById(`my_modal_${randomId}`)?.showModal();

  return randomId;
};

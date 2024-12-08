import { useState } from 'react';

/**
 * Handling modal base operations.
 */
const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => setOpen(true);

  const handleModalClose = () => setOpen(false);

  return { open, handleModalOpen, handleModalClose };
};

export default useModal;

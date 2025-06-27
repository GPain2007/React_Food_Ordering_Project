import { createPortal } from "react-dom";

import { useRef, useEffect } from "react";

export default function Model({
  children,
  open,
  className = "",
  onClose,
  ...props
}) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog
      ref={dialog}
      className={`modal ${className}`}
      {...props}
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

import React, { useState } from "react";

export const useNewEdit = (initialValue = null) => {
  const [editIncExp, setEditIncExp] = useState(initialValue);
  const newEditIncExp = () => setEditIncExp(true);
  //const close = () => setIsOpen(false);
  return { editIncExp, newEditIncExp };
};

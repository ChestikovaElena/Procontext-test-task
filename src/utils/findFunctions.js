const getListById = (lists, listId) => {
  return lists.find((list) => list.id === listId);
};

const getItemById = (lists, listId, itemId) => {
  return getListById(lists, listId).items.find((item) => item.id === itemId);
};

export { getItemById, getListById };

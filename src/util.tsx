interface ItemWithId {
  id: string;
}

export const updateListById = <T extends ItemWithId>(list: T[], item: T) => {
  const index = list.findIndex((l) => l.id === item.id);
  if (index === -1) return list;
  const newList = [...list];
  newList[index] = item;
  return newList;
};

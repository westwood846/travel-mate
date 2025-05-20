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

export const updateListByIdFn = <T,>(
  list: T[],
  item: T,
  idFn: (item: T) => string
) => {
  for (const i of list) {
    if (typeof i === "object" && i !== null && "id" in i) {
      throw new Error("Items with id property can't use this function");
    }
  }
  const withIds = list.map((i) => ({ id: idFn(i), ...i }));
  const newList = updateListById(withIds, { id: idFn(item), ...item });
  for (const i of list as (T & { id?: string })[]) {
    delete i.id;
  }
  return newList;
};

import type { MenuItem } from "../types";

type itemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItem({ item, addItem }: itemProps) {
  return (
    <>
      <button
        className=" border-[#262322] border-2 flex justify-between p-4 w-full hover:bg-[#F3AB65] rounded-lg"
        onClick={() => addItem(item)}
      >
        <p className=" text-gray-50">{item.name}</p>
        <p className=" text-gray-50 font-bold">${item.price}</p>
      </button>
    </>
  );
}

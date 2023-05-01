import { AiFillCaretDown } from "react-icons/ai";

export const Dropdown = () => {
  return (
    <>
      <div className="">
        <label htmlFor="select" className="px-4">
          Cars
        </label>
        <div
          className="w-full flex justify-between items-center py-3 px-4 border border-[#858C94] rounded-lg"
          id="select"
        >
          <p>Select</p>
          <AiFillCaretDown className="w-4 h-4" />
        </div>
      </div>
    </>
  );
};

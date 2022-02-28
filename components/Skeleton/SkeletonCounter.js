import SkeletonElement from "./SkeletonElement";
import useDarkMode from "../Hooks/useDarkMode";
import SkeletonAnimations from "./SkeletonAnimations";
export default function SkeletonCounter() {
  return (
    <div className=" relative bg-slate-100 dark:bg-gray-800 rounded-lg overflow-hidden">
      <div className="skeleton--article">
        <div className={`md:col-span-1 col-span-4 px-5`}>
          <div className=" grid grid-cols-2">
            <div className="col-span-1 m-auto">
              <SkeletonElement type={"avatar"} />
            </div>
            <div className="col-span-1 my-auto">
              <SkeletonElement type={"title"} />
              <SkeletonElement type={"text"} />
            </div>
          </div>
        </div>
      </div>
      <SkeletonAnimations />
    </div>
  );
}

import Link from "next/link";
export const Logo = () => {
  return (
    <Link
      href={"/"}
      className="text-4xl font-extrabold flex items-center space-x-2"
    >
      <span>CCTBondee</span>
      <span
        about="circle"
        className="rounded-full h-[25px] w-[25px] bg-red-700"
      />
    </Link>
  );
};

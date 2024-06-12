import Link from "next/link";

const sideBarConfig = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
];

const Sidebar = () => {
  return (
    <div>
      {sideBarConfig.map((val) => {
        return <Link href={val.route}>{val.name}</Link>;
      })}
    </div>
  );
};

export default Sidebar;

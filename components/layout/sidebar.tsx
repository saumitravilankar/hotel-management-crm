import Link from "next/link";
import { Sidebar, Menu, SubMenu, MenuItem, menuClasses } from "react-pro-sidebar";

const SidebarMenu = () => {
  return (
    <>
      <Sidebar className="min-h-screen bg-white rounded text-sm">
        <Menu
          rootStyles={{
            [`.${menuClasses.icon}`]: {
              backgroundColor: "#e1e1e1",
              color: "#344cff",
            },
          }}
        >
          <MenuItem component={<Link href={"/"} />}>Home</MenuItem>
          <MenuItem> Dashboard </MenuItem>
          <SubMenu label="Properties">
            <MenuItem component={<Link href={"about"} />}>List</MenuItem>
            <MenuItem>Add</MenuItem>
          </SubMenu>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SidebarMenu;

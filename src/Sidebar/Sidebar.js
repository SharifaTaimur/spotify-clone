import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./../SidebarOptions/SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "./../StateProvider";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions title="Home" Icon={HomeIcon} />
      <SidebarOptions title="Search" Icon={SearchIcon} />
      <SidebarOptions title="Library" Icon={LibraryMusicIcon} />

      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;

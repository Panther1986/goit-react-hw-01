// src/components/App.jsx

import { Profile } from "./Profile";
import { userData } from "../components/userData";
import friends from "./friends";
import FriendList from "./FriendList";
import FriendListItem from "./FriendListItem";

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
       <FriendList friends={friends} />
    </>
  );
};

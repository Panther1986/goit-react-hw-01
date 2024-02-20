import { FriendListItem } from "./FriendListItem";


export const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map((friend) => {
                return <FriendListItem key={friend.id} friend={friend}/>;
            })}
        </ul>
    );
};


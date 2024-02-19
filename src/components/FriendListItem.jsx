import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <img src={friends.avatar} alt="Avatar" width="48" />
            <p>{ friends.name}</p>
            <p>{friends.isOnline}</p>
        </div>
    );
};

export default FriendListItem;

FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}
import PropTypes from 'prop-types';


export const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;
    return (
        <li>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{isOnline}</p>
        </li>
    );
};


FriendListItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired
};


import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';


export const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;
    return (
        <li className={css.FriendItem}>
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


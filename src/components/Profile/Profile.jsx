import css from "./Profile.module.css"

export const Profile = ({name, tag, location, image, stats}) => (
  <div className={css.profileContainer}>
  <div className={css.profileImg}>
    <img className={css.profileImg}
      src={image}
      alt="User avatar"
    />
            <p className={css.userName}>{name}</p>
            <p>@{tag}</p>
            <p>{location}</p>
  </div>

  <ul className={css.profileList}>
    <li className={css.profileListItem}>
      <span>Followers</span>
                <span>{stats.followers}</span>
    </li>
    <li className={css.profileListItem}>
      <span>Views</span>
                <span>{stats.views}</span>
    </li>
    <li className={css.profileListItem}>
      <span>Likes</span>
                <span>{stats.likes}</span>
    </li>
  </ul>
</div>

);


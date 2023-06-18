import React from 'react';
import { useState, useEffect } from 'react';
import css from './User.module.css';

export const User = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(
    localStorage.getItem(`following_${user.id}`) === 'true'
  );

  const [followersCount, setFollowersCount] = useState(
    parseInt(localStorage.getItem(`followersCount_${user.id}`)) ||
      user.followers
  );

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    setFollowersCount(isFollowing ? followersCount - 1 : followersCount + 1);
  };

  useEffect(() => {
    localStorage.setItem(`following_${user.id}`, isFollowing);
    localStorage.setItem(`followersCount_${user.id}`, followersCount);
  }, [isFollowing, followersCount, user.id]);

  return (
    <div className={css.container}>
      <div className={css.logo} alt="logo"></div>
      <div className={css.box}></div>
      <div className={css.boxLine}>
        <ul className={css.image}></ul>
        <ul className={css.ellipse}></ul>
        <ul>
          <img className={css.avatar} src={user.avatar} alt={user.avatar} />
        </ul>
      </div>

      <div>
        <p className={css.list}>{user.tweets} tweets</p>
        <p className={css.text}>{followersCount.toLocaleString()} followers</p>
      </div>
      <div className={css.formic}>
        <button
          className={css.btn}
          type="button"
          onClick={handleFollowClick}
          style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#EBD8FF' }}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

import css from './UserList.module.css';
import { User } from '../User/User';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const UserList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(3);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://648df2092de8d0ea11e86a17.mockapi.io/users?page=${currentPage}&limit=${perPage}`
        );
        const data = await response.json();
        setUsers(prevUsers => [...prevUsers, ...data]);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };
    fetchUsers();
  }, [currentPage, perPage]);

  const loadMoreUsers = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.list}>
      {users.map((user, idx) => (
        <User key={idx} user={user} />
      ))}
      <div className={css.cardButton}>
        <button
          className={css.button}
          onClick={() => {
            navigate(location?.state?.from ?? '/');
          }}
        >
          Go back
        </button>
        <button className={css.button} onClick={loadMoreUsers}>
          Load more
        </button>
      </div>
    </div>
  );
};

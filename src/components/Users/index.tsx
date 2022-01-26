import React, { useState, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react'
import './user.css';
import { getUser, IData } from '../../services/api';


export function User() {
  const [currentUserId, setCurrentUserId] = useState(1);
  const [user, setUser] = useState<IData>();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoading(true)
    getUser(currentUserId).then((response) => {
      setUser(response);
      setLoading(false);
    }).catch(() => {
      setIsError(true);
      setLoading(false);
    });

  }, [setCurrentUserId]);

  if (isError) {
    return (
      <section>
        <p>Something went wrong...</p>
      </section>
    )
  }

  if (!user || loading) {
    return (
      <section>
        <Spinner
          thickness='4px'
          speed='0.50s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </section>
    );
  }

  return (
    <section>
      <img src={user.avatar} alt="Avatar" />
      <p>{user.first_name} {user.last_name} ({user.id})</p>

      <p>Email: {user.email}</p>

      <div>
        <button onClick={() => setCurrentUserId((prev) => prev - 1)} className='prev'>Prev</button>
        <button onClick={() => setCurrentUserId((prev) => prev + 1)} className='next'>Next</button>
      </div>
    </section>
  )
}

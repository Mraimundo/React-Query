import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Spinner } from '@chakra-ui/react';
import './user.css';
import { getUser } from '../../services/api';


export function UsersWithReactQuery() {
  const [currentUserId, setCurrentUserId] = useState(1);
  const { data, isError, isLoading, isFetching } = useQuery(
    ["users", currentUserId],
    () => getUser(currentUserId),
    { staleTime: 5000 }
  );

  if (isError) {
    return (
      <section>
        <p>Something went wrong...</p>
      </section>
    )
  }

  if (!data || isLoading) {
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
      <img src={data.avatar} alt="Avatar" />
      <p>{data.first_name} {data.last_name} ({data.id})</p>

      <p>Email: {data.email}</p>

      <div>
        <button onClick={() => setCurrentUserId((prev) => prev - 1)} className='prev'>Prev</button>
        <button onClick={() => setCurrentUserId((prev) => prev + 1)} className='next'>Next</button>
      </div>
      {isFetching && <small>We are updating your data.</small>}
    </section>
  )
}


export interface IData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}


export async function getUser(id: number) {
  const request = await fetch(`https://reqres.in/api/users/${id}?delay=1`);
  const response = await request.json();

  if (!request.ok) {
    throw new Error(response.error);
  }

  return response.data as IData;
}


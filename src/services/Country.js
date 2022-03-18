import { client, checkError } from './client';

export default async function getCountries() {
  const response = await client.from('countries').select('*');
  return checkError(response);
}
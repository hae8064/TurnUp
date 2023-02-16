import axios from 'axios';
import useSWR, { Key, Fetcher } from 'swr';
// const fetcher = (url: string) => fetch(url).then((r: any) => r.json());
// https://dummyjson.com/products/category/smartphones
// 'https://dummyjson.com/products/1'
const fetcher = async (url: string) =>
  await axios.get(url).then((res) => console.log(res.data));

export default function useSwrTest() {
  const { data, error } = useSWR(
    'https://dummyjson.com/products/category/smartphones',
    fetcher
  );

  return {
    product: data,
    isError: error,
  };
}

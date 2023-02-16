import axios from 'axios';

const ReactQueryData = async () => {
  const { data } = await axios.get(
    'https://dummyjson.com/products/category/smartphones'
  );
  return data;
};

export default ReactQueryData;

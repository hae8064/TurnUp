import axios from 'axios';

interface dataType {
  title: string;
}
const ReactQueryPost = async (newPostData: dataType) => {
  const { data } = await axios.post(
    'https://dummyjson.com/products/add',
    newPostData
  );
  return data;
};

export default ReactQueryPost;

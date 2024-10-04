import { getAllIds, getItemData } from '../lib/data';

export async function generateStaticParams() {
  const paths = getAllIds();
  return paths.map(path => ({
    id: path.params.id,
  }));
}

export default async function Article({ params }) {
  const item = getItemData(params.id);
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
    </div>
  );
}

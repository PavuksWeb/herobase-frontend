export default async function deleteHeroInfo(id: string) {
  const res = await fetch(`http://localhost:4000/heroes/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Failed to delete hero');
  }

  return res.json();
}

export default function App() {
  const records = await prisma.records.findMany({
    orderBy: { time: 'asc' }
  });
  
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
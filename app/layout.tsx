import { prisma } from "../src/server/db/client";

// export const revalidate = 10;

async function getData() {
  const examples = await prisma.example.findMany();
  return examples;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const examples = await getData();

  return (
    <html>
      <head></head>
      <body>
        <div>{JSON.stringify(examples[0])}</div>
        {children}
      </body>
    </html>
  );
}

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log("session", session);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/sign-in",
        permanent: false,
      },
    };
  }

  return { props: { session } };
}

export default function Dashboard({ session }: any) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {JSON.stringify(session.user)}</p>
    </div>
  );
}

import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/Page";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

type AccountPageProps = {
  searchParams: {
    desiredUsername: string;
  };
};

const AccountPage = async ({ searchParams }: AccountPageProps) => {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams.desiredUsername;

  if (!session) {
    return redirect("/");
  }

  const page = await Page.findOne({ owner: session?.user?.email });

  if (page) {
    return <div>Your page is: /{page.uri}</div>;
  }

  return (
    <div>
      <UsernameForm desiredUsername={desiredUsername} />
    </div>
  );
};

export default AccountPage;

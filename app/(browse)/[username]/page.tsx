import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { UserPageProps } from "@/types";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";
import { isBlockedByUser } from "@/lib/block-service";

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) notFound();
  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) notFound();

  return (
    <div className="flex flex-col gap-y-4">
      <div>{params.username}</div>
      <p>isFollowing: {`${isFollowing}`}</p>
      <Actions isFollowing={isFollowing} userId={user.id} />
    </div>
  );
};
export default UserPage;

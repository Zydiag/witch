import React from "react";
import { currentUser } from "@clerk/nextjs/server";

import { getUserByUsername } from "@/lib/user-service";
import { CreatorPageProps } from "@/types";
// import { StreamPlayer } from "@/components/stream-player";

export default async function CreatorPage({
  params: { username },
}: CreatorPageProps) {
  const externalUser = await currentUser();
  const user = await getUserByUsername(username);

  // if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
  //   throw new Error("Unauthorized");
  // }

  return (
    <div className="h-full">
      {/*

      <StreamPlayer user={user} stream={user.stream} isFollowing={true} />
				*/}
    </div>
  );
}

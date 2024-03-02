"use client";
import { useViewerToken } from "@/hooks/use-viewer-token";
import { StreamPlayerProps } from "@/types";
import { LiveKitRoom } from "@livekit/components-react";
import { Video } from "./video";

export const StreamPlayer = ({
  user,
  stream,
  isFollowing,
}: StreamPlayerProps) => {
  const { token, name, identity } = useViewerToken(user.id);

  if (!token || !name || !identity) {
    return <div>cannot watch</div>;
  }

  return (
    <>
      <LiveKitRoom
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        token={token}
        className="grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full"
      >
        <div
          className="space-y-4 col-span-1 lg:col-span-2
					xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10"
        >
          <Video hostName={user.username} hostIdentity={user.id} />
        </div>
      </LiveKitRoom>
    </>
  );
};

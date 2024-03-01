import { useViewerToken } from "@/hooks/use-viewer-token";
import { StreamPlayerProps } from "@/types";

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
    <div>
      <div>stream player</div>
    </div>
  );
};

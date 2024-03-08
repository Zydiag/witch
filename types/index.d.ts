import { Follow, Stream, User } from "@prisma/client";
import { VariantProps } from "class-variance-authority";

interface SidebarStore {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

interface RecommendedProps {
  data: (User & { stream: { isLive: boolean } | null })[];
}

interface UserItemProps {
  imageUrl: string;
  username: string;
  isLive?: boolean;
}

interface UserPageProps {
  params: {
    username: string;
  };
}

interface FollowingProps {
  data: (Follow & {
    following: User & {
      stream: { isLive: boolean } | null;
    };
  })[];
}

interface ActionProps {
  isFollowing: boolean;
  userId: string;
}

interface CreatorPageProps {
  params: {
    username: string;
  };
}

interface CreatorLayoutProps {
  children: React.ReactNode;
  params: {
    username: string;
  };
}

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  imageUrl: string;
  username: string;
  isLive?: boolean;
  showBadge?: boolean;
}

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes> {}

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

interface ToggleCardProps {
  field: string;
  label: string;
  value: boolean;
}

interface StringOrNull {
  value: string | null;
}

interface StreamPlayerProps {
  user: User & {
    stream: Stream | null;
    _count: {
      followedby: number;
    };
  };
  stream: Stream;
  isFollowing: boolean;
}

interface VolumeControlProps {
  onToggle: () => void;
  onChange: (value: number) => void;
  value: number;
}

interface AboutCardProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  bio: string | null;
  followedByCount: number;
}

type CustomStream = {
  id: string;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
  isLive: boolean;
  thumbnailUrl: string | null;
  name: string;
};

type CustomUser = {
  id: string;
  username: string;
  bio: string | null;
  stream: CustomStream | null;
  imageUrl: string;
  _count: {
    followedby: number;
  };
};
type BlockedUser = {
  id: string;
  userId: string;
  imageUrl: string;
  username: string;
  createdAt: string;
};

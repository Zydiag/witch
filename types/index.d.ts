import { Follow, User } from "@prisma/client";
import { VariantProps } from "class-variance-authority";

interface SidebarStore {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

interface RecommendedProps {
  data: User[];
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
  data: (Follow & { following: User })[];
  // data: (Follow & {
  //   following: User & {
  //     stream: { isLive: boolean } | null;
  //   };
  // })[];
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

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

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  imageUrl: string;
  username: string;
  isLive?: boolean;
  showBadge?: boolean;
}

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes> {}

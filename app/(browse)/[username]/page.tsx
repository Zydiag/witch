import { UserPageProps } from "@/types";

const UserPage = ({ params }: UserPageProps) => {
  return (
    <div>
      <div>{params.username}</div>
    </div>
  );
};
export default UserPage;

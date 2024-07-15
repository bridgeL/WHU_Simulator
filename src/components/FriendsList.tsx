import { FC } from "react";

interface Friend {
    name: string;
    favorability: number;
}

interface FriendsListProps {
    friends: Friend[];
}

const FriendsList: FC<FriendsListProps> = ({ friends }) => {
    return (
        <div style={{ marginTop: "20px" }}>
            <h3>朋友列表</h3>
            {friends.map((friend) => (
                <p
                    key={friend.name}
                    style={{ textAlign: "center", margin: "5px" }}
                >
                    {friend.name}: 好感度 {friend.favorability}
                </p>
            ))}
        </div>
    );
};

export default FriendsList;

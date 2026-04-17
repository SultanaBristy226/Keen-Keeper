import FriendCard from "@/components/ui/FriendCard";
import friends from "@/data/data.json";

const YourFriends = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Your Friends</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 lg:gap-15 my-10">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default YourFriends;
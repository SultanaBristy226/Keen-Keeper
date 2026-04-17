import Banner from "@/components/homePage/banner/Banner";
import YourFriends from "@/components/yourFriends/YourFriends";
import { getUsers } from "../lib/data";

export default async function Home() {
  const users = await getUsers();

  return (
    <>
      <Banner />
      <YourFriends users={users} />
    </>
  );
}
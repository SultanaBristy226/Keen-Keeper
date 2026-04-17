import Banner from "@/components/homePage/banner/Banner";
import YourFriends from "@/components/yourFriends/YourFriends";

export default async function Home() {
  return (
    <>
      <Banner />
      <YourFriends users={[]} />
    </>
  );
}
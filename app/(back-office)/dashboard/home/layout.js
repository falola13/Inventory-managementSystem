import HomeNavbar from "@/components/dashboard/HomeNavbar";

export default function Layout({ children }) {
  return (
    <div className="">
      <HomeNavbar />
      {children}
    </div>
  );
}

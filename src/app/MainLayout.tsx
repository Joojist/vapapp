import React from "react";
import Header from "@/src/app/Headers_Footers/HeaderApollo";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-body flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">{children}</div>
    </div>
  );
}

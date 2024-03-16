import { redirect } from "next/navigation";
import React from "react";

// IF the id > 3 we want to redirect the user to the login page.
const ID = ({ params }) => {
  if (params.id > 3) {
    redirect("/login");
  }

  return (
    <div className="text-5xl font-bold text-center">
      From Id page {params.id}
    </div>
  );
};

export default ID;

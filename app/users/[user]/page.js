"use client";
const User = ({ params }) => {
  return (
    <div className="font-bold text-3xl">{params.user} single user page</div>
  );
};

export default User;

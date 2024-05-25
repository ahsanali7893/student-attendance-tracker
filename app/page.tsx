"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect('/api/auth/login?post_login_redirect_url=/dashboard')
  }, [])
  return (
    <div className="p-5 sm:px-10 md:px-20">
     
    </div>
  );
}

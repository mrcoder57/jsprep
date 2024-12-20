"use client";
import MCQQuizList from "@/components/question/mcqlist";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [session, setSession] = useState<any>(null); // state to hold session
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData); // Set session data
      if (!sessionData) {
        router.push("/auth"); // Redirect to sign-in page if not authenticated
      }
    };

    fetchSession(); // Fetch the session when the component mounts
  }, [router]);

  if (!session) return <div>Loading...</div>; // Loading state while session is being fetched

  return (
    <div className=" w-full p-6 ">
    <MCQQuizList/>
    </div>
  );
};

export default HomePage;

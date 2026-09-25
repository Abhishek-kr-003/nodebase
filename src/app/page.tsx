
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
const Page =async () => {
    //const something = true;
    const users = await prisma.user.findMany();


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 min-w-screen">
     {JSON.stringify(users)}
    </div>
  );
};

export default Page;
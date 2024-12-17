import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import Image from "next/image"
import lms from '../../../../public/lms.png'
import { redirect } from "next/navigation";



export default async function Lectures() {
    const session = await getServerSession(authOptions)
    if (session?.user?.name == "Admin") {
        redirect('/')
    }

    return (
        <div className="bg-blue-400 min-h-[90vh] p-4 lg:min-h-[89vh] py-8">
        <div className="grid place-items-center gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 20 }, (_, index) => (
            <div key={index} className="flex justify-center items-center flex-col">
              <Image
                className="rounded-md mb-2"
                width={300}
                height={300}
                src={lms}
                alt={`Lecture ${index + 1}`}
              />
              <p className="text-white font-semibold">Lecture {index + 1}</p>
              <p className="text-white text-center text-sm">
                This is a brief description of Lecture {index + 1}. It covers key concepts in the subject.
              </p>
            </div>
          ))}
        </div>
      </div>      
    )
}
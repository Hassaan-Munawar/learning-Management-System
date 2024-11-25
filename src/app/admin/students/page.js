import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUsers } from "@/actions/users";

export default async function Students(){
    const {users} = await getUsers()

    return(
        <section className="bg-white rounded-md shadow-md mt-6">
        <div className="p-4 border-b border-gray-200">
       
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-sm font-medium text-gray-500">Profile</th>
                <th className="p-4 text-sm font-medium text-gray-500">Name</th>
                <th className="p-4 text-sm font-medium text-gray-500">Email</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((data) => {
                  return (
                    <tr key={data._id} className="border-b">
                      <td className="p-4 flex justify-center text-gray-600"> <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={data.image}
                          alt={data.name}
                        />
                        <AvatarFallback>
                          {data.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar></td>
                      <td className="p-4 text-gray-600">{data.name}</td>
                      <td className="p-4 text-gray-600">{data.email}</td>
                    </tr>

                  )
                })
              }
            </tbody>
          </table>
        </div>
      </section>
    )
}
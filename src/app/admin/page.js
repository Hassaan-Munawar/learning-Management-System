
import { getAdmissions } from "@/actions/admissions";
import { getBatches } from "@/actions/batches";
import { getCourses } from "@/actions/courses";
import { getStudents } from "@/actions/students";
import { getApplicationsLength } from "@/actions/application";



export default async function Dashboard() {

  const { admissions } = await getAdmissions();
  const {batches} = await getBatches()
  const {courses} = await getCourses()
  const {users} = await getStudents()
  const {applications} = await getApplicationsLength()



  return (
    <>
      {/* Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-700">
          Welcome, Admin
        </h1>
        <div className="text-gray-600">Today: {new Date().toDateString()}</div>
      </header>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="p-4 bg-white rounded-md shadow-md">
          <h2 className="text-sm text-gray-500">Total Students</h2>
          <p className="text-xl font-bold text-gray-700">{users.length}</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <h2 className="text-sm text-gray-500">Total Courses</h2>
          <p className="text-xl font-bold text-gray-700">{courses.length}</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <h2 className="text-sm text-gray-500">Total Batches</h2>
          <p className="text-xl font-bold text-gray-700">{batches.length}</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <h2 className="text-sm text-gray-500">Total Applications</h2>
          <p className="text-xl font-bold text-gray-700">{applications.length}</p>
        </div>
      </section>

      <section className="bg-white rounded-md shadow-md mt-6">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-700">
            Courses
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-sm font-medium text-gray-500">Course Name</th>
                <th className="p-4 text-sm font-medium text-gray-500">Eligibility</th>
                <th className="p-4 text-sm font-medium text-gray-500">Description</th>
                <th className="p-4 text-sm font-medium text-gray-500">Duration</th>
              </tr>
            </thead>
            <tbody>
              {
                courses.map((data) => {
                  return (
                    <tr key={data._id} className="border-b">
                      <td className="p-4 text-gray-600">{data.title}</td>
                      <td className="p-4 text-gray-600">{data.eligibility}</td>
                      <td className="p-4 text-gray-600">{data.description}</td>
                      <td className="p-4 text-gray-600">{data.duration}</td>
                    </tr>

                  )
                })
              }
            </tbody>
          </table>
        </div>
      </section>

     
      <section className="bg-white rounded-md shadow-md mt-6">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-700">
            Batches
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-sm font-medium text-gray-500">Batch Name</th>
                <th className="p-4 text-sm font-medium text-gray-500">Course Name</th>
                <th className="p-4 text-sm font-medium text-gray-500">Description</th>
                <th className="p-4 text-sm font-medium text-gray-500">Created At</th>
              </tr>
            </thead>
            <tbody>
              {
                batches.map((data) => {
                  return (
                    <tr key={data._id} className="border-b">
                      <td className="p-4 text-gray-600">{data.title}</td>
                      <td className="p-4 text-gray-600">{data.course.title}</td>
                      <td className="p-4 text-gray-600">{data.description}</td>
                      <td className="p-4 text-gray-600">{data.createdAt}</td>
                    </tr>

                  )
                })
              }
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white rounded-md shadow-md mt-6">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-700">
            Admissions
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-sm font-medium text-gray-500">Course Name</th>
                <th className="p-4 text-sm font-medium text-gray-500">Batch Name</th>
                <th className="p-4 text-sm font-medium text-gray-500">Status</th>
                <th className="p-4 text-sm font-medium text-gray-500">Created At</th>
              </tr>
            </thead>
            <tbody>
              {
                admissions.map((data) => {
                  return (
                    <tr key={data._id} className="border-b">
                      <td className="p-4 text-gray-600">{data.course.title}</td>
                      <td className="p-4 text-gray-600">{data.batch.title}</td>
                      <td className="p-4 text-gray-600">{data.status}</td>
                      <td className="p-4 text-gray-600">{data.createdAt}</td>
                    </tr>

                  )
                })
              }
            </tbody>
          </table>
        </div>
      </section>
 
    </>
  );
}




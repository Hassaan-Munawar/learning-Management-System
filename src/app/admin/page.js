

export default function Dashboard() {

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
          <h2 className="text-sm text-gray-500">Total Users</h2>
          <p className="text-xl font-bold text-gray-700">1,245</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <h2 className="text-sm text-gray-500">Active Sessions</h2>
          <p className="text-xl font-bold text-gray-700">78</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <h2 className="text-sm text-gray-500">Pending Orders</h2>
          <p className="text-xl font-bold text-gray-700">32</p>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <h2 className="text-sm text-gray-500">Revenue</h2>
          <p className="text-xl font-bold text-gray-700">$14,250</p>
        </div>
      </section>

      {/* Data Table */}
      <section className="bg-white rounded-md shadow-md mt-6">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">
            Recent Activity
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-sm font-medium text-gray-500">User</th>
                <th className="p-4 text-sm font-medium text-gray-500">Action</th>
                <th className="p-4 text-sm font-medium text-gray-500">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 text-gray-600">John Doe</td>
                <td className="p-4 text-gray-600">Logged In</td>
                <td className="p-4 text-gray-600">2024-11-20</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-gray-600">Jane Smith</td>
                <td className="p-4 text-gray-600">Updated Profile</td>
                <td className="p-4 text-gray-600">2024-11-19</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-600">Alex Brown</td>
                <td className="p-4 text-gray-600">Added a Post</td>
                <td className="p-4 text-gray-600">2024-11-18</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}




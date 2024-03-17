import { useEffect, useState } from "react";

const ViewAllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API endpoint
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://server.shekshops.com/users");
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error("Error fetching users");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="bg-green-700 text-3xl font-semibold font-primary text-slate-50 text-center py-5">View All Users</h1>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full table-auto">
          {/* head */}
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-center">#</th>
              <th className="px-4 py-2 text-center">Name</th>
              <th className="px-4 py-2 text-center">Email</th>
              <th className="px-4 py-2 text-center">Role</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user, index) => (
              <tr key={user?._id} className="border-t">
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2 text-center">{user?.name}</td>
                <td className="px-4 py-2 text-center">{user?.email}</td>
                <td className="px-4 py-2 text-center">{user?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllUsers;

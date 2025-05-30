import SearchField from "../../components/global/SearchField";
import UsersTable from "../../components/users/UsersTable";

const Users = () => {
  return (
    <div className="w-full h-auto overflow-y-auto px-6 py-4">
      <div className="grid grid-cols-2 items-center justify-between">
        <div>
          <p className="text-heading text-base font-semibold">Users</p>
        </div>
        <SearchField />
      </div>

      <UsersTable />
    </div>
  );
};

export default Users;

import DeletedUsersTable from "../../components/deletedUsers/DeletedUsersTable";
import SearchField from "../../components/global/SearchField";

const DeletedUsers = () => {
  return (
    <div className="w-full h-auto overflow-y-auto px-6 py-4">
      <div className="grid grid-cols-2 items-center justify-between">
        <div>
          <p className="text-heading text-base font-semibold">
            Deleted/Paused Accounts
          </p>
        </div>
        <SearchField />
      </div>

      <DeletedUsersTable />
    </div>
  );
};

export default DeletedUsers;

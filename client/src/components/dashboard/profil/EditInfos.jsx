import { Form } from "react-router-dom";

const EditInfos = ({ user, setEditInfos }) => {
  console.log(user);
  return (
    <div className="my-5">
      <Form
        method="post"
        action="/dashboard/profil"
        className="flex flex-col items-center gap-4" // Ajoutez des classes de mise en forme ici
        onSubmit={() => setEditInfos(false)}
      >
        <div className="w-full max-w-xs">
          {/* label vide pour id de lutilisateur */}
          <label htmlFor="id" className="hidden text-gray-600">
            <input type="hidden" name="user_id" defaultValue={user.user_id} />
          </label>
          <label htmlFor="name" className="block text-gray-600">
            Nom :
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user.name}
            className="w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="w-full max-w-xs">
          <label htmlFor="email" className="block text-gray-600">
            Email :
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            className="w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="w-full max-w-xs">
          <label htmlFor="age" className="block text-gray-600">
            Age :
          </label>
          <input
            type="number"
            name="age"
            min={1}
            max={120}
            defaultValue={user.age}
            className="w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <button className="btn-green mt-4 px-4 py-2" type="submit">
          Valider
        </button>
      </Form>
    </div>
  );
};

export default EditInfos;

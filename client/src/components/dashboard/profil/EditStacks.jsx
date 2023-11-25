import { useEffect, useState } from "react";
import { useSubmit } from "react-router-dom";

export const EditStacks = ({
  userStacks,
  setUserStacks,
  stacks,
  setEditStacks,
}) => {
  const [availableStacks, setAvailableStacks] = useState([]);
  const submit = useSubmit();

  const getUnusedUserStacks = () => {
    if (userStacks === null) {
      setAvailableStacks(stacks);
      return;
    }
    const checkStacks = stacks.filter((stack) => {
      return !userStacks.some((s) => s.stack_id === stack.stack_id);
    });
    setAvailableStacks(checkStacks);
  };

  const handleDelete = (stack) => {
    const updatedStacks = userStacks.filter(
      (s) => s.stack_id !== stack.stack_id,
    );
    setUserStacks(updatedStacks);
    setAvailableStacks([...availableStacks, stack]);
  };

  const handleAddition = (stack) => {
    const updatedStacks = [...userStacks, stack];
    setUserStacks(updatedStacks);
    const updatedAvailableStacks = availableStacks.filter(
      (s) => s.stack_id !== stack.stack_id,
    );
    setAvailableStacks(updatedAvailableStacks);
  };

  const handleSubmit = () => {
    const data = {
      stack_id: userStacks.map((stack) => stack.stack_id),
      intent: "stacks",
    };
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    submit(formData, { method: "post", action: "/dashboard/profil" });
    setEditStacks(false);
  };

  useEffect(() => {
    getUnusedUserStacks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <p>Mes stacks :</p>
      {userStacks && (
        <div className="flex gap-2">
          {userStacks.map((stack) => (
            <button
              onClick={() => handleDelete(stack)}
              key={stack.stack_id}
              name={stack}
              className="transform cursor-pointer rounded-md bg-red-400  px-2 py-1 text-sm text-gray-950 transition hover:scale-105"
            >
              {stack.stack_name}
            </button>
          ))}
        </div>
      )}
      <div>
        <p>Toutes les stacks disponibles :</p>
        {stacks && (
          <div className="flex flex-wrap gap-4">
            {availableStacks.map((stack) => (
              <button
                key={stack.stack_id}
                onClick={() => handleAddition(stack)}
                className="transform cursor-pointer rounded-md bg-pblue-200  px-2 py-1 text-sm text-gray-950 transition hover:scale-105"
              >
                {stack.stack_name}
              </button>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="btn-green mx-auto w-fit"
      >
        Valider
      </button>
    </div>
  );
};

export default EditStacks;

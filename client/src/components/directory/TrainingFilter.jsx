const TrainingFilter = ({ trainings, setTraining, handleChange }) => {
  return (
    <div className="w-fit">
      <label htmlFor="training"></label>
      <select
        id="training"
        name="training"
        onChange={(e) => {
          setTraining(e.target.value);
          handleChange(e);
        }}
        className="mr-10 w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
      >
        <option value="">Tout</option>
        {trainings.map((training) => (
          <option
            className="mx-auto"
            key={training.training_id}
            value={training.training_id}
          >
            {training.training_name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default TrainingFilter;

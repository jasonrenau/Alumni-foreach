import { useNavigate } from "react-router-dom";
import { usericon } from "../../assets/index";
import { motion } from "framer-motion";

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => navigate(`/user/${user.user_id}`)}
      className="mx-auto mt-[60px] h-fit w-full max-w-sm transform cursor-pointer rounded-md bg-white p-4 shadow-md hover:bg-gray-50 hover:shadow-lg "
      initial={{ y: 250, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    >
      <div className="flex flex-col gap-2">
        <div className="relative  flex justify-between">
          <div>
            <p className="text-left font-bold uppercase">{user.name}</p>
            <p className="text-left">{user.email}</p>
          </div>
          <div className="absolute left-2/4 top-0 grid -translate-x-2/4  -translate-y-[70%] place-content-center rounded-full border-[6px] border-slate-100">
            <img
              className="h-[100px] w-[100px] rounded-full object-cover shadow-md"
              src={user.avatar_url ? user.avatar_url : usericon}
              alt="icon-user"
            />
          </div>
          <div>
            <p className="text-right">{user.age ? `${user.age} ans` : ""}</p>
            <p className="text-right first-letter:uppercase">{user.city}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex justify-between">
            <p className="uppercase ">{user.training_name}</p>
            <p className=" first-letter:uppercase">{user.role_name}</p>
          </div>
          <div className="mx-auto flex flex-wrap gap-1 text-center">
            {user.stacks?.map((stack, index) => (
              <p
                className="mr-2  rounded-md bg-blue-200 px-2 py-1 text-sm text-blue-800"
                key={index}
              >
                {stack}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default UserCard;

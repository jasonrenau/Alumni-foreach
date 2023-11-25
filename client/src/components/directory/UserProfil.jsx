import { usericon } from "../../assets/index";
import { motion } from "framer-motion";

const UserProfil = ({ user }) => {
  const {
    name,
    email,
    avatar_url,
    age,
    city,
    description,
    stacks,
    role_name,
    training_name,
    professional_experience,
  } = user;

  return (
    <div className="pt-5">
      <div className="items-center gap-10 rounded-md border-[1px] border-gray-300 bg-gray-50 p-5 md:flex md:w-fit md:justify-center ">
        <img
          src={avatar_url ? avatar_url : usericon}
          alt="user"
          className="h-32 w-32 rounded-full border-[1px] border-gray-300 object-cover shadow-md md:h-52 md:w-52"
        />
        <div>
          <div className="flex items-center gap-2">
            <p className="text-2xl uppercase tracking-wider ">{name}</p>
            <p className="">{age ? `${age} ans` : ""}</p>
          </div>
          <p className="">{email}</p>
          <p className="mb-2 first-letter:uppercase">{city ? city : ""}</p>
          <div className="flex gap-1">
            <p className="first-letter:uppercase">{role_name}</p>
            <p>||</p>
            <p className="first-letter:uppercase">{training_name}</p>
          </div>
        </div>
      </div>
      <div className="py-10">
        {description && (
          <>
            <h3 className="mr-auto py-1 pt-5">Description :</h3>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </>
        )}
        {professional_experience && (
          <>
            <h3 className="mr-auto py-1 pt-10">Expérience professionnel :</h3>
            <p
              dangerouslySetInnerHTML={{ __html: professional_experience }}
            ></p>
          </>
        )}

        {stacks && (
          <>
            <h3 className="py-1 pt-10">Compétences :</h3>
            <div className="flex flex-wrap gap-1 ">
              {stacks.map((stack, index) => (
                <p
                  className="mr-2 h-fit  rounded-md bg-blue-200 px-2 py-1 text-sm text-blue-800"
                  key={index}
                >
                  {stack}
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default UserProfil;

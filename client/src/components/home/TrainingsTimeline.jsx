import { trainings } from "../../utils/constants";
import { jobLogo, stars } from "../../assets";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TrainingsTimeline = () => {
  return (
    <VerticalTimeline>
      {trainings.map((training) => (
        <VerticalTimelineElement
          key={training.id}
          icon={
            <img
              src={jobLogo}
              className="w-[70px] object-contain"
              alt="job-logo"
            />
          }
          className="text-left"
        >
          <h5 className="font-bold">{training.title}</h5>
          <p className="text-[16px]">{training.description}</p>
          <div className="flex items-center justify-between">
            <p className="">{training.time}</p>
            <div className=" mt-4 flex items-center">
              {Array(training.numberOfStars)
                .fill()
                .map((_, i) => (
                  <img src={stars} key={i} className="h-6 w-6" />
                ))}
            </div>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
export default TrainingsTimeline;

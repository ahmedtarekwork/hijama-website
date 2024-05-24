// components
import SectionWrapper from "../../components/SectionWrapper";
import ServicesCard from "./ServicesCard";

// hooks
import useServices from "../../hooks/useServices";

// utils
import { nanoid } from "nanoid";

const Services = () => {
  const servicesList = useServices();

  return (
    <SectionWrapper
      id="services"
      title="خدماتنا"
      container={{
        value: true,
        attr: {
          className: "space-y-4",
        },
      }}
    >
      <ul className="services-list grid gap-4">
        {servicesList?.map((serviceData) => (
          <li key={nanoid()}>
            <ServicesCard {...serviceData} />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};
export default Services;

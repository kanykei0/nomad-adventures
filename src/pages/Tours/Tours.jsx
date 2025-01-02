import { Container, Heading, ToursCard } from "ui/index";
import classes from "./Tours.module.scss";
import { ToursList } from "utils/Constants/ToursDataConstant";
import { useTranslation } from "react-i18next";

// FIX AFTER MORE INFO

// const options = [
//   { value: "all", label: "All tours" },
//   { value: "trekking", label: "Trekking" },
//   { value: "jeep tour", label: "Jeep tours" },
//   { value: "moto tour", label: "Moto tours" },
// ];

export const Tours = () => {
  const { t } = useTranslation();
  // const [selectedTour, setSelectedTour] = useState([]);

  // const handleChange = (selectedOption) => {
  //   const list = filterToursByType(ToursList, selectedOption.value);
  //   setSelectedTour(list);
  // };

  return (
    <Container>
      <div className={classes.block}>
        <div className={classes.heading}>
          <Heading className={classes.title}>{t("nav.tours")}</Heading>
          {/* <div className={classes.filter}>
            <TourSelect
              options={options}
              defaultValue={options[0]}
              onChange={handleChange}
            />
          </div> */}
        </div>
        <div className={classes.list}>
          {/* {selectedTour.length > 0
            ? selectedTour.map((item, key) => (
                <ToursCard key={key} items={item} />
              ))
            : ToursList.map((item, key) => (
                <ToursCard key={key} items={item} />
              ))} */}

          {ToursList.map((item, key) => (
            <ToursCard large key={key} items={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

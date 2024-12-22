import { Container, Heading, Typography } from "ui/index";
import classes from "./AboutUs.module.scss";
import photo from "assets/images/aboutus.jpg";
import photo1 from "assets/images/aboutus1.jpg";

export const AboutUs = () => {
  return (
    <Container>
      <div className={classes.block}>
        <Heading>About Us</Heading>
        <div className={classes.wrapper}>
          <div className={classes.textBlock}>
            <Typography>
              Мы — команда энтузиастов, предлагающая прокат мотоциклов и
              организованные мототуры по Кыргызстану для всех, кто мечтает
              покорить горные вершины и почувствовать дух свободы на двух
              колесах. Наш опыт и любовь к приключениям позволяют нам создавать
              маршруты, которые сочетают в себе адреналин, красоту природы и
              настоящий комфорт.
            </Typography>
            <Typography className={classes.chooseUs} weight="medium">
              Почему выбирают нас?
            </Typography>
            <ol className={classes.olList}>
              <li>
                <Typography>Парк мотоциклов</Typography>
              </li>
              <Typography className={classes.olList_desc}>
                Мы предоставляем современные и надежные мотоциклы для различных
                уровней подготовки: от новичков до опытных райдеров. Наши байки
                проходят регулярное обслуживание, чтобы вы могли сосредоточиться
                только на дороге и приключении.
              </Typography>
              <li>
                <Typography>Уникальные маршруты</Typography>
              </li>
              <Typography className={classes.olList_desc}>
                Каждый маршрут — это тщательно разработанный путь через
                захватывающие ландшафты Тянь-Шаня, бескрайние степи и уединенные
                горные озера. Вас ждут как спокойные прогулки, так и
                экстремальные эндуро-туров по дикой природе.
              </Typography>
              <li>
                <Typography>Гиды и сопровождение</Typography>
              </li>
              <Typography className={classes.olList_desc}>
                Опытные гиды, которые знают каждую тропу и перевал Кыргызстана,
                обеспечат ваше путешествие безопасным и незабываемым. Мы говорим
                на нескольких языках и всегда готовы помочь с любыми вопросами.
              </Typography>
              <li>
                <Typography>Гибкие условия</Typography>
              </li>
              <Typography className={classes.olList_desc}>
                У нас можно арендовать мотоцикл для самостоятельного путешествия
                или выбрать готовый тур, где все организовано: от маршрута и
                питания до проживания и технической поддержки.
              </Typography>
            </ol>
          </div>
          <div className={classes.imageBlock}>
            <img src={photo} alt="about us" />
          </div>
        </div>
        <div className={classes.bottomImage}>
          <img src={photo1} alt="sbout us" />
        </div>
      </div>
    </Container>
  );
};

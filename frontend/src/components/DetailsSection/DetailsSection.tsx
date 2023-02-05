import Paragraph from "src/components/Paragraph/Paragraph";
import SubSectionHeaderTop from "src/components/SubSectionHeader/SubSectionHeaderTop";
import classes from "./detailsSection.module.scss";

const DetailsSection = ({ headerTop }: { headerTop: string }) => {
  return (
    <section className={classes["details-section"]}>
      <SubSectionHeaderTop headerTop={headerTop} headerBottom="Lorem ipsum" />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum
        repudiandae cumque? Minus sequi sunt, laborum molestiae id reiciendis
        veritatis ducimus labore accusantium optio quas provident illum a beatae
        pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        earum repudiandae cumque? Minus sequi sunt, laborum molestiae id
        reiciendis veritatis ducimus labore accusantium optio quas provident
        illum a beatae pariatur.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit est laborum."
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum
        repudiandae cumque? Minus sequi sunt, laborum molestiae id reiciendis
        veritatis ducimus labore accusantium optio quas provident illum a beatae
        pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        earum repudiandae cumque? Minus sequi sunt, laborum molestiae id
        reiciendis veritatis ducimus labore accusantium optio quas provident
        illum a beatae pariatur.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit est laborum.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Labore earum repudiandae cumque?
        Minus sequi sunt, laborum molestiae id reiciendis veritatis ducimus
        labore accusantium optio quas provident illum a beatae pariatur.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Labore earum
        repudiandae cumque? Minus sequi sunt, laborum molestiae id reiciendis
        veritatis ducimus labore accusantium optio quas provident illum a beatae
        pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit est laborum."
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum
        repudiandae cumque? Minus sequi sunt, laborum molestiae id reiciendis
        veritatis ducimus labore accusantium optio quas provident illum a beatae
        pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        earum repudiandae cumque? Minus sequi sunt, laborum molestiae id
        reiciendis veritatis ducimus labore accusantium optio quas provident
        illum a beatae pariatur.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit est laborum."
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum
        repudiandae cumque? Minus sequi sunt, laborum molestiae id reiciendis
        veritatis ducimus labore accusantium optio quas provident illum a beatae
        pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        earum repudiandae cumque? Minus sequi sunt, laborum molestiae id
        reiciendis veritatis ducimus labore accusantium optio quas provident
        illum a beatae pariatur.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit est laborum.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Labore earum repudiandae cumque?
        Minus sequi sunt, laborum molestiae id reiciendis veritatis ducimus
        labore accusantium optio quas provident illum a beatae pariatur.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Labore earum
        repudiandae cumque? Minus sequi sunt, laborum molestiae id reiciendis
        veritatis ducimus labore accusantium optio quas provident illum a beatae
        pariatur.Lorem ipsum dolor sit amet consectetur."
      </Paragraph>
    </section>
  );
};

export default DetailsSection;

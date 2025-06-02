/* eslint-disable no-unused-vars */
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import PropTypes from "prop-types";
import Separator from "../Separator";

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
};

function ArticleCard({ article }) {
  return (
    <Card className="xl:w-[22rem] lg:w-[16rem] sm:w-[17rem] w-[12rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={article.imgUrl}
          alt="article thumbnail"
          className="object-cover object-center"
        />
      </CardHeader>
      <CardBody className="px-4 pt-3 pb-0">
        <article>
          <h4
            color="blue-gray"
            title={article.title}
            className="xl:text-xl lg:text-lg sm:text-xl font-bold text-black line-clamp-2"
          >
            {article.title}
          </h4>

          <p className="xl:text-base lg:text-xs text-xs text-black xl:mt-3 lg:mt-1 mt-2 line-clamp-4">
            {article.description}
          </p>
        </article>
        <Separator height={40} />.
      </CardBody>
    </Card>
  );
}

export default ArticleCard;

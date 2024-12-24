/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Progress,
} from "@material-tailwind/react";
import articleBanner from "../../../assets/article_bnn_1.png";

ArticleCard.propTypes = {};

function ArticleCard(props) {
  return (
    <Card className="sm:w-[22rem] w-[18rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={articleBanner}
          alt="ui/ux review check"
          className="object-cover object-center"
        />
      </CardHeader>
      <CardBody className="px-4 py-3">
        <article>
          <h4
            color="blue-gray"
            className="text-xl font-bold text-black line-clamp-3 h-20"
          >
            Làm thế nào để phát hiện và tận dụng thế mạnh riêng khi học IELTS?
          </h4>
          <p className="sm:text-sm text-xs text-black line-clamp-4 mt-4">
            Học IELTS không chỉ là hành trình khắc phục điểm yếu mà còn là quá
            trình phát hiện và phát huy thế mạnh cá nhân. Mỗi người học có phong
            cách học tập, sở thích, và cách tiếp cận khác nhau. Trong bài viết
            này, Kinder IELTS sẽ giúp bạn:
          </p>
        </article>
      </CardBody>
      <CardFooter className="px-4">
        <Button className="rounded-full normal-case bg-yellow text-black text-lg px-3 py-1">
          Xem thêm
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ArticleCard;

import { ARTICLE_IMAGE } from "../../assets/article_image";
import ArticleCard from "../../components/article/ArticleCard";
import BannerSection from "../../components/BannerSection";
import { LIST_SELF_STUDY_MATERIAL } from "../../dummy/dummy_data_article";

function ArticleMaterialPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full h-96 relative">
        <img
          src={ARTICLE_IMAGE.materials_banner}
          alt="kinder-banner"
          className="relative w-full h-full object-cover object-center z-[2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-custom-green via-transparent via-20% to-transparent to-80% z-[2]" />
        <div className="absolute z-[3] w-full max-w-3xl mx-auto xl:bottom-24 lg:bottom-16 md:bottom-10 sm:bottom-8 bottom-2 left-0 lg:px-16 md:px-8 px-4">
          <div className="flex flex-col md:gap-y-4 gap-y-1 xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl text-xl text-yellow font-bold">
            <h3>Tài liệu tự học</h3>
          </div>
          <div className="flex flex-col mt-2 md:gap-y-4 gap-y-1 xl:text-xl lg:text-sm  md:text-sm  sm:text-xs text-xs text-yellow font-normal">
            <h5>
              Mô hình học online nhóm nhỏ tối đa 6 bạn giúp học viên tương tác,
              học tập và trao đổi trực tiếp với Gia sư
            </h5>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center text-xs sm:text-sm mb-4 sm:mb-6">
          <span>Trang Chủ</span>
          <span className="mx-1 sm:mx-2">/</span>
          <span>Bài viết</span>
          <span className="mx-1 sm:mx-2">/</span>
          <span className=" font-medium">Insights</span>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {LIST_SELF_STUDY_MATERIAL.map((item, index) => (
            <ArticleCard key={index} article={item} />
          ))}
          {LIST_SELF_STUDY_MATERIAL.map((item, index) => (
            <ArticleCard key={index} article={item} />
          ))}
          {LIST_SELF_STUDY_MATERIAL.map((item, index) => (
            <ArticleCard key={index} article={item} />
          ))}
        </div>
      </div>
      <BannerSection />
    </div>
  );
}

export default ArticleMaterialPage;

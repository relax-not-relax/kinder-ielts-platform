import banner from "../../assets/home-bnn.png";

function ArticleInsightsPage() {
  const categories = [
    "Luyện đề năng cao",
    "Bộ trợ kỹ năng",
    "Bài mẫu Writing",
    "Bài mẫu Speaking",
    "Thông tin khóa học",
  ];

  const articles = [
    {
      id: 1,
      image: "/placeholder.svg?height=200&width=300",
      category: "Luyện đề năng cao",
      categoryColor: "bg-orange-500",
      title: "What does freshman composition look like in 2024?",
      description:
        "Freshman composition courses have undergone significant transformations. While other subjects maintain traditional writing standards, new collective tech...",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=200&width=300",
      category: "Bài mẫu Writing",
      categoryColor: "bg-yellow-500",
      title: "Review chi tiết khóa học 'Introduction to Writing': Nền tảng...",
      description:
        "Khóa học 'Introduction to Writing' là chương trình học trực tuyến được thiết kế để Trung tâm giúp học viên xây dựng nền...",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=200&width=300",
      category: "Bộ trợ kỹ năng",
      categoryColor: "bg-blue-500",
      title: "Bí quyết luyện đề Reading nâng cao cho mọc tiêu 7.0+",
      description:
        "Luyện đề là một phần quan trọng trong quá trình ôn luyện IELTS. Tuy nhiên, việc luyện đề hiệu quả không chỉ đơn giản là làm bài và đối chiếu - chính việc...",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=200&width=300",
      category: "Luyện đề năng cao",
      categoryColor: "bg-orange-500",
      title: "Top 3 bộ đề Writing Task 2 nâng cao dành cho sinh viên",
      description:
        "Trong bài viết này, chúng tôi sẽ giới thiệu 3 bộ đề Writing Task 2 dành cho sinh viên quan tâm đến việc...",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=200&width=300",
      category: "Bài mẫu Speaking",
      categoryColor: "bg-red-500",
      title: "5 tips luyện kỹ năng Speaking tự nhiên cho học sinh cấp 3",
      description:
        "Speaking là một trong những kỹ năng quan trọng nhất trong việc học tiếng Anh. Đối với học sinh cấp 3, việc cải thiện kỹ năng này có thể...",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=200&width=300",
      category: "Bộ trợ kỹ năng",
      categoryColor: "bg-blue-500",
      title: "Chiến thuật ghi chú (Note-taking) bài luyện IELTS Listening",
      description:
        "Ghi chú hiệu quả là chìa khóa để đạt điểm cao trong bài thi IELTS Listening. Kỹ năng này không chỉ giúp bạn ghi nhớ thông tin quan trọng mà còn...",
    },
    {
      id: 7,
      image: "/placeholder.svg?height=200&width=300",
      category: "Bài mẫu Writing",
      categoryColor: "bg-yellow-500",
      title: "Bài mẫu Writing Task 1 band 7.0+: Phân tích và mẹo chi tiết",
      description:
        "Kỹ năng IELTS phân tích và viết bài mẫu Writing Task 1 đạt band 7.0+, cùng học hỏi từ các mẫu bài và phương pháp hiệu quả...",
    },
    {
      id: 8,
      image: "/placeholder.svg?height=200&width=300",
      category: "Bài mẫu Speaking",
      categoryColor: "bg-red-500",
      title: "Bài mẫu Speaking Part 2: Cách kể chuyện mạch lạc ghi điểm cao",
      description:
        "Trong bài viết này Part 2 chúng tôi sẽ chia sẻ những kỹ thuật và cách tiếp cận hiệu quả để bạn có thể...",
    },
    {
      id: 9,
      image: "/placeholder.svg?height=200&width=300",
      category: "Thông tin khóa học",
      categoryColor: "bg-green-500",
      title:
        "Review khóa học IELTS cấp tốc cho học sinh lớp 12 tại Kinder Language Center",
      description:
        "Bạn cần chuẩn bị gấp và muốn tìm hiểu khóa học IELTS cấp tốc? Khóa học này có thể giúp bạn nâng cao...",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Responsive */}
      <div className="w-full relative">
        <img
          src={banner}
          alt="kinder-banner"
          className="relative w-full h-1/2 object-cover object-center z-[2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-custom-green via-transparent via-20% to-transparent to-80% z-[2]" />
        <div className="absolute z-[3] w-full max-w-3xl mx-auto xl:bottom-24 lg:bottom-16 md:bottom-10 sm:bottom-8 bottom-2 left-0 lg:px-16 md:px-8 px-4">
          <div className="flex flex-col md:gap-y-4 gap-y-1 xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl text-xl text-yellow font-bold">
            <h3>Insight</h3>
          </div>
          <div className="flex flex-col mt-2 md:gap-y-4 gap-y-1 xl:text-xl lg:text-sm  md:text-sm  sm:text-xs text-xs text-yellow font-bold">
            <h5>
              Mô hình học online nhóm nhỏ tối đa 6 bạn giúp học viên tương tác,
              học tập và trao đổi trực tiếp với Gia sư
            </h5>
          </div>
        </div>
      </div>

      {/* Navigation - Mobile Optimized */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
          <span>Trang Chủ</span>
          <span className="mx-1 sm:mx-2">/</span>
          <span>Bài viết</span>
          <span className="mx-1 sm:mx-2">/</span>
          <span className="text-gray-900 font-medium">Insights</span>
        </div>

        {/* Category Filters - Responsive */}
        <div className="mb-6 sm:mb-8">
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
            Xem theo danh mục:
          </p>

          {/* Mobile: Horizontal scroll */}
          <div className="sm:hidden">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium text-gray-700 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Flex wrap */}
          <div className="hidden sm:flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid - Fully Responsive */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <span
                  className={`absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 rounded-full text-white text-xs font-medium ${article.categoryColor}`}
                >
                  {article.category}
                </span>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight text-sm sm:text-base">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleInsightsPage;

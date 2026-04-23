export const REGULATIONS = [
  {
    index: 1,
    title: "Hoạt động NCKH",
    description: "Quy định và Quy trình về hoạt động NCKH của sinh viên Trường Đại học Văn Lang",
    docs: ["Quyết định số 1203/QĐ-ĐHVL ngày 10/8/2023"]
  },
  {
    index: 2,
    title: "Công bố bài báo",
    description: "Quy định công bố bài báo trên các tạp chí/kỷ yếu khoa học",
    docs: [
      "Quyết định số 1203/QĐ-ĐHVL ngày 10/8/2023",
      "Quyết định số 1297/QĐ-ĐHVL ngày 29/8/2022"
    ]
  },
  {
    index: 3,
    title: "Liêm chính khoa học",
    description: "Quy định về liêm chính trong NCKH",
    docs: ["Quyết định 169/QĐ-ĐHVL ngày 23/02/2023"]
  },
  {
    index: 4,
    title: "Đạo đức nghiên cứu",
    description: "Đánh giá khía cạnh đạo đức nghiên cứu đối với các đề tài có đối tượng là con người",
    docs: ["Quyết định 101/QĐ/VL-HĐT ngày 29/03/2022"],
    notes: "Y sinh học, Phương pháp điều trị, Điều tra dịch tễ, xã hội học..."
  }
];

export const GUIDES = [
  { id: 1, title: "Tổ chức thực hiện", icon: "Rocket" },
  { id: 2, title: "Công bố bài báo", icon: "FileText" },
  { id: 3, title: "Tạm ứng kinh phí", icon: "Wallet" },
  { id: 4, title: "Theo dõi báo cáo", icon: "Activity" },
  { id: 5, title: "Nghiệm thu đề tài", icon: "CheckSquare" },
  { id: 6, title: "Công nhận đề tài", icon: "Award" },
  { id: 7, title: "Thanh toán/Thanh lý", icon: "DollarSign" }
];

export const ACCEPTANCE_STEPS = [
  {
    step: 1,
    role: "Sinh viên",
    title: "Chuẩn bị hồ sơ",
    items: [
      "BM 29 - Báo cáo tổng kết",
      "BM 30 - Thông tin kết quả",
      "Sản phẩm đề tài (bài báo, thiết bị, phần mềm...)",
      "Tài liệu khác liên quan"
    ]
  },
  {
    step: 2,
    role: "Khoa",
    title: "Kiểm tra & Đề xuất HĐ",
    items: [
      "BM 32 - Phiếu đề nghị nghiệm thu",
      "Hội đồng ít nhất 03 người",
      "Gửi hồ sơ về Phòng PT NCKH"
    ]
  },
  {
    step: 3,
    role: "Phòng PT NCKH",
    title: "Ban hành Quyết định",
    items: [
      "Kiểm tra hồ sơ đạt yêu cầu",
      "Trình Hiệu trưởng ký QĐ thành lập HĐLN",
      "Gửi QĐ đến Khoa/Đơn vị"
    ]
  },
  {
    step: 4,
    role: "Khoa",
    title: "Tổ chức Hội đồng",
    items: [
      "Tổ chức trong vòng 10-20 ngày sau QĐ",
      "BM 21 - Biên bản họp HĐ",
      "BM 22 - Phiếu đánh giá",
      "BM 23 - Phiếu nhận xét"
    ]
  }
];

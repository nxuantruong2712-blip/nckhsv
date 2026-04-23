/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Rocket, 
  Wallet, 
  Activity, 
  CheckSquare, 
  Award, 
  DollarSign, 
  ArrowRight, 
  ChevronRight, 
  Info, 
  Scale, 
  FileCheck,
  ExternalLink,
  MessageSquare,
  MapPin,
  Clock
} from 'lucide-react';
import { REGULATIONS, GUIDES, ACCEPTANCE_STEPS } from './constants';

const IconMap: Record<string, any> = {
  Rocket, FileText, Wallet, Activity, CheckSquare, Award, DollarSign
};

export default function App() {
  const [activeGuide, setActiveGuide] = useState<number | null>(null);

  return (
    <div className="min-h-screen selection:bg-editorial-orange selection:text-editorial-black">
      {/* Decorative Sidebar Text */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 v-text rotate-180 text-[10px] text-white/10 uppercase tracking-[0.3em] font-medium hidden lg:block z-0">
        CỔNG THÔNG TIN NCKH VLU • 2024
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-editorial-black/90 border-b border-editorial-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="font-serif italic font-bold text-2xl tracking-tighter">VLU.STUDIO</div>
          </div>
          <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.1em]">
            <a href="#regulations" className="text-white/60 hover:text-editorial-orange transition-colors">Quy định</a>
            <a href="#guides" className="text-white/60 hover:text-editorial-orange transition-colors">Hướng dẫn</a>
            <a href="#contact" className="text-white/60 hover:text-editorial-orange transition-colors">Liên hệ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 border-b border-editorial-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="meta-label mb-8 block">Số 01 / NCKH SV</span>
              <h1 className="text-[80px] sm:text-[120px] editorial-heading leading-[0.85] mb-8">
                Nghiên cứu <br /> Sinh viên.
              </h1>
              <p className="text-xl text-white/60 font-light max-w-md leading-relaxed border-l border-editorial-orange pl-6">
                Khám phá sự giao thoa giữa sự khắt khe học thuật và tính chính trực trực quan trong hệ sinh thái nghiên cứu của Văn Lang.
              </p>
            </motion.div>
            <div className="flex flex-col gap-6 items-start lg:items-end">
              <a href="#guides" className="px-10 py-5 border border-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-3">
                Xem Hướng dẫn <ArrowRight size={16} />
              </a>
              <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium text-right max-w-[200px]">
                Cẩm nang toàn diện dành cho sinh viên nghiên cứu và giảng viên hướng dẫn.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations Section */}
      <section id="regulations" className="py-24 border-b border-editorial-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-start mb-16">
            <h2 className="text-4xl editorial-heading italic">Quy định</h2>
            <div className="meta-label">Khung Pháp lý</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-editorial-border">
            {REGULATIONS.map((reg, i) => (
              <motion.div 
                key={reg.index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border-r border-b border-editorial-border group hover:bg-white/[0.02] transition-colors flex flex-col h-full"
              >
                <div className="meta-label mb-8 text-white/20 group-hover:text-editorial-orange transition-colors tracking-tight">0{reg.index} — DANH MỤC</div>
                <h3 className="text-2xl font-serif italic mb-6 leading-tight">{reg.title}</h3>
                <p className="text-sm text-white/50 mb-8 flex-grow leading-relaxed">{reg.description}</p>
                <div className="space-y-3">
                  {reg.docs.map((doc, idx) => (
                    <div key={idx} className="flex gap-2 items-start text-[10px] font-bold uppercase tracking-wider text-editorial-orange">
                      <FileCheck size={12} className="shrink-0 mt-0.5" />
                      {doc}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="meta-label mb-4 block">Điều hướng</span>
            <h2 className="text-5xl editorial-heading">Hướng dẫn Quy trình</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {GUIDES.map((guide) => {
              const Icon = IconMap[guide.icon];
              return (
                <button 
                  key={guide.id}
                  onClick={() => setActiveGuide(guide.id)}
                  className={`px-8 py-4 rounded-full border text-[11px] font-bold uppercase tracking-[0.15em] transition-all flex items-center gap-3 ${
                    activeGuide === guide.id 
                      ? 'bg-white text-black border-white' 
                      : 'border-editorial-border text-white/40 hover:border-white/40'
                  }`}
                >
                  <Icon size={14} />
                  {guide.title}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {activeGuide === 5 ? (
              <motion.div 
                key="acceptance"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 lg:grid-cols-4"
              >
                {ACCEPTANCE_STEPS.map((step, i) => (
                  <div key={i} className="group p-10 border border-editorial-border -ml-[1px] relative overflow-hidden">
                    <div className="text-[60px] font-serif italic text-white/[0.03] absolute -right-4 -bottom-4 leading-none group-hover:text-editorial-orange/10 transition-colors">0{step.step}</div>
                    <div className="meta-label mb-4 opacity-50">{step.role}</div>
                    <h4 className="text-2xl font-serif italic mb-8">{step.title}</h4>
                    <ul className="space-y-4">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-xs text-white/50 leading-relaxed font-medium">
                          <span className="w-1 h-1 rounded-full bg-editorial-orange mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            ) : activeGuide === 1 ? (
              <motion.div 
                key="execution"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto border border-editorial-border p-16 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-editorial-orange" />
                <h3 className="text-4xl editorial-heading mb-12">Giao Quyết định Thực hiện</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <div className="meta-label">01. Thông báo</div>
                    <p className="text-sm text-white/50 leading-relaxed">Phòng Phát triển NCKH thông báo Quyết định giao thực hiện đề tài NCKH SV cấp Trường.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="meta-label">02. Trách nhiệm</div>
                    <p className="text-sm text-white/50 leading-relaxed">Chủ nhiệm đề tài có trách nhiệm triển khai thực hiện theo nội dung đã nêu trong Thuyết minh phê duyệt.</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="text-center py-32 border border-dashed border-editorial-border rounded-lg">
                <p className="meta-label opacity-40 italic">Chọn một bước quy trình để bắt đầu tìm hiểu</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-24 border-t border-editorial-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between pl-8 border-l-4 border-white mb-16">
            <h2 className="text-4xl editorial-heading">Lưu trữ</h2>
            <div className="text-[11px] font-bold uppercase tracking-widest text-white/40">Văn bản & Biểu mẫu chính thức</div>
          </div>

          <div className="divide-y divide-editorial-border">
            {[
              { process: "Thực hiện", name: "BM 29 - Báo cáo tổng kết đề tài" },
              { process: "Nghiệm thu", name: "BM 30 - Thông tin kết quả nghiên cứu" },
              { process: "Nghiệm thu", name: "BM 32 - Phiếu đề nghị nghiệm thu" },
              { process: "Công nhận", name: "BM 21 - Biên bản họp Hội đồng" },
              { process: "Công nhận", name: "BM 16 - Phiếu giải trình hoàn thiện" },
            ].map((form, i) => (
              <div key={i} className="py-8 flex items-center justify-between group transition-all">
                <div className="flex gap-8 items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest w-24 text-white/30 group-hover:text-editorial-orange transition-colors">{form.process}</span>
                  <h4 className="text-lg font-serif italic text-white/70 group-hover:text-white transition-colors">{form.name}</h4>
                </div>
                <button className="p-3 border border-editorial-border rounded-full hover:border-white transition-all group-hover:scale-110">
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-32 border-t border-editorial-border bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="lg:col-span-2">
              <div className="font-serif italic font-bold text-5xl tracking-tighter mb-8">LIÊN HỆ.</div>
              <p className="text-white/40 text-sm max-w-sm leading-relaxed italic">
                Đội ngũ hỗ trợ luôn sẵn sàng hỗ trợ các thắc mắc về nghiên cứu và nộp hồ sơ trong giờ hành chính.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="meta-label mb-4">Thông tin liên hệ</div>
                <div className="text-xl font-serif italic leading-tight">Cô Ngô Thị Ngọc Thủy</div>
                <div className="text-xs text-white/40 mt-1 uppercase tracking-widest">Hỗ trợ NCKH Sinh viên</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-editorial-border rounded-full flex items-center justify-center">
                  <MessageSquare size={16} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">vlu.edu.vn</span>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="meta-label mb-4">Địa điểm</div>
                <div className="text-sm font-medium leading-relaxed">Phòng 6.07, Tòa A</div>
                <div className="text-xs text-white/40 mt-1 italic">Phòng Phát triển NCKH</div>
              </div>
              <div>
                <div className="meta-label mb-4">Mạng xã hội</div>
                <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  <a href="#" className="hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="hover:text-white transition-colors">Facebook</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-32 pt-8 border-t border-editorial-border flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            <div>© 2024 VLU RESEARCH STUDIO</div>
            <div>Thiết kế tại Việt Nam</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

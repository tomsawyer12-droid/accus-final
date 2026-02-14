import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How fast can I get a loan?',
      answer: 'Once your application is approved, funds are typically disbursed within 24-48 hours. Emergency loans can be processed even faster, with same-day disbursement available for qualified applicants.',
    },
    {
      question: 'What documents do I need to apply?',
      answer: 'You need a valid National ID, proof of income (payslip, bank statements, or business records), and utility bills for address verification. Business loan applicants may need additional business registration documents.',
    },
    {
      question: 'Do I need collateral for a loan?',
      answer: 'It depends on the loan type and amount. Personal loans up to UGX 5M typically don\'t require collateral. Larger loans and business loans may require collateral or a guarantor for security purposes.',
    },
    {
      question: 'What are your interest rates?',
      answer: 'Our interest rates start from 18% per annum, depending on the loan type, amount, and repayment period. We offer competitive rates with transparent terms and no hidden fees.',
    },
    {
      question: 'Can I repay my loan early?',
      answer: 'Yes! We encourage early repayment and do not charge penalties for paying off your loan ahead of schedule. Early repayment can also help you qualify for larger loans in the future.',
    },
    {
      question: 'How do I check my loan application status?',
      answer: 'You can check your application status by calling our customer service hotline at +256 763 820 376, visiting any of our branches, or through our mobile banking platform.',
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E6F7F6] text-[#00A99D] rounded-full text-sm mb-4 font-semibold">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#54585A] mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our loan services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-[#00A99D]/30"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold text-[#54585A] group-hover:text-[#00A99D] transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <div className="w-8 h-8 bg-gradient-to-br from-[#00A99D] to-[#008B82] rounded-full flex items-center justify-center">
                        <Minus className="text-white" size={18} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-[#00A99D] group-hover:to-[#008B82] rounded-full flex items-center justify-center transition-all duration-300">
                        <Plus className="text-gray-600 group-hover:text-white transition-colors duration-300" size={18} />
                      </div>
                    )}
                  </div>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 leading-relaxed pt-4 pr-12">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block text-[#00A99D] font-semibold hover:text-[#008B82] transition-colors duration-300 border-b-2 border-[#00A99D] hover:border-[#008B82]"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

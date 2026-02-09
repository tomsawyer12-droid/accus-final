import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, Clock, Shield, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { LoanInquiryForm } from '../components/LoanInquiryForm';

export function ApplyPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Apply for a Loan" 
          subtitle="Responsible financial solutions built on trust, transparency, and discipline"
          backgroundImage="https://images.unsplash.com/photo-1758519291531-e96279895745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzcwMzY0NjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />

        {/* Introduction Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                At Accus Capital, we provide responsible financial solutions built on trust, transparency, and discipline.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8 md:p-12"
              >
                <h3 className="text-2xl font-bold text-[#54585A] mb-6">Our loan services are designed for clients who:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00A99D] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Understand their financial obligations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00A99D] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Value clear terms and responsible borrowing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#00A99D] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Seek solutions that support stability and growth</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src="https://res.cloudinary.com/dywusgc6j/image/upload/v1770642616/3f2f8503-4c90-4775-bda2-3784af6c7e7d_1_aqlwfb.jpg"
                  alt="Professional client consultation"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#54585A] mb-4">What to Expect</h2>
              <p className="text-lg text-gray-600">We're committed to transparency and professionalism at every step</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-[#00A99D]/10 rounded-full flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-[#00A99D]" />
                </div>
                <h3 className="text-xl font-bold text-[#54585A] mb-3">Clear Eligibility Criteria</h3>
                <p className="text-gray-600">Straightforward requirements so you know exactly what's needed</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-[#00A99D]/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7 text-[#00A99D]" />
                </div>
                <h3 className="text-xl font-bold text-[#54585A] mb-3">Transparent Repayment Terms</h3>
                <p className="text-gray-600">No hidden fees or surprise charges—just honest terms</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-[#00A99D]/10 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-[#00A99D]" />
                </div>
                <h3 className="text-xl font-bold text-[#54585A] mb-3">Responsible Assessment</h3>
                <p className="text-gray-600">We carefully assess your repayment capacity for your protection</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-[#00A99D]/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#00A99D]" />
                </div>
                <h3 className="text-xl font-bold text-[#54585A] mb-3">Professional Service</h3>
                <p className="text-gray-600">Confidential and respectful service throughout your journey</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before You Apply Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#54585A] mb-4">Before You Apply</h2>
              <p className="text-lg text-gray-600">Please ensure you're ready for this commitment</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8"
            >
              <h3 className="text-xl font-bold text-[#54585A] mb-6">Please ensure that:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00A99D] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">You have a clear purpose for the loan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00A99D] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">You understand the repayment terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00A99D] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">You are committed to timely repayment</span>
                </li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-2">Important Notice</p>
                    <p className="text-amber-800">
                      Accus Capital does not promote over-borrowing or unsustainable debt.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <button
                onClick={() => setShowForm(true)}
                className="inline-block bg-[#00A99D] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#008c82] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
              </button>
              <p className="mt-4 text-gray-600">
                Ready to apply? Click above to begin your loan inquiry.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Loan Inquiry Form Modal */}
      {showForm && <LoanInquiryForm onClose={() => setShowForm(false)} />}
      
      <Footer />
    </div>
  );
}
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000); // UGX 5M
  const interestRate = 2.8; // Fixed at 2.8% per month
  const [loanTerm, setLoanTerm] = useState(12); // 12 months
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // Calculate loan payments
  useEffect(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100; // 2.8% per month
    const numberOfPayments = loanTerm;

    if (monthlyRate === 0) {
      // If interest rate is 0, simple division
      const payment = principal / numberOfPayments;
      setMonthlyPayment(payment);
      setTotalPayment(principal);
      setTotalInterest(0);
    } else {
      // Standard loan payment formula: M = P[r(1+r)^n]/[(1+r)^n-1]
      const payment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const total = payment * numberOfPayments;
      const interest = total - principal;

      setMonthlyPayment(payment);
      setTotalPayment(total);
      setTotalInterest(interest);
    }
  }, [loanAmount, loanTerm]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00A99D]/10 rounded-full mb-4">
            <Calculator className="text-[#00A99D]" size={20} />
            <span className="text-[#00A99D] font-semibold">Loan Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#54585A] mb-4">
            Calculate Your Loan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Use our calculator to estimate your monthly payments and plan your finances
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Input Section */}
            <div className="p-6 md:p-12 bg-white">
              <h3 className="text-xl md:text-2xl font-bold text-[#54585A] mb-6 md:mb-8">Loan Details</h3>

              {/* Loan Amount */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-[#54585A]">Loan Amount</label>
                  <span className="text-lg font-bold text-[#00A99D]">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="100000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00A99D]"
                  style={{
                    background: `linear-gradient(to right, #00A99D 0%, #00A99D ${((loanAmount - 100000) / (100000000 - 100000)) * 100}%, #e5e7eb ${((loanAmount - 100000) / (100000000 - 100000)) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>UGX 100K</span>
                  <span>UGX 100M</span>
                </div>
              </div>

              {/* Interest Rate - Display Only */}
              <div className="mb-8">
                <div className="p-4 bg-[#00A99D]/5 border border-[#00A99D]/20 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-[#54585A]">Interest Rate (Monthly)</label>
                    <span className="text-2xl font-bold text-[#00A99D]">{interestRate}%</span>
                  </div>
                  <p className="text-xs text-gray-600">Fixed at {interestRate}% per month ({(interestRate * 12).toFixed(2)}% annually)</p>
                </div>
              </div>

              {/* Loan Term */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-[#54585A]">Loan Term</label>
                  <span className="text-lg font-bold text-[#00A99D]">
                    {loanTerm} {loanTerm === 1 ? 'month' : 'months'}
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="12"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00A99D]"
                  style={{
                    background: `linear-gradient(to right, #00A99D 0%, #00A99D ${((loanTerm - 1) / (12 - 1)) * 100}%, #e5e7eb ${((loanTerm - 1) / (12 - 1)) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1 month</span>
                  <span>12 months</span>
                </div>
              </div>

              {/* Direct Input Option */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600 mb-3">Or enter exact values:</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-600 block mb-1">Amount (UGX)</label>
                    <input
                      type="number"
                      min="100000"
                      max="100000000"
                      value={loanAmount === 0 ? '' : loanAmount}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setLoanAmount(value);
                      }}
                      onBlur={() => {
                        if (loanAmount < 100000) setLoanAmount(100000);
                        if (loanAmount > 100000000) setLoanAmount(100000000);
                      }}
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                        loanAmount < 100000 || loanAmount > 100000000
                          ? 'border-red-500 focus:ring-red-500 bg-red-50'
                          : 'border-gray-300 focus:ring-[#00A99D]'
                      }`}
                    />
                    {loanAmount < 100000 ? (
                      <p className="text-xs text-red-600 mt-1">Minimum amount is UGX 100,000</p>
                    ) : loanAmount > 100000000 ? (
                      <p className="text-xs text-red-600 mt-1">Maximum amount is UGX 100,000,000</p>
                    ) : (
                      <p className="text-xs text-gray-500 mt-1">Min: 100,000 | Max: 100,000,000</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 block mb-1">Months</label>
                    <input
                      type="number"
                      min="1"
                      max="12"
                      value={loanTerm === 0 ? '' : loanTerm}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setLoanTerm(value);
                      }}
                      onBlur={() => {
                        if (loanTerm < 1) setLoanTerm(1);
                        if (loanTerm > 12) setLoanTerm(12);
                      }}
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                        loanTerm < 1 || loanTerm > 12
                          ? 'border-red-500 focus:ring-red-500 bg-red-50'
                          : 'border-gray-300 focus:ring-[#00A99D]'
                      }`}
                    />
                    {loanTerm < 1 ? (
                      <p className="text-xs text-red-600 mt-1">Minimum term is 1 month</p>
                    ) : loanTerm > 12 ? (
                      <p className="text-xs text-red-600 mt-1">Maximum term is 12 months</p>
                    ) : (
                      <p className="text-xs text-gray-500 mt-1">Min: 1 | Max: 12 months</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="p-6 md:p-12 bg-gradient-to-br from-[#00A99D] to-[#008B82]">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Your Estimated Payment</h3>

              {/* Monthly Payment - Main Result */}
              <motion.div
                key={monthlyPayment}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 mb-4 md:mb-6"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <span className="text-white font-bold text-sm">UGX</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-white/80 mb-1">Monthly Payment</p>
                    <p className="text-2xl md:text-4xl font-bold text-white break-words">
                      {formatCurrency(monthlyPayment)}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Additional Details */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-center justify-between p-3 md:p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl gap-2">
                  <div className="flex items-center gap-2 md:gap-3 min-w-0">
                    <Calendar className="text-white/80 flex-shrink-0" size={18} />
                    <span className="text-white/80 text-sm md:text-base">Total Payment</span>
                  </div>
                  <span className="font-bold text-white text-sm md:text-base break-words text-right">{formatCurrency(totalPayment)}</span>
                </div>

                <div className="flex items-center justify-between p-3 md:p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl gap-2">
                  <div className="flex items-center gap-2 md:gap-3 min-w-0">
                    <TrendingUp className="text-white/80 flex-shrink-0" size={18} />
                    <span className="text-white/80 text-sm md:text-base">Total Interest</span>
                  </div>
                  <span className="font-bold text-white text-sm md:text-base break-words text-right">{formatCurrency(totalInterest)}</span>
                </div>
              </div>

              {/* Payment Breakdown */}
              <div className="mb-6 md:mb-8">
                <p className="text-xs md:text-sm text-white/80 mb-3">Payment Breakdown</p>
                <div className="h-4 bg-white/20 rounded-full overflow-hidden flex">
                  <div
                    className="bg-white transition-all duration-500"
                    style={{ width: `${(loanAmount / totalPayment) * 100}%` }}
                  />
                  <div
                    className="bg-white/50 transition-all duration-500"
                    style={{ width: `${(totalInterest / totalPayment) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-xs text-white/80">Principal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                    <span className="text-xs text-white/80">Interest</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link to="/apply">
                <Button className="w-full bg-white hover:bg-gray-100 text-[#00A99D] py-4 md:py-6 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base">
                  Apply for This Loan
                </Button>
              </Link>

              <p className="text-xs text-white/70 text-center mt-4">
                *This is an estimate. Final rates and terms subject to approval.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-600">
            Need help choosing the right loan? <Link to="/contact" className="text-[#00A99D] hover:underline font-semibold">Contact our team</Link> or call us at <span className="font-semibold">+256 763 820 376</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
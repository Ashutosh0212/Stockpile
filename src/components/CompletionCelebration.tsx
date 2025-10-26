import { CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from './ui/card';

interface CompletionCelebrationProps {
  show: boolean;
}

export function CompletionCelebration({ show }: CompletionCelebrationProps) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6"
    >
      <Card className="max-w-md w-full p-8 text-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-50" />
        
        {/* Sparkles */}
        <motion.div
          className="absolute top-4 left-4"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Sparkles className="w-6 h-6 text-yellow-500" />
        </motion.div>
        <motion.div
          className="absolute top-4 right-4"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
        >
          <Sparkles className="w-6 h-6 text-yellow-500" />
        </motion.div>

        {/* Main content */}
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 15,
            }}
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-900 mb-2"
          >
            Processing Complete!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 mb-6"
          >
            Your analysis is ready. View detailed results and download your comprehensive report.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-4 text-center"
          >
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-slate-900">1,247 m³</div>
              <div className="text-slate-600">Cut Volume</div>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <div className="text-slate-900">892 m³</div>
              <div className="text-slate-600">Fill Volume</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-slate-900">2.8 ha</div>
              <div className="text-slate-600">Area</div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}

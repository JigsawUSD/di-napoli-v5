import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquarePlus, CheckCircle2, X } from 'lucide-react';
import { REVIEWS } from '../data/mockData';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newRev: Review = {
      id: Date.now().toString(),
      author: newAuthor,
      role: 'Cliente Verificado',
      rating: newRating,
      comment: newComment,
      avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      date: 'Agora mesmo',
    };

    setReviewsList([newRev, ...reviewsList]);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setIsModalOpen(false);
      setNewAuthor('');
      setNewComment('');
      setNewRating(5);
    }, 1500);
  };

  return (
    <section className="py-24 md:py-36 bg-[#fff0ef] border-t border-[#8c716f]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#942225] font-semibold uppercase tracking-[0.3em] text-xs block mb-3">
              Depoimentos Google & Locais
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#251918]">
              A voz dos nossos amigos.
            </h2>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-[#942225] hover:bg-[#78181b] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#942225]/20 cursor-pointer self-start md:self-auto"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Avaliar Experiência</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsList.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-3xl border border-[#8c716f]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 fill-current ${
                        i < review.rating ? 'text-amber-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-semibold text-[#584140] ml-2">
                    {review.rating}.0
                  </span>
                </div>

                {/* Comment */}
                <p className="font-sans text-[#251918] italic text-base leading-relaxed mb-8">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#8c716f]/10">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover border border-[#942225]/20"
                />
                <div>
                  <h4 className="font-serif text-base font-bold text-[#251918]">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-[#584140]/80">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border border-[#8c716f]/20"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-[#251918]/60 hover:text-[#942225]"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-serif text-2xl font-bold text-[#251918] mb-2">
                Avaliar a Di Napoli
              </h3>
              <p className="text-xs text-[#584140] mb-6">
                Sua opinião é fundamental para manter nossa tradição de excelência.
              </p>

              {showSuccess ? (
                <div className="py-8 text-center flex flex-col items-center gap-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 animate-bounce" />
                  <p className="font-serif text-lg font-bold text-[#251918]">
                    Obrigado pelo seu depoimento!
                  </p>
                  <p className="text-xs text-[#584140]">Sua avaliação foi publicada com sucesso.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#584140] mb-1">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Eduardo"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full bg-[#fff8f7] border border-[#8c716f]/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#942225]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#584140] mb-1">
                      Nota (Estrelas)
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewRating(star)}
                          className="p-1 cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newRating
                                ? 'text-amber-500 fill-amber-500'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#584140] mb-1">
                      Seu Comentário
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Conte como foi sua experiência conosco..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full bg-[#fff8f7] border border-[#8c716f]/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#942225]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#942225] hover:bg-[#78181b] text-white font-bold py-3.5 rounded-full text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                  >
                    Publicar Depoimento
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

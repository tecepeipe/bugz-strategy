import React from 'react';
import { X } from 'lucide-react';
import { useI18n } from '../utils/i18n';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose }) => {
  const { t } = useI18n();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full" />

        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
          <h2 className="text-xl font-black text-slate-100">{t('rulesTitle')}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
            title={t('close')}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-6 py-5 overflow-y-auto space-y-4">
          <div>
            <p className="text-sm text-slate-300 leading-relaxed">
              <span className="font-bold text-amber-400">{t('goalTitle')}</span> {t('goalDesc')}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {t('coreRulesTitle')}
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-300 leading-relaxed list-none">
              <li>• {t('coreRule1')}</li>
              <li>• {t('coreRule2')}</li>
              <li>• {t('coreRule3')}</li>
              <li>• {t('coreRule4')}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {t('insectTitle')}
            </h3>
            <ul className="space-y-2 text-sm text-slate-300 leading-relaxed list-none">
              <li>
                <span className="text-base">🐝</span> <span className="font-semibold text-slate-100">Queen Bee</span> — {t('insectQueen')}
              </li>
              <li>
                <span className="text-base">🕷️</span> <span className="font-semibold text-slate-100">Spider</span> — {t('insectSpider')}
              </li>
              <li>
                <span className="text-base">🪲</span> <span className="font-semibold text-slate-100">Beetle</span> — {t('insectBeetle')}
              </li>
              <li>
                <span className="text-base">🦗</span> <span className="font-semibold text-slate-100">Grasshopper</span> — {t('insectGrasshopper')}
              </li>
              <li>
                <span className="text-base">🐜</span> <span className="font-semibold text-slate-100">Ant</span> — {t('insectAnt')}
              </li>
              <li>
                <span className="text-base">🦟</span> <span className="font-semibold text-slate-100">Mosquito</span> — {t('insectMosquito')}
              </li>
              <li>
                <span className="text-base">🐞</span> <span className="font-semibold text-slate-100">Ladybug</span> — {t('insectLadybug')}
              </li>
              <li>
                <span className="text-base">🪳</span> <span className="font-semibold text-slate-100">Pillbug</span> — {t('insectPillbug')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
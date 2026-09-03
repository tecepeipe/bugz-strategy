import React, { useState } from 'react';
import { AIDifficulty, ExpansionsConfig, GameMode, GameSettings } from '../types/bugz';
import { Bot, Users, Sparkles, Shield, Play, BookOpen, GraduationCap } from 'lucide-react';
import { RulesModal } from './RulesModal';
import { useI18n } from '../utils/i18n';

interface NewGameModalProps {
  isOpen: boolean;
  onStartGame: (settings: GameSettings) => void;
  onClose?: () => void;
  canCancel?: boolean;
}

export const NewGameModal: React.FC<NewGameModalProps> = ({
  isOpen,
  onStartGame,
  onClose,
  canCancel = false,
}) => {
  const { t } = useI18n();
  const [mode, setMode] = useState<GameMode>('AI');
  const [aiDifficulty, setAIDifficulty] = useState<AIDifficulty>('MEDIUM');
  const [tutorialMode, setTutorialMode] = useState<boolean>(false);
  const [expansions, setExpansions] = useState<ExpansionsConfig>({
    mosquito: true,
    ladybug: true,
    pillbug: true,
  });
  const [showRules, setShowRules] = useState(false);

  const handleTutorialToggle = () => {
    if (!tutorialMode) {
      setTutorialMode(true);
      setMode('AI');
      setAIDifficulty('EASY');
      setExpansions({ mosquito: false, ladybug: false, pillbug: false });
    } else {
      setTutorialMode(false);
    }
  };

  const handleModeChange = (newMode: GameMode) => {
    setMode(newMode);
    if (newMode === 'PASS_AND_PLAY') setTutorialMode(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full" />

        <h2 className="text-2xl font-black text-slate-100 mb-1 flex items-center gap-2 px-6 pt-6">
          <span>🐝 {t('appTitle')} {t('appSubtitle')}</span>
        </h2>
        <p className="text-xs text-slate-400 mb-4 px-6">
          {t('setupSubtitle')}
        </p>

        <div className="overflow-y-auto px-6 pb-6 flex-1">

        {/* Game Mode */}
        <div className="mb-6">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
            {t('gameModeLabel')}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleModeChange('PASS_AND_PLAY')}
              className={`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${
                mode === 'PASS_AND_PLAY' && !tutorialMode
                  ? 'bg-amber-500/15 border-amber-400 text-amber-300 shadow-md'
                  : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <Users className="w-6 h-6" />
              <span className="text-xs font-bold">{t('passPlayBtn')}</span>
            </button>

            <button
              onClick={() => handleModeChange('AI')}
              className={`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${
                mode === 'AI' && !tutorialMode
                  ? 'bg-blue-500/15 border-blue-400 text-blue-300 shadow-md'
                  : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <Bot className="w-6 h-6" />
              <span className="text-xs font-bold">{t('vsAiBtn')}</span>
            </button>

            <button
              onClick={handleTutorialToggle}
              className={`col-span-2 p-2.5 rounded-2xl border flex items-center justify-center gap-2 transition-all ${
                tutorialMode
                  ? 'bg-emerald-500/15 border-emerald-400 text-emerald-300 shadow-md'
                  : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              <span className="text-xs font-bold">{t('tutorialMode')}</span>
            </button>
          </div>
        </div>

        {/* AI Difficulty */}
        {mode === 'AI' && !tutorialMode && (
          <div className="mb-6 animate-fade-in">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
              {t('aiDifficultyLabel')}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['EASY', 'MEDIUM', 'HARD'] as AIDifficulty[]).map(diff => (
                <button
                  key={diff}
                  onClick={() => setAIDifficulty(diff)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    aiDifficulty === diff
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                      : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {diff === 'EASY' ? t('easyBtn') : diff === 'MEDIUM' ? t('mediumBtn') : t('hardBtn')}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Expansions */}
        <div className="mb-6">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('expansionsLabel')}</span>
          </label>
          <div className="space-y-2 bg-slate-950/60 p-3 rounded-2xl border border-slate-800">
            <label className="flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1">
              <span>{t('mosquitoLabel')}</span>
              <input
                type="checkbox"
                checked={expansions.mosquito}
                disabled={tutorialMode}
                onChange={e => setExpansions({ ...expansions, mosquito: e.target.checked })}
                className="w-4 h-4 accent-amber-500 rounded disabled:opacity-40"
              />
            </label>

            <label className="flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1">
              <span>{t('ladybugLabel')}</span>
              <input
                type="checkbox"
                checked={expansions.ladybug}
                disabled={tutorialMode}
                onChange={e => setExpansions({ ...expansions, ladybug: e.target.checked })}
                className="w-4 h-4 accent-amber-500 rounded disabled:opacity-40"
              />
            </label>

            <label className="flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1">
              <span>{t('pillbugLabel')}</span>
              <input
                type="checkbox"
                checked={expansions.pillbug}
                disabled={tutorialMode}
                onChange={e => setExpansions({ ...expansions, pillbug: e.target.checked })}
                className="w-4 h-4 accent-amber-500 rounded disabled:opacity-40"
              />
            </label>
          </div>
        </div>
        </div>

        {/* Submit */}
        <div className="flex items-center gap-3">
          {canCancel && onClose && (
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors"
            >
              {t('cancel')}
            </button>
          )}
          <button
            onClick={() => onStartGame({ mode, aiDifficulty, expansions, tutorialMode })}
            className="flex-1 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>{t('startGame')}</span>
          </button>
        </div>

        {/* Learn to Play link */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setShowRules(true)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors px-3 py-1.5 rounded-xl hover:bg-slate-800/60"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('learnToPlay')}</span>
          </button>
        </div>
      </div>

      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </div>
  );
};

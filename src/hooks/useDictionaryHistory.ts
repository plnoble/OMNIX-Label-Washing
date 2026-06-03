import { useState, useCallback } from 'react';
import { DictionaryService } from '../services/dictionaryService';
import type { TranslationRow } from '../types';

export function useDictionaryHistory() {
  const [dict, setDictState] = useState<Record<string, TranslationRow>>(() => 
    DictionaryService.getDictionary()
  );

  // Undo and Redo stacks store the OMNIX_CUSTOM_DICTIONARY states (Record<string, TranslationRow>)
  const [history, setHistory] = useState<Record<string, TranslationRow>[]>([]);
  const [future, setFuture] = useState<Record<string, TranslationRow>[]>([]);

  const pushState = useCallback((prevCustomDict: Record<string, TranslationRow>) => {
    // Keep stack size within reasonable limits (e.g. 50 operations)
    setHistory(prev => {
      const nextStack = [...prev, prevCustomDict];
      if (nextStack.length > 50) {
        return nextStack.slice(nextStack.length - 50);
      }
      return nextStack;
    });
    setFuture([]);
  }, []);

  const updateDict = useCallback((updater: () => void) => {
    const currentCustom = DictionaryService.getCustomDictionary();
    updater();
    pushState(currentCustom);
    setDictState(DictionaryService.getDictionary());
  }, [pushState]);

  const undo = useCallback(() => {
    if (history.length === 0) return;
    
    const previousCustom = history[history.length - 1];
    const currentCustom = DictionaryService.getCustomDictionary();
    
    setHistory(prev => prev.slice(0, -1));
    setFuture(prev => [currentCustom, ...prev]);
    
    DictionaryService.saveCustomDictionary(previousCustom);
    setDictState(DictionaryService.getDictionary());
  }, [history]);

  const redo = useCallback(() => {
    if (future.length === 0) return;
    
    const nextCustom = future[0];
    const currentCustom = DictionaryService.getCustomDictionary();
    
    setFuture(prev => prev.slice(1));
    setHistory(prev => [...prev, currentCustom]);
    
    DictionaryService.saveCustomDictionary(nextCustom);
    setDictState(DictionaryService.getDictionary());
  }, [future]);

  const resetDict = useCallback(() => {
    const currentCustom = DictionaryService.getCustomDictionary();
    pushState(currentCustom);
    DictionaryService.resetToDefault();
    setDictState(DictionaryService.getDictionary());
  }, [pushState]);

  return {
    dict,
    updateDict,
    undo,
    redo,
    resetDict,
    canUndo: history.length > 0,
    canRedo: future.length > 0
  };
}

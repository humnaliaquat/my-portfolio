import { create } from "zustand";

export const useMusicStore = create((set) => ({
  playing: false,
  currentSong: 0,
  setPlaying: (value) => set({ playing: value }),
  setCurrentSong: (index) => set({ currentSong: index }),
}));

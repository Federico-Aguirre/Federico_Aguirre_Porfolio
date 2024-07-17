import { create } from 'zustand'

interface SectionVisible {
    sectionVisibleValue: string
}

type ContextState = {
    darkMode: boolean,
    changeDarkMode: React.MouseEventHandler<HTMLButtonElement>
    sectionVisible: SectionVisible,
    changeSectionVisible: (value: string | {}) => void
}

export const contextStore = create<ContextState>(set => ({
    darkMode: true,
    changeDarkMode: () => set((state) => ({ darkMode: !state.darkMode})),

    sectionVisible: {
        sectionVisibleValue: ""
    },

    changeSectionVisible: (newSectionVisible: String) => set((state) => ({ sectionVisible: {...state.sectionVisible, ...newSectionVisible}})),
}))
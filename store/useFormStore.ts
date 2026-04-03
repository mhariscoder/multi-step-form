import { create } from 'zustand';

interface FormStore {
  step: number;
  roomImage: string | null;
  setStep: (step: number) => void;
  setRoomImage: (image: string | null) => void;
  nextStep: () => void;
  prevStep: () => void;
  coverType: string | null;
  setCoverType: (type: string | null) => void;
  roomType: string | null;
  roomUsage: string | null;
  setRoomType: (type: string | null) => void;
  setRoomUsage: (usage: string | null) => void;
  designStyle: string | null;
  setDesignStyle: (style: string | null) => void;
  privacyPreference: string | null;
  setPrivacyPreference: (pref: string | null) => void;
  lightPriority: string | null;
  setLightPriority: (priority: string | null) => void;
  lookPreference: string | null;
  setLookPreference: (look: string | null) => void;
  roomVibe: string | null;
  setRoomVibe: (vibe: string | null) => void;
  hasChildrenPets: string | null;
  interestedInMotorization: string | null;
  interestedInLayering: string | null;
  setHasChildrenPets: (val: string | null) => void;
  setInterestedInMotorization: (val: string | null) => void;
  setInterestedInLayering: (val: string | null) => void;
  userName: string;
  userEmail: string;
  userZip: string;
  setUserName: (val: string) => void;
  setUserEmail: (val: string) => void;
  setUserZip: (val: string) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  step: 1,
  roomImage: null,
  setStep: (step) => set({ step }),
  setRoomImage: (image) => set({ roomImage: image }),
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 10) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),
  coverType: null,
  setCoverType: (type) => set({ coverType: type }),
  roomType: null,
  roomUsage: null,
  setRoomType: (roomType) => set({ roomType }),
  setRoomUsage: (roomUsage) => set({ roomUsage }),
  designStyle: null,
  setDesignStyle: (designStyle) => set({ designStyle }),
  privacyPreference: null,
  setPrivacyPreference: (privacyPreference) => set({ privacyPreference }),
  lightPriority: null,
  setLightPriority: (lightPriority) => set({ lightPriority }),
  lookPreference: null,
  setLookPreference: (lookPreference) => set({ lookPreference }),
  roomVibe: null,
  setRoomVibe: (roomVibe) => set({ roomVibe }),
  hasChildrenPets: null,
  interestedInMotorization: null,
  interestedInLayering: null,
  setHasChildrenPets: (hasChildrenPets) => set({ hasChildrenPets }),
  setInterestedInMotorization: (interestedInMotorization) => set({ interestedInMotorization }),
  setInterestedInLayering: (interestedInLayering) => set({ interestedInLayering }),
  userName: "",
  userEmail: "",
  userZip: "",
  setUserName: (userName) => set({ userName }),
  setUserEmail: (userEmail) => set({ userEmail }),
  setUserZip: (userZip) => set({ userZip }),
}));
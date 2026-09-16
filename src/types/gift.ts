export interface GiftDraft {
  herName: string;
  dueDate: string;
  packageId: string;
  openToCircle: boolean;
  invitees: string[];
  addressLine1: string;
  addressLine2: string;
  city: string;
  postcode: string;
  deliveryDate: string;
  message: string;
}

export interface StepProps {
  draft: GiftDraft;
  update: <K extends keyof GiftDraft>(key: K, value: GiftDraft[K]) => void;
}

export const emptyDraft: GiftDraft = {
  herName: '',
  dueDate: '',
  packageId: 'first-weeks',
  openToCircle: true,
  invitees: [''],
  addressLine1: '',
  addressLine2: '',
  city: '',
  postcode: '',
  deliveryDate: '',
  message: ''
};
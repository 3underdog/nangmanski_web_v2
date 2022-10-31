export type AdminData = {
  id: string;
  goods_id: string;
  serial_number: string | null;
  brand: string;
  goods_name: string;
  goods_name_D: string | null;
  joint_type: string;
  modelYear: string;
  images: Array<CueImage>;
  addComponent1: string | null;
  addComponent1_D: string | null;
  addComponent2: string | null;
  addComponent2_D: string | null;
  bendState: string;
  bendState_D: string | null;
  ferruleDiameter: string | null;
  ferruleDiameter_D: string | null;
  ferruleHeigth: string | null;
  ferruleHeigth_D: string | null;
  isHaveExtension: string | null;
  isHaveExtension_D: string | null;
  isHaveGuarantee: string | null;
  isHaveGuarantee_D: string | null;
  length: string | null;
  length_D: string | null;
  paintingState: string;
  paintingState_D: string | null;
  productionMethod: string | null;
  productionMethod_D: string | null;
  topSortation: string | null;
  topSortationType: string | null;
  topSortationType_D: string | null;
  topSortation_D: string | null;
  topTipKind: string;
  topTipKind_D: string | null;
  topTipState: string;
  topTipState_D: string | null;
  weight: string;
  weight_D: string | null;
};

export type Part = {
  id: string;
  content_id: string;
  state: string;
  adminData: AdminData;
  createad_at: string;
  type: number;
};
export type CueImage = {
  id: string;
  image: string;
};

export type Element = 'set' | 'lower' | 'upper';

export type Results = {
  id: string;
  images: Array<CueImage>;
  document_id: string;
  element_type: Element;
  isPremium: boolean;
  price: number;
  state: string;
  view_cnt: number;
  like_cnt: number;
  sales_end_at: string;
  created_at: string;
  admin_check_text: string;
  parts: Array<Part>;
};

export type Data = {
  count: number;
  next: string;
  previus: string;
  results: Array<Results>;
};

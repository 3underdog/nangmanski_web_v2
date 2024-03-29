export type UserProfile = {
  created_at: string;
  file_name: string;
  image: string;
  original_filename: string;
  size: number;
  thumbnail_image: string;
};

export type AlarmSetting = {
  appPushAllow: boolean;
  b_and_sAlarm: boolean;
  commentAlarm: boolean;
  commonAlarm: boolean;
  cueTalkAlarm: boolean;
  kakaoAllow: boolean;
  postAlarm: boolean;
  smsAllow: boolean;
  userAlarm: boolean;
};

export type UserType = {
  accessToken: string;
  address: string | null;
  address_detail: string | null;
  alarmSetting: AlarmSetting;
  allowEditNickCount: number;
  authorty: 'Admin' | 'Common';
  birthday: string;
  clean_index: number;
  clientVersion: string | null;
  countyCode: string | null;
  created_at: string;
  deviceModel: string | null;
  deviceName: string | null;
  email: string;
  gender: string;
  googleID: string | null;
  id: string;
  images: Array<UserProfile> | null;
  isKimchiDealer: boolean;
  kakaoID: string | null;
  languageCode: string | null;
  level: number;
  naverID: string | null;
  nickName: string;
  os: string | null;
  os_id: string | null;
  personal_shop_description: string | null;
  personal_shop_opened_at: string;
  phone: string;
  state: number;
  total_comment_count: number;
  total_deal_count: number;
  total_post_count: number;
  total_transaction_amount: number;
  username: string;
  visitor_count: number;
  warning_count: number;
};

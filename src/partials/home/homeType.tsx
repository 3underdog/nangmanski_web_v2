export type resort = {
  slopesImageUrl: null;
  address: string;
  addressDepth: string;
  addressDtlDepth: string;
  endTime: string;
  fetchStatus: 'O' | 'X';
  phoneNo: string;
  resortCode: string;
  resortName: string;
  slopeList: null;
  slopeSummary: Array<Array<string>>;
  startTime: string;
  status: 'N' | 'Y' | 'P';
  openSlopeNameListStr: string | null;
};

export type resorts = {
  경기도: Array<resort>;
  강원도: Array<resort>;
  '전라도/경상도': Array<resort>;
};

export type fetch_data = {
  authError: boolean;
  code: null;
  data: resorts;
  message: string;
  result: boolean;
};

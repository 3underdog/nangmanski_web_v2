export type resort = {
  address: string;
  addressDepth: string;
  addressDtlDepth: string;
  endTime: string;
  fetchStatus: 'O' | 'X';
  phoneNo: string;
  resortCode: string;
  resortName: string;
  slopeList: null;
  startTime: string;
  status: 'N' | 'Y' | 'P';
  openSlopeNameListStr: string | null;
};

export type resorts = Array<resort>;

export type fetch_data = {
  authError: boolean;
  code: null;
  data: resorts;
  message: string;
  result: boolean;
};

export interface Todo {
  content?: string;
  isFinished: boolean;
  description: string;
};

// Filter
export enum FILTER_NAME {
  ALL = 'ALL',
  COMPLETED = 'COMPLETED',
  WAITING = 'WAITING'
};

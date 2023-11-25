export interface ProblemType {
  id: number;
  category: string;
  reward: number;
  deadline: Date;
  body: string;
  createdAt: string;
  updatedAt: string;
  image?: string;
}
